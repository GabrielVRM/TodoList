import { ChangeEvent, useState } from "react";
import { GoPlus } from "react-icons/go";
import { TasksProps } from "../../App";
import styled from "./styles.module.css";
interface NewTasks {
  tasks: (newTasks: TasksProps) => void;
}

export function Input({ tasks }: NewTasks) {
  const [task, setTask] = useState("");
  const [ids, setIds] = useState(1);

  function handleTasks(event: ChangeEvent<HTMLInputElement>) {
    setTask(event.target.value);
  }

  function handleCreateTasks() {
    setIds((state) => state + 1);

    const createTasks = {
      id: ids,
      content: task,
      publishedAt: new Date(),
      isCompleted: false,
    };
    tasks(createTasks);
    setTask("");
  }

  return (
    <>
      <input
        className={styled.input}
        placeholder="Adicione uma nova tarefa"
        onChange={handleTasks}
        value={task}
      ></input>
      <button onClick={handleCreateTasks} disabled={task.length === 0}>
        <p> Criar</p>
        <span>
          <GoPlus />
        </span>
      </button>
    </>
  );
}
