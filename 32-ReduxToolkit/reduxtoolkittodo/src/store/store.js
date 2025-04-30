import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

const saveToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state.todos));
};

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

store.subscribe(() => {
  saveToLocalStorage(store.getState());
});
