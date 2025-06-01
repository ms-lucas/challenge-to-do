import { TrashIcon } from '@phosphor-icons/react'
import styles from './styles.module.css'

interface TaskProps {
    children: string
}

export function Task({ children }: TaskProps) {
    return (
        <div className={styles.task}>
            <input type="checkbox" />
            <span>{children}</span>
            <button><TrashIcon /></button>
        </div>
    )
}