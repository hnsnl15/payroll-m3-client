import AppLayout from "../components/Layout";
import Employees from "../components/Employees";
import InventoryTable from "../components/InventoryTable";
import { Typography } from "@mui/material";
import { StyledWhiteText } from "../css";

export default function WelcomePage() {
  return (
    <AppLayout>
      <section>
        <Typography
          variant="h4"
          mb="10px"
          className={StyledWhiteText}
          textAlign="center"
        >
          Employees
        </Typography>
        <Employees />
      </section>

      <section>
        <Typography
          variant="h4"
          mb="10px"
          className={StyledWhiteText}
          textAlign="center"
        >
          Inventory
        </Typography>
        <InventoryTable />
      </section>
    </AppLayout>
  );
}
