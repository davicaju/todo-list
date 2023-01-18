import { useState } from "react";

export function Todo() {
  const databaseTasks = [
    {
      id: 0,
      title: "Watch a movie on English",
    },
    {
      id: 1,
      title: "Learn Clean Code",
    },
    {
      id: 2,
      title: "Make a coffee",
    },
  ];

  const [tasks, setTasks] = useState(databaseTasks);
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

    setTasks((oldState) => [...oldState, newTask]);
  }

  function handleDeleteTask(id: number) {
    setTasks(tasks.filter((task) => id !== task.id));
  }

  return (
    <div>
      <h1>To.do</h1>
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
