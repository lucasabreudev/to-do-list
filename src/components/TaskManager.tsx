import styles from './TaskManager.module.css';
import clipboard from '../assets/clipboard.svg';

export function TaskManager() {
    return (
        <article className={styles.taskManager}>
            <header>
                <strong className={styles.createdTasks}> Tarefas criadas <span>0</span> </strong>
                <strong className={styles.completedTasks}> Concluídas <span>0</span> </strong>
            </header>
            <main>
                <img src={clipboard} alt="" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </main>
        </article>
    )
}