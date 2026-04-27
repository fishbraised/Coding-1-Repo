import LanguageContext from "../../context/LanguageContext";

import "./index.css";

const newWaysToConnectContent = {
  EN: {
    heading: "New ways to connect",
    description:
      "Connect instantly to the people you care about right from your desktop with Microsoft Teams. Call or chat for free, no matter what device they’re on.",
  },
  HI: {
    heading: "कनेक्ट करने के नए तरीके",
    description:
      "माइक्रोसॉफ्ट टीमों के साथ सीधे अपने डेस्कटॉप से ​​उन लोगों से तुरंत कनेक्ट हों जिनकी आप परवाह करते हैं। कॉल करें या निःशुल्क चैट करें—चाहे वे किसी भी डिवाइस पर हों।",
  },
  TE: {
    heading: "కనెక్ట్ చేయడానికి కొత్త మార్గాలు",
    description:
      "మైక్రోసాఫ్ట్ బృందాలతో మీ డెస్క్‌టాప్ నుండి మీరు శ్రద్ధ వహించే వ్యక్తులతో తక్షణమే కనెక్ట్ అవ్వండి. అవి ఏ పరికరంలో ఉన్నా సరే ఉచితంగా కాల్ చేయండి లేదా చాట్ చేయండి",
  },
  MS: {
    heading: "Cara baharu untuk berhubung",
    description:
      "Berhubung serta-merta dengan orang yang anda sayangi terus dari desktop anda dengan Microsoft Teams. Buat panggilan atau sembang secara percuma, tidak kira peranti yang mereka gunakan.",
  },
  ZH: {
    heading: "全新的连接方式",
    description:
      "通过 Microsoft Teams，直接从您的桌面即时与您关心的人联系。无论他们使用何种设备，都可以免费拨打电话或聊天。",
  },
};

const NewWaysToConnect = () => (
  <LanguageContext.Consumer>
    {(value) => {
      const getNewWaysToConnectData = (activeLanguage) => {
        switch (activeLanguage) {
          case "EN":
            return newWaysToConnectContent.EN;
          case "HI":
            return newWaysToConnectContent.HI;
          case "TE":
            return newWaysToConnectContent.TE;
          case "MS":
            return newWaysToConnectContent.MS;
          case "ZH":
            return newWaysToConnectContent.ZH;
          default:
            return null;
        }
      };
      const { activeLanguage } = value;
      const { heading, description } = getNewWaysToConnectData(activeLanguage);

      return (
        <div className="new-ways-to-connect-container">
          <h1 className="new-ways-to-content-heading">{heading}</h1>
          <p className="new-ways-to-content-description">{description}</p>
        </div>
      );
    }}
  </LanguageContext.Consumer>
);

export default NewWaysToConnect;
