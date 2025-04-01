import { useState } from "react";
import styled from "./App.module.css";

import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { Tasks } from "./components/Tasks";

import "./global.css";

export interface TasksProps {
  id: number;
  content: string;
  publishedAt: Date;
  isCompleted: boolean;
}

export function App() {
  const [newTasks, setNewTasks] = useState<TasksProps[]>([]);
  // const tasks: TasksProps[] = [
  //   {
  //     id: 1,
  //     content:
  //       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  //     publishedAt: new Date(),
  //     isCompleted: true,
  //   },
  //   {
  //     id: 2,
  //     content:
  //       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  //     publishedAt: new Date(),
  //     isCompleted: false,
  //   },
  //   {
  //     id: 3,
  //     content:
  //       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  //     publishedAt: new Date(),
  //     isCompleted: false,
  //   },
  //   {
  //     id: 4,
  //     content:
  //       "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
  //     publishedAt: new Date(),
  //     isCompleted: true,
  //   },
  // ];

  function createTasks(content: TasksProps) {
    setNewTasks((state) => [...state, content]);
  }
  console.log(newTasks);
  return (
    <div className={styled.container}>
      <Header />
      <div className={styled.div}>
        <Input tasks={createTasks} />
      </div>
      <Tasks tasks={newTasks} updateTasks={setNewTasks} />
    </div>
  );
}
