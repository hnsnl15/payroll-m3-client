import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const StyledContainer = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
`;

const StyledSection1 = css`
  width: clamp(240px, 90%, 700px);
`;

export default function WelcomePage() {
  const navigate = useNavigate();

  return (
    <main className={StyledContainer}>
      <section className={StyledSection1}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box p={2}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Employee
                  </Typography>
                  <Typography variant="body2" component="p">
                    View Employee details here.
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{ mt: 1 }}
                    onClick={() => navigate("/form/employee")}
                  >
                    View
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box p={2}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="h2">
                    Attendance
                  </Typography>
                  <Typography variant="body2" component="p">
                    View Attendance here.
                  </Typography>
                  <Button variant="contained" sx={{ mt: 1 }}>
                    View
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        </Grid>
      </section>
    </main>
  );
}
