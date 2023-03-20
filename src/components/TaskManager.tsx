import styles from './TaskManager.module.css';
import { PlusCircle } from 'phosphor-react';
import { EmptyList } from './EmptyList';
import { TaskList } from './TaskList';
import { TaskType } from './Task';
import { v4 as uuidv4 } from 'uuid';
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

export function TaskManager() {
    const [tasks, setTasks] = useState<TaskType[]>([]);

    const [newTaskText, setNewTaskText] = useState('');

    function handleCreateNewTask(event: FormEvent) {
        event.preventDefault();

        const newTask: TaskType = {
            id: uuidv4(),
            title: newTaskText,
            done: false
        }

        setTasks([...tasks, newTask]);
        setNewTaskText('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTaskText(event.target.value);
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    function completeTask(id: string) {
        const newTasks = tasks.map(task => {
            if (task.id === id) {
                return {
                    ...task,
                    done: !task.done
                }
            }
            return task;
        })
        setTasks(newTasks)
    }

    function deleteTask(id: string) {
        const tasksWithoutDeletedOne = tasks.filter(task => {
            return task.id !== id
        });

        setTasks(tasksWithoutDeletedOne);
    }

    const completedTasksCounter = tasks.filter(task => task.done).length;

    return (
        <article>
            <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                <input
                    type="text"
                    name="task"
                    placeholder='Adicione uma nova tarefa'
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
                />
                <button type="submit">
                    Criar
                    <PlusCircle size={16} />
                </button>
            </form>

            <div className={styles.taskList}>
                <header>
                    <strong className={styles.createdTasks}> Tarefas criadas <span>{tasks.length}</span> </strong>
                    <strong className={styles.completedTasks}>
                        Concluídas <span>{tasks.length > 0 ? ` ${completedTasksCounter} de ${tasks.length}` : 0}</span>
                    </strong>
                </header>
                {tasks.length > 0 ? <TaskList tasks={tasks} onCompleteTask={completeTask} onDeleteTask={deleteTask} /> : <EmptyList />}
            </div>
        </article>
    )
}