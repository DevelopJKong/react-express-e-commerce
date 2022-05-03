import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutlined } from "@material-ui/icons";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, getProducts } from "../../redux/apiCalls";
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
  //const [data, setData] = useState(productRows);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  console.log(products);
  useEffect(() => {
    getProducts(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProduct(id, dispatch);
  };

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };
  const columns = [
    { field: "_id", headerName: "ID", width: 200 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <ListUser>
            <ListImg src={params.row.img} alt="#" />
            {params.row.title}
          </ListUser>
        );
      },
    },
    { field: "inStock", headerName: "Stock", width: 200 },

    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={`/product/${params.row._id}`}>
              <ListEdit>Edit</ListEdit>
            </Link>
            <DeleteBtn onClick={() => handleDelete(params.row._id)} />
          </>
        );
      },
    },
  ];
  return (
    <Container>
      <div style={{ height: 700, width: "100%" }}>
        <DataGrid
          rows={products}
          disableSelectionOnClick
          columns={columns}
          getRowId={(row) => row._id}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
    </Container>
  );
};

export default ProductList;
