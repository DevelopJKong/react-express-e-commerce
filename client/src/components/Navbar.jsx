import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
import { Link } from "react-router-dom";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  display: flex;
  padding: 10px 20px;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
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
  ${mobile({ justifyContent: "center" })}
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
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
  ${mobile({ width: "50px" })}
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ flex: 2, fontSize: "10px" })}
`;

const BadgeStyle = styled(Badge)``;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "10px", marginLeft: "5px" })};
  ${BadgeStyle} {
    ${mobile({ display: "none" })};
  }
`;

const Navbar = () => {
  const logoText = "Cafe Small House";
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>
            <Link to={`/react-express-e-commerce`}>{logoText}</Link>
          </Logo>
        </Center>
        <Right>
          <MenuItem>
            <Link to={`/react-express-e-commerce/register`}>RESITER</Link>
          </MenuItem>
          <MenuItem>
            <Link to={`/react-express-e-commerce/login`}>SIGN IN</Link>
          </MenuItem>
          <MenuItem>
            <BadgeStyle badgeContent={quantity} color="primary">
              <Link to={`/react-express-e-commerce/cart`}>
                <ShoppingCartOutlined />
              </Link>
            </BadgeStyle>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
