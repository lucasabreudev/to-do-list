import { Task, TaskType } from './Task';
import styles from './TaskList.module.css';

interface ITasks {
    tasks: TaskType[]
}
export function TaskList({ tasks }: ITasks) {
    return (
        <div className={styles.container}>
            {tasks.map(task => {
                return <Task task={task} />
            })}
        </div>
    )
}