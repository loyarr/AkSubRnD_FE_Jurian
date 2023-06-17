import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/AppContext';
import { Buttons, DeleteButton, EditButton, Wrapper, Label } from './CardStyles';

function Card({ id, title, desc }) {
  const { editPost, deletePost } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(title);
  const [updatedDesc, setUpdatedDesc] = useState(desc);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUpdatedTitle(title);
    setUpdatedDesc(desc);
  };

  const handleSave = () => {
    const updatedPost = {
      title: updatedTitle,
      desc: updatedDesc,
    };

    editPost(id, updatedPost);
    setIsEditing(false);
  };

  const handleDelete = () => {
    deletePost(id);
  };

  return (
    <Wrapper>
      <p>ID: {id}</p>
      {isEditing ? (
        <>
          <h2>Text</h2>
          <input
            type="text"
            placeholder="Insert title"
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
          />
          <h2>Text</h2>
          <input
            type="text"
            placeholder="Insert desc"
            value={updatedDesc}
            onChange={(e) => setUpdatedDesc(e.target.value)}
          />
        </>
      ) : (
        <>
          <h1>Title: {title}</h1>
          <p>Desc: {desc}</p>
        </>
      )}
      <Buttons>
        {isEditing ? (
          <>
            <DeleteButton onClick={handleCancel}>Cancel</DeleteButton>
            <EditButton onClick={handleSave}>Save</EditButton>
          </>
        ) : (
          <>
            <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
            <EditButton onClick={handleEdit}>Edit</EditButton>
          </>
        )}
      </Buttons>
    </Wrapper>
  );
}

export default Card;
