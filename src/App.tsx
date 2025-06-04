import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";

import styles from './App.module.css'


export function App() {
  return (
    <div className={styles.container}>
      <Header />
      <Tasks />
    </div>
  )
}
