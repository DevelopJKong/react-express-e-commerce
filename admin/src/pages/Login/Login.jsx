import { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { login } from "../../redux/apiCalls";
const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

`;


const Input = styled.input`
  width: 150px;
  padding: 10px;
  margin-bottom: 20px;
`;

const Btn = styled.button`
  padding: 10px;
  width: 100px;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <Container>
        <Input
          type="text"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Btn onClick={handleClick}>Login</Btn>
    </Container>
  );
};

export default Login;
