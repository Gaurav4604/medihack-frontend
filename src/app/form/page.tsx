import { Container, TextField, Button, Box } from "@mui/material";

export default function Form() {
  return (
    <Container>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          mt: 4,
          maxWidth: 400,
          mx: "auto",
        }}
      >
        <TextField label="Drug Name" variant="outlined" fullWidth />
        <TextField
          label="Expiry Date"
          variant="outlined"
          fullWidth
          type="date"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Quantity"
          variant="outlined"
          fullWidth
          type="number"
        />
        <TextField label="Aisle No." variant="outlined" fullWidth />
        <Button variant="contained" component="label">
          Upload QR Code Image
          <input hidden accept="image/*" multiple type="file" />
        </Button>
      </Box>
    </Container>
  );
}
