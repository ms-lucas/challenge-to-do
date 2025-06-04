import { PlusCircleIcon } from '@phosphor-icons/react';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { Task as ITask } from '../../types/task';
import { EmptyList } from '../EmptyList';
import { Task } from '../Task';
import styles from './styles.module.css';

export function Tasks() {

  const [tasks, setTasks] = useState<ITask[]>([])
  const [description, setDescription] = useState<string>("")

  const isTaskDescriptionEmpty = description.length === 0
  const isTaskListEmpty = tasks.length === 0
  const createdTasksCount = tasks.length
  const completedTaskCount = countCompletedTasks()

  function deleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task.id !== taskId
    })

    setTasks(tasksWithoutDeletedOne)
  }

  function toggleTask(taskId: string) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted }
      }

      return task
    })

    setTasks(updatedTasks)
  }

  function countCompletedTasks() {
    return tasks.reduce((accumulator, task) => {
      if (task.isCompleted) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);
  }


  function handleNewTaskDescriptionChange(event: ChangeEvent<HTMLInputElement>) {
    setDescription(event.target.value)
  }

  function handleNewTask(event: FormEvent) {
    event.preventDefault()

    const newTask = {
      id: crypto.randomUUID(),
      description: description,
      isCompleted: false
    }

    setTasks((prev) => {
      return [...prev, newTask]
    })

    setDescription("")
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleNewTask} className={styles.addNewTaskForm}>
        <input onChange={handleNewTaskDescriptionChange} value={description} placeholder="Adicione uma nova tarefa" />
        <button disabled={isTaskDescriptionEmpty}>Criar <PlusCircleIcon /></button>
      </form>

      <div className={styles.header}>
        <div className={styles.createdTaks}>
          <p>Tarefas criadas</p>
          <span>{createdTasksCount}</span>
        </div>
        <div className={styles.completedTaks}>
          <p>Concluídas</p>
          <span>{isTaskListEmpty ? "0" : `${completedTaskCount} de ${createdTasksCount}`}</span>
        </div>
      </div>

      <div className={styles.taskList}>
        {
          isTaskListEmpty ? <EmptyList /> :
            tasks.map((task: ITask) => {
              return <Task key={task.id} task={task} onDelete={deleteTask} onToggleTask={toggleTask} />
            })
        }
      </div>
    </div>
  );
}
