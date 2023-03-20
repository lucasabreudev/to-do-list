import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export interface TaskProps {
    task: TaskType;
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}
export interface TaskType {
    id: string;
    title: string;
    done: boolean;
}

export function Task({ task, onCompleteTask, onDeleteTask }: TaskProps) {
    function handleCompleteTask() {
        onCompleteTask(task.id);
    }
    function handleDeleteTask() {
        onDeleteTask(task.id);
    }

    return (
        <div className={styles.taskBox}>
            <input onClick={handleCompleteTask} type='checkbox' />
            <p className={task.done ? styles.completedTask : ''}>
                {task.title}
            </p>
            <button onClick={handleDeleteTask} title='Deletar tarefa'>
                <Trash size={20} />
            </button>
        </div>
    )
}
