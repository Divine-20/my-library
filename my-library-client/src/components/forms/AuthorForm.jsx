import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input, TextArea } from "../../styles/Form";
import ClipLoader from "react-spinners/ClipLoader";

const AuthorForm = ({ onSubmit, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (data) => {
    setLoading(true);
    try {
      await onSubmit(data);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(handleFormSubmit)}>
      <Input {...register("name")} placeholder="Author Name" required />
      <TextArea {...register("bio")} placeholder="Author Biography" />
      <Button type="submit" disabled={loading}>
        {loading ? (
          <ClipLoader size={20} color="#ffffff" />
        ) : initialData ? (
          "Update Author"
        ) : (
          "Add Author"
        )}
      </Button>
    </Form>
  );
};

export default AuthorForm;
