import {
  VisitedCountryItemCon,
  VisitedCountryImg,
  Row,
  VisitedCountryText,
  VisitedCountryRemoveBtn,
} from "./styledComponents";

const VisitedCountryItem = (props) => {
  const { countryInfo, updateCountryVisibility } = props;
  const { id, name, imageUrl } = countryInfo;

  const onUpdateCountryVisibility = () => updateCountryVisibility(id);

  return (
    <VisitedCountryItemCon>
      <VisitedCountryImg src={imageUrl} />

      <Row>
        <VisitedCountryText>{name}</VisitedCountryText>
        <VisitedCountryRemoveBtn onClick={onUpdateCountryVisibility}>
          Remove
        </VisitedCountryRemoveBtn>
      </Row>
    </VisitedCountryItemCon>
  );
};

export default VisitedCountryItem;
