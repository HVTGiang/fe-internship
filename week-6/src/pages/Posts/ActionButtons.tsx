import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
import EditPost from "./DetailPost/EditPost";
import { Post } from "./Type";

const Container = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;
const ActionButtons = ({
  handleDelete,
  post,
  onOpenSnackBar,
  onChangeMessage,
}: {
  handleDelete: any;
  post?: Post;
  [key: string]: any;
}) => {
  const [open, setOpen] = useState(false);
  const [openEditMode, setOpenEditMode] = useState(false);

  const handleAgree = () => {
    handleDelete();
    setOpen(false);
  };
  const handleDisagree = () => {
    setOpen(false);
  };

  const handleDeleteClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const swapEditMode = () => {
    setOpenEditMode((prev) => !prev);
  };
  return (
    <Container>
      <Button
        variant="text"
        color="error"
        disableElevation
        onClick={(e) => {
          e.stopPropagation();
          handleDeleteClick();
        }}
      >
        Delete
      </Button>
      <Button
        variant="text"
        color="info"
        disableElevation
        onClick={(e) => {
          e.stopPropagation();
          swapEditMode();
        }}
      >
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        onClick={(e) => {
          handleClose();
          e.stopPropagation();
        }}
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You are not be able to recover this post!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleAgree();
            }}
            variant="text"
            color="error"
          >
            Delete
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleDisagree();
            }}
            autoFocus
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <EditPost
        mode="edit"
        open={openEditMode}
        post={post ? post : ({} as Post)}
        onSwapVisible={swapEditMode}
        onSaveSuccess={onOpenSnackBar}
        onChangeMessage={onChangeMessage}
      />
    </Container>
  );
};
export default ActionButtons;
