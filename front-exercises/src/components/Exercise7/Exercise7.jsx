import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import "./Exercise7.css";
const initialValue = { name: "", important: "true", description: "" };

const Exercise7 = () => {
  const [tasks, setTasks] = useState([]);
  const [formValue, setFormValue] = useState(initialValue);
  const [selectedTask, setSelectedTask] = useState(null);


  console.log(formValue)
  const handleChange = (e) => {
    setFormValue((state) => {
      return {
        ...state,
        [e.target.name]: e.target.value,
      };
    });
  };
  const createTask = (value) => {
    console.log(value)
    return {
      ...value,
      id: uuid(),
      date: Date.now(),
    };
  };

  const addTask = (value, e) => {
    e.preventDefault();
    if (!selectedTask) {
      setTasks((state) => [...state, createTask(value)]);
    } else {
      setTasks((state) =>
        state.map((task) => (task.id == selectedTask.id ? value : task))
      );
      setSelectedTask(null);
    }
    setFormValue(initialValue);
  };

  const deleteTask = (id) => {
    setTasks((state) => state.filter((task) => task.id != id));
  };

  const clearForm = (e) => {
    e.preventDefault();
    setFormValue(initialValue);
    selectedTask(null);
  };

  const editValue = (value) => {
    setSelectedTask(value);
    setFormValue(value);
  };

  return (
    <div>
      <form className="form-7">
        <input
          value={formValue.name}
          name="name"
          type="text"
          onChange={handleChange}
          className="form_field"
          placeholder="Enter name.."
        />
        <input
          value={formValue.description}
          name="description"
          type="text"
          onChange={handleChange}
          className="form_field"
          placeholder="Description..."
        />
        <select
          name="important"
          value={formValue.important}
          onChange={handleChange}
          id=""
          className="form_field"
        >
          <option value={true}>True</option>
          <option value={false}>False</option>
        </select>
        <button className="form_field" onClick={(e) => addTask(formValue, e)}>
          {" "}
          {selectedTask ? "Edit" : "Add"}
        </button>
        <button className="form_field" onClick={clearForm}>
          Clear
        </button>
      </form>
      <div className="task_wrapper">
      {tasks.map((el) => {
        console.log(el.important)
        return (
          <div className="tasks">
            <div className="tasks_data">
              <h3>{el.name}</h3>
              <h3>{el.date}</h3>
              <h3>{el.important == "true" ? "Important" : "Not Important"}</h3>
              <p>{el.description}</p>
            </div>
            <div className="tasks_btns">
              <button onClick={() => editValue(el)}>Editar</button>
              <button onClick={() => deleteTask(el.id)}>Eliminar</button>
            </div>
            
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Exercise7;
