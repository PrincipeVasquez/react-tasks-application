import {createContext, useState, useEffect} from 'react'
import {tasks as data} from '../Data/tasks'

export const TaskContext = createContext();

export function TaskContextProvider(props) {

    const [tasks, setTasks] = useState([]);

    function createTask(task) {
        setTasks([... tasks, {
          id: tasks.length + 1,
          title: task.title,
          description: task.description
        }])
    }
  
    function deleteTask(taskId) {
        setTasks(tasks.filter(task => task.id !== taskId))
    }

    useEffect(() => {
        setTasks(data);
    }, []);

    return(
        <TaskContext.Provider value={{
            tasks: tasks,
            createTask: createTask,
            deleteTask: deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContext;