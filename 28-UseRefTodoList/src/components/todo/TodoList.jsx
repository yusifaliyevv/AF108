import React, { useState } from "react";
import styles from "./TodoList.module.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaTrash, FaPlus } from "react-icons/fa";
import { MdEdit } from "react-icons/md";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleAddTodo = () => {
    if (!input) {
      toast.error("To Do elave edin :)");
      return;
    }
    setTodos([
      ...todos,
      {
        text: input,
        done: false,
        dueDate: "",
      },
    ]);
    setInput("");
    toast.success("To Do elave olundu (^^)ｂ");
  };

  const handleToggleDone = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
    toast.info("To Do statusu deyisdi ( ͡~ ͜ʖ ͡° )");
  };

  const handleEdit = (index) => {
    const currentText = todos[index].text;
    const newText = prompt("Yeni To Do elave edin:", currentText);

    if (newText !== null && newText !== "") {
      const updated = [...todos];
      updated[index].text = newText;
      setTodos(updated);
      toast.success("To Do deyisdirildi (ー_ーゞ");
    } else if (newText !== null) {
      toast.error("Bos To Do elave etmek olmaz");
    }
  };

  const handleDeleteTodo = (index) => {
    const updated = todos.filter((_, i) => i !== index);
    setTodos(updated);
    toast.warn("To Do silindi ಠ_ಠ");
  };

  const handleDeleteAll = () => {
    setTodos([]);
    toast.warn("Butun To Dolar silindi ( ◐ o ◑ )");
  };

  const handleDateChange = (index, date) => {
    const updatedTodos = [...todos];
    updatedTodos[index].dueDate = date;
    setTodos(updatedTodos);
  };

  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;
  const completionRate = totalTodos ? (completedTodos / totalTodos) * 100 : 0;

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles.todoContainer}>
      <h1 className={styles.title}>TO DO LIST</h1>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="search To Do"
          className={styles.input}
        />
      </div>

      <div className={styles.inputWrapper}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleAddTodo();
            }
          }}
          placeholder="Add new To Do"
          className={styles.input}
        />
        <button onClick={handleAddTodo} className={styles.addButton}>
          <FaPlus />
        </button>
        <button onClick={handleDeleteAll} className={styles.deleteAllButton}>
          <FaTrash />
        </button>
      </div>

      <div className={styles.stats}>
        <p>total to do: {totalTodos}</p>
        <p>completed to do: {completedTodos}</p>
        <p>completion rate: {completionRate.toFixed(2)}%</p>
      </div>

      <ul className={styles.todoList}>
        {filteredTodos.map((todo, index) => (
          <li
            key={index}
            className={`${styles.todoItem} ${
              todo.done ? styles.done : styles.undone
            }`}
          >
            <span>{index + 1})</span>
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() => handleToggleDone(index)}
            />
            <span className={styles.todoText}>{todo.text}</span>

            <input
              type="date"
              value={todo.dueDate}
              onChange={(e) => handleDateChange(index, e.target.value)}
              className={styles.dateInput}
            />

            {!todo.done && (
              <button
                onClick={() => handleEdit(index, todo.text)}
                className={styles.editButton}
              >
                <MdEdit />
              </button>
            )}
            {todo.done && (
              <button
                onClick={() => handleDeleteTodo(index)}
                className={styles.singleDeleteButton}
              >
                <FaTrash />
              </button>
            )}
          </li>
        ))}
      </ul>

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar
        closeOnClick
        pauseOnHover
      />
    </div>
  );
};

export default TodoList;
