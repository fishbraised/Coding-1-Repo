import {
  MainContainer,
  Content,
  Title,
  Row,
  GreetingButton,
  GreetingContainer,
  GreetingImage,
} from "./styledComponents";

import { useState } from "react";

const languageGreetingsList = [
  {
    id: "bfdf40eb-eec9-4a66-a493-752fe689f0d0",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747044645/english-greetings-img_ftwcps.png",
    buttonText: "English",
    imageAltText: "english",
  },
  {
    id: "0ceda891-2a0c-49e2-8c62-68e78180bac6",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747044702/tamil-greetings-img_zkaaly.png",
    buttonText: "Tamil",
    imageAltText: "tamil",
  },
  {
    id: "89537778-7a46-4c58-988c-0adc931d087c",
    imageUrl:
      "https://res.cloudinary.com/saiuttej/image/upload/v1747044707/telugu-greetings-img_wfiodh.png",
    buttonText: "Telugu",
    imageAltText: "telugu",
  },
];

const MultilingualGreetings = () => {
  const [language, setLanguage] = useState(languageGreetingsList[0].id);

  const updateLanguage = (event) => {
    setLanguage(event.target.id);
  };

  const renderGreeting = () => {
    const foundGreeting = languageGreetingsList.find(
      (eachObj) => eachObj.id === language
    );

    return (
      <GreetingContainer>
        <GreetingImage
          src={foundGreeting.imageUrl}
          alt={foundGreeting.imageAltText}
        />
      </GreetingContainer>
    );
  };

  return (
    <MainContainer>
      <Content>
        <Title>Multilingual Greetings</Title>

        <Row>
          {languageGreetingsList.map((eachObj) => (
            <GreetingButton
              key={eachObj.id}
              onClick={updateLanguage}
              id={eachObj.id}
            >
              {eachObj.buttonText}
            </GreetingButton>
          ))}
        </Row>

        {renderGreeting()}
      </Content>
    </MainContainer>
  );
};

export default MultilingualGreetings;
