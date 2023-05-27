import { useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
  FormikHelpers,
  FieldAttributes,
  FieldProps,
} from "formik";
import { TextField, Grid, Button } from "@mui/material";
import * as yup from "yup";
import { IAttendance } from "..";
import {
  StyledErrorMessage,
  StyledFormContainer,
  StyledGridContainer,
  StyledGridItemContainer,
  StyledSuccessMessage,
} from "./css";

// Define the type for the checkbox field
type CheckboxFieldProps = FieldProps<boolean> & FieldAttributes<{}>;

const initialValues: IAttendance = {
  name: "John",
  date: "1999-01-01",
  timeIn: "1:00",
  timeOut: "24:00",
  isLate: false,
  isAbsent: false,
};

const attendanceSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  date: yup.string().required("Date is required"),
  timeIn: yup.string().required("Time in is required"),
  timeOut: yup.string().required("Time out is required"),
});

export default function AttendanceFormPage() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (
    values: IAttendance,
    { resetForm }: FormikHelpers<IAttendance>
  ) => {
    try {
      // Replace postEmployee with your API call to submit the form data
      // await postEmployee(values);
      console.log(values);
      resetForm();
      setError(false);
      setSuccess(true);
    } catch {
      setError(true);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={attendanceSchema}
      onSubmit={handleSubmit}
    >
      <Form className={StyledFormContainer}>
        <h1>Create Attendance Record</h1>
        {error && (
          <p className={StyledErrorMessage}>
            Error occurred while submitting the form to the server.
          </p>
        )}
        {success && (
          <p className={StyledSuccessMessage}>Created successfully!</p>
        )}

        <Grid
          container
          className={StyledGridContainer}
          spacing={1}
          justifyContent="center"
        >
          <Grid item xs={12} sm={6} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              label="Employee Name"
              name="name"
              variant="outlined"
              margin="normal"
              InputProps={{ readOnly: true }}
              helperText={<ErrorMessage name="name" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="date"
              label="Date"
              name="date"
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="date" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="time"
              label="Time In"
              name="timeIn"
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="timeIn" />}
            />
          </Grid>
          <Grid item xs={12} sm={6} className={StyledGridItemContainer}>
            <Field
              as={TextField}
              type="time"
              label="Time Out"
              name="timeOut"
              variant="outlined"
              margin="normal"
              helperText={<ErrorMessage name="timeOut" />}
            />
          </Grid>
          <Grid item xs={4} className={StyledGridItemContainer}>
            <Field
              type="checkbox"
              name="isLate"
              render={({ field }: CheckboxFieldProps) => (
                <TextField
                  label="Is Late"
                  type="checkbox"
                  {...field}
                  margin="normal"
                />
              )}
            />
          </Grid>
          <Grid item xs={4} className={StyledGridItemContainer}>
            <Field
              type="checkbox"
              name="isAbsent"
              render={({ field }: CheckboxFieldProps) => (
                <TextField
                  label="Is Absent"
                  type="checkbox"
                  {...field}
                  margin="normal"
                />
              )}
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
