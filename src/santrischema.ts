import {z} from "zod";

export const santriSchema = z.object({
  nama: z.string().min(3, "Nama minimal 3 karakter"),
  nis: z.number().min(100, "NIS wajib diisi"),
  umur: z.number().min(10, "Umur minimal 10 tahun"),
  peminatan: z.string().min(1, "Pilih peminatan"),
});

export type SantriFormData = z.infer<typeof santriSchema>;
