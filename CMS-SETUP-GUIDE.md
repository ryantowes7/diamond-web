"# 🎯 DIAMOND GROUP - CMS SETUP GUIDE

## 📌 Overview

Website Diamond Group dilengkapi dengan **Content Management System (CMS)** profesional menggunakan **Decap CMS** yang memungkinkan Anda mengedit semua konten website tanpa perlu menyentuh kode.

### ✨ Fitur CMS:
- ✅ Edit Hero Section (Headline, Subheadline, CTA Buttons, Video)
- ✅ Edit Corporate Statement & Values
- ✅ Edit Statistics (Tahun, Perumahan, Unit)
- ✅ Kelola News & Articles
- ✅ Kelola Events
- ✅ Edit Site Settings (Kontak, Social Media)
- ✅ Upload Media/Gambar
- ✅ Dual Language Support (Indonesia/English)
- ✅ Live Preview
- ✅ Auto-save ke GitHub

---

## 🚀 LANGKAH 1: Setup Repository GitHub

### 1.1 Create/Push Repo ke GitHub

```bash
# Jika belum punya repo, buat repo baru di GitHub
# Nama contoh: diamond-group

# Push kode ke GitHub
git init
git add .
git commit -m "Initial commit - Diamond Group Website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/diamond-group.git
git push -u origin main
```

### 1.2 Update Config CMS

Edit file `/public/admin/config.yml`:

```yaml
backend:
  name: github
  repo: YOUR_USERNAME/diamond-group  # ⚠️ GANTI dengan username/repo Anda
  branch: main

site_url: https://your-site.vercel.app  # ⚠️ GANTI dengan URL Vercel Anda
```

---

## 🔐 LANGKAH 2: Setup GitHub OAuth App

Untuk autentikasi CMS, Anda perlu membuat GitHub OAuth App:

### 2.1 Buat OAuth App

