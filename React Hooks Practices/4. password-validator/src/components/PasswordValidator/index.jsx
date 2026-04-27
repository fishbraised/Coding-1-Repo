import {
  MainContainer,
  Content,
  Title,
  Description,
  PasswordField,
  PasswordRequirements,
} from "./styledComponents";

import { useState } from "react";

const PasswordValidator = () => {
  const [password, setPassword] = useState("");

  const updatePassword = (event) => setPassword(event.target.value);

  return (
    <MainContainer>
      <Content>
        <Title>Password Validator</Title>
        <Description>Check how strong and secure is your password</Description>

        <PasswordField
          type="password"
          onChange={updatePassword}
          value={password}
        />
        {password.length < 8 && (
          <PasswordRequirements>
            Your password must be at least 8 characters
          </PasswordRequirements>
        )}
      </Content>
    </MainContainer>
  );
};

export default PasswordValidator;
