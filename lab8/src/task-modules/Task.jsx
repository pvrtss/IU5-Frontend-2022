import React, { useState } from "react";
import "../styles/Task.css";

const Task = ({ task, onRemove, onEdit, onToggle }) => {
    const [taskInput, setTaskInput] = useState(task.text);
    const classes = ["task"];
    if (task.done) classes.push("done");
    return (
        <div className={classes.join(" ")}>
            <div className="task-left">
                <input
                    type="checkbox"
                    checked={task.done}
                    onChange={() => {
                        onToggle(task.id);
                    }}
                />
                <textarea
                    type="text"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                    onBlur={(e) => {
                        taskInput.trim().length ? onEdit(task.id, taskInput) : onRemove(task.id);
                    }}
                    onKeyPress={(e) => {
                        if (e.key.toLowerCase() === "enter") {
                            e.target.blur();
                        }
                    }}
                />
            </div>
            
            <button type="button" onClick={() => onRemove(task.id)}>
                <span class="material-icons crimson">delete_forever</span>
            </button>
        </div>
    );
};

export default Task;
