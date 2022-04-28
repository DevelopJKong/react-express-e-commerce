import styled from "styled-components";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
const TopbarContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: white;
  padding-top:5px;
  position:sticky;
  top:0;
  z-index:999;
`;
const TopbarWrapper = styled.div`
  height: 100%;
  padding: 0px 20px;
  display: flex;
  justify-content: space-between;
`;

const TopLeft = styled.div``;

const Logo = styled.span`
  font-weight: bold;
  font-size: 30px;
  color: darkblue;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
`;

const TopbarIconContainer = styled.div`
  position: relative;
  margin-right: 10px;
  cursor: pointer;
  color: #555;
`;

const TopIconBag = styled.span`
  position: absolute;
  width: 15px;
  height: 15px;
  top: 1px;
  right: -3px;
  background-color: red;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
`;

const TopAvatar = styled.img`
  width:50px;
  height:50px;
  border-radius:50%;

`;

const Topbar = () => {
  return (
    <TopbarContainer>
      <TopbarWrapper>
        <TopLeft>
          <Logo>Cafe Small House</Logo>
        </TopLeft>
        <TopRight>
          <TopbarIconContainer>
            <NotificationsNone />
            <TopIconBag>2</TopIconBag>
          </TopbarIconContainer>

          <TopbarIconContainer>
            <Language />
            <TopIconBag>2</TopIconBag>
          </TopbarIconContainer>

          <TopbarIconContainer>
            <Settings />
          </TopbarIconContainer>

          <TopAvatar src="https://source.unsplash.com/random/1" />
        </TopRight>
      </TopbarWrapper>
    </TopbarContainer>
  );
};

export default Topbar;
