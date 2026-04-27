import {
  PremiumBannerContainer,
  InfoContainer,
  WebsiteLogo,
  PremiumBannerDescription,
  PremiumBannerButton,
  ModalContainer,
  ModalImage,
  ModalHeading,
  ModalDescription,
  ButtonContainer,
  ModalButton,
  CloseBannerButton,
} from "./StyledComponents.jsx";

import Cookies from "js-cookie";
import Popup from "reactjs-popup";
import { IoMdClose } from "react-icons/io";
import { Component } from "react";

class PremiumBanner extends Component {
  state = { isPremium: false };

  clickCloseBanner = () => {
    const { closeBanner } = this.props;

    closeBanner();
  };

  getPremiumData = async () => {
    const jwtToken = Cookies.get("jwt_token");
    const URL = `https://apis.ccbp.in/prime-deals`;
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    };

    const response = await fetch(URL, options);

    if (response.ok) {
      const data = await response.json();

      this.setState({ isPremium: true });
    } else {
      this.setState({ isPremium: false });
    }
  };

  componentDidMount() {
    this.getPremiumData();
  }

  render() {
    const { isPremium } = this.state;
    return (
      <PremiumBannerContainer>
        <InfoContainer>
          <WebsiteLogo src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096368/Nxt%20Watch/nxt-watch-logo-light-theme.png" />
          <PremiumBannerDescription>
            Buy Nxt Watch Premium prepaid plans with UPI
          </PremiumBannerDescription>

          {isPremium && (
            <PremiumBannerButton>WATCH LATEST VIDEOS</PremiumBannerButton>
          )}

          {!isPremium && (
            <Popup
              trigger={
                <PremiumBannerButton>
                  {isPremium ? "WATCH LATEST VIDEOS" : "GET IT NOW"}
                </PremiumBannerButton>
              }
              modal
              nested
            >
              {(close) => (
                <ModalContainer>
                  <ModalImage src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1742479117/Nxt%20Watch/payment-card.png" />
                  <ModalHeading>PAY NOW</ModalHeading>
                  <ModalDescription>
                    Buy NxtWatch premium for the price of Rs 999.
                  </ModalDescription>

                  <ButtonContainer>
                    <ModalButton
                      borderColor="rgb(126, 133, 142)"
                      color="rgb(126, 133, 142)"
                      bgColor="none"
                      onClick={close}
                    >
                      Cancel
                    </ModalButton>
                    <ModalButton
                      borderColor="none"
                      color="rgb(251, 251, 250)"
                      bgColor="rgb(230, 48, 42)"
                    >
                      Confirm
                    </ModalButton>
                  </ButtonContainer>
                </ModalContainer>
              )}
            </Popup>
          )}
        </InfoContainer>

        <CloseBannerButton onClick={this.clickCloseBanner}>
          <IoMdClose size="18px" />
        </CloseBannerButton>
      </PremiumBannerContainer>
    );
  }
}

export default PremiumBanner;
