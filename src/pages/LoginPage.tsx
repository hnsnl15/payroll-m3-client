import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useAuth } from "../hooks/useAuth";
import { Button, FormGroup, TextField } from "@mui/material";
import { css } from "@emotion/css";
import * as Yup from "yup";
import { ILogin } from "..";
import { useMutation } from "react-query";
import { getJwtToken } from "../api";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const StyledContainer = css`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledForm = css`
  width: clamp(240px, 90%, 350px);
  height: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 0px 6px rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 10px;
`;

const StyledErrorMessage = css`
  color: red;
`;

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const initialValues: ILogin = {
  username: "",
  password: "",
};

function LoginForm() {
  const { login } = useAuth();
  const [showError, setShowError] = useState(false);
  const { setToken, setAuthenticated } = useContext(AuthContext);

  const authMutation = useMutation((newData: ILogin) =>
    getJwtToken(newData)
      .then((response) => {
        let dataToken = response.data.token;
        login(dataToken);
        setToken(dataToken);
        setAuthenticated(true);
      })
      .catch(() => {
        setShowError(true);
      })
  );

  const handleSubmit = async (
    values: ILogin,
    { resetForm }: FormikHelpers<ILogin>
  ) => {
    await authMutation.mutateAsync(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <FormGroup className={StyledForm}>
        <h1>Login</h1>
        {showError && (
          <span className={StyledErrorMessage}>
            Invalid username or password
          </span>
        )}
        <Form
          style={{
            display: "grid",
            gap: 5,
          }}
        >
          <div>
            <Field
              as={TextField}
              label="Username"
              name="username"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="username" />
                </span>
              }
            />
          </div>

          <div>
            <Field
              as={TextField}
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              margin="normal"
              helperText={
                <span className={StyledErrorMessage}>
                  <ErrorMessage name="password" />
                </span>
              }
            />
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              alignSelf: "center",
            }}
          >
            Log in
          </Button>
        </Form>
      </FormGroup>
    </Formik>
  );
}

export default function LoginPage() {
  return (
    <main className={StyledContainer}>
      <LoginForm />
    </main>
  );
}
