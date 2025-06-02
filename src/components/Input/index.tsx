import type { InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function Input({type, ...props}: InputProps) {
    console.log(type)
    return (
        <input className={type === "checkbox" ? styles.checkbox : styles.input} {...props}/>
    )
}