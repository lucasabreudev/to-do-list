import styles from './EmptyList.module.css';
import clipboard from '../assets/clipboard.svg';

export function EmptyList() {
    return (
        <div>
            <div className={styles.emptyList}>
                <img src={clipboard} alt="" />
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}
