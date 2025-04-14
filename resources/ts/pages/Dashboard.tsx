import { For } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { AppPage } from "~/components";
import { Skeleton } from "~/components/ui/skeleton";
import { UseUserReturn } from "~/hooks";

type PageProps = {
  user: UseUserReturn;
};

const Page = ({ user }: PageProps) => (
  <AppPage title="Dashboard" subtitle="All important metrics at a glance">
    <Text as={"p"} textStyle={"md"}>
      Selamat datang{" "}
      <Text as={"span"} fontWeight={"bold"}>
        {user.name}
      </Text>
    </Text>

    <For each={[1, 2, 3, 4, 5]}>{(i) => <Skeleton key={i} my={"2"} height="36" />}</For>
  </AppPage>
);

export default Page;
