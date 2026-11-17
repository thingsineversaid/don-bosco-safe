# DON BOSCO SAFE
### Student Protection & Anti-Bullying System

**Don Bosco Safe** adalah prototipe konsep website perlindungan siswa. Tujuannya membantu menggambarkan alur permintaan bantuan, penanganan laporan, dan penyampaian peringatan keselamatan di lingkungan sekolah.

> **Status: Prototipe demonstrasi — bukan sistem keselamatan operasional.**
> Semua data siswa, kejadian, notifikasi, dan lokasi dalam proyek ini adalah data simulasi. Jangan gunakan untuk keadaan darurat sungguhan.

## ✨ Fitur demonstrasi

- Tombol SOS dengan interaksi tekan dan tahan.
- Tiga kategori: Darurat, Butuh Bantuan, dan Laporan.
- Simulasi notifikasi terpisah untuk petugas, tim pendamping, dan komunitas sekolah.
- Peringatan komunitas tanpa menampilkan identitas korban.
- Riwayat laporan dan tombol penanda tindak lanjut.
- Simulasi pencegahan penyalahgunaan: hitungan hingga tiga catatan dan pembekuan akun demo untuk pemeriksaan.
- Tampilan responsif untuk desktop dan perangkat seluler.

## 📁 Struktur proyek

```text
don-bosco-safe/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/
    └── icons/
        └── logo.svg
```

| Berkas | Fungsi |
|---|---|
| `index.html` | Struktur dan konten halaman |
| `css/style.css` | Gaya visual dan layout responsif |
| `js/app.js` | Interaksi tombol SOS, notifikasi, riwayat, dan simulasi anti-penyalahgunaan |
| `assets/icons/logo.svg` | Ikon identitas proyek |

## 🚀 Cara menjalankan

### Opsi 1 — Langsung di komputer
1. Unduh dan ekstrak folder proyek.
2. Buka `index.html` menggunakan browser.
3. Coba pilih kategori bantuan dan lokasi.
4. Tekan dan tahan tombol SOS selama sekitar dua detik.
5. Konfirmasikan pengiriman simulasi.
6. Buka tab Petugas, Pendamping, dan Komunitas untuk melihat perbedaan informasi.
7. Coba fitur simulasi penyalahgunaan hingga tiga kali.

### Opsi 2 — Publikasikan melalui GitHub Pages
1. Buat repository baru di GitHub.
2. Unggah **isi folder proyek** (bukan folder luarnya) sehingga `index.html` berada di root repository.
3. Buka **Settings → Pages**.
4. Pada bagian Build and deployment, pilih **Deploy from a branch**.
5. Pilih branch `main` dan folder `/ (root)`, lalu simpan.
6. Tunggu proses publikasi selesai. GitHub akan menampilkan alamat website.

## 🧭 Konsep alur notifikasi

1. **Petugas sekolah** menerima detail laporan yang diperlukan untuk melakukan pemeriksaan dan pertolongan.
2. **Tim pendamping** menerima instruksi lokasi/tindakan seperlunya, sesuai tugas dan kewenangannya.
3. **Komunitas sekolah** hanya menerima peringatan keselamatan umum jika situasi berpotensi berdampak pada orang lain. Identitas korban tidak disebarkan.

## 🔐 Prinsip perlindungan dan privasi

- Informasi korban harus dibatasi berdasarkan kebutuhan tugas (*need-to-know*).
- Jangan menyebarkan identitas, lokasi persis, atau kronologi sensitif kepada seluruh siswa.
- Laporan yang dibatalkan tidak otomatis berarti laporan palsu.
- Dugaan penyalahgunaan perlu ditinjau manusia sebelum sanksi dijatuhkan.
- Pembekuan akun tidak boleh menghilangkan jalur alternatif untuk meminta pertolongan.
- Sekolah perlu menetapkan petugas respons, prosedur eskalasi, dan jalur bantuan alternatif.

## ⚠️ Batasan prototipe

Versi ini berjalan di browser sebagai demonstrasi lokal. Fitur-fitur berikut **belum** diimplementasikan:

- Pengiriman notifikasi nyata ke HP/perangkat lain.
- Akun dan autentikasi siswa/petugas.
- Database bersama lintas perangkat atau 89 sekolah.
- GPS real-time dan pelacakan lokasi di latar belakang.
- Integrasi smartwatch atau tombol SOS fisik.
- Pemantauan aplikasi lain atau penguncian perangkat.
- Verifikasi identitas, audit keamanan, dan sistem respons 24 jam.

Data simulasi tidak disimpan ke database dan tidak dibagikan ke pengguna lain. GitHub Pages hanya meng-host file statis; penggunaan nyata memerlukan backend, database, autentikasi, kontrol akses, pengamanan data, pengujian, serta persetujuan dan tata kelola sekolah.

**Jangan mengandalkan prototipe ini untuk meminta bantuan darurat sungguhan.** Jika ada bahaya nyata, hubungi guru/petugas sekolah atau layanan darurat yang berlaku secara langsung.

## 🛠️ Ide pengembangan berikutnya

- Backend dan database terpusat.
- Login berbasis peran (siswa, guru BK, petugas, administrator).
- Push notification dengan konfirmasi penerimaan oleh petugas.
- Alur eskalasi jika petugas utama tidak merespons.
- Pengelolaan laporan rahasia dan jejak audit.
- Kebijakan retensi dan penghapusan data.
- Uji coba terbatas bersama pihak sekolah, konselor, orang tua, dan ahli perlindungan anak.

## 💡 Ide utama

> **Because every student deserves to feel safe at school.**

Proyek konsep untuk eksplorasi inovasi teknologi pendidikan dan perlindungan siswa.
