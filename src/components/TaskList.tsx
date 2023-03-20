import { Task, TaskType } from './Task';
import styles from './TaskList.module.css';

interface ITasks {
    tasks: TaskType[]
    onCompleteTask: (id: string) => void;
    onDeleteTask: (id: string) => void;
}
export function TaskList({ tasks, onCompleteTask, onDeleteTask }: ITasks) {
    return (
        <div className={styles.container}>
            {tasks.map(task => {
                return (
                    <Task
                        key={task.id}
                        task={task}
                        onCompleteTask={onCompleteTask}
                        onDeleteTask={onDeleteTask}
                    />
                )
            })}
        </div>
    )
}