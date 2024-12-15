import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setCredentials } from "../store/slices/authSlice";
import {
  AuthContainer,
  Button,
  Content,
  Form,
  Input,
  Title,
} from "../styles/Form";
import toast from "react-hot-toast";
import AppLogo from "../components/logo";
import { createAccount } from "../api/auth";

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    try {
      const result = await createAccount(
        data.firstName,
        data.lastName,
        data.email,
        data.password
      );
      dispatch(setCredentials(result));
      if (result.success === true) {
        toast.success("Account created successfully");
      } else {
        toast.error(result.message);
      }
      navigate("/login");
    } catch (error) {
      console.error("Failed to create account:", error);
    }
  };

  return (
    <AuthContainer
      backgroundImage={
        "https://coastalclosetsandshowers.com/wp-content/uploads/2023/03/office-wall-unit-.jpeg"
      }
    >
      <Form
        onSubmit={handleSubmit(onSubmit)}
        style={{ width: "30%", height: "auto" }}
      >
        <AppLogo />
        <Title>Create Account</Title>
        <Input
          {...register("firsName")}
          type="text"
          placeholder="First name"
          required
        />
        <Input
          {...register("lastName")}
          type="text"
          placeholder="Last name"
          required
        />
        <Input
          {...register("email")}
          type="email"
          placeholder="Email"
          required
        />
        <Input
          {...register("password")}
          type="password"
          placeholder="Password"
          required
        />
        <Button type="submit">Create account</Button>
        <Content>
          <p>
            Already have an account?
            <span>
              <a
                href="/login"
                style={{ color: "#1B4332", textDecoration: "underline" }}
              >
                {" "}
                Log In
              </a>
            </span>
          </p>
        </Content>
      </Form>
    </AuthContainer>
  );
}

export default Register;
