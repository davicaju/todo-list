import { useEffect, useState } from "react";
import { Header } from "../Header";

interface Task {
  id: number;
  title: string;
}

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState("");

  function handleCreateTask() {
    if (!value) {
      return;
    }

    setValue("");

    const newTask = {
      id: tasks.length + 1,
      title: value,
    };

    const updateTasks = [...tasks, newTask];

    setTasks(updateTasks);

    localStorage.setItem("tasks", JSON.stringify(updateTasks));
  }

  function handleDeleteTask(id: number) {
    const filteredTasks = tasks.filter((task) => id !== task.id);

    setTasks(filteredTasks);

    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }

  useEffect(() => {
    function loadTasksFromLocalStorage() {
      const localStorageTasks = localStorage.getItem("tasks");

      if (localStorageTasks) {
        setTasks(JSON.parse(localStorageTasks));
      }
    }

    loadTasksFromLocalStorage();
  }, []);

  return (
    <div>
      <Header />
      <div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={handleCreateTask}>ADD</button>
      </div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}{" "}
              <button onClick={() => handleDeleteTask(task.id)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
