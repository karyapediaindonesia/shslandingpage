import os
import sys
import time
import paramiko

from pathlib import Path

# Load .env if present
env_file = Path(__file__).resolve().parent / ".env"
if env_file.exists():
    with open(env_file, "r") as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

PROXMOX_HOST = os.getenv("PROXMOX_HOST", "192.168.150.15")
PROXMOX_USER = os.getenv("PROXMOX_USER", "root")
PROXMOX_PASS = os.getenv("PROXMOX_PASS", "")
CT_ID = os.getenv("CT_ID", "111")
TARGET_DIR = "/www/wwwroot/shslandingpage.karyapedia.my.id"
LOCAL_ZIP = str(Path(__file__).resolve().parent / "shslandingpage_dist_aapanel.zip")
REMOTE_HOST_ZIP = "/tmp/shs_dist.zip"
CT_ZIP = "/tmp/shs_dist.zip"

def main():
    print(f"Connecting to Proxmox host {PROXMOX_HOST}...")
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(PROXMOX_HOST, username=PROXMOX_USER, password=PROXMOX_PASS, timeout=10)
    print("Connected to Proxmox successfully.")

    def run_cmd(cmd):
        print(f"\n[HOST] Running: {cmd}")
        stdin, stdout, stderr = ssh.exec_command(cmd)
        out = stdout.read().decode('utf-8', errors='ignore')
        err = stderr.read().decode('utf-8', errors='ignore')
        if out:
            print(f"[STDOUT]\n{out.strip()}")
        if err:
            print(f"[STDERR]\n{err.strip()}")
        return out, err

    # Upload local zip to Proxmox host
    print(f"\nUploading {LOCAL_ZIP} ({os.path.getsize(LOCAL_ZIP)/1024/1024:.2f} MB) to {PROXMOX_HOST}:{REMOTE_HOST_ZIP}...")
    sftp = ssh.open_sftp()
    
    last_print = [0]
    def progress_callback(transferred, total):
        pct = (transferred / total) * 100
        now = time.time()
        if now - last_print[0] > 1 or pct >= 100:
            last_print[0] = now
            print(f"Upload progress: {transferred/(1024*1024):.1f}/{total/(1024*1024):.1f} MB ({pct:.1f}%)")

    sftp.put(LOCAL_ZIP, REMOTE_HOST_ZIP, callback=progress_callback)
    sftp.close()
    print("Upload to Proxmox complete.")

    # Push to CT 111
    print(f"Pushing zip from host to CT {CT_ID}...")
    run_cmd(f"pct push {CT_ID} {REMOTE_HOST_ZIP} {CT_ZIP}")

    # Extract files in CT
    print("Extracting files in CT...")
    run_cmd(f"pct exec {CT_ID} -- unzip -o {CT_ZIP} -d {TARGET_DIR}")

    # Fix permissions
    print("Setting permissions...")
    run_cmd(f"pct exec {CT_ID} -- chown -R www:www {TARGET_DIR}")
    run_cmd(f"pct exec {CT_ID} -- chmod -R 755 {TARGET_DIR}")

    # Clean old cache/temporary in CT and reload nginx
    print("Flushing cache and reloading webserver...")
    run_cmd(f"pct exec {CT_ID} -- nginx -t || /www/server/nginx/sbin/nginx -t")
    run_cmd(f"pct exec {CT_ID} -- nginx -s reload || /www/server/nginx/sbin/nginx -s reload || systemctl reload nginx")

    # Clean up zip
    print("Cleaning up temporary zip files...")
    run_cmd(f"rm -f {REMOTE_HOST_ZIP}")
    run_cmd(f"pct exec {CT_ID} -- rm -f {CT_ZIP}")

    ssh.close()
    print("\nDeployment and Cache Flush completed successfully!")

if __name__ == "__main__":
    main()
