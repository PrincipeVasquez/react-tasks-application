import React, {useContext} from 'react'
import TaskCard from './TaskCard'
import {TaskContext} from '../context/TaskContext'

function TaskList() {

    const {tasks} = useContext(TaskContext)

    if(tasks.length === 0) {
        return(
            <div className='flex flex-col items-center pb-10'>
                <h1 className='mb-1 text-xl font-medium text-gray-900 dark:text-white'>No hay tareas</h1>
            </div>
        )
    }
    
    return(
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList