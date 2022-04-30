import styled from "styled-components";
import "./Sidebar.css";
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
import { Link } from "react-router-dom";

const SidebarContainer = styled.div`
  flex: 1;
  height: calc(100vh - 50px);
  background-color: rgb(251, , 251, 255);
  position: sticky;
  top: 50px;
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
  &:hover {
    background-color: rgb(228, 228, 250);
  }

  ${LineStyle},${Timeline},${TrendingUp} {
    margin-right: 5px;
    font-size: 20px !important;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const Sidebar = () => {
  const handleClick = (e) => {
    e.target.parentNode.classList.add("active");
    setTimeout(() => e.target.parentNode.classList.remove("active"), 4000);
  };
  return (
    <SidebarContainer>
      <Wrapper>
        <Menu>
          <Title>Dashboard</Title>
          <List>
            <ListItem className="active">
              <LineStyle />
              <Link onClick={handleClick} to={`/`}>
                Home
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <Timeline /> Analytics
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <TrendingUp /> Sales
              </Link>
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Quick Menu</Title>
          <List>
            <ListItem>
              <PermIdentity />
              <Link onClick={handleClick} to={`/users`}>
                Users
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <Storefront /> Products
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <AttachMoney /> Transactions
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <BarChart /> Reports
              </Link>
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Notifications</Title>
          <List>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <MailOutline /> Mail
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <DynamicFeed /> Feedback
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <ChatBubbleOutline /> Messages
              </Link>
            </ListItem>
          </List>
        </Menu>
        <Menu>
          <Title>Staff</Title>
          <List>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <WorkOutline /> Manage
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <Timeline /> Analytics
              </Link>
            </ListItem>
            <ListItem>
              <Link onClick={handleClick} to={`#`}>
                <Report /> Reports
              </Link>
            </ListItem>
          </List>
        </Menu>
      </Wrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
