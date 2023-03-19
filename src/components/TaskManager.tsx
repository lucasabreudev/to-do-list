import styles from './TaskManager.module.css';
import { PlusCircle } from 'phosphor-react';
import { EmptyList } from './EmptyList';
import { Task } from './Task';

export function TaskManager() {
    return (
        <article>
            <div className={styles.newTask}>
                <input type="text" placeholder='Adicione uma nova tarefa' />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </div>

            <div className={styles.taskList}>
                <header>
                    <strong className={styles.createdTasks}> Tarefas criadas <span>0</span> </strong>
                    <strong className={styles.completedTasks}> Concluídas <span>0</span> </strong>
                </header>
                {true ? <Task /> : <EmptyList />}
            </div>
        </article>
    )
}