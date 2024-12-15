import React, { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchAuthors, updateAuthor, deleteAuthor } from "../api/authors";
import "../styles/Modal.css";
import {
  AddButton,
  Container,
  Content,
  Grid,
  Header,
  PageButton,
  Pagination,
  Title,
} from "../styles/Form";
import AddAuthor from "./AddAuthor";
import ReusableModal from "../components/modal/modal";
import AuthorCard from "../components/AuthorCard";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";

const Authors = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["authors", page],
    queryFn: () => fetchAuthors(page),
  });

  const { mutate: mutateUpdateAuthor, isLoading: isUpdating } = useMutation({
    mutationFn: (updatedAuthor) =>
      updateAuthor(updatedAuthor.id, updatedAuthor.updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries(["authors"]);
    },
  });

  const { mutate: mutateDeleteAuthor, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteAuthor(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["authors"]);
    },
  });
  const handleDelete = async (id) => {
    try {
      await mutateDeleteAuthor(id);
      toast.success("Author deleted successfully");
    } catch (error) {
      toast.error("Failed to delete author");
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      await mutateUpdateAuthor({ id, updatedData });
      toast.success("Author updated successfully");
    } catch (error) {
      toast.error("Failed to update author");
    }
  };

  if (isLoading)
    return (
      <div>
        <ClipLoader />
      </div>
    );

  const totalPages = data?.totalPages || 0;

  return (
    <Container>
      <Header>
        <Title>Author Collection</Title>
        <Content>
          <AddButton onClick={() => setOpenModal(true)}>Add Author</AddButton>
        </Content>
      </Header>
      <Grid>
        {data?.map((author) => (
          <AuthorCard
            key={author.id}
            id={author.id}
            name={author.name}
            bio={author.bio}
            books={author.books}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </Grid>
      <Pagination>
        {[...Array(totalPages)].map((_, i) => (
          <PageButton
            key={i + 1}
            active={page === i + 1}
            onClick={() => setPage(i + 1)}
          >
            {i + 1}
          </PageButton>
        ))}
      </Pagination>
      <ReusableModal isOpen={openModal} onClose={() => setOpenModal(false)}>
        <AddAuthor />
      </ReusableModal>
    </Container>
  );
};

export default Authors;
