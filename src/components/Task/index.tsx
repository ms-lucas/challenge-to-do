import { TrashIcon } from '@phosphor-icons/react'
import styles from './styles.module.css'
import { Input } from '../Input'

interface TaskProps {
    children: string;
    onDeleteTask: (taskId: string) => void;
}

export function Task({ children, onDeleteTask }: TaskProps) {

    return (
        <div className={styles.task}>
            <Input type="checkbox" />
            <span>{children}</span>
            <button onClick={() => onDeleteTask(children)}><TrashIcon className={styles.icon}/></button>
        </div>
    )
}