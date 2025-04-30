import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "./todoSlice";

const TodoModal = ({ show, onClose, todo }) => {
  const [text, setText] = useState(todo.text);
  const dispatch = useDispatch();

  const styles = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    modal: {
      backgroundColor: "white",
      padding: 20,
      borderRadius: 8,
      display: "flex",
      flexDirection: "column",
      gap: 10,
    },
  };

  if (!show) return null;

  const handleUpdate = () => {
    dispatch(updateTodo({ id: todo.id, newText: text }));
    onClose();
  };

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>edit todo</h3>
        <input value={text} onChange={(e) => setText(e.target.value)} />
        <div>
          <button onClick={handleUpdate}>save</button>
          <button onClick={onClose}>close</button>
        </div>
      </div>
    </div>
  );
};

export default TodoModal;
