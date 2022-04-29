import styled from "styled-components";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/topbar/Topbar";

const Container = styled.div`
    display:flex;
`;

const Others = styled.div`
    flex:4;
`;


const Home = () => {
  return (
    <>
      <Topbar />
      <Container>
          <Sidebar />
          <Others>other pages</Others>
      </Container>
    </>
  );
};

export default Home;
