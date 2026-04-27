import Clock from "./components/Clock";

import { GlobalStyle, MainContainer, Button } from "./styledComponents";
import { useState } from "react";

const App = () => {
  const [isMounted, setIsMounted] = useState(true);

  const onToggle = () => {
    setIsMounted((isMounted) => !isMounted);
  };

  return (
    <>
      <GlobalStyle />
      <MainContainer>
        <Button onClick={onToggle}>
          {isMounted ? "Hide Clock" : "Show Clock"}
        </Button>
        {isMounted && <Clock />}
      </MainContainer>
    </>
  );
};

export default App;
