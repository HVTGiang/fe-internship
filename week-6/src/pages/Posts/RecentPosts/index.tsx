import styled from "@emotion/styled";
import PrimaryPost from "./PrimaryPost";
import { Post } from "../Type";
import SecondaryPost from "./SecondaryPost";
import { useTranslation } from "react-i18next";

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding-bottom: 50px;
`;

const GroupPost = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 24px;
`;

const RecentPosts = ({ data }: { data: Array<Post> }) => {
  const { t } = useTranslation();
  return (
    <Container>
      <h2>{t("posts.recent-post")}</h2>
      {data.length > 0 ? (
        <GroupPost>
          <PrimaryPost post={data[0]} />
          <SecondaryPost post={data[1]} />
          <SecondaryPost post={data[2]} />
          <SecondaryPost post={data[3]} />
        </GroupPost>
      ) : (
        ""
      )}
    </Container>
  );
};
export default RecentPosts;
