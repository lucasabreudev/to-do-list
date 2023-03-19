import { Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
    return (
        <div className={styles.taskBox}>
            <input type='checkbox' />
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <button title='Deletar tarefa'>
                <Trash size={20} />
            </button>
        </div>
    )
}
