import {
  MainContainer,
  LeftContent,
  MainTitle,
  Form,
  FormLabel,
  FormField,
  FormSelect,
  FormOption,
  AddButton,
  RightContent,
  SubTitle,
  TagsFilterList,
  NoTasksContainer,
  NoTasksText,
  TasksList,
} from "./styledComponents";

import TagFilterItem from "../TagFilterItem";
import TaskItem from "../TaskItem";

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const tagsList = [
  {
    optionId: "HEALTH",
    displayText: "Health",
  },
  {
    optionId: "EDUCATION",
    displayText: "Education",
  },
  {
    optionId: "ENTERTAINMENT",
    displayText: "Entertainment",
  },
  {
    optionId: "SPORTS",
    displayText: "Sports",
  },
  {
    optionId: "TRAVEL",
    displayText: "Travel",
  },
  {
    optionId: "OTHERS",
    displayText: "Others",
  },
];

const MyTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [activeFilters, setActiveFilters] = useState([]);
  const [taskField, setTaskField] = useState("");
  const [taskSelect, setTaskSelect] = useState(tagsList[0].displayText);

  const addTask = (event) => {
    event.preventDefault();

    setTasks((prevTasks) => [
      ...prevTasks,
      { id: uuidv4(), taskText: taskField, taskTag: taskSelect },
    ]);
  };

  const renderTasks = () => {
    if (activeFilters.length === 0) {
      return tasks.map((eachObj) => (
        <TaskItem key={eachObj.id} taskInfo={eachObj} />
      ));
    } else {
      return tasks.map((eachObj) => {
        if (activeFilters.includes(eachObj.taskTag.toUpperCase())) {
          return <TaskItem key={eachObj.id} taskInfo={eachObj} />;
        }
      });
    }
  };

  const filterTasks = (optionId) => {
    if (activeFilters.includes(optionId)) {
      const updatedFilters = activeFilters.filter(
        (eachItem) => eachItem !== optionId
      );
      setActiveFilters(updatedFilters);
    } else {
      setActiveFilters((prevState) => [...prevState, optionId]);
    }
  };

  const updateTaskField = (event) => setTaskField(event.target.value);

  const updateTaskSelect = (event) => {
    setTaskSelect(event.target.value);
  };

  return (
    <MainContainer>
      <LeftContent>
        <MainTitle>Create a task!</MainTitle>

        <Form onSubmit={addTask}>
          <FormLabel htmlFor="task">Task</FormLabel>
          <FormField
            placeholder="Enter the task here"
            id="task"
            onChange={updateTaskField}
            value={taskField}
          />

          <FormLabel htmlFor="tags">Tags</FormLabel>
          <FormSelect id="tags" onChange={updateTaskSelect} value={taskSelect}>
            {tagsList.map((eachObj) => (
              <FormOption key={eachObj.optionId} value={eachObj.displayText}>
                {eachObj.displayText}
              </FormOption>
            ))}
          </FormSelect>

          <AddButton type="submit">Add Task</AddButton>
        </Form>
      </LeftContent>

      <RightContent>
        <SubTitle>Tags</SubTitle>
        <TagsFilterList>
          {tagsList.map((eachObj) => (
            <TagFilterItem
              key={eachObj.optionId}
              tagInfo={eachObj}
              filterTasks={filterTasks}
              activeFilters={activeFilters}
            />
          ))}
        </TagsFilterList>

        <SubTitle>Tasks</SubTitle>
        {/* <NoTasksContainer>
          <NoTasksText>No Tasks Added Yet</NoTasksText>
        </NoTasksContainer> */}
        <TasksList>{renderTasks()}</TasksList>
      </RightContent>
    </MainContainer>
  );
};

export default MyTasks;
