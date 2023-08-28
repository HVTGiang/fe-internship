import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <StyledThumbnail>
      <Title>{t('posts.thumbnail.title')}</Title>
      <SubTitle>{t('posts.thumbnail.subtitle')}</SubTitle>
      <StyledSearchGroup>
        <SearchGroup />
      </StyledSearchGroup>
    </StyledThumbnail>
  );
};
export default Thumbnail;
