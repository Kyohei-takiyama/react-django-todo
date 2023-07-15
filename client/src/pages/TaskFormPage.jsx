import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import {
  createTask,
  deleteTask,
  getTaskById,
  updateTask,
} from "../api/task.api";
import { useEffect, useState } from "react";

const TaskFormPage = () => {
  const [task, setTask] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmitSave = handleSubmit(async (data) => {
    if (id) {
      await updateTask(id, data);
    } else {
      await createTask(data);
    }
    navigate("/tasks");
  });

  const handleDelete = async (id) => {
    await deleteTask(id);
    navigate("/tasks");
  };

  useEffect(() => {
    if (id) {
      const loadTask = async (taskId) => {
        const {
          data: { title, description },
        } = await getTaskById(taskId);
        setValue("title", title);
        setValue("description", description);
      };
      loadTask(id);
    }
  }, [id, setValue]);

  return (
    <div>
      <form onSubmit={onSubmitSave}>
        <input
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}
        <textarea
          rows="3"
          placeholder="Description"
          value={task.description}
          {...register("description", { required: true })}
        ></textarea>
        {errors.description && <span>This field is required</span>}
        <button>Save</button>
        {id && <button onClick={() => handleDelete(id)}>Delete</button>}
      </form>
    </div>
  );
};

export default TaskFormPage;
