import { CountItemContainer, CountInfo } from "./styledComponents";

const CountItem = (props) => {
  const { countItemInfo } = props;
  const { text } = countItemInfo;

  return (
    <CountItemContainer>
      <CountInfo>{`${text}: ${text.length}`}</CountInfo>
    </CountItemContainer>
  );
};

export default CountItem;
