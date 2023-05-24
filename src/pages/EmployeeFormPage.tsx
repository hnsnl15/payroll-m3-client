import { ErrorMessage, Field, Form, Formik } from "formik";
import { IEmployee } from "..";
import * as Yup from "yup";
import { Grid, TextField } from "@mui/material";
import { css } from "@emotion/css";

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

const handleSubmit = () => {};

const StyledGridContainer = css`
  background: #fff;
  max-width: 1000px;
  padding: 0.5rem;
`;

const StyledGridItemContainer = css`
  display: flex;
  flex-direction: column;
  height: 100px;
  align-items: center;
  // justify-content: center;
`;

const StyleFormContainer = css`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  padding: 0.5rem;
  justify-content: center;
  // align-items: center;
`;

const StyledMainContainer = css`
  min-height: 100vh;
  width: 100vw;
  background: yellow;
  margin-top: 50px;
  padding: 1rem 0.5rem;
`;

const StyledErrorMessage = css`
  color: red;
`;

export default function EmployeeFormPage() {
  return (
    <main className={StyledMainContainer}>
      <h1>Create an employee</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={employeeSchema}
        onSubmit={handleSubmit}
      >
        <Form className={StyleFormContainer}>
          {/* Name and birthday fields */}
          <Grid
            container
            className={StyledGridContainer}
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12} md={4} className={StyledGridItemContainer}>
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
            <Grid item xs={12} md={4} className={StyledGridItemContainer}>
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
            <Grid item xs={12} md={4} className={StyledGridItemContainer}>
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
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12} className={StyledGridItemContainer}>
              <Field
                as={TextField}
                label="Address"
                name="address"
                variant="outlined"
                fullWidth
                margin="normal"
                sx={{ maxWidth: "89%" }}
                helperText={
                  <span className={StyledErrorMessage}>
                    <ErrorMessage name="address" />
                  </span>
                }
              />
            </Grid>
            <Grid item xs={12} className={StyledGridItemContainer}>
              <Field
                as={TextField}
                label="Phone number"
                name="phoneNumber"
                variant="outlined"
                fullWidth
                sx={{ maxWidth: "89%" }}
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
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12} md={3} className={StyledGridItemContainer}>
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
            <Grid item xs={12} md={3} className={StyledGridItemContainer}>
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
            <Grid item xs={12} md={3} className={StyledGridItemContainer}>
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
            <Grid item xs={12} md={3} className={StyledGridItemContainer}>
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
        </Form>
      </Formik>
    </main>
  );
}
