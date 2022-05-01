import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { productRows } from "../../dummyData";

const Container = styled.div`
  flex: 4;
`;

const ListUser = styled.div`
  display: flex;
  align-items: center;
`;

const ListImg = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
`;

const ListEdit = styled.button`
  border: none;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: #3bb077;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const DeleteBtn = styled(DeleteOutlined)`
  color: red;
  cursor: pointer;
`;

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ListUser>
            <ListImg src={params.row.img} alt="#" />
            {params.row.name}
          </ListUser>
        );
      },
    },
    { field: "stock", headerName: "Stock", width: 200 },
    {
      field: "status",
      headerName: "Staus",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row.id}`}>
              <ListEdit>Edit</ListEdit>
            </Link>
            <DeleteBtn onClick={() => handleDelete(params.row.id)} />
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={data}
          disableSelectionOnClick
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </Container>
  );
};

export default ProductList;
