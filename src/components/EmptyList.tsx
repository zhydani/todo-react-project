import styles from './EmptyList.module.css'
import { ClipboardText } from 'phosphor-react'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <ClipboardText size={50} className={styles.clipboard} />
      <p className={styles.firstParagraph}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}
