import { TagFilterItemContainer, TagFilterButton } from "./styledComponents";

const TagFilterItem = (props) => {
  const { tagInfo, filterTasks, activeFilters } = props;
  const { optionId, displayText } = tagInfo;

  const doFilterTasks = () => {
    filterTasks(optionId);
  };

  return (
    <TagFilterItemContainer>
      <TagFilterButton
        onClick={doFilterTasks}
        $isActive={activeFilters.includes(optionId)}
      >
        {displayText}
      </TagFilterButton>
    </TagFilterItemContainer>
  );
};

export default TagFilterItem;
