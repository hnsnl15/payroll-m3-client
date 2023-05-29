import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Container,
  Box,
} from "@mui/material";
import { css } from "@emotion/css";
import * as yup from "yup";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getStockById, postStock, updateStock } from "../api";
import { useNavigate, useParams } from "react-router-dom";
import { IInventory } from "..";
import { useState } from "react";
import { StyledErrorMessage, StyledSuccessMessage } from "../css";

const StyledField = css`
  width: clamp(200px, 100vw, 210px);
`;

const StyledFormContainer = css`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 1rem;
  margin-top: 70px;
`;

const initialValues: IInventory = {
  dateEntered: "1999-01-01",
  stockLabel: "",
  brand: "",
  engineNumber: "",
  status: "",
};

// Define the validation schema using Yup
const validationSchema = yup.object().shape({
  dateEntered: yup.string().required("Date entered is required"),
  stockLabel: yup.string().required("Stock label is required"),
  brand: yup.string().required("Brand is required"),
  engineNumber: yup.string().required("Engine number is required"),
  status: yup.string().required("Status is required"),
});

export default function StockFormPage() {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data } = useQuery(
    "stock",
    async () => await getStockById(parseInt(id!))
  );

  const navigate = useNavigate();

  const [success, setSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  if (data && location.pathname !== "/form/inventory") {
    initialValues.brand = data.data.brand;
    initialValues.dateEntered = data.data.dateEntered;
    initialValues.stockLabel = data.data.stockLabel;
    initialValues.engineNumber = data.data.engineNumber;
    initialValues.status = data.data.status;
  }

  const handleSubmit = async (
    values: IInventory,
    { resetForm }: FormikHelpers<IInventory>
  ) => {
    try {
      if (id && location.pathname !== "/form/inventory") {
        const data = {
          id: parseInt(id),
          values,
        };
        await updateMutation.mutateAsync(data);
        await queryClient.invalidateQueries("paginatedStocks");
        resetForm();
        navigate("/");
      } else {
        await postMutation.mutateAsync(values);
        resetForm();
        setSuccess(true);
      }
      setIsError(false);
    } catch {
      setIsError(true);
    }
  };

  const updateMutation = useMutation(
    async (data: { id: number; values: IInventory }) =>
      await updateStock(data.id, data.values)
  );

  const postMutation = useMutation(
    async (values: IInventory) => await postStock(values)
  );

  return (
    <Container sx={{ bgcolor: "white" }}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form className={StyledFormContainer}>
          <h1 style={{ textAlign: "center" }}>Create Inventory</h1>
          {isError && (
            <p className={StyledErrorMessage}>
              Error occurred while submitting the form to the server.
            </p>
          )}
          {success && (
            <p className={StyledSuccessMessage}>Created successfully!</p>
          )}
          {id && data && (
            <Box>
              <Field
                as={TextField}
                name="id"
                label="Stock ID"
                value={id}
                className={StyledField}
                InputProps={{ readOnly: true }}
              />
            </Box>
          )}
          <Box>
            <Field
              as={TextField}
              type="date"
              name="dateEntered"
              className={StyledField}
              helperText={<ErrorMessage name="dateEntered" />}
            />
          </Box>
          <Box>
            <FormControl>
              <InputLabel id="stock-label">Stock Label</InputLabel>
              <Field
                as={Select}
                name="stockLabel"
                labelId="stock-label"
                className={StyledField}
                helperText={<ErrorMessage name="stockLabel" />}
              >
                <MenuItem value="" disabled>
                  Select Status
                </MenuItem>
                <MenuItem value="Old">Old</MenuItem>
                <MenuItem value="New">New</MenuItem>
              </Field>
            </FormControl>
          </Box>
          <Box>
            <Field
              as={TextField}
              name="brand"
              label="Brand"
              className={StyledField}
              helperText={<ErrorMessage name="brand" />}
            />
          </Box>
          <Box>
            <Field
              as={TextField}
              name="engineNumber"
              label="Engine Number"
              className={StyledField}
              helperText={<ErrorMessage name="engineNumber" />}
            />
          </Box>
          <Box>
            <FormControl>
              <InputLabel id="status-label">Status</InputLabel>
              <Field
                as={Select}
                name="status"
                labelId="status-label"
                className={StyledField}
                helperText={<ErrorMessage name="status" />}
              >
                <MenuItem value="" disabled>
                  Select Status
                </MenuItem>
                <MenuItem value="On-hand">On Hand</MenuItem>
                <MenuItem value="Sold">Sold</MenuItem>
              </Field>
            </FormControl>
          </Box>
          <Box>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
        </Form>
      </Formik>
    </Container>
  );
}
