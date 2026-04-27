import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from "./StyledComponents";

import { useState } from "react";

const GreetUser = () => {
  const [name, setName] = useState("User");

  console.log("component re-rendered");
  console.log("name: ", name);

  const updateName = (event) => setName(event.target.value);

  // setName(prevState => nextState);

  return (
    <MainContainer>
      <NameInput onChange={updateName} type="text" placeholder="Your name" />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  );
};

export default GreetUser;
