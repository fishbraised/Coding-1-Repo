import {
  CommentsContainer,
  CommentsTitle,
  Form,
  NameInput,
  CommentTextInput,
  CommentButton,
  CommentsList,
} from "./styledComponents";

import CommentItem from "../CommentItem";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Comments = () => {
  const [name, setName] = useState("");
  const [commentText, setCommentText] = useState("");
  const [commentsList, setCommentsList] = useState([]);

  const updateName = (event) => setName(event.target.value);
  const updateCommentText = (event) => setCommentText(event.target.value);

  const updateCommentsList = (event) => {
    event.preventDefault();
    const newComment = { id: uuidv4(), name, commentText };

    setName("");
    setCommentText("");
    setCommentsList((prevList) => [...prevList, newComment]);
  };

  return (
    <CommentsContainer>
      <CommentsTitle>Comments</CommentsTitle>
      <Form onSubmit={updateCommentsList}>
        <NameInput
          type="text"
          placeholder="Your name"
          onChange={updateName}
          value={name}
        />
        <CommentTextInput
          placeholder="Your comment"
          rows="6"
          onChange={updateCommentText}
          value={commentText}
        />
        <CommentButton type="submit">Comment</CommentButton>
      </Form>

      <CommentsList>
        {commentsList.map((eachObj) => (
          <CommentItem key={eachObj.id} commentDetails={eachObj} />
        ))}
      </CommentsList>
    </CommentsContainer>
  );
};

export default Comments;
