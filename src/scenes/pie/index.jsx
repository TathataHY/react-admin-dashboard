import { Box } from "@mui/material";
import { Header } from "../../components/header";
import { PieChart } from "../../components/pie-chart";

export default function Pie() {
  return (
    <Box m="20px">
      <Header title="PIE CHART" subtitle="Simple Pie Chart" />
      <Box height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
}
