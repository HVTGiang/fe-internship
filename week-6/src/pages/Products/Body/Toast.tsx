import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";
import { forwardRef } from "react";
interface ToastProps {
  message: string;
  type: string;
}
const StyledToast = styled.div`
  width: 100%;
  padding: 20px;
  color: white;
  border-radius: 5px;
  font-weight: 500;
  transition: all;
  animation: slideIn ease-in 0.5s, fadeOut ease 2s 3s forwards;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(calc(30% + 32px));
    }

    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  @keyframes fadeOut {
    to {
      opacity: 0;
    }
  }

  &.success {
    background-color: ${theme.palette.success.main};
    border-left: 10px solid ${theme.palette.success.main};
  }
  &.warning {
    background-color: ${theme.palette.warning.main};
    border-left: 10px solid ${theme.palette.warning.main};
  }
  &.info {
    background-color: ${theme.palette.info.main};
    border-left: 10px solid ${theme.palette.info.main};
  }
  &.error {
    background-color: ${theme.palette.error.main};
    border-left: 10px solid ${theme.palette.error.main};
  }
`;
const ToastContainer = styled.div`
  position: fixed;
  right: 10px;
  top: 0;
  bottom: 0;
  background-color: #ccc;
  z-index: 999;
  margin-top: 20px;
  margin-bottom: 50px;
  width: 300px;
  display: flex;
  flex-direction: column-reverse;
`;
export const Toast = ({ message, type }: ToastProps) => {
  return (
    <StyledToast className={type}>
      <p>{message}</p>
    </StyledToast>
  );
};
const Toasts = ({ children }: any, ref: any) => {
  var toast = Array<ToastProps>();
  return <ToastContainer ref={ref}>{children}</ToastContainer>;
};

export default forwardRef(Toasts);
