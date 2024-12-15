import React, { useState } from "react";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchAuthors, updateAuthor } from "../api/authors";
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
import { useNavigate } from "react-router-dom";
import AuthorCard from "../components/AuthorCard";

const Authors = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);

  const { data, isLoading, total_pages } = useQuery({
    queryKey: ["authors", page],
    queryFn: () => fetchAuthors(page),
  });
  const handleDelete = async (id) => {
    await deleteAuthor(id);
    setAuthors(data.filter((author) => author.id !== id));
    navigate("/authors");
  };

  const handleUpdate = async (id, updatedData) => {
    const updatedAuthor = await updateAuthor(id, updatedData);
    setAuthors(
      data.map((author) => (author.id === id ? updatedAuthor : author))
    );
    navigate("/authors");
  };

  if (isLoading) return <div>Loading...</div>;
  const authors = Array.isArray(data) ? data : [];

  return (
    <Container>
      <Header>
        <Title>Author Collection</Title>
        <Content>
          <AddButton onClick={() => setOpenModal(true)}>Add Author</AddButton>
          <AddButton onClick={() => navigate("/books")}>Books</AddButton>
        </Content>
      </Header>
      <Grid>
        {data?.map((author) => (
          <AuthorCard
            key={author?.id}
            id={author?.id}
            name={author?.name}
            bio={author?.bio}
            books={author?.books}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
          />
        ))}
      </Grid>
      <Pagination>
        {[...Array(total_pages)].map((_, i) => (
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
