import { IEmployee } from "..";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getAllEmployee } from "../api";
import { Link } from "react-router-dom";

export default function Employees() {
  const { data, isLoading } = useQuery("employees", getAllEmployee);
  return (
    <Grid container spacing={2} maxWidth="900px" justifyContent="center">
      {!isLoading &&
        data &&
        data.data.map((employee: IEmployee) => (
          <Grid item xs={10} sm={6} md={4} key={employee.employeeId}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {employee.employeeId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`${employee.firstName} ${employee.lastName}`}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  <Link to={`/employee/${employee.employeeId}`}>View</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
