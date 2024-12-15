import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import AuthorForm from "../components/forms/AuthorForm";
import { createAuthor } from "../api/authors";

const AddAuthor = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (newAuthorData) => createAuthor(newAuthorData),
    onSuccess: () => {
      toast.success("Author added successfully");
      navigate("/authors");
      queryClient.invalidateQueries(["authors"]);
    },
    onError: (error) => {
      console.error("Error adding Author:", error);
      toast.error("Failed to add Author");
    },
  });

  const handleSubmit = (formData) => {
    mutation.mutate(formData);
  };

  return (
    <>
      <h3 style={{ textAlign: "center" }}>Add Author</h3>
      <AuthorForm
        onSubmit={handleSubmit}
        isLoading={mutation.isLoading}
        error={mutation.isError && mutation.error?.message}
      />
    </>
  );
};

export default AddAuthor;
