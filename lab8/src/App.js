import React from "react";
import "./App.css";
import Tasks from "./task-modules/Tasks";
import { useState, useEffect } from "react";
import TaskAdder from "./task-modules/TaskAdder";

function App() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => setTasks(JSON.parse(localStorage.getItem("tasks") || "[]")), []);

    useEffect(() => localStorage.setItem("tasks", JSON.stringify(tasks)), [tasks]);

    function toggleDone(id) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.done = !task.done;
                }
                return task;
            })
        );
    }

    function removeTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
    }

    function editTask(id, text) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.text = text;
                }
                return task;
            })
        );
    }

    function createTask(text) {
        setTasks(
            tasks.concat([
                {
                    id: Date.now(),
                    text: text,
                    done: false,
                },
            ])
        );
    }


    return (
        <div className="App">
            <div className="Header">
                <div className="Logo">Задачи</div>
                <button id="delete-all"  onClick={() => setTasks([])}>
                    <b>Удалить все</b>
                </button>
            </div>
            <Tasks tasks={tasks} onRemove={removeTask} onEdit={editTask} onToggle={toggleDone} />
            <TaskAdder onCreate={createTask} />
        </div>
    );
}

export default App;
