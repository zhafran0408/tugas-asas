# 📝 ASAS Praktek - Form Peminatan Santri

> *"Type-Safe Form Validation using React Hook Form & Zod"*

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)](https://zod.dev/)

## 👨‍🎓 Identitas Pembuat
- **Nama** : Zhafran
- **Kelas** : XI (Sebelas)
- **Mata Pelajaran** : Frontend Web Development
- **Tugas** : Evaluasi Latihan ASAS Praktek

---

## 📌 Deskripsi Tugas
Project ini dibuat untuk memenuhi tugas praktik pembuatan **Formulir Pendaftaran Santri** berbasis web. 

Fokus utama dari tugas ini adalah mengimplementasikan **Type-Safety** (keamanan tipe data) secara menyeluruh. Alih-alih menggunakan validasi HTML biasa, project ini menggunakan **Zod** sebagai *schema validation* yang diintegrasikan dengan **React Hook Form**. Dengan pendekatan ini, data yang di-input oleh user dijamin 100% valid dan sesuai dengan tipe data yang diharapkan oleh TypeScript sebelum diproses lebih lanjut.

---

## 🛠️ Tech Stack (Teknologi yang Digunakan)
Project ini dibangun menggunakan teknologi modern industri:
- **React.js**: Library UI untuk membangun antarmuka komponen.
- **TypeScript**: Superset JavaScript untuk menambahkan *static typing*.
- **Zod**: Library *schema declaration* dan validasi data berbasis TypeScript.
- **React Hook Form**: Library pengelola *state* form yang ringan dan performan.
- **Tailwind CSS**: Framework CSS untuk styling yang cepat dan responsif.
- **Vite**: Build tool modern untuk development yang super cepat.

---

## ✨ Fitur & Penerapan Materi (Sesuai Rubrik)
1. **Skema Zod Murni**: Menggunakan `z.number()` (tanpa `.coerce()`) pada skema NIS dan Umur.
2. **Ekstraksi Tipe Otomatis**: Memanfaatkan `z.infer<typeof santriSchema>` untuk menghasilkan tipe data TypeScript secara otomatis dari skema Zod.
3. **Parsing Input HTML**: Menerapkan `{ valueAsNumber: true }` pada fungsi `register` agar nilai string dari input HTML otomatis dikonversi menjadi *number*.
4. **Type-Safety Penuh**: Pemasangan *Generic Type* `<SantriFormData>` pada `useForm` dan `useState` untuk mencegah *bug* terkait tipe data.
5. **UI/UX Interaktif**: Tombol submit otomatis *disabled* (`{!isValid}`) jika form belum diisi dengan benar, dan muncul kartu hasil pendaftaran (*Conditional Rendering*) setelah data berhasil di-submit.

---

## 🚀 Cara Menjalankan Project (Local Setup)
Pastikan Anda sudah menginstall **Node.js** di komputer.

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/zhafran0408/starter-react-typescript.git
