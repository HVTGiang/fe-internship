import { Controller } from "react-hook-form";
import TextField from "@mui/material/TextField";

type FormInputProp = {
  name: string;
  control: any;
  label: string;
  type?: string;
};

const TextInputField = ({
  name,
  control,
  label,
  type = "text",
}: FormInputProp) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        return (
          <TextField
            margin="dense"
            label={label}
            fullWidth
            {...field}
            error={!!fieldState.error}
            defaultValue=""
            type={type}
          />
        );
      }}
    ></Controller>
  );
};

export default TextInputField;
