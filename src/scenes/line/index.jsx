import { Box } from "@mui/material";
import { Header } from "../../components/header";
import { LineChart } from "../../components/line-chart";

export default function Line() {
  return (
    <Box m="20px">
      <Header title="LINE CHART" subtitle="Simple Line Chart" />
      <Box height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
}
