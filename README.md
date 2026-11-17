# DON BOSCO SAFE — GitHub Demo
Prototipe mobile-first untuk demonstrasi sistem perlindungan siswa.

## Fitur
- Pilihan login demo: Siswa dan Petugas.
- Profil siswa: nama, email, jenjang, kelas, dan sekolah.
- Tombol DARURAT (tekan dan tahan) dengan alarm suara.
- Laporan saksi: perkelahian, pengeroyokan, bullying fisik, ancaman.
- Laporan bullying dan pilihan lokasi aman.
- Dashboard petugas, daftar laporan, status tindak lanjut, dan tombol tes alarm.
- Data demo disimpan di `localStorage` pada browser/perangkat yang sama.

## Akun demo
- Siswa: isi data pada formulir (email hanya data profil, bukan login Google).
- Petugas: email demo bebas; kode demo `DONBOSCO123`.

## Pasang di GitHub Pages
1. Unggah `index.html` dan `README.md` ke root repository.
2. Buka Settings → Pages → Deploy from a branch → `main` → `/(root)`.
3. Buka URL GitHub Pages. Izinkan suara jika browser meminta.

## Batasan penting
GitHub Pages hanya meng-host file statis. Ini **bukan** autentikasi Gmail sungguhan, tidak ada database bersama, dan dua HP tidak saling menerima laporan. `localStorage` hanya menyimpan data pada browser/perangkat yang sama. Alarm dibuat oleh Web Audio API dan hanya berbunyi di perangkat yang sedang membuka halaman; browser dapat membatasi autoplay dan suara harus diaktifkan oleh interaksi pengguna.

Prototipe ini bukan layanan darurat aktual. Jangan gunakan untuk meminta pertolongan sungguhan. Penerapan nyata memerlukan backend/database, autentikasi dan otorisasi petugas, notifikasi lintas perangkat, SOP respons, serta perlindungan data anak.
