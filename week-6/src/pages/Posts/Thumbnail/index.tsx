import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";
import SearchGroup from "../../../components/SearchGroup";

const StyledThumbnail = styled.div`
  width: 100%;
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.p`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
`;

const SubTitle = styled.h2`
  color: #999;
  font-weight: 400;
  text-align: center;
`;

const StyledSearchGroup = styled.div`
  width: 50%;
  margin-top: 40px;
`;

const Thumbnail = () => {
  return (
    <StyledThumbnail>
      <Title>Inside Design: Stories and interviews</Title>
      <SubTitle>News about new product features and updates.</SubTitle>
      <StyledSearchGroup>
        <SearchGroup />
      </StyledSearchGroup>
    </StyledThumbnail>
  );
};
export default Thumbnail;
