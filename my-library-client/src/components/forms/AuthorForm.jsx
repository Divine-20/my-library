import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input, TextArea } from "../../styles/Form";

const AuthorForm = ({ onSubmit, initialData }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: initialData,
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} placeholder="Author Name" required />
      <TextArea {...register("bio")} placeholder="Author Biography" />
      <Button type="submit">
        {initialData ? "Update Author" : "Add Author"}
      </Button>
    </Form>
  );
};

export default AuthorForm;
