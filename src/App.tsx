import { Header } from "./components/Header";
import { Input } from "./components/Input";
import { PlusCircleIcon } from "@phosphor-icons/react";
import styles from "./App.module.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { Task } from "./components/Task";
import { EmptyList } from "./components/EmptyList";

interface Task {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [description, setDescription] = useState<string>("");

  function handleCreateNewTask(event: FormEvent) {
    const newTask: Task = {
      id: crypto.randomUUID(),
      description: description,
      isCompleted: false,
    };

    setTasks((prev) => {
      return [...prev, newTask];
    });

    setDescription("");

    event.preventDefault();
  }

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value);
  }

  function deleteTask(taskId: string) {
    setTasks((prev) => {
      return prev.filter((task) => task.id !== taskId);
    });
  }

  const isNewTaskDescriptionEmpty = description.length === 0;

  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <form onSubmit={handleCreateNewTask} className={styles.addTask}>
          <Input
            required
            onChange={handleCreateNewTaskChange}
            value={description}
            placeholder="Adicione uma nova tarefa"
          />
          <button
            className={styles.button}
            disabled={isNewTaskDescriptionEmpty}
          >
            Criar <PlusCircleIcon />
          </button>
        </form>
        <div className={styles.mainHeader}>
          <div className={styles.createdTasks}>
            Tarefas criadas
            <span>{tasks.length}</span>
          </div>
          <div className={styles.completedTasks}>
            Concluídas
            <span>0</span>
          </div>
        </div>
        <div className={styles.content}>
          {tasks.length === 0 ? (
            <EmptyList />
          ) : (
            tasks.map((task) => {
              return (
                <Task
                  onDeleteTask={() => {
                    deleteTask(task.id);
                  }}
                  key={task.id}
                >
                  {task.description}
                </Task>
              );
            })
          )}
        </div>
      </main>
    </div>
  );
}
