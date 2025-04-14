import { For } from "@chakra-ui/react";
import { AppPage } from "~/components";
import { Skeleton } from "~/components/ui/skeleton";


const Employees = () => (
  <AppPage title="Employees" subtitle="Menampilkan semua data pegawai">

    <For each={[1, 2, 3, 4, 5]}>
      {(i) => <Skeleton key={i} my={"2"} height="36" />}
    </For>
  </AppPage>
);

export default Employees;
