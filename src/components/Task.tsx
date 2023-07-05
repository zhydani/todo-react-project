import styles from './Task.module.css'
import { useState } from 'react'
import { Trash, Circle, CheckCircle } from 'phosphor-react'

interface TaskProps {
  content: string
  onDeleteTask: (task: string) => void
}

export function Task({ content, onDeleteTask }: TaskProps) {

  const [isChecked, setIsChecked] = useState(false);

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleCheckTask() {
    const check = isChecked
    if (check) {
      setIsChecked(false)
    }else{
      setIsChecked(true)
    }
  }

  return (
    <div className={styles.task}>
      <div className={styles.taskBox}>
        <div className={styles.taskContent}>
          <button onClick={handleCheckTask} title="Concluir tarefa" className={styles.checkButton}>
            {isChecked ? 
              <CheckCircle weight='fill' size={24} className={styles.checkCircle} /> :
              <Circle size={24} className={styles.circle} />
            }
          </button>
          <p className={isChecked ? styles.strikethrough : styles.notStyle }>{content}</p>
          <button onClick={handleDeleteTask} title="Deletar tarefa" className={styles.deleteButton}>
            <Trash size={24} />
          </button>
        </div>
      </div>
    </div>
  )
}
