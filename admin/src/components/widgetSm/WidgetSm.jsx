import { Visibility } from "@material-ui/icons";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px;
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const User = styled.div`
  display: flex;
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
  background-color: #eeeef7;
  color: #555;
  cursor: pointer;
`;
const VisIcon = styled(Visibility)`
  font-size: 16px;
  margin-right: 15px;
`;

const WidgetSm = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const TOKEN = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).currentUser?.accessToken;

    const getUsers = async () => {
      const baseUrl = "http://localhost:5050/api";
      const data = await (
        await fetch(`${baseUrl}/users/?new=true`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${TOKEN}`,
          },
        })
      ).json();
      setUsers(data);
    };
    getUsers();
  }, []);

  return (
    <Container>
      <Title>New Join Members</Title>
      <List>
        {users.map((user) => (
          <ListItem key={user._id}>
            <Img
              src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"
              }
            />
            <User>
              <UserName>{user.username}</UserName>
              <UserTitle>User</UserTitle>
            </User>
            <Button>
              <VisIcon /> Display
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default WidgetSm;
