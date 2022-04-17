import React from "react";
import "./Task";

const Tasks = ({ tasks }) => {
    return (
        <div className="Tasks">
            {tasks.map((task) => {
                return <Task task={task} key={task.id} onChange={props.onToggle} />;
            })}
        </div>
    );
};

export default Tasks;
