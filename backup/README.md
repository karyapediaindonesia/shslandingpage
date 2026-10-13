# Website Backup — Suria Harapan School Landing Page

Backup resmi dari website live: `https://shslandingpage.karyapedia.my.id/`  
Tanggal Backup: 13 Oktober 2026

## 1. Unduh Langsung (1-Click Download)
File zip utuh (127.20 MB) dapat langsung diunduh dari GitHub Releases tanpa perlu menggabungkan manual:
- 📥 **[Download shslandingpage_website_backup.zip](https://github.com/karyapediaindonesia/shslandingpage/releases/download/v1.0.0-backup/shslandingpage_website_backup.zip)**
- 🏷️ **[Halaman Rilis v1.0.0-backup](https://github.com/karyapediaindonesia/shslandingpage/releases/tag/v1.0.0-backup)**

## 2. File Backup di Repositori (Split Archive)
Bagi pengguna yang melakukan clone git, arsip zip juga tersedia langsung dalam repositori yang dipecah menjadi 2 bagian (< 100 MB per file):
- `shslandingpage_website_backup.zip.001` (70.0 MB)
- `shslandingpage_website_backup.zip.002` (57.2 MB)

## 3. Cara Menggabungkan File Backup Repositori

### Windows (PowerShell):
```powershell
cmd /c copy /b shslandingpage_website_backup.zip.001 + shslandingpage_website_backup.zip.002 shslandingpage_website_backup.zip
```
atau menggunakan PowerShell native:
```powershell
Get-Content -Path shslandingpage_website_backup.zip.001, shslandingpage_website_backup.zip.002 -Encoding Byte -ReadCount 0 | Set-Content -Path shslandingpage_website_backup.zip -Encoding Byte
```

### Linux / macOS:
```bash
cat shslandingpage_website_backup.zip.001 shslandingpage_website_backup.zip.002 > shslandingpage_website_backup.zip
```

Setelah digabungkan, file `shslandingpage_website_backup.zip` dapat diekstrak langsung menggunakan alat unzipper standar (7-Zip, WinRAR, File Explorer, atau `unzip`).

## 3. Isi Backup
Arsip ini memuat seluruh aset produksi website yang berjalan pada web server `/www/wwwroot/shslandingpage.karyapedia.my.id`:
- `index.html` (Entry point SPA)
- `.htaccess` (Web server rewrite rules)
- `assets/` (Vite production bundle CSS & JS)
- `images/` (Aset gambar banner, kegiatan, hero, dll.)
- `photo/` (Aset dokumentasi sekolah)
- Favicon dan OpenGraph thumbnails
