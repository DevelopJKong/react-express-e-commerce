import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import Chart from "../../components/chart/Chart";
import FeaturedInf from "../../components/featureInfo/FeatureInf";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import WidgetSm from "../../components/widgetSm/WidgetSm";
const Container = styled.div`
  flex: 4;
`;
const HomeWidget = styled.div`
  display: flex;
  margin: 20px;
`;

const Home = () => {
  const [userStats, setUserStats] = useState([]);

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const TOKEN = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).currentUser?.accessToken;
    const getStats = async () => {
      try {
        const baseUrl = "http://localhost:5050/api";
        const data = await (
          await fetch(`${baseUrl}/users/stats`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: `Bearer ${TOKEN}`,
            },
          })
        ).json();

        data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (error) {
        console.log(error);
      }
    };
    getStats();
  }, [MONTHS]);

  return (
    <Container>
      <FeaturedInf />
      <Chart
        data={userStats}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <HomeWidget>
        <WidgetSm />
        <WidgetLg />
      </HomeWidget>
    </Container>
  );
};

export default Home;
