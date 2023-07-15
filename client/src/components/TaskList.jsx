import { useEffect, useState } from "react";

import { getAllTasks } from "../api/task.api";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    const loadTasks = async () => {
      const res = await getAllTasks();
      setTasks(res.data);
    };
    loadTasks();
  }, []);

  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
