import styled from "styled-components";
import FeaturedInf from "../components/featureInfo/FeatureInf";
const Container = styled.div`
  flex:4;
`;


const Home = () => {
  return (
    <Container>
      <FeaturedInf />
    </Container>
  );
};

export default Home;
