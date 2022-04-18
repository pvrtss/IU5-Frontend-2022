import React, { useState } from "react";
import "../styles/TaskAdder.css";

const TaskAdder = ({ onCreate }) => {
    const [taskInput, setTaskInput] = useState("");
    return (
        <div className="task-adder">
            <span class="material-icons grey">add</span>
            <textarea
                type="text"
                placeholder="Добавьте задачу..."
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                onBlur={(e) => {
                    e.preventDefault();
                    taskInput.trim().length ? onCreate(e.target.value) : console.log("xd");
                    setTaskInput("");
                }}
                onKeyPress={(e) => {
                    if (e.key.toLowerCase() === "enter") {
                        e.preventDefault();
                        e.target.blur();
                        e.target.focus();
                        setTaskInput("");
                    }
                }}
                className="add-area"
            />
        </div>
    );
};

export default TaskAdder;
