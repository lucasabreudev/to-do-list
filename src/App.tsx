import { PlusCircle } from 'phosphor-react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { TaskManager } from './components/TaskManager'

export function App() {

  return (
    <div>
      <Header />

      <main>
        <div className={styles.newTask}>
          <input type="text" placeholder='Adicione uma nova tarefa' />
          <button type="submit">
            Criar
            <PlusCircle size={16} />
          </button>
        </div>
        <div className={styles.wrapper} >

          <TaskManager />
        </div>
      </main>
    </div>
  )
}
