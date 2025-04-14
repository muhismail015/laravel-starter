import { usePage } from "@inertiajs/react";

export type UseActivityReturn = {
  id: number;
  nama_aktivitas: string;
  deskripsi: string;
  bertugas: string;
  status: string;
  lokasi: string;
  kegiatan: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
};
export type UseEmployeeReturn = {
  id: number;
  name: string;
};
export const useActivity = (): UseActivityReturn[] => {
  const props = usePage().props as any;

  return props.aktifitas as any;
};

export const useEmployee = (): UseEmployeeReturn[] => {
  const props = usePage().props as any;

  return props.employees as any;
};
