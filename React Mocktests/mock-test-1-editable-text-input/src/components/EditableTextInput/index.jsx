import {
  MainContainer,
  Form,
  Title,
  InputContainer,
  TextInput,
  SavedText,
  InteractionButton,
} from "./styledComponents";

import { useState } from "react";

const EditableTextInput = () => {
  const [text, setText] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const updateText = (event) => setText(event.target.value);

  const updateIsSaved = (event) => {
    event.preventDefault();

    console.log("running");

    setIsSaved((prevState) => !prevState);
  };

  console.log("isSaved: ", isSaved);

  return (
    <MainContainer>
      <Form onSubmit={updateIsSaved}>
        <Title>Editable Text Input</Title>

        <InputContainer>
          {!isSaved && (
            <TextInput
              placeholder="Enter text here"
              onChange={updateText}
              value={text}
            />
          )}

          {isSaved && <SavedText>{text}</SavedText>}

          <InteractionButton type="submit">
            {isSaved ? "Edit" : "Save"}
          </InteractionButton>
        </InputContainer>
      </Form>
    </MainContainer>
  );
};

export default EditableTextInput;
