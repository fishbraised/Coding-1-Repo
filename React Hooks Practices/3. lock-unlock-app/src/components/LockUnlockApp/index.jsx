import {
  MainContainer,
  Content,
  LockStatusImage,
  LockStatusText,
  LockStatusButton,
} from "./styledComponents";

import { useState } from "react";

const LockUnlockApp = () => {
  const [lockStatus, setLockStatus] = useState(true);

  const updateLockStatus = () => {
    setLockStatus((prevLockStatus) => !prevLockStatus);
  };

  return (
    <MainContainer>
      <Content>
        <LockStatusImage
          src={
            lockStatus
              ? "https://res.cloudinary.com/saiuttej/image/upload/v1746982492/lock-img_lg2haf.png"
              : "https://res.cloudinary.com/saiuttej/image/upload/v1746982490/unlock-img_e6mrdd.png"
          }
        />
        <LockStatusText>
          {lockStatus ? "Your Device is Locked" : "Your Device is Unlocked"}
        </LockStatusText>

        <LockStatusButton onClick={updateLockStatus}>
          {lockStatus ? "Unlock" : "Lock"}
        </LockStatusButton>
      </Content>
    </MainContainer>
  );
};

export default LockUnlockApp;
