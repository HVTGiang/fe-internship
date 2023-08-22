import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Close from "@mui/icons-material/Close";
import { Alert } from "@mui/material";
import { AlertColor } from "@mui/material";

type SnackBarProp = {
  open: boolean;
  message: string;
  type: AlertColor;
  handleClose: (event: React.SyntheticEvent | Event, reason?: string) => void;
};

const StateSnackBar = ({ open, handleClose, message, type }: SnackBarProp) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      open={open}
      onClose={handleClose}
      message=""
      action={
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <Close fontSize="small" />
        </IconButton>
      }
    >
      <Alert onClose={handleClose} severity={type} sx={{ width: "100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default StateSnackBar;
