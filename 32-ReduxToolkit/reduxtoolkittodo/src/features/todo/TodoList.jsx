import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, deleteAllTodos } from "./todoSlice";
import TodoModal from "./TodoModal";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState("");
  const [editingTodo, setEditingTodo] = useState(null);

  const handleAdd = () => {
    if (input.trim()) {
      dispatch(addTodo(input));
      setInput("");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Todo List</h2>
      <input
        placeholder="new todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAdd}>add</button>
      <button onClick={() => dispatch(deleteAllTodos())}>delete all</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => setEditingTodo(todo)}>edit</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              delete
            </button>
          </li>
        ))}
      </ul>

      <TodoModal
        show={!!editingTodo}
        todo={editingTodo || {}}
        onClose={() => setEditingTodo(null)}
      />
    </div>
  );
};

export default TodoList;
