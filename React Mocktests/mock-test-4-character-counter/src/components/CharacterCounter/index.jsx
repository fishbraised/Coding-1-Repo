import {
  MainContainer,
  Content,
  LeftContent,
  AppDescription,
  AppImage,
  CountList,
  RightContent,
  AppTitle,
  InputRow,
  CharacterInput,
  AddButton,
} from "./styledComponents";

import CountItem from "../CountItem";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CharacterCounter = () => {
  const [characterInput, setCharacterInput] = useState("");
  const [countList, setCountList] = useState([]);

  const updateCharacterInput = (event) => setCharacterInput(event.target.value);

  const updateCountList = () => {
    setCountList((prevList) => {
      return [...prevList, { id: uuidv4(), text: characterInput }];
    });

    setCharacterInput("");
  };

  return (
    <MainContainer>
      <Content>
        <LeftContent>
          <AppDescription>Count the characters like a boss...</AppDescription>

          {countList.length > 0 ? (
            <CountList>
              {countList.map((eachObj) => (
                <CountItem key={eachObj.id} countItemInfo={eachObj} />
              ))}
            </CountList>
          ) : (
            <AppImage src="https://res.cloudinary.com/saiuttej/image/upload/v1747822473/no-user-inputs-img_p6q2cx.png" />
          )}
        </LeftContent>

        <RightContent>
          <AppTitle>Character Counter</AppTitle>

          <InputRow>
            <CharacterInput
              type="text"
              placeholder="Enter the characters here"
              onChange={updateCharacterInput}
              value={characterInput}
            />
            <AddButton type="button" onClick={updateCountList}>
              Add
            </AddButton>
          </InputRow>
        </RightContent>
      </Content>
    </MainContainer>
  );
};

export default CharacterCounter;
