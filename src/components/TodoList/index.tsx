import { BsTrash } from "react-icons/bs";

import { Task } from "../../App";

import "./styles.scss";

interface TodoListProps {
  tasks: Task[];
  handleCompletedTask: (id: number) => void;
  handleDeleteTask: (id: number) => void;
}

export function TodoList({
  tasks,
  handleCompletedTask,
  handleDeleteTask,
}: TodoListProps) {
  return (
    <div className="todoList">
      <ul>
        <h2>My tasks</h2>
        {tasks.map((task) => (
          <li key={task.id}>
            <div className="leftContent">
              <input
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => handleCompletedTask(task.id)}
              />

              <p
                style={
                  task.isCompleted ? { textDecoration: "line-through" } : {}
                }
              >
                {task.title}
              </p>
            </div>

            <BsTrash
              className="trashIcon"
              size={20}
              onClick={() => handleDeleteTask(task.id)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
