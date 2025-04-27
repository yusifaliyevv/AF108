import './App.css';
import { useReducer, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteForever, MdEdit } from "react-icons/md";

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_TODO":
            return {
                ...state,
                form: {
                    ...state.form,
                    [action.name]: action.value,
                },
            };
        case "ADD_TODO":
            if (!state.form.name || !state.form.surname) return state;
            const newUser = {
                id: uuidv4(),
                name: state.form.name,
                surname: state.form.surname,
            };
            return {
                ...state,
                users: [...state.users, newUser],
                form: { name: "", surname: "" },
            };
        case "UPDATE_TODO":
            const updatedUsers = state.users.map(user =>
                user.id === action.payload.id
                    ? { ...user, ...action.payload }
                    : user
            );
            return { ...state, users: updatedUsers };
        case "DELETE_TODO":
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.id),
            };
        case "RESET_TODO":
            return { ...state, users: [] };
        default:
            return state;
    }
};

function App() {
    const [state, dispatch] = useReducer(reducer, {
        form: { name: "", surname: "" },
        users: [],
    });

    const [editUser, setEditUser] = useState(null);

    const InputChange = (e) => {
        dispatch({ type: "SET_TODO", name: e.target.name, value: e.target.value });
    };

    const openEditModal = (user) => {
        setEditUser(user);
    };

    return (
        <div>
            <h1>User Management</h1>
            <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={state.form.name}
                onChange={InputChange}
            />
            <input
                type="text"
                name="surname"
                placeholder="Enter surname"
                value={state.form.surname}
                onChange={InputChange}
            />
            <button onClick={() => dispatch({ type: "ADD_TODO" })}>Add User</button>
            <button onClick={() => dispatch({ type: "RESET_TODO" })}>Reset All</button>
            <ul>
                {state.users.map(user => (
                    <li key={user.id}>
                        {user.name} {user.surname}{" "}
                        <MdEdit size={30} onClick={() => openEditModal(user)} />
                        <MdDeleteForever size={30} onClick={() => dispatch({ type: "DELETE_TODO", id: user.id })} />
                    </li>
                ))}
            </ul>
            {editUser && (
                <div className="modal">
                    <h2>Edit User</h2>
                    <input
                        type="text"
                        name="name"
                        value={editUser.name}
                        onChange={(e) =>
                            setEditUser({ ...editUser, name: e.target.value })
                        }
                    />
                    <input
                        type="text"
                        name="surname"
                        value={editUser.surname}
                        onChange={(e) =>
                            setEditUser({ ...editUser, surname: e.target.value })
                        }
                    />
                    <button
                        onClick={() => {
                            dispatch({
                                type: "UPDATE_TODO",
                                payload: { id: editUser.id, ...editUser },
                            });
                            setEditUser(null);
                        }}
                    >
                        Save
                    </button>
                    <button onClick={() => setEditUser(null)}>Cancel</button>
                </div>
            )}
        </div>
    );
}

export default App;
