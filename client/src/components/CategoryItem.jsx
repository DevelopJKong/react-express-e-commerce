import { Link } from "react-router-dom";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position:relative;
  overflow:hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height:"30vh", objectPosition:"0 30%"})}
`;

const Info = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    top:0;
    left:0;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`;

const Title = styled.h1`
    color:white;
    margin-bottom:20px;
    font-size:40px;
`;

const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:gray;
    cursor:pointer;
    font-weight:bold;
    
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Link to={`/react-express-e-commerce/products/${item.cat}`}>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>

  );
};

export default CategoryItem;
