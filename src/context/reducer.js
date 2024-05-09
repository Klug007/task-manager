const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
      };
    case "DELETE":
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload),
      };
    case "FINISHED":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload
            ? { ...task, checked: !task.checked }
            : task
        ),
      };
    case "LOAD_TASKS":
      return {
        ...state,
        tasks: action.payload,
      };
    default:
      return state;
  }
};

export default Reducer;
