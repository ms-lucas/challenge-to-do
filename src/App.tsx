import { Header } from "./components/Header";

import styles from './App.module.css'
import { Input } from "./components/Input";

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <Input placeholder="Adicione uma nova tarefa"/>
      </main>
    </div>
  )
}

