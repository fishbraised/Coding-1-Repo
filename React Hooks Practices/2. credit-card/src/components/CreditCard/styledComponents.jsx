import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const CreditCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 5em;
  background-color: #47cdbd;
`;

export const MainTitle = styled.h1`
  margin: 0;
  color: #ffffff;
  text-decoration: underline 4px rgb(28, 145, 174);
  text-underline-offset: 17.5px;
  font-size: 2rem;
`;

export const Card = styled.div`
  min-width: 450px;
  min-height: 250px;
  padding: 2em 4em;
  margin-top: 5em;
  border-radius: 2.5em;
  background-size: cover;
  background-image: url("https://res.cloudinary.com/dkoqbt4pc/image/upload/v1746022064/Backgrounds/credit-card-bg.png");
`;

export const CardNumber = styled.p`
  height: 40px;
  margin: 0;
  margin-top: 0.75em;
  color: #ffffff;
  font-size: 2.2rem;
  font-weight: 500;
`;

export const CardholderNameHeading = styled.h2`
  margin: 0;
  margin-top: 2.5em;
  color: #f1f5f9;
  font-size: 1.2rem;
  font-weight: 400;
`;

export const CardholderName = styled.p`
  margin: 0.5em 0 0.5em 0;
  color: #ffffff;
  font-size: 1.6rem;
  font-weight: 500;
`;

export const PaymentMethodContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 10em;
  background-color: #ffffff;
`;

export const PaymentForm = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  padding: 4.5em;
  box-shadow: 0 0 2em #d3d9e0;
`;

export const PaymentMethodHeading = styled.h2`
  margin: 0;
  margin-bottom: 1.25em;
  text-align: center;
  color: #475569;
  font-size: 1.6rem;
  font-weight: 700;
`;

export const PaymentInput = styled.input`
  width: 100%;
  padding: 0.75em 1.5em;
  margin-bottom: 1em;
  outline: none;
  border: 2px solid #c3cad9;
  border-radius: 0.25em;
  color: #475569;
  font-size: 1rem;
`;
