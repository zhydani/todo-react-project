import styles from './Task.module.css'

import { Trash } from 'phosphor-react'

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
          <header>
            <button onClick={handleDeleteTask} title="Deletar tarefa">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>
      </div>
    </div>
  )
}
