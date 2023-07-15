import React from "react";
import { useNavigate } from "react-router-dom";

const TaskCard = ({ task }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/tasks/${id}`);
  };

  return (
    <div style={{ background: "black" }} onClick={() => handleClick(task.id)}>
      <h1>{task.title}</h1>
      <h1>{task.description}</h1>
      <hr />
    </div>
  );
};

export default TaskCard;