1. Buka [GitHub Developer Settings](https://github.com/settings/developers)
2. Klik **"New OAuth App"**
3. Isi form:
   - **Application name**: `Diamond Group CMS`
   - **Homepage URL**: `https://your-site.vercel.app`
   - **Authorization callback URL**: `https://api.netlify.com/auth/done`
4. Klik **"Register application"**
5. **Simpan** `Client ID` dan `Client Secret`

Client ID : Ov23liyay7hxAuIPr9jR
Client Secret : cd4a522680b0753a47b3569c85ee54466ffae80b

### 2.2 Setup di Vercel

Tambahkan Environment Variables di Vercel:

1. Buka project di [Vercel Dashboard](https://vercel.com/dashboard)
2. Go to **Settings** → **Environment Variables**
3. Tambahkan:
   - `OAUTH_GITHUB_CLIENT_ID` = (Client ID dari GitHub OAuth)
   - `OAUTH_GITHUB_CLIENT_SECRET` = (Client Secret dari GitHub OAuth)
4. Klik **Save**
5. Redeploy project

---

## 🎨 LANGKAH 3: Akses CMS

### 3.1 URL Admin Panel

```
https://your-site.vercel.app/admin
```

### 3.2 Login

1. Buka `/admin`
2. Klik **"Login with GitHub"**
3. Authorize aplikasi
4. Anda akan diarahkan ke Dashboard CMS

---

## 📝 CARA MENGGUNAKAN CMS

### ✏️ Edit Hero Section

1. Login ke `/admin`
2. Klik **"🏠 Halaman Home"** di sidebar
3. Klik **"Home Content"**
4. Expand **"🎬 Hero Section"**
5. Edit:
   - **Video Background URL**: Link video .mp4
   - **Fallback Image**: Upload gambar backup
   - **Konten Indonesia**:
     - Headline Utama (contoh: "Membangun Hunian Menumbuhkan Harapan")
     - Subheadline (deskripsi pendukung)
     - CTA Buttons (max 2):
       - Label Button
       - Link Tujuan (`#proyek` atau `/tentang-kami`)
       - Variant (Primary/Secondary)
   - **Konten English**: (sama seperti Indonesia)
6. Klik **"Save"** di atas
7. Konten akan otomatis commit ke GitHub
8. Vercel akan auto-deploy dalam 2-5 menit

### 📊 Edit Statistics

1. Di **"Home Content"**, expand **"📊 Statistics"**
2. Edit data untuk Indonesia dan English:
   - **Label**: Nama statistik (contoh: "Tahun Pengalaman")
   - **Nilai**: Angka (contoh: 10)
   - **Suffix**: Tambahan seperti `+` atau `%`
3. Bisa tambah hingga 4 statistik
4. Klik **"Save"**

### 🏢 Edit Corporate Statement

1. Expand **"🏢 Corporate Statement"**
2. Edit:
   - **Headline**: Judul section
   - **Description**: Deskripsi perusahaan
   - **Gambar Carousel**: Upload hingga 3 gambar (akan berganti otomatis)
   - **Core Values**: Pilih icon dan label (max 3)
3. Klik **"Save"**

### 📰 Tambah News/Artikel

1. Expand **"📰 News Section"**
2. Klik **"Add articles"**
3. Isi:
   - **ID Artikel**: ID unik (contoh: `news-001`)
   - **Title**: Judul (Indonesia & English)
   - **Excerpt**: Ringkasan singkat
   - **Category**: Kategori berita
   - **Date**: Tanggal publish
   - **Image**: Upload gambar berita
   - **Featured**: Centang jika ingin highlight
4. Klik **"Save"**
5. Maksimal 4 artikel ditampilkan di homepage

### 🎉 Tambah Event

1. Expand **"🎉 Events Section"**
2. Klik **"Add list"**
3. Isi:
   - **ID Event**: ID unik (contoh: `event-001`)
   - **Title**: Nama event
   - **Description**: Deskripsi event
   - **Date**: Tanggal event
   - **Location**: Lokasi
   - **Image**: Upload foto event
   - **Type**: Jenis event
   - **Status**: Upcoming/Ongoing/Completed
4. Klik **"Save"**

### ⚙️ Edit Site Settings

1. Klik **"⚙️ Pengaturan Website"** di sidebar
2. Klik **"Site Settings"**
3. Edit:
   - Site Title & Description (untuk SEO)
   - Contact Email & Phone
   - WhatsApp Number (format: `628123456789`)
   - Address (alamat lengkap)
   - Social Media Links (Facebook, Instagram, Twitter, LinkedIn, YouTube)
4. Klik **"Save"**

---

## 📸 Upload Media/Gambar

1. Di field "Image", klik **"Choose an image"**
2. Pilih:
   - **Upload**: Upload dari komputer
   - **Choose from library**: Pilih dari gambar yang sudah diupload
3. Gambar akan tersimpan di `/public/uploads/`
4. Path otomatis di-set ke konten

### 📏 Rekomendasi Ukuran Gambar:

- **Hero Fallback Image**: 1920x1080px (landscape)
- **Corporate Carousel**: 1200x800px (landscape)
- **News Image**: 800x600px
- **Event Image**: 800x600px

---

## 🔄 Workflow Publishing

1. **Edit konten** di CMS
2. **Klik Save** → CMS commit changes ke GitHub
3. **Vercel detect** changes → trigger build
4. **Auto-deploy** dalam 2-5 menit
5. **Website updated** 🎉

---

## ⚡ Development Lokal (Optional)

Untuk testing CMS di localhost:

### Install Decap Server

```bash
npm install -g decap-server
# atau
yarn global add decap-server
```

### Jalankan Local Backend

```bash
# Terminal 1 - CMS Backend
npx decap-server

# Terminal 2 - Website
yarn dev
```

### Akses CMS Lokal

```
http://localhost:3000/admin
```

Di local mode, changes tersimpan langsung ke filesystem (tidak perlu GitHub OAuth).

---

## 🛠️ Troubleshooting

### CMS Tidak Bisa Login

**Penyebab**: GitHub OAuth belum disetup
**Solusi**:
1. Pastikan OAuth App sudah dibuat di GitHub
2. Pastikan Environment Variables sudah ditambahkan di Vercel
3. Pastikan `config.yml` sudah diupdate dengan repo yang benar
4. Redeploy project di Vercel

### Konten Tidak Muncul di Website

**Penyebab**: File JSON belum terbaca
**Solusi**:
1. Check apakah file `public/content/home.json` ada
2. Check browser console untuk error
3. Pastikan format JSON valid (gunakan JSON validator)
4. Clear browser cache dan refresh

### Gambar Tidak Muncul

**Penyebab**: Path gambar salah atau file tidak terupload
**Solusi**:
1. Pastikan gambar ada di `/public/uploads/`
2. Check path gambar dimulai dengan `/uploads/`
3. Pastikan ukuran gambar tidak terlalu besar (max 5MB)
4. Gunakan format JPG, PNG, atau WebP

### Build Error di Vercel

**Penyebab**: Syntax error di JSON atau config
**Solusi**:
1. Check Vercel build logs
2. Validate JSON di [jsonlint.com](https://jsonlint.com)
3. Check syntax YAML di config.yml
4. Check error message di Vercel

---

## 📚 Struktur Content

```
public/
├── content/
│   ├── home.json         # Konten halaman Home
│   └── settings.json     # Site settings
└── uploads/              # Media/gambar yang diupload
    └── (gambar-gambar)
```

---

## 🎯 Tips & Best Practices

### ✅ DO:
- Gunakan gambar berkualitas tinggi (tapi tidak terlalu besar)
- Kompress gambar sebelum upload (gunakan TinyPNG)
- Buat backup content secara berkala
- Test perubahan di staging sebelum production
- Gunakan ID unik untuk News dan Events
- Isi kedua bahasa (Indonesia & English)

### ❌ DON'T:
- Jangan upload gambar > 5MB
- Jangan gunakan karakter spesial di ID
- Jangan hapus field wajib
- Jangan edit file JSON secara manual (gunakan CMS)

---

## 🔗 Resources

- **Decap CMS Docs**: https://decapcms.org/docs/
- **GitHub OAuth Setup**: https://docs.github.com/en/developers/apps/building-oauth-apps
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs

---

## 📧 Support

Jika ada masalah:
1. Check error di browser console (F12)
2. Check build logs di Vercel Dashboard
3. Check commit history di GitHub
4. Check file `public/content/home.json`

---

## 🎉 Selamat!

CMS Diamond Group siap digunakan! Anda sekarang bisa mengedit semua konten website tanpa perlu coding.

**Happy editing!** 🚀
"