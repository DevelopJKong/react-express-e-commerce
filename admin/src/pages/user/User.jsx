import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  MailOutlined,
  PermIdentity,
  PhoneAndroid,
} from "@material-ui/icons";
import "./user.css";
import styled from "styled-components";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Title = styled.h3``;

const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

const UserContainer = styled.div`
  display: flex;
  margin-top: 20px;
`;

const UserShow = styled.div`
  flex: 1;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const ShowTop = styled.div`
  display: flex;
  align-items: center;
`;

const ShowTopTitle = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ShowImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`;

const ShowUserName = styled.span`
  font-weight: 600;
`;

const ShowUserTitle = styled.span`
  font-weight: 300;
`;

const ShowTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: rgb(175, 170, 170);
`;

const ShowBottom = styled.div`
  margin-top: 20px;
`;

const ShowInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0px;
  color: #444;
`;

const ShowInfoTitle = styled.span`
  margin-left: 10px;
`;

const UserUpdate = styled.div`
  flex: 2;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  margin-left: 20px;
`;

const userShowIcon = {
  fontSize: "16px",
};

const User = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Edit User</Title>
        <AddButton>Create</AddButton>
      </TitleContainer>

      <UserContainer>
        <UserShow>
          <ShowTop>
            <ShowImg src="https://source.unsplash.com/random/12" alt="#" />
            <ShowTopTitle>
              <ShowUserName>Anna Becker</ShowUserName>
              <ShowUserTitle>Soft Engineer</ShowUserTitle>
            </ShowTopTitle>
          </ShowTop>
          <ShowBottom>
            <ShowTitle>Account Details</ShowTitle>
            <ShowInfo>
              <PermIdentity style={userShowIcon} />
              <ShowInfoTitle>annabeck99</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <CalendarToday style={userShowIcon} />
              <ShowInfoTitle>10.12.1999</ShowInfoTitle>
            </ShowInfo>
            <ShowTitle>Contact Details Details</ShowTitle>
            <ShowInfo>
              <PhoneAndroid style={userShowIcon} />
              <ShowInfoTitle>+1 123 456 67</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <MailOutline style={userShowIcon} />
              <ShowInfoTitle>annabeck99@gmail.com</ShowInfoTitle>
            </ShowInfo>
            <ShowInfo>
              <LocationSearching style={userShowIcon} />
              <ShowInfoTitle>New York | USA</ShowInfoTitle>
            </ShowInfo>
          </ShowBottom>
        </UserShow>
        <UserUpdate></UserUpdate>
      </UserContainer>
    </Container>
  );
};

export default User;
