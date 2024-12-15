import { api } from "./books";

export const fetchAuthors = async () => {
  const { data } = await api.get("/authors");
  return data;
};

export const fetchAuthor = async (id) => {
  const { data } = await api.get(`/authors/${id}`);
  return data;
};

export const createAuthor = async (authorData) => {
  const { data } = await api.post("/authors/create", authorData);
  return data;
};

export const updateAuthor = async (id, authorData) => {
  const { data } = await api.put(`/authors/${id}`, authorData);
  return data;
};
