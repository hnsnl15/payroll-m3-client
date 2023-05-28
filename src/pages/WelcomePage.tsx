import AppLayout from "../components/Layout";
import Employees from "../components/Employees";
import { Typography } from "@mui/material";
import { StyledWhiteText } from "../css";

export default function WelcomePage() {
  return (
    <AppLayout>
      <section>
        <Typography variant="h4" mb="10px" className={StyledWhiteText}>
          Employees
        </Typography>
        <Employees />
      </section>
    </AppLayout>
  );
}
