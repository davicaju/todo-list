import { FormEvent, useEffect, useState } from "react";

import { Header } from "./components/Header";
import { TodoList } from "./components/TodoList";
import { InputGroup } from "./components/InputGroup";

export interface Task {
  id: number;
  title: string;
  isCompleted: boolean;
}

export function App() {
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

  function handleCreateTask(e: FormEvent) {
    e.preventDefault();
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

  function handleCompletedTask(id: number) {
    const filteredTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );

    setTasks(filteredTasks);

    localStorage.setItem("tasks", JSON.stringify(filteredTasks));
  }

  return (
    <div className="App">
      <Header />
      <InputGroup
        value={value}
        setValue={setValue}
        onCreateTask={handleCreateTask}
      />
      <TodoList
        tasks={tasks}
        handleCompletedTask={handleCompletedTask}
        handleDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
