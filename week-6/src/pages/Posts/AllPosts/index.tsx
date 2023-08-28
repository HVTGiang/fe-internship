import styled from "@emotion/styled";
import { Button, Snackbar, Alert } from "@mui/material";
import ItemPost from "./ItemPost";
import { Post } from "../Type";
import Pagination from "./Pagination";
import { useMemo, useState } from "react";
import EditPost from "../DetailPost/EditPost";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;
const Title = styled.div`
  padding-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
const StyledButton = styled(Button)`
  /* padding: 0; */
`;
const ListPost = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 40px;
`;

const PaginationContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 40px 0;
  justify-content: center;
`;

const AllPosts = ({ data }: { data: Array<Post> }) => {
  const [page, setPage] = useState(1);
  const [openPanel, setOpenPanel] = useState(false);
  const [isSnackBarShow, setIsSnackBarShow] = useState(false);
  const pages = useMemo(() => {
    return Math.ceil(data.length / 8);
  }, [data]);
  const fromItem = (page - 1) * 8;
  const toItem = page * 8;

  const handleChangePage = (page: number) => {
    setPage(page);
  };
  const swapVisiblePanel = () => {
    setOpenPanel((prev) => !prev);
  };
  const handleCloseSnackBar = () => {
    setIsSnackBarShow(false);
  };
  const handleOpenSnackBar = () => {
    setIsSnackBarShow(true);
  };

  return (
    <Container>
      <Title>
        <h2>All posts</h2>
        <StyledButton
          variant="contained"
          color="success"
          disableElevation
          onClick={swapVisiblePanel}
        >
          + Create a new post
        </StyledButton>
      </Title>

      <ListPost>
        {data.slice(fromItem, toItem).map((item) => {
          return <ItemPost post={item} key={item.id} />;
        })}
      </ListPost>
      <PaginationContainer>
        <Pagination
          data={data}
          page={page}
          handleChangePage={handleChangePage}
        />
      </PaginationContainer>
      <EditPost
        mode="create"
        post={{} as Post}
        open={openPanel}
        onSwapVisible={swapVisiblePanel}
        onSaveSuccess={handleOpenSnackBar}
      />
      <Snackbar
        open={isSnackBarShow}
        onClose={handleCloseSnackBar}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Success: Added post!
        </Alert>
      </Snackbar>
    </Container>
  );
};
export default AllPosts;
