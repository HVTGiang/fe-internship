import HomeIcon from "@mui/icons-material/Home";
import StorageIcon from "@mui/icons-material/Storage";
import styled from "@emotion/styled";
import { theme } from "../../../mui-config/theme";

const StyledList = styled.ul`
  list-style-type: none;
  margin: 20px 0 20px 40px;
  padding: 20px 10px;
  border-radius: 30px;
  border: 2px solid white;
  background-color: ${theme.color.greyF7};
  display: inline-block;
  box-shadow: 0 0 8px 5px #eee;
  transition: min-width 0.2s, border-radius 0.2s;
  min-width: 0px;
  height: calc(100% - 40px);

  li:nth-last-child(1) {
    margin-bottom: 0;
  }
  &:hover {
    min-width: 200px;
    border-radius: 20px;
    p {
      left: 50px;
      opacity: 1;
    }
  }
`;

type ToolsHeaderProps = {
  active?: boolean;
};

const StyledItem = styled.li<ToolsHeaderProps>`
  /* margin-bottom: 10px; */
  display: flex;
  align-items: center;
  transition: width linear 0.2s;
  position: relative;
  cursor: pointer;
  /* padding: 10px; */

  color: ${(props) =>
    props.active ? theme.color.green2A : theme.color.black39};
  svg {
    padding: 10px;
    box-sizing: content-box;
    border-radius: 50%;
  }

  p {
    margin: 0;
    margin-right: 10px;
    position: absolute;
    left: -0%;
    opacity: 0;
    z-index: 100;
    transition: all linear 0.2s;
  }

  &:hover {
    /* padding: 10px; */
    svg {
      background-color: ${theme.color.greyF7};
    }
    p {
      font-weight: bold;
    }
  }
`;
const Nav = () => {
  return (
    <StyledList>
      <StyledItem>
        <HomeIcon /> <p>Home</p>
      </StyledItem>
      <StyledItem active>
        <StorageIcon /> <p>Product</p>
      </StyledItem>
    </StyledList>
  );
};
export default Nav;
