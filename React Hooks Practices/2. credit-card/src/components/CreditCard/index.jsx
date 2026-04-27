import {
  MainContainer,
  CreditCardContainer,
  MainTitle,
  Card,
  CardNumber,
  CardholderNameHeading,
  CardholderName,
  PaymentMethodContainer,
  PaymentForm,
  PaymentMethodHeading,
  PaymentInput,
} from "./styledComponents";

import { useState } from "react";

const CreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardholderName, setCardholderName] = useState("");

  const updateCardNumber = (event) => setCardNumber(event.target.value);
  const updateCardholderName = (event) => setCardholderName(event.target.value);

  return (
    <MainContainer>
      <CreditCardContainer>
        <MainTitle>CREDIT CARD</MainTitle>

        <Card>
          <CardNumber>{cardNumber}</CardNumber>
          <CardholderNameHeading>CARDHOLDER NAME</CardholderNameHeading>
          <CardholderName>{cardholderName.toUpperCase()}</CardholderName>
        </Card>
      </CreditCardContainer>

      <PaymentMethodContainer>
        <PaymentForm>
          <PaymentMethodHeading>Payment Method</PaymentMethodHeading>
          <PaymentInput
            placeholder="Card Number"
            onChange={updateCardNumber}
            value={cardNumber}
          />
          <PaymentInput
            placeholder="Cardholder Name"
            onChange={updateCardholderName}
            value={cardholderName}
          />
        </PaymentForm>
      </PaymentMethodContainer>
    </MainContainer>
  );
};

export default CreditCard;
