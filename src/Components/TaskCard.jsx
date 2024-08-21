import {useContext} from 'react'
import {TaskContext} from '../context/TaskContext'

function TaskCard({task}) {

    const {deleteTask} = useContext(TaskContext)

    return(
        <div key={task.id} className='max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
            <h4 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{task.title}</h4>
            <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{task.description}</p>
            <button className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900' onClick={() => deleteTask(task.id)}>Eliminar</button>
        </div>
    )
}

export default TaskCard;