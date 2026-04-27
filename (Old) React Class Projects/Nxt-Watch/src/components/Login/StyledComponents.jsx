import styled from "styled-components";

export const LoginContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(15, 15, 15);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 800 400'%3E%3Cdefs%3E%3CradialGradient id='a' cx='396' cy='281' r='514' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='0' stop-color='%2313010C'/%3E%3Cstop offset='1' stop-color='%23170000'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='400' y1='148' x2='400' y2='333'%3E%3Cstop offset='0' stop-color='%2374150E' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%2374150E' stop-opacity='0.5'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect fill='url(%23a)' width='800' height='400'/%3E%3Cg fill-opacity='0.4'%3E%3Ccircle fill='url(%23b)' cx='267.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='532.5' cy='61' r='300'/%3E%3Ccircle fill='url(%23b)' cx='400' cy='30' r='300'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
`;

export const LoginContent = styled.div``;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 3em 2em 2em 2em;
  border-radius: 0.5em;
  background-color: rgba(45, 45, 45, 0.4);
`;

export const WebsiteLogo = styled.img`
  align-self: center;
  width: 150px;
  margin-bottom: 2em;
`;

export const LoginInput = styled.input`
  all: unset;

  padding: 0.5em 1em;
  margin-top: 1em;
  border-radius: 0.5em;
  color: rgb(115, 115, 115);
  background-color: rgba(40, 40, 40, 0.4);
  font-size: 1.6rem;
  font-family: "Roboto";

  ::placeholder {
    color: rgb(65, 65, 65);
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  margin-top: 0.75em;
`;

export const CheckboxInput = styled.input`
  width: 11px;
  margin-right: 0.25em;
  cursor: pointer;
`;

export const CheckboxText = styled.p`
  color: rgba(251, 251, 250, 0.8);
  font-size: 0.9rem;
  font-family: "Roboto";
`;

export const LoginButton = styled.button`
  padding: 0.75em 1em;
  margin-top: 1em;
  border: 1px solid rgb(55, 55, 55);
  border-radius: 2em;
  color: rgb(251, 251, 250);
  background-color: rgb(230, 48, 42);
  font-size: 1.3em;
  cursor: pointer;
`;

export const LoginText = styled.p`
  margin-top: 2em;
  color: rgba(251, 251, 250, 0.4);
  font-size: 1.1rem;
  font-family: "Roboto";
`;

export const LoginSpan = styled.span`
  margin-left: 0.25em;
  color: rgba(251, 251, 250, 0.6);
`;
