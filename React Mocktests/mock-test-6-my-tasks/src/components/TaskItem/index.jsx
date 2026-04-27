import { TaskItemContainer, TaskText, TaskTag } from "./styledComponents";

const TaskItem = (props) => {
  const { taskInfo } = props;
  const { taskText, taskTag } = taskInfo;

  return (
    <TaskItemContainer>
      <TaskText>{taskText}</TaskText>
      <TaskTag>{taskTag}</TaskTag>
    </TaskItemContainer>
  );
};

export default TaskItem;
