import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskManager } from './components/TaskManager'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper} >
        <main>
          <TaskManager />
        </main>

      </div>
    </div>
  )
}
