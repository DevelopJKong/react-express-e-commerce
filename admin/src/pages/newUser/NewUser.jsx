import styled from "styled-components";

const Container = styled.div`
  flex: 4;
`;

const Title = styled.h3``;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-right: 20px;
  & > label {
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 600;
    color: rgb(151, 150, 150);
  }
  & > input {
    height: 20px;
    padding: 10px;
    border: 1px solid gray;
    border-radius: 5px;
  }
`;

const Gender = styled.div`
  & > input {
    margin-top: 15px;
  }
  & > label {
    margin: 10px;
    font-size: 18px;
    color: #555;
  }
`;

const Select = styled.select`
  height: 40px;
  border-radius: 5px;
`;

const Btn = styled.button`
  width: 200px;
  border: none;
  background-color: darkblue;
  color: white;
  padding: 7px 10px;
  font-weight: 600;
  border-radius: 10px;
  margin-top: 30px;
  cursor: pointer;
`;

const NewUser = () => {
  return (
    <Container>
      <Title>New User</Title>
      <Form>
        <Item>
          <label>Username</label>
          <input type="text" placeholder="john" />
        </Item>
        <Item>
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </Item>
        <Item>
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </Item>
        <Item>
          <label>Password</label>
          <input type="password" placeholder="password" />
        </Item>
        <Item>
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </Item>
        <Item>
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </Item>
        <Item>
          <label>Gender</label>
          <Gender>
            <input type="radio" name="gender" id="male" value="male" />
            <label htmlFor="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label htmlFor="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label htmlFor="Other">Other</label>
          </Gender>
        </Item>
        <Item>
          <label>Active</label>
          <Select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </Select>
        </Item>
      </Form>
        <Btn>Create</Btn>
    </Container>
  );
};

export default NewUser;
