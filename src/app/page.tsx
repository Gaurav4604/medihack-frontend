import Link from "next/link";
import { Container, Box, Button } from "@mui/material";

export default function Home() {
  return (
    <Container>
      <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
        <Button variant="contained" component={Link} href="/search">
          Search Medicines
        </Button>
        <Button variant="contained" component={Link} href="/form">
          Add Medicine Data
        </Button>
        <Button variant="contained" component={Link} href="/predictions">
          View Predictions
        </Button>
      </Box>
    </Container>
  );
}
