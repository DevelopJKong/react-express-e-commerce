import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  text-align: center;
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  margin-left: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  outline: none;
  border: none;
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "gray",fontSize: 16}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo><Link to={`/react-express-e-commerce`}>Cafe Small House</Link></Logo>
        </Center>
        <Right>
          <MenuItem><Link to={`/react-express-e-commerce/register`}>RESITER</Link></MenuItem>
          <MenuItem><Link to={`/react-express-e-commerce/login`}>SIGN IN</Link></MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <Link to={`/react-express-e-commerce/cart`}><ShoppingCartOutlined /></Link>
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
