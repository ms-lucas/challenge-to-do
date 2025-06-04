import { TrashIcon } from "@phosphor-icons/react";

import styles from "./styles.module.css";
import type { Task as ITask } from "../../types/task";

interface TaskProps {
  task: ITask
  onDelete: (taskId: string) => void
  onToggleTask: (taskId: string) => void
}

export function Task({ task, onDelete, onToggleTask }: TaskProps) {
  return (
    <div className={styles.task}>
      <input onChange={() => { onToggleTask(task.id) }} type="checkbox" />
      <span className={task.isCompleted ? styles.completedTask : ""}>{task.description}</span>
      <button>
        <TrashIcon onClick={() => { onDelete(task.id) }} className={styles.icon} />
      </button>
    </div>
  );
}
