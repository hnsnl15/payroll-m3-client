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
import { getEmployeeById, postEmployee, updateEmployee } from "../api";
import { useState } from "react";
import {
  StyledErrorMessage,
  StyledFormContainer,
  StyledGridContainer,
  StyledGridItemContainer,
  StyledSuccessMessage,
  StyledWhiteText,
} from "../css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "react-query";

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

export default function EmployeeFormPage() {
  const theme = useTheme();
  const isPhoneSize = useMediaQuery(theme.breakpoints.down("sm"));
  const startOrCenter = isPhoneSize ? "center" : "flex-start";
  const [isError, setIsError] = useState(false);
  const [success, setSuccess] = useState(false);

  const { id } = useParams();
  const { data } = useQuery("employee", async () =>
    getEmployeeById(parseInt(id!))
  );
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();

  // Check if data is available and update the initialValues accordingly
  if (data && location.pathname !== "/form/employee") {
    initialValues.lastName = data.data.lastName;
    initialValues.firstName = data.data.firstName;
    initialValues.birthday = data.data.birthday;
    initialValues.address = data.data.address;
    initialValues.phoneNumber = data.data.phoneNumber;
    initialValues.sssNo = data.data.sssNo;
    initialValues.philhealthNo = data.data.philhealthNo;
    initialValues.tinNo = data.data.tinNo;
    initialValues.pagibigNo = data.data.pagibigNo;
    initialValues.status = data.data.status;
    initialValues.position = data.data.position;
    initialValues.immediateSupervisor = data.data.immediateSupervisor;
    initialValues.basicSalary = data.data.basicSalary;
    initialValues.riceSubsidy = data.data.riceSubsidy;
    initialValues.phoneAllowance = data.data.phoneAllowance;
    initialValues.clothingAllowance = data.data.clothingAllowance;
    initialValues.grossSemiMonthlyRate = data.data.grossSemiMonthlyRate;
    initialValues.hourlyRate = data.data.hourlyRate;
  }

  const updateMutation = useMutation(
    async (data: { id: number; values: IEmployee }) =>
      await updateEmployee(data.id, data.values)
  );

  const postMutation = useMutation(
    async (values: IEmployee) => await postEmployee(values)
  );

  const handleSubmit = async (
    values: IEmployee,
    { resetForm }: FormikHelpers<IEmployee>
  ) => {
    try {
      if (id && location.pathname !== "/form/employee") {
        const data = {
          id: parseInt(id),
          values,
        };
        await updateMutation.mutateAsync(data);
        await queryClient.invalidateQueries("employees");
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

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={employeeSchema}
      onSubmit={handleSubmit}
    >
      <Form className={StyledFormContainer}>
        <h1 className={StyledWhiteText}>Create Employee</h1>
        {isError && (
          <p className={StyledErrorMessage}>
            Error occurred while submitting the form to the server.
          </p>
        )}
        {success && (
          <p className={StyledSuccessMessage}>Created successfully!</p>
        )}

        {/* Name and birthday fields */}
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
              helperText={<ErrorMessage name="firstName" />}
            />
          </Grid>
          <Grid item xs={10} md={4} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              label="Last name"
              name="lastName"
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="lastName" />}
            />
          </Grid>
          <Grid item xs={10} md={4} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="date"
              name="birthday"
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="birthday" />}
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
              margin="normal"
              helperText={<ErrorMessage name="address" />}
            />
          </Grid>
          <Grid item xs={10} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              label="Phone number"
              name="phoneNumber"
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="phoneNumber" />}
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
          {["sssNo", "pagibigNo", "philhealthNo", "tinNo"].map(
            (fieldName, index) => {
              const modifiedFieldName =
                fieldName.charAt(0).toUpperCase() +
                fieldName.slice(1).replace(/([A-Z])/g, " $1");
              return (
                <Grid
                  item
                  xs={10}
                  md={3}
                  className={StyledGridItemContainer}
                  key={index}
                >
                  <Field
                    as={TextField}
                    name={fieldName}
                    label={modifiedFieldName}
                    variant="outlined"
                    margin="normal"
                    helperText={<ErrorMessage name={fieldName} />}
                  />
                </Grid>
              );
            }
          )}
        </Grid>

        {/* Status, position, immediate supervisor */}
        <Grid
          container
          className={StyledGridContainer}
          spacing={1}
          justifyContent={startOrCenter}
        >
          {["status", "position", "immediateSupervisor"].map(
            (fieldName, index) => (
              <Grid
                item
                xs={10}
                md={3}
                className={StyledGridItemContainer}
                key={index}
              >
                <Field
                  as={TextField}
                  name={fieldName}
                  label={fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}
                  variant="outlined"
                  margin="normal"
                  helperText={<ErrorMessage name={fieldName} />}
                />
              </Grid>
            )
          )}
        </Grid>

        {/* Other fields */}
        <Grid
          container
          className={StyledGridContainer}
          spacing={1}
          justifyContent={startOrCenter}
        >
          {[
            { name: "basicSalary", label: "Basic Salary" },
            { name: "riceSubsidy", label: "Rice Subsidy" },
            { name: "phoneAllowance", label: "Phone Allowance" },
            { name: "clothingAllowance", label: "Clothing Allowance" },
            { name: "grossSemiMonthlyRate", label: "Gross Semi-Monthly Rate" },
            { name: "hourlyRate", label: "Hourly Rate" },
          ].map((field, index) => (
            <Grid
              item
              xs={10}
              md={3}
              className={StyledGridItemContainer}
              key={index}
            >
              <Field
                as={TextField}
                type="number"
                name={field.name}
                label={field.label}
                variant="outlined"
                margin="normal"
                helperText={<ErrorMessage name={field.name} />}
              />
            </Grid>
          ))}
        </Grid>

        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    </Formik>
  );
}
