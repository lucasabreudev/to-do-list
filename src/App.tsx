import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskManager } from './components/TaskManager'

export function App() {

  return (
    <div>
      <Header />
      <main>
        <div className={styles.wrapper} >
          <TaskManager />
        </div>
      </main>
    </div>
  )
}
