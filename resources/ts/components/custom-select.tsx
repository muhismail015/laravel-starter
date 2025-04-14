import { Select, createListCollection, Portal } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface CustomSelectProps {
  collection: any;
  value: string[];
  onChange: any;
  label: string;
  options: { id: number | string; name: string }[];
  placeholder: string;
  width?: string;
}

const CustomSelect = ({
  collection,
  value,
  onChange,
  label,
  options,
  placeholder,
  width = "320px"
}: CustomSelectProps) => {
  return (
    <Select.Root
      width={width}
      value={value}
      onValueChange={onChange}
      variant="subtle"
      collection={collection}
    >
      <Select.HiddenSelect />
      <Select.Label>{label}</Select.Label>
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder={value.length != 0 ? value[0] : placeholder} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.ClearTrigger />
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {options.map((option) => (
              <Select.Item item={option.name} key={option.id}>
                {option.name}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};

export default CustomSelect;
