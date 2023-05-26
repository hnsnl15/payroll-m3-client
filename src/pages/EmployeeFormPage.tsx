import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { IEmployee } from "..";
import * as Yup from "yup";
import {
  Button,
  Grid,
  TextField,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { css } from "@emotion/css";
import { postEmployee } from "../api";
import { useState } from "react";

const initialValues: IEmployee = {
  lastName: "",
  firstName: "",
  birthday: "",
  address: "",
  phoneNumber: "",
  sssNo: "",
  philhealthNo: "",
  tinNo: "",
  pagibigNo: "",
  status: "",
  position: "",
  immediateSupervisor: "",
  basicSalary: 0,
  riceSubsidy: 0,
  phoneAllowance: 0,
  clothingAllowance: 0,
  grossSemiMonthlyRate: 0,
  hourlyRate: 0,
};

const employeeSchema = Yup.object({
  lastName: Yup.string().required("Last name is required"),
  firstName: Yup.string().required("First name is required"),
  birthday: Yup.string().required("Birthday is required"),
  address: Yup.string().required("Address is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  sssNo: Yup.string().required("SSS number is required"),
  philhealthNo: Yup.string().required("PhilHealth number is required"),
  tinNo: Yup.string().required("TIN number is required"),
  pagibigNo: Yup.string().required("Pag-IBIG number is required"),
  status: Yup.string().required("Status is required"),
  position: Yup.string().required("Position is required"),
  immediateSupervisor: Yup.string().required(
    "Immediate supervisor is required"
  ),
  basicSalary: Yup.number().required("Basic salary is required"),
  riceSubsidy: Yup.number().required("Rice subsidy is required"),
  phoneAllowance: Yup.number().required("Phone allowance is required"),
  clothingAllowance: Yup.number().required("Clothing allowance is required"),
  grossSemiMonthlyRate: Yup.number().required(
    "Gross semi-monthly rate is required"
  ),
  hourlyRate: Yup.number().required("Hourly rate is required"),
});

const StyledGridContainer = css`
  background: #fff;
  max-width: 80vw;
  margin: auto;
  padding: 0.5rem;
`;

const StyledGridItemContainer = css`
  display: grid;
  height: 120px;
  align-items: center;
`;

const StyledFormContainer = css`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  gap: 30px;
  height: max-content;
  width: max-content;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const StyledErrorMessage = css`
  color: red;
`;

export default function EmployeeFormPage() {
  const theme = useTheme();
  const isPhoneSize = useMediaQuery(theme.breakpoints.down("sm"));
  const startOrCenter = isPhoneSize ? "center" : "flex-start";
  const [error, setError] = useState(false);

  const handleSubmit = async (
    values: IEmployee,
    { resetForm }: FormikHelpers<IEmployee>
  ) => {
    try {
      await postEmployee(values);
      resetForm();
      setError(false);
    } catch {
      setError(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={employeeSchema}
      onSubmit={handleSubmit}
    >
      <Form className={StyledFormContainer}>
        {/* Name and birthday fields */}
        <h1>Create Employee</h1>
        {error && (
          <p className={StyledErrorMessage}>
            Error occured while submitting the form to the server.
          </p>
        )}
        <Grid
          container
          className={StyledGridContainer}
          spacing={1}
          justifyContent={startOrCenter}
        >
          <Grid item xs={10} md={4} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              label="First name"
              name="firstName"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="firstName" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={4} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              label="Last name"
              name="lastName"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="lastName" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={4} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="date"
              name="birthday"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="birthday" />
                </span>
              }
            />
          </Grid>
        </Grid>
        {/* Address and phone number fields */}
        <Grid
          container
          className={StyledGridContainer}
          spacing={1}
          justifyContent={startOrCenter}
        >
          <Grid item xs={10} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              label="Address"
              name="address"
              variant="outlined"
              fullWidth
              margin="normal"
              sx={{ maxWidth: "90%" }}
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="address" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              label="Phone number"
              name="phoneNumber"
              variant="outlined"
              fullWidth
              sx={{ maxWidth: "90%" }}
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="phoneNumber" />
                </span>
              }
            />
          </Grid>
        </Grid>
        {/* Government ids */}
        <Grid
          container
          className={StyledGridContainer}
          spacing={1}
          justifyContent={startOrCenter}
        >
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              name="sssNo"
              label="SSS #"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="sssNo" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              name="pagibigNo"
              label="Pagibig #"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="pagibigNo" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              name="philhealthNo"
              label="Philhealth #"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="philhealthNo" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              name="tinNo"
              label="TIN #"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="tinNo" />
                </span>
              }
            />
          </Grid>
        </Grid>
        {/* Status, position, immediate supervisor */}
        <Grid
          container
          className={StyledGridContainer}
          spacing={1}
          justifyContent={startOrCenter}
        >
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              name="status"
              label="Status"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="status" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              name="position"
              label="Position"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="position" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              name="immediateSupervisor"
              label="Immediate Supervisor"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="immediateSupervisor" />
                </span>
              }
            />
          </Grid>
        </Grid>

        {/* basicSalary, riceSubsidy, phoneAllowance, clothingAllowance,
        grossSemiMonthlyRate, hourlyRate, */}
        <Grid
          container
          className={StyledGridContainer}
          spacing={1}
          justifyContent={startOrCenter}
        >
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="number"
              name="basicSalary"
              label="Basic Salary"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="basicSalary" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="number"
              name="riceSubsidy"
              label="Rice Subsidy"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="riceSubsidy" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="number"
              name="phoneAllowance"
              label="Phone Allowance"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="phoneAllowance" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="number"
              name="clothingAllowance"
              label="Clothing Allowance"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="clothingAllowance" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="number"
              name="grossSemiMonthlyRate"
              label="Gross semi-monthly Rate"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="grossSemiMonthlyRate" />
                </span>
              }
            />
          </Grid>
          <Grid item xs={10} md={3} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="number"
              name="hourlyRate"
              label="Hourly Rate"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="hourlyRate" />
                </span>
              }
            />
          </Grid>
        </Grid>
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
