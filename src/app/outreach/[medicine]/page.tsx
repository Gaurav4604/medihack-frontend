"use client";
import React from "react";
import {
  Container,
  Box,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  ThemeProvider,
  createTheme,
} from "@mui/material";

interface Inventory {
  hospitalName: string;
  phoneNumber: string;
  distance: string;
  medicine: string;
  quantity: number;
}

const mockInventory: Inventory[] = [
  {
    hospitalName: "Hopewell General",
    phoneNumber: "123-456-7890",
    distance: "5 miles",
    medicine: "Ibuprofen",
    quantity: 15,
  },
  {
    hospitalName: "Sunrise Health Center",
    phoneNumber: "234-567-8901",
    distance: "10 miles",
    medicine: "Ibuprofen",
    quantity: 8,
  },
  {
    hospitalName: "Crescent Valley Hospital",
    phoneNumber: "345-678-9012",
    distance: "20 miles",
    medicine: "Ibuprofen",
    quantity: 3,
  },
  {
    hospitalName: "Hopewell General",
    phoneNumber: "123-456-7890",
    distance: "5 miles",
    medicine: "Paracetamol",
    quantity: 20,
  },
  {
    hospitalName: "Sunrise Health Center",
    phoneNumber: "234-567-8901",
    distance: "10 miles",
    medicine: "Paracetamol",
    quantity: 12,
  },
  {
    hospitalName: "Crescent Valley Hospital",
    phoneNumber: "345-678-9012",
    distance: "20 miles",
    medicine: "Paracetamol",
    quantity: 7,
  },
  {
    hospitalName: "Hopewell General",
    phoneNumber: "123-456-7890",
    distance: "5 miles",
    medicine: "Amoxicillin",
    quantity: 18,
  },
  {
    hospitalName: "Sunrise Health Center",
    phoneNumber: "234-567-8901",
    distance: "10 miles",
    medicine: "Amoxicillin",
    quantity: 5,
  },
  {
    hospitalName: "Crescent Valley Hospital",
    phoneNumber: "345-678-9012",
    distance: "20 miles",
    medicine: "Amoxicillin",
    quantity: 9,
  },
];

export default function Outreach({ params }: { params: { medicine: string } }) {
  const medicineName = params.medicine;

  const filteredData = mockInventory.filter(
    (item) => item.medicine.toLowerCase() === medicineName?.toLowerCase()
  );

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          {medicineName} Stock in Hospitals
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Hospital Name</TableCell>
              <TableCell>Phone Number</TableCell>
              <TableCell>Distance from You</TableCell>
              <TableCell>Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.hospitalName}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  <TableCell>{row.distance}</TableCell>
                  <TableCell>{row.quantity}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={4}>
                  No stock available for {medicineName}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Box>
    </Container>
  );
}
