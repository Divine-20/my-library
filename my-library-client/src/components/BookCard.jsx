import React, { useState } from "react";
import BookForm from "./forms/BookForm"; // Import your BookForm
import { PiNotePencilThin } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import ReusableModal from "./modal/modal";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "../styles/Form";

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;
  text-decoration: none;
  color: inherit;

  &:hover {
    transform: translateY(-4px);
  }
`;

const CoverImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

const Author = styled.p`
  color: ${(props) => props.theme.colors.secondary};
`;

const ISBN = styled.p`
  font-size: 0.875rem;
  color: #666;
`;

const BookCard = ({
  id,
  title,
  author,
  isbn,
  coverImage,
  onDelete,
  onUpdate,
}) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const handleDelete = () => {
    onDelete(id);
    setDeleteModalOpen(false);
  };

  const handleUpdate = (data) => {
    onUpdate(id, data);
    setEditModalOpen(false);
  };

  return (
    <>
      <Card>
        <CoverImage src={coverImage} alt={title} />
        <Content style={{ display: "flex" }}>
          <Content>
            <Title>{title}</Title>
            <Author>{author}</Author>
            <ISBN>ISBN: {isbn}</ISBN>
          </Content>
          <Content style={{ display: "flex", width: "90px" }}>
            <PiNotePencilThin
              onClick={() => setEditModalOpen(true)}
              cursor="pointer"
            />
            <GoTrash
              onClick={() => setDeleteModalOpen(true)}
              cursor="pointer"
              style={{ color: "red" }}
            />
          </Content>
        </Content>
      </Card>

      {/* Delete Modal */}
      <ReusableModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
      >
        <p>Are you sure you want to delete this book?</p>
        <Content style={{ display: "flex", gap: "1em" }}>
          <Button onClick={() => handleDelete()}>Yes</Button>
          <button
            onClick={() => setDeleteModalOpen(false)}
            style={{
              backgroundColor: "white",
              color: "black",
              border: "1px solid ",
              outline: "none",
            }}
          >
            Cancel
          </button>
        </Content>
      </ReusableModal>

      {/* Edit Modal */}
      <ReusableModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
      >
        <h3 style={{ textAlign: "center" }}>Update book</h3>
        <BookForm
          initialData={{ title, authorId: author.id, isbn, coverImage }}
          onSubmit={handleUpdate}
        />
      </ReusableModal>
    </>
  );
};

export default BookCard;
