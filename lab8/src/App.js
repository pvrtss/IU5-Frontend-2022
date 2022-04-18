import React from "react";
import "./App.css";
import Tasks from "./task-modules/Tasks";
import { useState, useEffect } from "react";
import TaskAdder from "./task-modules/TaskAdder";

function App() {
    const [tasks, setTasks] = useState([]);

    function loadTasks() {
        setTasks(JSON.parse(localStorage.getItem("tasks") || "[]"));
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    useEffect(() => loadTasks(), []);

    useEffect(() => saveTasks(), [tasks]);

    function toggleDone(id) {
        setTasks(
            tasks.map((task) => {
                if (task.id === id) {
                    task.done = !task.done;
                }
                return task;
            })
        );
        saveTasks();
    }

    function removeTask(id) {
        setTasks(tasks.filter((task) => task.id !== id));
        saveTasks();
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
            <div className="Logo">Задачи</div>
            <Tasks tasks={tasks} onRemove={removeTask} onEdit={editTask} onToggle={toggleDone} />
            <TaskAdder onCreate={createTask} />
        </div>
    );
}

export default App;
