import styled from "styled-components";

const Container = styled.div`
  flex: 4;
`;

const Title = styled.h3``;

const Form = styled.form`
  margin-top: 10px;
`;

const Item = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;

  & > label {
    color: gray;
    font-weight: 600;
    margin-bottom: 10px;
  }

  & > input {
    padding: 10px;
  }

  & > select {
    padding: 10px;
  }
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 7px 10px;
  border: none;
  border-radius: 10px;
  background-color: darkblue;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;

const NewProduct = () => {
  return (
    <Container>
      <Title>New Product</Title>
      <Form>
        <Item>
          <label>Image</label>
          <input type="file" id="file" />
        </Item>
        <Item>
          <label>Name</label>
          <input type="text" placeholder="Apple Airpods" />
        </Item>
        <Item>
          <label>Stock</label>
          <input type="text" placeholder="123" />
        </Item>
        <Item>
          <label>Active</label>
          <select name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </Item>
        <Button>Create</Button>
      </Form>
    </Container>
  );
};

export default NewProduct;
