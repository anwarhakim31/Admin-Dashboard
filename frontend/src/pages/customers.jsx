import React from "react";
import { Box, useTheme } from "@mui/system";
import { useGetCustomersQuery } from "../redux/slices/apiSlice";
import HeaderElement from "../components/elements/Header";
import { DataGrid } from "@mui/x-data-grid";

const CustomersPage = () => {
  const theme = useTheme();
  const { data, isLoading } = useGetCustomersQuery();

  const columns = [
    {
      field: "_id",
      headerName: "ID",
      flex: 1,
    },
    {
      field: "name",
      headerName: "Name",
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "phoneNumber",
      headerName: "Phone Number",
      flex: 0.5,
      renderCell: (params) => {
        return params.value.replace(/^(\d{3})(\d{3})(\d{4})/, "($1)$2-$3");
      },
    },
    {
      field: "country",
      headerName: "Country",
      flex: 0.4,
    },
    {
      field: "occupation",
      headerName: "Occupation",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 0.5,
    },
  ];

  return (
    <Box m={"1.5rem 2.5rem"} overflow={"hidden"}>
      <HeaderElement title={"CUSTOMER"} subtitle={"List of Customers"} />
      <Box mt={3} sx={{ height: "70vh" }} className="custom-scrollbar">
        <DataGrid
          loading={isLoading || !data}
          rows={data || []}
          pageSize={25}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 25 },
            },
          }}
          getRowId={(row) => row._id}
        />
      </Box>
    </Box>
  );
};

export default CustomersPage;
