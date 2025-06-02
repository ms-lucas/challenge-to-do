import { ClipboardTextIcon } from "@phosphor-icons/react";

import styles from "./styles.module.css";

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <ClipboardTextIcon size={56} />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}
