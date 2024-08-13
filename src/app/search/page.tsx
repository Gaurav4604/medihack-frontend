"use client";
import { useState } from "react";
import {
  TextField,
  Container,
  Box,
  Button,
  Snackbar,
  Alert,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useRouter } from "next/router";
import Link from "next/link";

interface Medicine {
  id: number;
  name: string;
  brand: string;
  expiry: string;
  aisle: string;
  quantity: number;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Medicine Name", width: 200 },
  { field: "brand", headerName: "Brand", width: 200 },
  { field: "expiry", headerName: "Expiry Date", width: 200 },
  { field: "aisle", headerName: "Aisle Number", width: 200 },
  { field: "quantity", headerName: "Quantity", width: 100 },
  {
    field: "decreaseQuantity",
    headerName: "Decrease Quantity",
    width: 200,
    renderCell: (params) => (
      <Button
        variant="contained"
        onClick={() =>
          (params.api.getRowNode(params.id) as any).setDataValue(
            "decrease",
            true
          )
        }
      >
        Decrease
      </Button>
    ),
  },
];

const mockData: Medicine[] = [
  {
    id: 1,
    name: "Paracetamol",
    brand: "Brand A",
    expiry: "2024-12-01",
    aisle: "A12",
    quantity: 20,
  },
  {
    id: 2,
    name: "Paracetamol",
    brand: "Brand B",
    expiry: "2024-12-01",
    aisle: "A12",
    quantity: 20,
  },
  {
    id: 3,
    name: "Paracetamol",
    brand: "Brand C",
    expiry: "2024-12-01",
    aisle: "A12",
    quantity: 20,
  },
  {
    id: 4,
    name: "Ibuprofen",
    brand: "Brand D",
    expiry: "2023-09-15",
    aisle: "B22",
    quantity: 20,
  },
  // Add more mock data as needed
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<Medicine[]>(mockData);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [lowStockMedicine, setLowStockMedicine] = useState<string>("");
  const threshold = 10;

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredData = mockData.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setData(filteredData);
  };

  const handleDecreaseQuantity = (id: number) => {
    const updatedData = data.map((item) => {
      if (item.id === id) {
        const newQuantity = item.quantity - 1;
        if (newQuantity < threshold && newQuantity >= 0) {
          setLowStockMedicine(item.name);
          setSnackbarOpen(true);
        }
        return { ...item, quantity: newQuantity > 0 ? newQuantity : 0 };
      }
      return item;
    });
    setData(updatedData);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const columnsWithHandlers = columns.map((col) =>
    col.field === "decreaseQuantity"
      ? {
          ...col,
          renderCell: (params: any) => (
            <Button
              variant="contained"
              onClick={() => handleDecreaseQuantity(params.row.id)}
            >
              Decrease
            </Button>
          ),
        }
      : col
  );

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <TextField
          label="Search Medicine"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
        />
      </Box>
      <Box sx={{ mt: 4, height: 400 }}>
        <DataGrid rows={data} columns={columnsWithHandlers} />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
      >
        <Link href={`/outreach/${lowStockMedicine}`}>
          <Alert onClose={handleCloseSnackbar} severity="warning">
            Low stock: {lowStockMedicine}, emergency order?
          </Alert>
        </Link>
      </Snackbar>
    </Container>
  );
}
