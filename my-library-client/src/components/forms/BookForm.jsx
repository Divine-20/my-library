import { useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import { fetchAuthors } from "../../api/authors";
import { Button, Form, Input, Select } from "../../styles/Form";
import ClipLoader from "react-spinners/ClipLoader";

const BookForm = ({ onSubmit, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);

  const {
    data: authorsData,
    isLoading: isAuthorsLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["authors"],
    queryFn: fetchAuthors,
    onSuccess: (data) => console.log("Authors fetched successfully:", data),
    onError: (error) => console.error("Error fetching authors:", error),
  });

  const authors = Array.isArray(authorsData) ? authorsData : [];

  const handleFormSubmit = async (data) => {
    setLoading(true);
    try {
      await onSubmit(data);
    } finally {
      setLoading(false);
    }
  };

  if (isAuthorsLoading) return <p>Loading authors...</p>;
  if (isError) return <p>Error loading authors: {error.message}</p>;

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input {...register("title")} placeholder="Book Title" required />
      <Input {...register("isbn")} placeholder="ISBN" required />

      <Select {...register("authorId")} required>
        <option value="">Select Author</option>
        {authors?.map((author) => (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        ))}
      </Select>
      <Button type="submit" disabled={loading}>
        {loading ? <ClipLoader size={20} color="#ffffff" /> : initialData ? "Update Book" : "Add Book"}
      </Button>
    </Form>
  );
};

export default BookForm;
