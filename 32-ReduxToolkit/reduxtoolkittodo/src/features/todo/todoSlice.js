import { createSlice, nanoid } from "@reduxjs/toolkit";

const loadFromLocalStorage = () => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
};

const initialState = loadFromLocalStorage();

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: nanoid(), text: action.payload });
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.find((t) => t.id === id);
      if (todo) todo.text = newText;
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    deleteAllTodos: () => {
      return [];
    },
  },
});

export const { addTodo, updateTodo, deleteTodo, deleteAllTodos } =
  todoSlice.actions;
export default todoSlice.reducer;
