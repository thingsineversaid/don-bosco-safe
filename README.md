# DON BOSCO SAFE
### Student Protection & Anti-Bullying System

Prototipe website mobile-first untuk meminta bantuan, melaporkan kejadian sebagai saksi, dan menemukan tempat aman di sekolah.

> **Demo front-end saja. Bukan layanan darurat sungguhan.**

## Fokus desain
Layar utama sengaja dibuat sederhana dengan empat tombol besar agar siswa tidak perlu membaca banyak teks atau mengetik panjang ketika terburu-buru.

## Tombol utama
- **DARURAT** — tekan dan tahan untuk simulasi SOS.
- **LIHAT KEJADIAN?** — lapor cepat sebagai saksi: perkelahian, pengeroyokan, bullying fisik, atau ancaman.
- **SAYA DI-BULLY** — pilih jenis perundungan tanpa menulis kronologi panjang.
- **LOKASI AMAN** — lihat contoh tempat meminta bantuan.

Panel simulasi petugas dapat dibuka dari tautan kecil di bagian bawah layar.

## Struktur proyek
```text
don-bosco-safe/
├── index.html
├── README.md
├── css/style.css
├── js/app.js
└── assets/icons/logo.svg
```

## Menjalankan
1. Ekstrak ZIP.
2. Buka `index.html` di browser, atau unggah seluruh isi folder ke root repository GitHub.
3. Aktifkan GitHub Pages melalui **Settings → Pages → Deploy from a branch → main → /(root)**.
4. Buka dari HP untuk melihat desain mobile.

## Batasan dan keselamatan
Versi ini hanya simulasi lokal. Tidak mengirim notifikasi sungguhan, tidak memiliki database atau login, tidak membagikan GPS, dan tidak terhubung ke HP petugas. Laporan hanya tersimpan sementara dalam sesi browser.

Dalam penerapan nyata diperlukan backend, autentikasi, database, push notification, kontrol akses, perlindungan data anak, petugas yang siap merespons, dan SOP sekolah. Identitas pelapor hanya boleh diakses petugas berwenang. Siswa tidak boleh diminta mendekati pelaku atau menghadapi perkelahian.

**Jangan gunakan prototipe ini untuk keadaan darurat aktual.** Hubungi guru, petugas sekolah, orang tua/wali, atau layanan darurat yang sesuai jika ada ancaman nyata.

> **Because every student deserves to feel safe at school.**
