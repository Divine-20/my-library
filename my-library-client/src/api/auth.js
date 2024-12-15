import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const login = async (email, password) => {
  const { data } = await axios.post(`${API_URL}/auth/login`, {
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return data;
};
export const createAccount = async (firstName, lastName, email, password) => {
  const { data } = await axios.post(`${API_URL}/auth/register`, {
    firstName,
    lastName,
    email,
    password,
  });
  localStorage.setItem("token", data.token);
  return data;
};

export const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};
