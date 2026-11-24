import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { santriSchema, type SantriFormData } from "./santrischema";

export default function PeminatanFormTS() {
  const [dataSantri, setDataSantri] = useState<SantriFormData | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SantriFormData>({
    resolver: zodResolver(santriSchema),
    mode: "onChange", 
  });
  const onSubmit = (data: SantriFormData) => {
    console.log("Data Santri:", data);
    setDataSantri(data); 
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md border">
      <h2 className="text-xl font-bold mb-4">Form Pendaftaran Santri</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Nama</label>
          <input
            {...register("nama")}
            className="w-full border p-2 rounded"
            placeholder="Masukkan nama"
          />
          {errors.nama && <p className="text-red-500 text-xs">{errors.nama.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">NIS</label>
          <input
            type="number"
            {...register("nis", { valueAsNumber: true })}
            className="w-full border p-2 rounded"
            placeholder="Masukkan NIS"
          />
          {errors.nis && <p className="text-red-500 text-xs">{errors.nis.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Umur</label>
          <input
            type="number"
            {...register("umur", { valueAsNumber: true })}
            className="w-full border p-2 rounded"
            placeholder="Masukkan umur"
          />
          {errors.umur && <p className="text-red-500 text-xs">{errors.umur.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Peminatan</label>
          <select {...register("peminatan")} className="w-full border p-2 rounded">
            <option value="">Pilih Peminatan </option>
            <option value="Web Dev">Web Dev</option>
            <option value="Mobile Dev">Mobile Dev</option>
            <option value="Data Science">Data Science</option>
          </select>
          {errors.peminatan && <p className="text-red-500 text-xs">{errors.peminatan.message}</p>}
        </div>
        <button
          type="submit"
          disabled={!isValid}
          className="w-full bg-blue-600 text-white p-2 rounded disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Daftar Sekarang
        </button>
      </form>
      {dataSantri && (
        <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-bold text-green-800 mb-2">Pendaftaran Berhasil!</h3>
          <ul className="text-sm text-gray-700 space-y-1">
            <li><strong>Nama:</strong> {dataSantri.nama}</li>
            <li><strong>NIS:</strong> {dataSantri.nis}</li>
            <li><strong>Umur:</strong> {dataSantri.umur} tahun</li>
            <li><strong>Peminatan:</strong> {dataSantri.peminatan}</li>
          </ul>
        </div>
      )}
    </div>
  );
}