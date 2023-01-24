import { Task } from "../../App";

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
    <div>
      <div>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
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
              <button onClick={() => handleDeleteTask(task.id)}>remove</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
