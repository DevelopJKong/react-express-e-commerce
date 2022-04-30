import { Visibility } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
  margin-right: 20px;
`;

const Title = styled.span`
  font-size: 22px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin: 20px 0px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const User = styled.div`
    display:flex;
    display: flex;
    flex-direction: column;
`;

const UserName = styled.span`
    font-weight: 600;
`;

const UserTitle = styled.span`
    font-weight: 300;
`;

const Button = styled.button`
    display: flex;
    align-items: center;
    border: none;
    border-radius: 10px;
    padding: 7px 10px;
    background-color:#eeeef7;
    color: #555;
    cursor:pointer;
`;
const VisIcon = styled(Visibility)`
    font-size:16px;
    margin-right: 15px;
`;

const WidgetSm = () => {
  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        <ListItem>
          <Img src="https://source.unsplash.com/random/2" />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <VisIcon /> Display
          </Button>
        </ListItem>
        <ListItem>
          <Img src="https://source.unsplash.com/random/3" />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <VisIcon /> Display
          </Button>
        </ListItem>
        <ListItem>
          <Img src="https://source.unsplash.com/random/4" />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <VisIcon /> Display
          </Button>
        </ListItem>
        <ListItem>
          <Img src="https://source.unsplash.com/random/5" />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <VisIcon /> Display
          </Button>
        </ListItem>
        <ListItem>
          <Img src="https://source.unsplash.com/random/6" />
          <User>
            <UserName>Anna Keller</UserName>
            <UserTitle>Software Engineer</UserTitle>
          </User>
          <Button>
            <VisIcon /> Display
          </Button>
        </ListItem>
      </List>
    </Container>
  );
};

export default WidgetSm;
