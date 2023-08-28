import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [openEditMode, setOpenEditMode] = useState(false);

  const handleAgree = () => {
    handleDelete();
    onChangeMessage(t("posts.message.delete-post-success"));
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
        {t("posts.delete-post.delete")}
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
        {t("posts.action.edit")}
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
        <DialogTitle id="alert-dialog-title">
          {t("posts.delete-post.title")}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {t("posts.delete-post.warning")}
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
            {t("posts.delete-post.delete")}
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleDisagree();
            }}
            autoFocus
          >
            {t("posts.delete-post.cancel")}
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
