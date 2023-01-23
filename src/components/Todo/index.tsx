import { useEffect, useState } from "react";
import { Header } from "../Header";

interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function Todo() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    function loadTasksFromLocalStorage() {
      const localStorageTasks = localStorage.getItem("tasks");

      if (localStorageTasks) {
        setTasks(JSON.parse(localStorageTasks));
      }
    }

    loadTasksFromLocalStorage();
  }, []);

  function handleCreateTask() {
    if (!value) {
      return;
    }

    setValue("");

    const newTask = {
      id: tasks.length + 1,
      title: value,
      isCompleted: false,
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

  function handleCompleteTask(id: number) {
    const filteredTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(filteredTasks);

    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }

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
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleCompleteTask(task.id)}
              />

              <p
                style={
                  task.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {task.title}
              </p>
              <button onClick={() => handleDeleteTask(task.id)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
