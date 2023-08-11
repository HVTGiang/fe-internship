import { ChangeEvent, useState } from "react";

import styled from "@emotion/styled";
import { Typography, Button, FormControlLabel, Checkbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TextInputField from "./TextInputField";
import PasswordField from "./PasswordField";
import axios from "axios";
import { AlertColor } from "@mui/material";

import { object, string, ref } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import SnackBar from "./SnackBar";

const StyleLogout = styled.div`
  background-color: white;
  width: 40%;
  height: 95%;
  border-radius: 30px;
  padding: 12px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: rgba(255, 255, 255, 0.85);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  margin: 16px 0;
`;

const StyledButton = styled(Button)`
  text-transform: none;
  padding: 0 0 3px 0;
  &:hover {
    background: none;
  }
`;

const StyledTitle = styled.div`
  h4 {
    margin-bottom: 8px;
  }
  margin-bottom: 16px;
`;

const ErrorMessage = styled.p`
  display: block;
  width: 100%;
  color: #ff784f;
  font-size: 12px;
  text-align: right;
  margin: 0;
`;

const SignUp = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const [snackBarState, setSnackBarState] = useState({
    open: false,
    message: "",
    type: "warning" as AlertColor,
  });
  const yubSchema = object().shape({
    username: string()
      .min(10, "Your username must be at least 10 characters")
      .required("Please fill this section"),
    password: string()
      .min(10, "Password must be at least 10 characters")
      .required("Please fill this section")
      .matches(
        passwordRegex,
        "Password must contain at least one number, one upper case letter"
      ),
    confirmPassword: string()
      .min(10, "Password must be at least 10 characters")
      .required("Please fill this section")
      .matches(
        passwordRegex,
        "Password must contain at least one number, one upper case letter"
      )
      .oneOf([ref("password")], "Confirm password is not match"),
    email: string()
      .email("Email is in wrong format")
      .required("Please fill this section"),
    fullname: string().required("Please fill this section"),
  });

  // form từ react hook form
  const {
    formState: { isValid, errors },
    control,
    handleSubmit,
    getValues,
  } = useForm({
    defaultValues: {},
    mode: "onTouched",
    resolver: yupResolver(yubSchema),
    reValidateMode: "onBlur",
  });

  const onSubmit: SubmitHandler<object> = async (data) => {
    try {
      const response = await axios.post("http://localhost:3333/users", data);

      if (response.status === 201) {
        navigateLogin();
      }
    } catch (err) {
      setSnackBarState((prev) => {
        return {
          ...prev,
          open: true,
          message: "Username or email is existing!",
          type: "warning",
        };
      });
    }
  };

  const navigateLogin = () => {
    navigate("/authen/login");
  };

  return (
    <>
      <SnackBar
        open={snackBarState.open}
        handleClose={() =>
          setSnackBarState((prev) => {
            return { ...prev, open: !prev.open };
          })
        }
        message={snackBarState.message}
        type={snackBarState.type}
      />
      <StyleLogout>
        <StyledTitle>
          <Typography variant="h4" fontWeight={700} color={theme.color.green26}>
            Hey there!
          </Typography>
          <Typography fontWeight={500}>
            Enjoy your journey with an account
          </Typography>
        </StyledTitle>
        <StyledForm action="" onSubmit={handleSubmit(onSubmit)}>
          <TextInputField name="username" label="Username" control={control} />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
          <PasswordField name="password" label="Password" control={control} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <PasswordField
            name="confirmPassword"
            label="Confirm password"
            control={control}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>
          <TextInputField
            name="email"
            label="Email"
            control={control}
            type="email"
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
          <TextInputField name="fullname" label="Fullname" control={control} />
          <ErrorMessage>{errors.fullname?.message}</ErrorMessage>

          <Button
            fullWidth
            variant="contained"
            color="success"
            type="submit"
            disableElevation
            style={{ marginTop: "32px" }}
          >
            Sign up
          </Button>
          <Typography
            variant="body1"
            color="initial"
            style={{ marginTop: "8px" }}
          >
            You already have an account?
            <StyledButton
              variant="text"
              color="info"
              size="large"
              onClick={navigateLogin}
            >
              Log in
            </StyledButton>
          </Typography>
        </StyledForm>
      </StyleLogout>
    </>
  );
};
export default SignUp;
