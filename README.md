# Suria Harapan School (SHS) Landing Page

Website resmi pendaftaran dan informasi Suria Harapan School (SHS) Jambi.

- **Live URL**: [https://shslandingpage.karyapedia.my.id/](https://shslandingpage.karyapedia.my.id/)
- **Repository**: [https://github.com/karyapediaindonesia/shslandingpage](https://github.com/karyapediaindonesia/shslandingpage)

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Bundler**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: Epilogue & Plus Jakarta Sans

---

## 🚀 Memulai Pengembangan

1. **Clone Repository**:
   ```bash
   git clone https://github.com/karyapediaindonesia/shslandingpage.git
   cd shslandingpage
   ```

2. **Install Dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```

4. **Build untuk Produksi**:
   ```bash
   npm run build
   ```
   Hasil build akan berada di direktori `dist/`.

---

## 📦 Backup Website Live

Arsip lengkap backup aset produksi yang berjalan di web server `https://shslandingpage.karyapedia.my.id/` disimpan di direktori `backup/`:
- `backup/shslandingpage_website_backup.zip.001`
- `backup/shslandingpage_website_backup.zip.002`

Lihat panduan penggabungan dan ekstraksi di [backup/README.md](backup/README.md).

---

## 🔒 Konfigurasi Deployment

Salin template konfigurasi:
```bash
cp .env.example .env
```
Isi konfigurasi server Proxmox / container pada `.env`, lalu jalankan deployment otomatis:
```bash
python deploy_server.py
```
