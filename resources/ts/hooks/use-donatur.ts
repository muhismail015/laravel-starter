import { usePage } from "@inertiajs/react";

export type UseDonaturReturn = {
  id: number;
  name: string;
  branch_id: string;
  employee_id: string;
  identification_number: string;
  created_at: string;
  updated_at: string;
};
export const useDonatur = (): UseDonaturReturn[] => {
  const props = usePage().props as any;

  return props.donatur as any;
};
