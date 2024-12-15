import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import BookForm from "../components/forms/BookForm";
import { createBook } from "../api/books";
import Layout from "../components/Layout";

const AddBook = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newBookData) => createBook(newBookData),
    onSuccess: () => {
      toast.success("Book added successfully");
      navigate("/books");
      queryClient.invalidateQueries(["books"]);
    },
    onError: (error) => {
      console.error("Error adding book:", error);
      toast.error("Failed to add book");
    },
  });

  const handleSubmit = (formData) => {
    mutation.mutate(formData);
  };

  return (
    <>
      <BookForm
        onSubmit={handleSubmit}
        isLoading={mutation.isLoading}
        error={mutation.isError && mutation.error?.message}
      />
    </>
  );
};

export default AddBook;
