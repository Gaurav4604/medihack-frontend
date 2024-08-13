"use client";
import { Chart } from "react-chartjs-2";
import { Container } from "@mui/material";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartData,
  ChartOptions,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

// Explicitly typing ChartData to allow 'bar' and 'line' datasets
const data: ChartData<"bar" | "line"> = {
  labels: ["January", "February", "March", "April", "May"],
  datasets: [
    {
      type: "bar",
      label: "Bar Dataset",
      data: [10, 20, 30, 40, 50],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
    {
      type: "line",
      label: "Line Dataset",
      data: [10, 20, 30, 40, 50],
      borderColor: "rgba(255, 99, 132, 1)",
      borderWidth: 2,
      fill: false,
    },
  ],
};

const options: ChartOptions<"bar" | "line"> = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export default function Predictions() {
  return (
    <Container>
      <Chart type="bar" data={data} options={options} />
    </Container>
  );
}
