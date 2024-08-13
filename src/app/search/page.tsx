"use client";
import { useState } from "react";
import { TextField, Container, Box } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

interface Medicine {
  id: number;
  name: string;
  expiry: string;
  aisle: string;
}

const columns: GridColDef[] = [
  { field: "name", headerName: "Medicine Name", width: 200 },
  { field: "expiry", headerName: "Expiry Date", width: 200 },
  { field: "aisle", headerName: "Aisle Number", width: 200 },
];

const mockData: Medicine[] = [
  { id: 1, name: "Paracetamol", expiry: "2024-12-01", aisle: "A12" },
  { id: 2, name: "Ibuprofen", expiry: "2023-09-15", aisle: "B22" },
  // Add more mock data as needed
];

export default function Search() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [data, setData] = useState<Medicine[]>(mockData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredData = mockData.filter((item) =>
      item.name.toLowerCase().includes(value)
    );
    setData(filteredData);
  };

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
        <DataGrid rows={data} columns={columns} />
      </Box>
    </Container>
  );
}
