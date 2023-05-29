import { IEmployee } from "..";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteEmployeeById, getAllEmployee } from "../api";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BtnContainer } from "../css";

export default function Employees() {
  const { data, isLoading } = useQuery("employees", getAllEmployee);
  const deleteMutation = useMutation(deleteEmployeeById);
  const queryClient = useQueryClient();

  const handleDelete = async (id: number) => {
    await deleteMutation.mutateAsync(id);
    await queryClient.invalidateQueries("employees");
  };

  const handleUpdate = () => {};

  return (
    <Grid container spacing={2} maxWidth="900px" justifyContent="center">
      {!isLoading &&
        data &&
        data.data.map((employee: IEmployee) => (
          <Grid item xs={10} sm={6} md={4} key={employee.employeeId}>
            <Card sx={{ display: "grid" }}>
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
              <div className={BtnContainer}>
                <Button
                  variant="outlined"
                  sx={{ maxWidth: "25px;" }}
                  onClick={() => handleDelete(employee.employeeId!)}
                >
                  <AiFillDelete />
                </Button>
                <Button variant="outlined" sx={{ maxWidth: "25px;" }}>
                  <BsPencil />
                </Button>
              </div>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
