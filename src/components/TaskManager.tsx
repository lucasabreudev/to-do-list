import styles from './TaskManager.module.css';
import { PlusCircle } from 'phosphor-react';
import { EmptyList } from './EmptyList';
import { TaskList } from './TaskList';
import { TaskType } from './Task';
import { v4 as uuidv4 } from 'uuid';

const tasks: TaskType[] =
    [{
        id: uuidv4(),
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        done: true
    },
    {
        id: uuidv4(),
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        done: false
    }]


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
                    <strong className={styles.createdTasks}> Tarefas criadas <span>{tasks.length}</span> </strong>
                    <strong className={styles.completedTasks}> Concluídas <span>0</span> </strong>
                </header>
                {tasks.length > 0 ? <TaskList tasks={tasks} /> : <EmptyList />}
            </div>
        </article>
    )
}