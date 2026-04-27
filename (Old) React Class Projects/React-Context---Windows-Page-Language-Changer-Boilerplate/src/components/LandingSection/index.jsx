import LanguageContext from "../../context/LanguageContext";

import "./index.css";

const landingSectionContent = {
  EN: {
    heading: "Windows 11",
    description:
      "Windows 11 provides a calm and creative space where you can pursue your passions through a fresh experience. From a rejuvenated Start menu to new ways to connect to your favorite people, news, games, and content. Windows is the place to think, express, and create in a natural way.",
  },
  HI: {
    heading: "विंडोज 11",
    description:
      "विंडोज 11 एक शांत और रचनात्मक स्थान प्रदान करता है जहां आप एक नए अनुभव के माध्यम से अपने जुनून को आगे बढ़ा सकते हैं। अपने पसंदीदा लोगों, समाचारों, गेमों और सामग्री से जुड़ने के नए तरीकों से एक नए सिरे से शुरू किए गए स्टार्ट मेनू से विंडोज एक प्राकृतिक तरीके से सोचने, व्यक्त करने और बनाने का स्थान है।",
  },
  TE: {
    heading: "విండోస్ 11",
    description:
      "విండోస్ 11 ప్రశాంతమైన మరియు సృజనాత్మక స్థలాన్ని అందిస్తుంది, ఇక్కడ మీరు మీ అభిరుచులను తాజా అనుభవం ద్వారా కొనసాగించవచ్చు. పునరుజ్జీవింపబడిన ప్రారంభ మెను నుండి మీకు ఇష్టమైన వ్యక్తులు, వార్తలు, ఆటలు మరియు కంటెంట్‌తో కనెక్ట్ అవ్వడానికి కొత్త మార్గాల వరకు విండోస్ అనేది సహజంగా ఆలోచించే, వ్యక్తీకరించే మరియు సృష్టించే ప్రదేశం.",
  },
  MS: {
    heading: "Windows 11",
    description:
      "Windows 11 menyediakan ruang yang tenang dan kreatif di mana anda boleh meneruskan minat anda melalui pengalaman baharu. Daripada menu Mula yang diperbaharui kepada cara baharu untuk berhubung dengan orang, berita, permainan dan kandungan kegemaran anda. Windows adalah tempat untuk berfikir, meluahkan dan mencipta secara semula jadi.",
  },
  ZH: {
    heading: "Windows 11",
    description:
      "Windows 11 提供了一个宁静而充满创意的空间，让您通过全新的体验追求自己的激情。从焕然一新的开始菜单到与您最喜爱的人、新闻、游戏和内容联系的新方式，Windows 是一个自然思考、表达和创造的地方。",
  },
};

const LandingSection = () => (
  <LanguageContext.Consumer>
    {(value) => {
      const getLandingSectionData = (activeLanguage) => {
        switch (activeLanguage) {
          case "EN":
            return landingSectionContent.EN;
          case "HI":
            return landingSectionContent.HI;
          case "TE":
            return landingSectionContent.TE;
          case "MS":
            return landingSectionContent.MS;
          case "ZH":
            return landingSectionContent.ZH;
          default:
            return null;
        }
      };
      const { activeLanguage } = value;
      const { heading, description } = getLandingSectionData(activeLanguage);

      return (
        <div className="bg-container">
          <div className="responsive-container">
            <div className="description-container">
              <h1 className="heading">{heading}</h1>
              <p className="description">{description}</p>
            </div>
            <img
              className="logo-white"
              src="https://assets.ccbp.in/frontend/react-js/windows-logo-white-img.png"
              alt="windows logo"
            />
          </div>
        </div>
      );
    }}
  </LanguageContext.Consumer>
);

export default LandingSection;
