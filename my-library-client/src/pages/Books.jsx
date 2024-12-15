import React, { useState } from "react";
import styled from "styled-components";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import BookCard from "../components/BookCard";
import { fetchBooks, updateBook, deleteBook } from "../api/books";
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
import AddBook from "./AddBook";
import ReusableModal from "../components/modal/modal";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

const Books = () => {
  const [page, setPage] = useState(1);
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { data, isLoading } = useQuery({
    queryKey: ["books", page],
    queryFn: () => fetchBooks(page),
  });

  const { mutate: mutateUpdateBook, isLoading: isUpdating } = useMutation({
    mutationFn: (updatedBook) =>
      updateBook(updatedBook.id, updatedBook.updatedData),
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  const { mutate: mutateDeleteBook, isLoading: isDeleting } = useMutation({
    mutationFn: (id) => deleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
  });

  const handleDelete = (id) => {
    mutateDeleteBook(id);
  };

  const handleUpdate = (id, updatedData) => {
    mutateUpdateBook({ id, updatedData });
  };

  if (isLoading)
    return (
      <div>
        <ClipLoader />
      </div>
    );

  return (
    <Container>
      <Header>
        <Title>Book Collection</Title>
        <Content>
          <AddButton onClick={() => setOpenModal(true)}>Add New Book</AddButton>
        </Content>
      </Header>
      <Grid>
        {data?.books?.map((book) => (
          <BookCard
            key={book?.id}
            id={book?.id}
            title={book?.title}
            author={book?.Author?.name}
            isbn={book?.isbn}
            {...book}
            onDelete={handleDelete}
            onUpdate={handleUpdate}
            coverImage={
              "https://i.pinimg.com/736x/bf/ff/32/bfff32a913aeea4123724310d09dde2d.jpg"
            }
          />
        ))}
      </Grid>
      <Pagination>
        {[...Array(data?.totalPages || 0)].map((_, i) => (
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
        <h3 style={{ textAlign: "center" }}>Add New book</h3>
        <AddBook />
      </ReusableModal>
    </Container>
  );
};

export default Books;
