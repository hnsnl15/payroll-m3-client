import { IEmployee } from "..";
import { Grid, Card, CardContent, Typography, Button } from "@mui/material";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteEmployeeById, getAllEmployee } from "../api";
import { Link } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BtnContainer } from "../css";
import { useNavigate } from "react-router-dom";

export default function Employees() {
  const { data, isLoading } = useQuery("employees", getAllEmployee);
  const deleteMutation = useMutation(deleteEmployeeById);
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleDelete = async (id: number) => {
    await deleteMutation.mutateAsync(id);
    await queryClient.invalidateQueries("employees");
  };

  const handleUpdate = (id: number) => {
    navigate(`/form/employee/${id}`);
  };

  return (
    <Grid container maxWidth="900px" justifyContent="center" gap={1}>
      {!isLoading &&
        data &&
        data.data.map((employee: IEmployee) => (
          <Grid
            item
            xs={10}
            sm={6}
            md={3}
            key={employee.employeeId}
            minWidth="240px"
          >
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
                <Button
                  variant="outlined"
                  sx={{ maxWidth: "25px;" }}
                  onClick={() => handleUpdate(employee.employeeId!)}
                >
                  <BsPencil />
                </Button>
              </div>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
