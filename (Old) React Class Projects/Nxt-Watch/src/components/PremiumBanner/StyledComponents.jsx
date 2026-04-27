import styled from "styled-components";

export const PremiumBannerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 220px;
  padding: 2em 3em;
  background-size: cover;
  background-image: url("https://res.cloudinary.com/dkoqbt4pc/image/upload/v1742044730/Nxt%20Watch/nxt-watch-banner-bg.png");
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WebsiteLogo = styled.img`
  width: 150px;
  margin-bottom: 0.5em;
`;

export const PremiumBannerDescription = styled.p`
  margin-bottom: 4em;
  color: rgb(30, 41, 59);
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Roboto";
`;

export const PremiumBannerButton = styled.button`
  all: unset;

  align-self: flex-start;
  padding: 0.75em 1.5em;
  border: 1px solid rgb(24, 24, 24);
  color: rgb(24, 24, 24);
  font-size: 1.4rem;
  font-weight: 500;
  font-family: "Roboto";
  cursor: pointer;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em;
  border-radius: 1em;
  box-shadow: grey 0px 0px 20px;
  background-color: rgb(15, 15, 15);
`;

export const ModalImage = styled.img`
  width: 100px;
  margin-bottom: 3em;
`;

export const ModalHeading = styled.h2`
  margin: 0;
  margin-bottom: 0em;
  color: rgb(251, 251, 250);
  font-size: 1.8rem;
  font-weight: 400;
  font-family: "Roboto";
`;

export const ModalDescription = styled.p`
  margin-bottom: 2em;
  color: rgb(96, 96, 96);
  font-size: 1.2rem;
  font-family: "Roboto";
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 225px;
`;

export const ModalButton = styled.button`
  all: unset;

  padding: 0.5em 1.25em;
  border: 1px solid ${(props) => props.borderColor};
  border-radius: 0.125em;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-size: 1.6rem;
  font-weight: 500;
  font-family: "Roboto";
  cursor: pointer;
`;

export const CloseBannerButton = styled.button`
  all: unset;

  align-self: flex-start;
  cursor: pointer;
`;
