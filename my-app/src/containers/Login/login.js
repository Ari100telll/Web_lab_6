import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocalStorage } from "@rehooks/local-storage";
import { useHistory } from "react-router-dom";

import {
  StyledLogin,
  StyledField,
  StyledForm,
  StyledFildPlace,
  StyledText,
  StyledSignButton,
} from "./login.style";

const Login = () => {
  const history = useHistory();

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .email("That doesn't look like a email")
      .required("Required"),
    password: Yup.string().required("Required"),
  });

  const [email, setEmail, deleteEmail] = useLocalStorage("Email");

  return (
    <StyledLogin>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          setEmail(values.email);
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <StyledText>Login</StyledText>
            <StyledFildPlace>
              Email
              <StyledField placeholder="email" name="email" />
              {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </StyledFildPlace>

            <StyledFildPlace>
              Password
              <StyledField
                placeholder="password"
                name="password"
                type="password"
              />
              {errors.password && touched.password ? (
                <div>{errors.password}</div>
              ) : null}
            </StyledFildPlace>

            <button type="submit">Login</button>
            <StyledSignButton onClick={() => history.push("/SignUp")}>
              or Sign Up
            </StyledSignButton>
          </StyledForm>
        )}
      </Formik>
    </StyledLogin>
  );
};

export default Login;
