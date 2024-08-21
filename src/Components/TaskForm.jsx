import React, {useState, useContext} from "react"
import {TaskContext} from '../context/TaskContext'

function TaskForm() {

    const {createTask} = useContext(TaskContext)

    const[title, setTitle] = useState('');
    const[description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createTask(
            {
                title: title, 
                description: description
            }
        );

        setTitle('');
        setDescription('');
    }

    return(
        <section className="bg-gray-50 dark:bg-gray-900">
            <div>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Crea una tarea</h1>
                        <input onChange={(e) => setTitle(e.target.value)} className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={title}
                            placeholder="Escribe tu tarea"
                            autoFocus />
                        <textarea onChange={(e) => {setDescription(e.target.value)}} className="block w-full p-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            value={description}
                            placeholder="Escribe la descripción" />
                        <button className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Agregar</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default TaskForm