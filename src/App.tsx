import { Header } from './components/Header'
import { Todo } from './components/Todo'
import './global.css'
import styles from './App.module.css'

function App() {

  return (
    <div>
      <Header />
      <div className={styles.content}>
        <Todo />
      </div>
    </div>
  )
}

export default App
