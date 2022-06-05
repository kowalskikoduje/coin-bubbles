import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ data }: { data: string }) {
  const chartData = {
    labels: ["1", "2", "3", "4", "5", "6", "7"],
    datasets: [
      {
        label: "Indicator",
        data,
        fill: false,
        borderColor: "#86198f",
      },
    ],
  };
  return <Line data={chartData} />;
}
