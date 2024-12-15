import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { fetchBook } from "../api/books";
import Layout from "../components/Layout";
import { Author, BookContainer, ISBN } from "../styles/Form";

const BookDetail = () => {
  const { id } = useParams();
  const { data: book, isLoading } = useQuery(["book", id], () => fetchBook(id));

  if (isLoading) return <div>Loading...</div>;

  return (
    <Layout>
      <BookContainer>
        <CoverImage src={book.coverImage} alt={book.title} />
        <BookInfo>
          <Title>{book.title}</Title>
          <Author>By {book.Author.name}</Author>
          <ISBN>ISBN: {book.isbn}</ISBN>
          {book.Author.bio && (
            <div>
              <h3>About the Author</h3>
              <p>{book.Author.bio}</p>
            </div>
          )}
        </BookInfo>
      </BookContainer>
    </Layout>
  );
};

export default BookDetail;
