import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { setCredentials } from "../store/slices/authSlice";
import { login } from "../api/auth";
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
import ClipLoader from "react-spinners/ClipLoader";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const result = await login(data.email, data.password);
      if (result.success) {
        dispatch(setCredentials(result));
        toast.success("Logged in successfully");
        navigate("/books");
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      toast.error("Login failed. Please try again.");
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
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
        <Title>Welcome Back</Title>
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
        <Button type="submit" disabled={loading}>
          {loading ? <ClipLoader size={20} color="#ffffff" /> : "Login"}
        </Button>
        <Content>
          <p>
            Don't have an account?
            <span>
              <a
                href="/register"
                style={{ color: "#1B4332", textDecoration: "underline" }}
              >
                {" "}
                Create one
              </a>
            </span>
          </p>
        </Content>
      </Form>
    </AuthContainer>
  );
}

export default Login;
