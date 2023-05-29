import {
  Button,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { AiFillDelete } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";
import { BtnContainer } from "../css";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { deleteStockById, getStocksPageable } from "../api";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function InventoryTable() {
  const [page, setPage] = useState(0);

  const { data, isLoading, isPreviousData } = useQuery({
    queryKey: ["paginatedStocks", page],
    queryFn: () => getStocksPageable(page, 5),
    keepPreviousData: true,
  });

  const hasMoreData = () => {
    if (data?.data.length === 0) {
      setPage((prev) => prev - 1);
      return true;
    }
    return false;
  };

  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const deleteMutation = useMutation(deleteStockById);

  const handleDelete = async (id: number) => {
    await deleteMutation.mutateAsync(id);
    await queryClient.invalidateQueries("paginatedStocks");
  };

  const handleUpdate = (id: number) => {
    navigate(`/form/inventory/${id}`);
  };

  return (
    <Box sx={{ display: "grid" }}>
      <Grid container maxWidth="900px" justifyContent="center" gap={1}>
        {data &&
          !isLoading &&
          data.data.map((stock) => (
            <Grid item xs={10} sm={6} md={3} key={stock.id} minWidth="240px">
              <Card sx={{ display: "grid" }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {stock.id}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {`${stock.brand}`}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {`${stock.engineNumber}`}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    <Link to={`/stock/${stock.id}`}>View</Link>
                  </Typography>
                </CardContent>
                <div className={BtnContainer}>
                  <Button
                    variant="outlined"
                    sx={{ maxWidth: "25px;" }}
                    onClick={() => handleDelete(stock.id!)}
                  >
                    <AiFillDelete />
                  </Button>
                  <Button
                    variant="outlined"
                    sx={{ maxWidth: "25px;" }}
                    onClick={() => handleUpdate(stock.id!)}
                  >
                    <BsPencil />
                  </Button>
                </div>
              </Card>
            </Grid>
          ))}
      </Grid>
      <Box
        sx={{ display: "flex", justifySelf: "center", gap: "30px", my: "20px" }}
      >
        <Button
          variant="contained"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
          disabled={page === 0}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          onClick={() => {
            if (!isPreviousData) setPage((prev) => prev + 1);
          }}
          disabled={hasMoreData()}
        >
          Next
        </Button>
      </Box>
    </Box>
  );
}
