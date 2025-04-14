import { For } from "@chakra-ui/react";
import { AppPage } from "~/components";
import { Skeleton } from "~/components/ui/skeleton";


const Volunteers = () => (
  <AppPage title="Volunteer" subtitle="Menampilkan semua data relawan">
    {/* <Text as={"p"} textStyle={"md"}>Selamat datang <Text as={"span"} fontWeight={"bold"}>{user.name}</Text></Text> */}
    
    <For each={[1, 2, 3, 4, 5]}>
      {(i) => <Skeleton key={i} my={"2"} height="36" />}
    </For>
  </AppPage>
);

export default Volunteers;
