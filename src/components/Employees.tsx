import { IEmployee } from "..";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { useQuery } from "react-query";
import { getAllEmployee } from "../api";
import { Link } from "react-router-dom";

export default function Employees() {
  const { data, isLoading } = useQuery("employees", getAllEmployee);
  console.log(data);
  return (
    <Grid container spacing={2} maxWidth="900px" justifyContent="center">
      {!isLoading &&
        data &&
        data.data.map((employees: IEmployee) => (
          <Grid item xs={10} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div">
                  {employees.employeeId}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {`${employees.firstName} ${employees.lastName}`}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  <Link to="/">View</Link>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
