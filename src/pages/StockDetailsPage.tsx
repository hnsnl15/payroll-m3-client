import { css } from "@emotion/css";
import { Container, Grid, Typography, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { getStockById } from "../api";

const styles = {
  root: css`
    margin-top: 100px;
  `,
  paper: css`
    padding: 16px;
  `,
};

export default function StockDetailsPage() {
  const { id } = useParams();
  const { data, isLoading } = useQuery(
    "stock",
    async () => await getStockById(parseInt(id!))
  );

  return (
    <Container className={styles.root}>
      <Grid container spacing={4}>
        {!isLoading && data && (
          <Grid item xs={12}>
            <Paper className={styles.paper}>
              <Typography variant="h4">Stock Details</Typography>
              <Typography variant="subtitle1">
                Username: {data.data.id}
              </Typography>
              <Typography variant="subtitle1">
                Last Name: {data.data.brand}
              </Typography>
              <Typography variant="subtitle1">
                First Name: {data.data.engineNumber}
              </Typography>
              <Typography variant="subtitle1">
                Birthday: {data.data.status}
              </Typography>
              <Typography variant="subtitle1">
                Address: {data.data.stockLabel}
              </Typography>
            </Paper>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}
