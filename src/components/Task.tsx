import styles from './Task.module.css'

import { Trash, Circle } from 'phosphor-react'

interface TaskProps {
  content: string
  onDeleteTask: (task: string) => void
}

export function Task({ content, onDeleteTask }: TaskProps) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <div className={styles.taskContent}>
          <button title="Concluir tarefa" className={styles.taskButton}>
            <Circle size={24} />
          </button>
          <p>{content}</p>
          <button onClick={handleDeleteTask} title="Deletar tarefa" className={styles.deleteButton}>
            <Trash size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
