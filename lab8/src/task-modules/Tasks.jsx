import React from "react";
import Task from "./Task";
import '../styles/Tasks.css'; 

const Tasks = ({ tasks, onEdit, onRemove, onToggle }) => {
    return (
        <div className="Tasks">
            {tasks.map((task) => {
                return <Task key={task.id} task={task} onEdit={onEdit} onRemove={onRemove} onToggle={onToggle} />;
            })}
        </div>
    );
};

export default Tasks;
