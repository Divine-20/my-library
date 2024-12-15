import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const fetchBooks = async (page = 1) => {
  const { data } = await api.get(`/books?page=${page}`);
  return data;
};

export const fetchBook = async (id) => {
  const { data } = await api.get(`/books/${id}`);
  return data;
};

export const createBook = async (bookData) => {
  const { data } = await api.post("/books/register", bookData);
  return data;
};

export const updateBook = async (id, bookData) => {
  const { data } = await api.put(`/books/${id}`, bookData);
  return data;
};
