import styled from "./styles.module.css";
import { LiaTasksSolid } from "react-icons/lia";
import { GoTrash } from "react-icons/go";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

import { TasksProps } from "../../App";

interface TasksComponentProps {
  tasks: TasksProps[];
  updateTasks: React.Dispatch<React.SetStateAction<TasksProps[]>>;
}

interface tasksNewStatus {
  id: number;
  content: string;
  publishedAt: Date;
  isCompleted: boolean;
}

export function Tasks({ tasks, updateTasks }: TasksComponentProps) {
  function handleRemovedTask(content: number) {
    const removedTasks = tasks.filter((task) => task.id !== content);
    updateTasks(removedTasks);
  }

  function handleIsCompleted(taskStatus: tasksNewStatus) {
    handleRemovedTask(taskStatus.id);
    const newTasksStatus = {
      id: taskStatus.id,
      content: taskStatus.content,
      publishedAt: taskStatus.publishedAt,
      isCompleted: !taskStatus.isCompleted,
    };

    const verify = taskStatus.id === newTasksStatus.id ? true : false;
    updateTasks((state) => [...state, newTasksStatus]);
  }

  const tasksCompleted = tasks.reduce(
    (acc, sum) => (sum.isCompleted === true ? acc + 1 : acc),
    0
  );

  return (
    <>
      <div className={styled.div}>
        <div className={styled.tasksFinishedAndCreated}>
          <div className={styled.created}>
            <span>Tarefas criadas</span>
            <p className={styled.contador}>{tasks.length}</p>
          </div>
          <div className={styled.finished}>
            <span>Concluídas</span>
            <p
              className={styled.contador}
            >{`${tasksCompleted} de ${tasks.length}`}</p>
          </div>
        </div>

        <main
          className={
            tasks.length > 0 ? styled.content : styled.contentBorderIsTasks
          }
        >
          {tasks && (
            <div>
              {tasks.map((content) => {
                console.log(content.isCompleted);
                return (
                  <div
                    key={content.id}
                    className={
                      content.isCompleted
                        ? styled.tasksCompleted
                        : styled.tasksDefault
                    }
                  >
                    {content.isCompleted ? (
                      <FaCircleCheck
                        className={styled.circleUncheck}
                        size={16}
                        onClick={() => handleIsCompleted(content)}
                      />
                    ) : (
                      <FaRegCircle
                        className={styled.circleCheck}
                        size={16}
                        onClick={() => handleIsCompleted(content)}
                      />
                    )}
                    <p
                      className={
                        content.isCompleted ? styled.isCompleted : undefined
                      }
                    >
                      {content.content}
                    </p>
                    <GoTrash
                      className={styled.trash}
                      size={16}
                      onClick={() => handleRemovedTask(content.id)}
                    />
                  </div>
                );
              })}
            </div>
          )}
          {tasks.length === 0 && (
            <>
              <LiaTasksSolid size={70} />
              <p className={styled.noTasks}>
                <strong>
                  Você ainda não tem tarefas cadastradas Crie tarefas e organize
                </strong>
                seus itens a fazer
              </p>
            </>
          )}
        </main>
      </div>
    </>
  );
}
