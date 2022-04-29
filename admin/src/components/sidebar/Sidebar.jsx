import styled from "styled-components";
import {
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  MailOutline,
  PermIdentity,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251,,251,255);
  position: sticky;
  top:50px;
`;
const Wrapper = styled.div`
  padding: 20px;
  color: #555;
`;

const Menu = styled.div`
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 13px;
  color: rgb(187, 186, 186);
`;

const List = styled.ul`
  list-style: none;
  padding: 5px;
`;

const ListItem = styled.li`
  padding: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${(props) => props.bgColor};
  &:hover {
    background-color: rgb(228, 228, 250);
  }

  ${LineStyle},${Timeline},${TrendingUp} {
    margin-right: 5px;
    font-size: 20px !important;
  }
`;

const Sidebar = () => {
  const bgColor = "rgb(228, 228, 250)";

  return (
    <SidebarContainer>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <ListItem bgColor={bgColor}>
              <LineStyle /> Home
            </ListItem>
            <ListItem>
              <Timeline /> Analytics
            </ListItem>
            <ListItem>
              <TrendingUp /> Sales
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <ListItem>
              <PermIdentity /> Users
            </ListItem>
            <ListItem>
              <Storefront /> Products
            </ListItem>
            <ListItem>
              <AttachMoney /> Transactions
            </ListItem>
            <ListItem>
              <BarChart /> Reports
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <MailOutline /> Mail
            </ListItem>
            <ListItem>
              <DynamicFeed /> Feedback
            </ListItem>
            <ListItem>
              <ChatBubbleOutline /> Messages
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem>
              <WorkOutline /> Manage
            </ListItem>
            <ListItem>
              <Timeline /> Analytics
            </ListItem>
            <ListItem>
              <Report /> Reports
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
