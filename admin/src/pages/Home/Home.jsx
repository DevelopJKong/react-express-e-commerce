import styled from "styled-components";
import Chart from "../../components/chart/Chart";
import FeaturedInf from "../../components/featureInfo/FeatureInf";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import { userData } from "../../dummyData";
const Container = styled.div`
  flex:4;
`;
const HomeWidget = styled.div`
  display:flex;
  margin:20px;
`;

const Home = () => {
  return (
    <Container>
      <FeaturedInf />
      <Chart data={userData} title="User Analytics" grid dataKey="Active User"/> 
      <HomeWidget>
        <WidgetSm />
        <WidgetLg />
      </HomeWidget>
    </Container>
  );
};

export default Home;
