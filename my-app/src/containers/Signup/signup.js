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
} from "./signup.style";

const SignUp = () => {
  const history = useHistory();

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("That doesn't look like a email")
      .required("Required"),
    password: Yup.string().required("Required"),
    repassword: Yup.string().required("Required"),
  });

  const [email, setEmail, deleteEmail] = useLocalStorage("Email");

  return (
    <StyledLogin>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          repassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          setEmail(values.email);
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <StyledText>Sign Up</StyledText>
            <StyledFildPlace>
              Name
              <StyledField placeholder="name" name="name" />
              {errors.name && touched.name ? <div>{errors.name}</div> : null}
            </StyledFildPlace>

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

            <StyledFildPlace>
              Repeat password
              <StyledField
                placeholder="repeat password"
                name="repassword"
                type="password"
              />
              {errors.repassword && touched.repassword ? (
                <div>{errors.repassword}</div>
              ) : null}
            </StyledFildPlace>

            <button type="submit">Sign Up</button>
            <StyledSignButton onClick={() => history.push("/Login")}>
              or Login
            </StyledSignButton>
          </StyledForm>
        )}
      </Formik>
    </StyledLogin>
  );
};

export default SignUp;
