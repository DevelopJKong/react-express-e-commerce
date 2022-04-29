import styled from "styled-components";
import Chart from "../../components/chart/Chart";
import FeaturedInf from "../../components/featureInfo/FeatureInf";
import { userData } from "../../dummyData";
const Container = styled.div`
  flex:4;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInf />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
    </Container>
  );
};

export default Home;
