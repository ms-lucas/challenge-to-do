import { Header } from "./components/Header";

import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.wrapper}>
      <Header/>
      <main className={styles.main}>MAIN</main>
    </div>
  )
}

