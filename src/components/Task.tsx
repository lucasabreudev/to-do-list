import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskProps {
    task: TaskType;
}
export interface TaskType {
    id: string;
    title: string;
    done: boolean;
}

export function Task({ task }: TaskProps) {
    return (
        <div className={styles.taskBox}>
            <input type='checkbox' />
            <p>
                {task.title}
            </p>
            <button title='Deletar tarefa'>
                <Trash size={20} />
            </button>
        </div>
    )
}
