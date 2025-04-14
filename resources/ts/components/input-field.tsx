import { Input, Field } from "@chakra-ui/react";

interface InputFieldProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  error?: string;
  required?: boolean;
  type?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  name,
  value,
  onChange,
  placeholder,
  error,
  required = false,
  type = "text"
}) => {
  return (
    <Field.Root invalid={!!error}>
      <Field.Label>
        {placeholder} {required && <Field.RequiredIndicator />}
      </Field.Label>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="subtle"
      />
      {error && <Field.ErrorText>{error}</Field.ErrorText>}
    </Field.Root>
  );
};

export default InputField;
