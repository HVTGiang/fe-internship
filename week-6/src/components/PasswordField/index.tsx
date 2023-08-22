import { Controller } from "react-hook-form";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

type FormInputProp = {
    name: string;
    control: any;
    label: string;
    type?: string;
  };
  
const PasswordField = ({ name, control, label }: FormInputProp) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState, formState }) => {
        return (
          <FormControl fullWidth margin="dense" error={!!fieldState.error}>
            <InputLabel htmlFor="input-password">{label}</InputLabel>
            <OutlinedInput
              // notched={true}
              label={label}
              {...field}
              type={isShowPassword ? "text" : "password"}
              id="input-password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    edge="end"
                    onClick={() => setIsShowPassword((prev) => !prev)}
                  >
                    {isShowPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              defaultValue=""
            />
          </FormControl>
        );
      }}
    ></Controller>
  );
};

export default PasswordField;
