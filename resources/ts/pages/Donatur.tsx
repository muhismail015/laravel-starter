"use client";

import { AppPage } from "~/components";
import { useState } from "react";
import {
  Grid,
  GridItem,
  Text,
  Textarea,
  createListCollection,
  Flex,
  Button,
  Field,
  Stack,
  ButtonGroup,
  Heading,
  IconButton,
  Pagination,
  Table,
  Box
} from "@chakra-ui/react";
import CustomSelect from "~/components/custom-select";
import InputField from "~/components/input-field";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { UseDonaturReturn } from "~/hooks/use-donatur";

interface FormValues {
  branch_id: string[];
  employee_id: string[];
  identification_number: string;
  name: string;
}

type PageProps = {
  donatur: UseDonaturReturn[];
};

const Donatur = ({ donatur }: PageProps) => {
  console.log(donatur);
  const [formValues, setFormValues] = useState<FormValues>({
    branch_id: [],
    employee_id: [],
    identification_number: "",
    name: ""
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const validateForm = (): boolean => {
    const validationErrors: Partial<FormValues> = {};
    if (!formValues.name) {
      validationErrors.name = "Nama donatur harus diisi";
    }
    if (!formValues.identification_number) {
      validationErrors.identification_number = "Nomor identitas harus diisi";
    }
    // if (!formValues.branch_id.length) {
    //   validationErrors.branch_id = "Cabang harus dipilih";
    // }
    // if (!formValues.employee_id.length) {
    //   validationErrors.employee_id = "Petugas harus dipilih";
    // }
    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formValues);

      // reset value
      setFormValues({
        branch_id: [],
        employee_id: [],
        identification_number: "",
        name: ""
      });
    } else {
      console.log("Form validation failed:", errors);
    }
  };

  const arrHeader = [
    { key: "name", name: "Nama Donatur", textAlign: "left" },
    { key: "identification_number", name: "Nomor Identitas", textAlign: "left" },
    { key: "employee_id", name: "Petugas", textAlign: "left" },
    { key: "branch_id", name: "Cabang", textAlign: "left" }
  ];

  return (
    <AppPage title="Data Donatur" subtitle="Kelola data donatur">
      <Grid gap={5} mb={2} width="100%" templateRows="repeat(1, 1fr)" templateColumns="8fr 4fr">
        <Box bg="#eaeaea" p="4" borderRadius="lg">
          <GridItem colSpan={1}>
            <Stack gap="5">
              <Heading size="xl">Data Donatur </Heading>
              <Table.ScrollArea height="calc(100vh - 280px)">
                <Table.Root size="sm" variant="outline" interactive showColumnBorder stickyHeader>
                  <Table.Header bg="#f0f0f0">
                    <Table.Row>
                      {arrHeader.map((header) => (
                        <Table.ColumnHeader key={header.key} textAlign={header.textAlign}>
                          {header.name}
                        </Table.ColumnHeader>
                      ))}
                    </Table.Row>
                  </Table.Header>
                  <Table.Body bg="#ffffff">
                    {donatur.map((item) => (
                      <Table.Row key={item.id}>
                        <Table.Cell>{item.name}</Table.Cell>
                        <Table.Cell>{item.identification_number}</Table.Cell>
                        <Table.Cell>-</Table.Cell>
                        <Table.Cell>-</Table.Cell>
                      </Table.Row>
                    ))}
                  </Table.Body>
                </Table.Root>
              </Table.ScrollArea>

              <Pagination.Root count={5 * 5} pageSize={5} page={1}>
                <ButtonGroup variant="ghost" size="sm" wrap="wrap">
                  <Pagination.PrevTrigger asChild>
                    <IconButton>
                      <LuChevronLeft />
                    </IconButton>
                  </Pagination.PrevTrigger>

                  <Pagination.Items
                    render={(page) => (
                      <IconButton variant={{ base: "ghost", _selected: "outline" }}>
                        {page.value}
                      </IconButton>
                    )}
                  />

                  <Pagination.NextTrigger asChild>
                    <IconButton>
                      <LuChevronRight />
                    </IconButton>
                  </Pagination.NextTrigger>
                </ButtonGroup>
              </Pagination.Root>
            </Stack>
          </GridItem>
        </Box>

        <Box bg="#eaeaea" p="4" borderRadius="lg" maxH={"fit-content"} position="sticky" top="10">
          <GridItem colSpan={1}>
            <form onSubmit={handleSubmit}>
              <Stack gap="4" align="flex-start" maxW="lg">
                <Heading size="xl">Tambah Donatur</Heading>

                <InputField
                  name="name"
                  value={formValues.name}
                  onChange={handleChange}
                  placeholder="Nama Donatur"
                  error={errors.name}
                />
                <InputField
                  name="Nomor Identitas"
                  value={formValues.identification_number}
                  onChange={handleChange}
                  placeholder="Nomor Identitas"
                  error={errors.identification_number}
                />

                <Flex gap="4" width="100%">
                  <CustomSelect
                    collection={branchs}
                    value={formValues.branch_id}
                    onChange={(e: any) =>
                      setFormValues((prev) => ({ ...prev, branch_id: e.value }))
                    }
                    label="Cabang"
                    options={branchs.items}
                    placeholder="Pilih Petugas"
                  />
                  <CustomSelect
                    collection={employees}
                    value={formValues.employee_id}
                    onChange={(e: any) =>
                      setFormValues((prev) => ({ ...prev, employee_id: e.value }))
                    }
                    label="Petugas"
                    options={employees.items}
                    placeholder="Pilih Petugas"
                  />
                </Flex>

                <Button type="submit">Submit</Button>
              </Stack>
            </form>
          </GridItem>
        </Box>
      </Grid>
    </AppPage>
  );
};

const branchs = createListCollection({
  items: [
    { id: "1", name: "Cabang 1" },
    { id: "2", name: "Cabang 2" },
    { id: "3", name: "Cabang 3" },
    { id: "4", name: "Cabang 4" }
  ]
});

const employees = createListCollection({
  items: [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Alice Johnson" },
    { id: "4", name: "Bob Brown" }
  ]
});

export default Donatur;
