import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 22px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 20px;
`;

const Tr = styled.tr``;

const Th = styled.th`
  text-align: left;
`;

const Td = styled.td`
  display: ${(props) => props.user && "flex"};
  align-items: ${(props) => props.user && "center"};
  font-weight: ${(props) => {
    if (props.user) {
      return "600";
    } else if (props.date || props.amount) {
      return "300";
    }
  }};
`;

const Img = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const Name = styled.span``;

const Button = styled.button`
  padding: 5px 7px;
  border: none;
  border-radius: 10px;
  background-color: ${(props) => {
    if (props.type === "Approved") {
      return "#e5faf2";
    } else if (props.type === "Declined") {
      return "#fff0f1";
    } else if (props.type === "Pending") {
      return "#ebf1fe";
    }
  }};

  color: ${(props) => {
    if (props.type === "Approved") {
      return "#3bb077";
    } else if (props.type === "Declined") {
      return "#d95087";
    } else if (props.type === "Pending") {
      return "#2a7ade";
    }
  }};
`;

const WidgetLg = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const TOKEN = JSON.parse(
      JSON.parse(localStorage.getItem("persist:root")).user
    ).currentUser?.accessToken;

    const getOrders = async () => {
      const baseUrl = "http://localhost:5050/api";
      const data = await (
        await fetch(`${baseUrl}/orders`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: `Bearer ${TOKEN}`,
          },
        })
      ).json();
      setOrders(data);
    };
    getOrders();
  }, []);

  return (
    <Container>
      <Title>Lastest transactions</Title>
      <Table>
        <Tr>
          <Th>Customer</Th>
          <Th>Date</Th>
          <Th>Amount</Th>
          <Th>Status</Th>
        </Tr>
        {orders.map((order) => (
          <Tr key={order._id}>
            <Td user>
              <Img src="https://source.unsplash.com/random/7" />
              <Name>{order.userId}</Name>
            </Td>
            <Td date>{order.createdAt.slice(0,10)}</Td>
            <Td amount>${order.amount}</Td>
            <Td status>
              <Button type="Approved">{order.status}</Button>
            </Td>
          </Tr>
        ))}
      </Table>
    </Container>
  );
};

export default WidgetLg;
