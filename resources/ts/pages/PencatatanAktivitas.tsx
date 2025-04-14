"use client";

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
import { Select, Portal } from "@chakra-ui/react";

import { AppPage } from "~/components";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import { UseActivityReturn, UseEmployeeReturn } from "~/hooks/use-activity";
import { formatDateTime } from "~/utils/formatDateTime";
import CustomSelect from "~/components/custom-select";
import InputField from "~/components/input-field";

interface FormValues {
  nama_aktivitas: string;
  deskripsi: string;
  bertugas: string[];
  status: string[];
  lokasi: string;
  kegiatan: string;
  tanggal_mulai: string;
  tanggal_selesai: string;
}

type PencatatanAktivitasProps = {
  aktivitas: UseActivityReturn[];
  employees: UseEmployeeReturn[];
};

const PencatatanAktivitas = ({ aktivitas }: PencatatanAktivitasProps) => {
  const [formValues, setFormValues] = useState<FormValues>({
    nama_aktivitas: "",
    deskripsi: "",
    bertugas: [],
    status: [],
    lokasi: "",
    kegiatan: "",
    tanggal_mulai: "",
    tanggal_selesai: ""
  });

  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const validateForm = (): boolean => {
    const validationErrors: Partial<FormValues> = {};

    if (!formValues.nama_aktivitas) {
      validationErrors.nama_aktivitas = "Nama aktivitas wajib diisi";
    }
    if (!formValues.deskripsi) {
      validationErrors.deskripsi = "Deskripsi wajib diisi";
    }
    if (!formValues.lokasi) {
      validationErrors.lokasi = "Lokasi wajib diisi";
    }
    if (!formValues.tanggal_mulai) {
      validationErrors.tanggal_mulai = "Tanggal mulai wajib diisi";
    }
    if (!formValues.tanggal_selesai) {
      validationErrors.tanggal_selesai = "Tanggal selesai wajib diisi";
    }

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", formValues);

      // reset value
      setFormValues({
        nama_aktivitas: "",
        deskripsi: "",
        bertugas: [],
        status: [],
        lokasi: "",
        kegiatan: "",
        tanggal_mulai: "",
        tanggal_selesai: ""
      });
    } else {
      console.log("Form validation failed:", errors);
    }
  };

  const arrHeader = [
    { name: "Nama Aktivitas", key: "activity_name", textAlign: "left" },
    { name: "Deskripsi", key: "deskripsi", textAlign: "left" },
    { name: "Bertugas", key: "bertugas", textAlign: "left" },
    { name: "Status", key: "status", textAlign: "left" },
    { name: "Lokasi", key: "lokasi", textAlign: "left" },
    { name: "Kegiatan", key: "kegiatan", textAlign: "left" },
    { name: "Tanggal Mulai", key: "tanggal_mulai", textAlign: "left" },
    { name: "Tanggal Selesai", key: "tanggal_selesai", textAlign: "left" }
  ];

  return (
    <AppPage title="Pencatatan Aktivitas" subtitle="Pencatatan aktivitas harian">
      <Grid gap={5} mb={2} width="100%" templateRows="repeat(1, 1fr)" templateColumns="8fr 4fr">
        <Box bg="#eaeaea" p="4" borderRadius="lg">
          <GridItem colSpan={1}>
            <Stack gap="5">
              <Heading size="xl">
                List Aktivitas{" "}
                <Text as={"span"} fontWeight={"normal"} fontStyle={"italic"} fontSize={"md"}>
                  (dalam 1 bulan)
                </Text>
              </Heading>
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
                    {aktivitas.map((item) => (
                      <Table.Row key={item.id}>
                        <Table.Cell>{item.nama_aktivitas}</Table.Cell>
                        <Table.Cell>{item.deskripsi}</Table.Cell>
                        <Table.Cell>{item.bertugas}</Table.Cell>
                        <Table.Cell>{item.status}</Table.Cell>
                        <Table.Cell>{item.lokasi}</Table.Cell>
                        <Table.Cell>{item.kegiatan}</Table.Cell>
                        <Table.Cell>{formatDateTime(item.tanggal_mulai)}</Table.Cell>
                        <Table.Cell>{formatDateTime(item.tanggal_selesai) || "-"}</Table.Cell>
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
                <Heading size="xl">Buat Aktivitas </Heading>

                <InputField
                  name="nama_aktivitas"
                  value={formValues.nama_aktivitas}
                  onChange={handleChange}
                  placeholder="Nama Aktivitas"
                  error={errors.nama_aktivitas}
                />
                <InputField
                  name="lokasi"
                  value={formValues.lokasi}
                  onChange={handleChange}
                  placeholder="Lokasi"
                  error={errors.lokasi}
                />
                <Field.Root invalid={!!errors.deskripsi}>
                  <Field.Label>Deskripsi</Field.Label>
                  <Textarea
                    name="deskripsi"
                    value={formValues.deskripsi}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Deskripsi"
                    variant="subtle"
                  />
                  <Field.ErrorText>{errors?.deskripsi}</Field.ErrorText>
                </Field.Root>

                <Flex gap="4" width="100%">
                  <CustomSelect
                    collection={employees}
                    value={formValues.bertugas}
                    onChange={(e: any) => setFormValues((prev) => ({ ...prev, bertugas: e.value }))}
                    label="Petugas"
                    options={employees.items}
                    placeholder="Pilih Petugas"
                  />
                  <CustomSelect
                    collection={status}
                    value={formValues.status}
                    onChange={(e: any) => setFormValues((prev) => ({ ...prev, status: e.value }))}
                    label="Status"
                    options={status.items}
                    placeholder="Pilih Status"
                  />
                </Flex>

                <Flex gap="4" width="100%">
                  <InputField
                    type="datetime-local"
                    name="tanggal_mulai"
                    value={formValues.tanggal_mulai}
                    onChange={handleChange}
                    placeholder="Tanggal Mulai"
                    error={errors.tanggal_mulai}
                  />
                  <InputField
                    type="datetime-local"
                    name="tanggal_selesai"
                    value={formValues.tanggal_selesai}
                    onChange={handleChange}
                    placeholder="Tanggal Selesai"
                    error={errors.tanggal_selesai}
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

const employees = createListCollection({
  items: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Alice Johnson" },
    { id: 4, name: "Bob Brown" },
    { id: 5, name: "Charlie Davis" }
  ]
});

const status = createListCollection({
  items: [
    { id: 1, name: "Selesai" },
    { id: 2, name: "Belum Selesai" }
  ]
});

export default PencatatanAktivitas;
