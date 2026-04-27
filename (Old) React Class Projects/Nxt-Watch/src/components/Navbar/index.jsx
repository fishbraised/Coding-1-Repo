import VideosContext from "../../context/VideosContext";

import {
  NavbarContainer,
  WebsiteLogo,
  RowContainer,
  LightingModeButton,
  HamburgerButton,
  ProfileIcon,
  LogoutIconButton,
  LogoutButton,
  ModalContainer,
  ModalHeading,
  ButtonContainer,
  ModalButton,
} from "./StyledComponents";

import Cookies from "js-cookie";
import Popup from "reactjs-popup";
import { FaMoon } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiLogIn } from "react-icons/fi";
import { Link, withRouter } from "react-router-dom";

const Navbar = (props) => (
  <VideosContext.Consumer>
    {(value) => {
      const { isDarkTheme, toggleLightingTheme } = value;

      const onLogoutClick = () => {
        const { history } = props;

        Cookies.remove("jwt_token");
        history.replace("/login");
      };

      const activeWebsiteLogo = isDarkTheme
        ? "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096340/Nxt%20Watch/nxt-watch-logo-dark-theme.png"
        : "https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096368/Nxt%20Watch/nxt-watch-logo-light-theme.png";

      return (
        <NavbarContainer isDarkTheme={isDarkTheme}>
          <Link to="/">
            <WebsiteLogo src={activeWebsiteLogo} />
          </Link>

          <RowContainer>
            <LightingModeButton onClick={toggleLightingTheme}>
              <FaMoon
                color={isDarkTheme ? "rgb(255, 255, 255)" : "rgb(25, 25, 25)"}
                size="100%"
              />
            </LightingModeButton>

            <HamburgerButton>
              <GiHamburgerMenu
                color={isDarkTheme ? "rgb(255, 255, 255)" : "rgb(25, 25, 25)"}
                size="100%"
              />
            </HamburgerButton>
            <ProfileIcon src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1741096682/Nxt%20Watch/default-profile-icon.jpg" />

            <Popup
              trigger={
                <LogoutIconButton>
                  <FiLogIn
                    color={
                      isDarkTheme ? "rgb(255, 255, 255)" : "rgb(25, 25, 25)"
                    }
                    size="100%"
                  />
                </LogoutIconButton>
              }
              modal
              nested
            >
              {(close) => (
                <ModalContainer isDarkTheme={isDarkTheme}>
                  <ModalHeading isDarkTheme={isDarkTheme}>
                    Do you really intend to log out?
                  </ModalHeading>

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
                      onClick={onLogoutClick}
                    >
                      Confirm
                    </ModalButton>
                  </ButtonContainer>
                </ModalContainer>
              )}
            </Popup>

            <Popup
              trigger={
                <LogoutButton isDarkTheme={isDarkTheme}>Logout</LogoutButton>
              }
              modal
              nested
            >
              {(close) => (
                <ModalContainer isDarkTheme={isDarkTheme}>
                  <ModalHeading isDarkTheme={isDarkTheme}>
                    Do you really intend to log out?
                  </ModalHeading>

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
                      bgColor="rgb(230, 48, 42);"
                      onClick={onLogoutClick}
                    >
                      Confirm
                    </ModalButton>
                  </ButtonContainer>
                </ModalContainer>
              )}
            </Popup>
          </RowContainer>
        </NavbarContainer>
      );
    }}
  </VideosContext.Consumer>
);

export default withRouter(Navbar);
