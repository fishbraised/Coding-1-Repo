import VideosContext from "../../context/VideosContext";

import { MenuTabContainer, TabHeading } from "./StyledComponents";

import { Link } from "react-router-dom";

const MenuTab = (props) => (
  <VideosContext.Consumer>
    {(value) => {
      const { tabInfo, activeTab, onUpdateActiveTab } = props;
      const { id, link, icon, displayText } = tabInfo;

      const { isDarkTheme } = value;

      const tabIconColor =
        activeTab === id ? "rgb(230, 48, 42)" : "rgb(96, 96, 96)";

      const tabBgColor = isDarkTheme
        ? activeTab === id
          ? "rgb(50, 50, 50)"
          : "rgb(25, 25, 25)"
        : activeTab === id
        ? "rgb(241, 245, 249)"
        : "rgb(255, 255, 255)";

      const tabTextFontWeight = activeTab === id ? "500" : "400";

      const updateActiveTab = () => {
        onUpdateActiveTab(id);
      };

      return (
        <Link style={{ textDecoration: "none" }} to={link}>
          <MenuTabContainer
            color={tabIconColor}
            bgColor={tabBgColor}
            onClick={updateActiveTab}
          >
            {icon}
            <TabHeading
              isDarkTheme={isDarkTheme}
              tabTextFontWeight={tabTextFontWeight}
            >
              {displayText}
            </TabHeading>
          </MenuTabContainer>
        </Link>
      );
    }}
  </VideosContext.Consumer>
);

export default MenuTab;
