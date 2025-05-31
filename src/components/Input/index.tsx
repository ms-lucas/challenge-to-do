import type { InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input({...props}: InputProps) {
    return (
        <input className={styles.input} {...props}/>
    )
}