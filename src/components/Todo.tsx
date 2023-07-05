import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import styles from './Todo.module.css'
import { Task } from './Task';

export function Todo() {
  const [tasks, setTasks] = useState([
    'Concluir desafio RocketSeat!'
  ]);

  const [newTaskText, setNewTaskText] = useState('');

  function handleCrateNewTask(event: FormEvent) {
    event.preventDefault()

    setTasks([...tasks, newTaskText]);
    setNewTaskText('');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      return task !== taskToDelete;
    })

    setTasks(tasksWithoutDeletedOne);
  }

  const isNewTaskEmpty = newTaskText.length === 0;

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
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.taskList}>
        {tasks.map(task => {
          return (
            <Task
              key={task}
              content={task}
              onDeleteTask={deleteTask}
            />
          )
        })}
      </div>
    </article>
  )
}
