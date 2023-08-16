import { ChangeEvent, useState } from "react";

import styled from "@emotion/styled";
import { Typography, Button, FormControlLabel, Checkbox } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import TextInputField from "./TextInputField";
import PasswordField from "./PasswordField";
import axios from "axios";
import { AlertColor } from "@mui/material";

import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";

import { useNavigate } from "react-router-dom";

import SnackBar from "./SnackBar";
import { setCookie } from "../../cookie";
import ENDPOINTS from "../../api/endpoint";

const StyledLogin = styled.div`
  background-color: white;
  width: 35%;
  height: 80%;
  border-radius: 30px;
  padding: 12px;
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
  margin: 30px 0;
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
  margin: 4px 0;
`;

const Login = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  const [isRemember, setIsRemember] = useState(false);
  const [snackBarState, setSnackBarState] = useState({
    open: false,
    message: "",
    type: "warning" as AlertColor,
  });
  const yubSchema = object().shape({
    username: string().email().required("Please fill this section"),
    password: string().required("Please fill this section"),
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

  const navigateSignUp = () => {
    navigate("/authen/signup");
  };
  const navigateDashboard = () => {
    navigate("/products");
  };

  const onSubmit: SubmitHandler<object> = async (data) => {
    try {
      const response = await axios.post(ENDPOINTS.login, data);
      if (response.status === 200) {
        if (isRemember) {
          localStorage.setItem("accessToken", response.data.token);
        }
        setCookie("accessToken", response.data.token);
        console.log(response);
        navigateDashboard();
      }
    } catch (err: any) {
      let message = "";
      switch (err?.response?.status) {
        case 400:
          message = "User is not found";
          break;
        default:
          message = "Login failed";
          break;
      }
      setSnackBarState((prev) => {
        return {
          ...prev,
          open: true,
          message: message,
          type: "warning",
        };
      });
    }
  };

  const handleRememberCheck: (
    event: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => void = (e, checked) => {
    setIsRemember(checked);
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
      <StyledLogin>
        <StyledTitle>
          <Typography variant="h4" fontWeight={700} color={theme.color.green26}>
            Welcome back!
          </Typography>
          <Typography fontWeight={500}>
            Enter your Credentials to access your account
          </Typography>
        </StyledTitle>
        <StyledForm action="" onSubmit={handleSubmit(onSubmit)}>
          <TextInputField
            name="username"
            label="Username"
            control={control}
            type="email"
          />
          <ErrorMessage>{errors.username?.message}</ErrorMessage>
          <PasswordField name="password" label="Password" control={control} />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
          <FormControlLabel
            style={{ width: "100%", margin: "20px 0 28px 0" }}
            label="Remember me"
            control={
              <Checkbox
                value="end"
                // checked={}
                onChange={handleRememberCheck}
                checked={isRemember}
                color="primary"
              />
            }
          />
          <Button
            fullWidth
            variant="contained"
            color="success"
            type="submit"
            disableElevation
          >
            Log in
          </Button>
          <Typography
            variant="body1"
            color="initial"
            style={{ marginTop: "8px" }}
          >
            You don't have an account?
            <StyledButton
              variant="text"
              color="info"
              size="large"
              onClick={navigateSignUp}
            >
              Sign up
            </StyledButton>
          </Typography>
        </StyledForm>
      </StyledLogin>
    </>
  );
};
export default Login;
