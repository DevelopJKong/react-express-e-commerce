import styled from "styled-components";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlined } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
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

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
      setData(data.filter(item => item.id !== id))
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <ListUser>
            <ListImg src={params.row.avatar} alt="#" />
            {params.row.username}
          </ListUser>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "status",
      headerName: "Staus",
      width: 120,
    },
    {
      field: "transaction",
      headerName: "Transction Volume",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/user/${params.row.id}`}>
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
          pageSize={8}
          rowsPerPageOptions={[8]}
          checkboxSelection
        />
      </div>
    </Container>
  );
};

export default UserList;
