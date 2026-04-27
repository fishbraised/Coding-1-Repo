export const taskReducers = (state, action) => {
  switch (action.type) {
    case "ADDTODO":
      const newTodo = {
        text: action.payload,
        uniqueId: Date.now(), // More reliable than length+1
        isChecked: false,
      };

      return [...state, newTodo];

    case "TOGGLETODO":
      const updatedTodo = state.map((todo) =>
        todo.uniqueId === action.payload
          ? { ...todo, isChecked: !todo.isChecked }
          : todo
      );

      return updatedTodo;

    case "DELETETODO":
      const updatedTodos = state.filter(
        (todo) => todo.uniqueId !== action.payload
      );

      return updatedTodos;

    case "SAVETODO":
      localStorage.setItem("todoList", JSON.stringify(state));
      return state;

    case "LOADTODOS":
      const storedTodos = localStorage.getItem("todoList");

      if (storedTodos) {
        return JSON.parse(storedTodos);
      }
      return state;

    default:
      return state;
  }
};
