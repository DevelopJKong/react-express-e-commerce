import { Publish } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";

const Container = styled.div`
  flex: 4;
  padding: 20px;
`;
const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h3``;

const AddButton = styled.button`
  width: 80px;
  border: none;
  padding: 5px;
  background-color: teal;
  color: white;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;

const Top = styled.div`
  display: flex;
`;

const TopLeft = styled.div`
  flex: 1;
`;

const TopRight = styled.div`
  flex: 1;
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const InfoTop = styled.div`
  display: flex;
  align-items: center;
`;

const InfoBottom = styled.div`
  margin-top: 10px;
`;

const InfoImg = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  margin-right: 10px;
`;

const Name = styled.span`
  font-weight: 600;
`;

const InfoItem = styled.div`
  width: 150px;
  display: flex;
  justify-content: space-between;
`;

const InfoValue = styled.span`
  font-weight: 300;
`;

const InfoKey = styled.span``;

const Bottom = styled.div`
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
`;

const Form = styled.form`
  display: flex;
  justify-content: space-between;
`;

const FormLeft = styled.div`
  display: flex;
  flex-direction: column;
  & > label {
    margin-bottom: 10px;
    color: gray;
  }
  & > input {
    margin-bottom: 10px;
    border: none;
    padding: 5px;
    border-bottom: 1px solid gray;
  }

  & > select {
    margin-bottom: 10px;
  }
`;

const FormRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Upload = styled.div`
  display: flex;
  align-items: center;
`;

const UploadImg = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  object-fit: cover;
  margin-right: 20px;
`;

const UpdateBtn = styled.button`
  border: none;
  padding: 5px;
  border-radius: 5px;
  background-color: darkblue;
  color: white;
  cursor: pointer;
`;

const Product = () => {
  return (
    <Container>
      <TitleContainer>
        <Title>Product</Title>
        <Link to={`/newproduct`}>
          <AddButton>Create</AddButton>
        </Link>
      </TitleContainer>
      <Top>
        <TopLeft>
          <Chart data={productData} dataKey="Sales" title="Sales Performance" />
        </TopLeft>
        <TopRight>
          <InfoTop>
            <InfoImg src="https://source.unsplash.com/random/20" />
            <Name>Apple Airpods</Name>
          </InfoTop>
          <InfoBottom>
            <InfoItem>
              <InfoValue>id:</InfoValue>
              <InfoKey>123</InfoKey>
            </InfoItem>
            <InfoItem>
              <InfoValue>sales:</InfoValue>
              <InfoKey>$123</InfoKey>
            </InfoItem>
            <InfoItem>
              <InfoValue>active:</InfoValue>
              <InfoKey>yes</InfoKey>
            </InfoItem>
            <InfoItem>
              <InfoValue>in stock:</InfoValue>
              <InfoKey>No</InfoKey>
            </InfoItem>
          </InfoBottom>
        </TopRight>
      </Top>
      <Bottom>
        <Form>
          <FormLeft>
            <label>Product Name</label>
            <input type="text" placeholder="Apple Airpod" />
            <label>In Stock</label>
            <select name="inStock" id="idStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="active">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </FormLeft>
          <FormRight>
            <Upload>
              <UploadImg src="https://source.unsplash.com/random/30" />
              <label htmlFor="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: "none" }} />
            </Upload>
            <UpdateBtn>Upload</UpdateBtn>
          </FormRight>
        </Form>
      </Bottom>
    </Container>
  );
};

export default Product;
