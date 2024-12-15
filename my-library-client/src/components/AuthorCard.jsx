import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PiNotePencilThin } from "react-icons/pi";
import { GoTrash } from "react-icons/go";
import ReusableModal from "./modal/modal";
import { Avatar, Bio, Button, Card, Content, Info, Name } from "../styles/Form";
import BookForm from "./forms/BookForm";
import AuthorForm from "./forms/AuthorForm";

const AuthorCard = ({ id, name, bio, onDelete, onUpdate }) => {
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
        <Avatar
          src={`https://via.placeholder.com/150?text=${name}`}
          alt={name}
        />
        <Content>
          <Info>
            <Name>{name}</Name>
            <Bio>{bio}</Bio>
          </Info>
          <Content style={{ display: "flex", width: "95px" }}>
            <PiNotePencilThin
              onClick={() => setEditModalOpen(true)}
              cursor="pointer"
              style={{ fontSize: "20px" }}
            />
            <GoTrash
              onClick={() => setDeleteModalOpen(true)}
              cursor="pointer"
              style={{ color: "red", fontSize: "20px" }}
            />
          </Content>
        </Content>
      </Card>
      <ReusableModal
        isOpen={isDeleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
      >
        <p>Are you sure you want to delete this Author?</p>
        <Content style={{ display: "flex", gap: "1em" }}>
          <Content style={{ width: "100%", display: "flex", gap: "2em" }}>
            <Button onClick={() => handleDelete()}>Yes</Button>
            <button
              onClick={() => setDeleteModalOpen(false)}
              style={{
                backgroundColor: "white",
                color: "black",
                border: "1px solid ",
                outline: "none",
                width: "100%",
              }}
            >
              Cancel
            </button>
          </Content>
        </Content>
      </ReusableModal>

      <ReusableModal
        isOpen={isEditModalOpen}
        onClose={() => setEditModalOpen(false)}
      >
        <h3 style={{ textAlign: "center" }}>Update Author</h3>
        <AuthorForm initialData={{ name, bio }} onSubmit={handleUpdate} />
      </ReusableModal>
    </>
  );
};

export default AuthorCard;
