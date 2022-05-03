import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Featured = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Item = styled.div`
  flex: 1;
  margin: 0px 20px;
  padding: 30px;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Title = styled.span`
  font-size: 20px;
`;
const MoneyContainer = styled.div`
  margin: 10px 0px;
  display: flex;
`;

const Money = styled.div`
  font-size: 30px;
  font-weight: 600;
`;

const MoneyRate = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const ArrowDownIcon = styled(ArrowDownward)`
  font-size: 14px;
  margin-left: 5px;
  color: green;
`;

const ArrowUpIcon = styled(ArrowUpward)`
  color: red;
`;

const Sub = styled.span`
  font-size: 15px;
  color: gray;
`;

const FeatureInf = () => {
  const [income, setIncome] = useState([]);
  const [perc, setPerc] = useState(0);

  useEffect(() => {
    const TOKEN = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).currentUser?.accessToken;
    const getIncome = async () => {
      try {
        const baseUrl = "http://localhost:5050/api";
        const data = await (
          await fetch(`${baseUrl}/orders/income`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              token: `Bearer ${TOKEN}`,
            },
          })
        ).json();
        setIncome(data ?? "loading...");
        setPerc((data[1].total * 100) / data[0].total - 100);
      } catch (error) {
        console.log(error);
      }
    };
    getIncome();
  }, []);

  return (
    <Featured>
      <Item>
        <Title>Revane</Title>
        <MoneyContainer>
          <Money>${income[0]?.total}</Money>
          <MoneyRate>
            %{Math.floor(perc)} {perc < 0 ? <ArrowDownIcon /> : <ArrowUpIcon />}
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>

      <Item>
        <Title>Sales</Title>
        <MoneyContainer>
          <Money>$2,415</Money>
          <MoneyRate>
            -11.4
            <ArrowDownIcon />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>

      <Item>
        <Title>Cost</Title>
        <MoneyContainer>
          <Money>$2,415</Money>
          <MoneyRate>
            +2.4
            <ArrowUpIcon />
          </MoneyRate>
        </MoneyContainer>
        <Sub>Compared to last month</Sub>
      </Item>
    </Featured>
  );
};

export default FeatureInf;
