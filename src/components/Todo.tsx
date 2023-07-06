import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import styles from './Todo.module.css'
import { Task } from './Task'
import { PlusCircle } from 'phosphor-react'
import { EmptyList } from './EmptyList';

export function Todo() {
  const [tasks, setTasks] = useState([
    'Concluir desafio RocketSeat!'
  ]);

  const [newTaskText, setNewTaskText] = useState('')

  const [createdTasksCount, setCreatedTasksCount] = useState(1)

  function handleCrateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTaskText])
    setNewTaskText('')
    setCreatedTasksCount((state) => {
      return state + 1
    });
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('')
    setNewTaskText(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete
    })

    setTasks(tasksWithoutDeletedOne)
  }

  const isNewTaskEmpty = newTaskText.length === 0
  const isTaskListEmpty = tasks.length === 0

  return (
    <article className={styles.todo}>
      <form onSubmit={handleCrateNewTask} className={styles.todoForm}>
        <textarea
          name="task"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewTaskEmpty}>
            Criar 
            <PlusCircle size={24} className={styles.iconButton}/>
          </button>
        </footer>
      </form>

      <div className={styles.taskList}>
        <header className={styles.headerTaskList}>
          <div>
            <p className={styles.title}>Tarefas criadas</p>
            <p className={styles.counter}>{createdTasksCount}</p>
          </div>
          <div>
            <p className={styles.subTitle}>Concluídas</p>
            <p className={styles.counter}>0</p>
          </div>
        </header>
        {isTaskListEmpty ? (
          <EmptyList />
        ) : (
          <div>
            {tasks.map(task => (
              <Task key={task} content={task} onDeleteTask={deleteTask} />
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
