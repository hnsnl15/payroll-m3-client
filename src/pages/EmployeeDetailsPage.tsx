import { css } from "@emotion/css";
import { Container, Grid, Typography, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getEmployeeById } from "../api";
import AttendanceTable from "../components/AttendanceByEmployeeId";

const styles = {
  root: css`
    margin-top: 100px;
  `,
  paper: css`
    padding: 16px;
  `,
};

export default function EmployeeDetailsPage() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    "employee-detail",
    async () => await getEmployeeById(parseInt(id!))
  );

  return (
    <Container className={styles.root}>
      <Grid container spacing={4}>
        {!isLoading && data && (
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <Typography variant="h4">Employee Details</Typography>
              <Typography variant="subtitle1">
                Username: {data.data.username}
              </Typography>
              <Typography variant="subtitle1">
                Last Name: {data.data.lastName}
              </Typography>
              <Typography variant="subtitle1">
                First Name: {data.data.firstName}
              </Typography>
              <Typography variant="subtitle1">
                Birthday: {data.data.birthday}
              </Typography>
              <Typography variant="subtitle1">
                Address: {data.data.address}
              </Typography>
              <Typography variant="subtitle1">
                Phone Number: {data.data.phoneNumber}
              </Typography>
              <Typography variant="subtitle1">
                SSS No: {data.data.sssNo}
              </Typography>
              <Typography variant="subtitle1">
                PhilHealth No: {data.data.philhealthNo}
              </Typography>
              <Typography variant="subtitle1">
                TIN No: {data.data.tinNo}
              </Typography>
              <Typography variant="subtitle1">
                Pag-IBIG No: {data.data.pagibigNo}
              </Typography>
              <Typography variant="subtitle1">
                Status: {data.data.status}
              </Typography>
              <Typography variant="subtitle1">
                Position: {data.data.position}
              </Typography>
              <Typography variant="subtitle1">
                Immediate Supervisor: {data.data.immediateSupervisor}
              </Typography>
              <Typography variant="subtitle1">
                Basic Salary: {data.data.basicSalary}
              </Typography>
              <Typography variant="subtitle1">
                Rice Subsidy: {data.data.riceSubsidy}
              </Typography>
              <Typography variant="subtitle1">
                Phone Allowance: {data.data.phoneAllowance}
              </Typography>
              <Typography variant="subtitle1">
                Clothing Allowance: {data.data.clothingAllowance}
              </Typography>
              <Typography variant="subtitle1">
                Gross Semi-Monthly Rate: {data.data.grossSemiMonthlyRate}
              </Typography>
              <Typography variant="subtitle1">
                Hourly Rate: {data.data.hourlyRate}
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>

      <AttendanceTable id={parseInt(id!)} />
    </Container>
  );
}
