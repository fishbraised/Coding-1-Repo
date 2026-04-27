import {
  ListedCountryItemCon,
  ListedCountryText,
  ListedCountryVisitBtn,
} from "./styledComponents";

const ListedCountryItem = (props) => {
  const { countryInfo, updateCountryVisibility } = props;
  const { id, name, isVisited } = countryInfo;

  const onUpdateCountryVisibility = () => updateCountryVisibility(id);

  return (
    <ListedCountryItemCon>
      <ListedCountryText>{name}</ListedCountryText>
      <ListedCountryVisitBtn
        onClick={onUpdateCountryVisibility}
        isVisited={isVisited}
        disabled={isVisited}
      >
        {isVisited ? "Visited" : "Visit"}
      </ListedCountryVisitBtn>
    </ListedCountryItemCon>
  );
};

export default ListedCountryItem;
