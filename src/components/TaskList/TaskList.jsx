// ESTE COMPONENTE TIENE COMO RESPONSABILIDAD ÚNICA MAPEAR LAS TAREAS

import { Task } from "../Task/Task"

// recibe como prop las tasks 

export const TaskList = ({tasks, changeStatus, deleteTask}) => {
    return (
        <>
            {tasks.map (task => <Task key={task.id} {...task} changeStatus={changeStatus} deleteTask = {deleteTask} />)}
        </>
    )
}

// con el spread le brindamos todos los elementos del objeto y después en "task.jsx" desestructuramos la información que necesitamos. Como el objeto tiene id, task y status, pasamos por parámetro el "task" que es el input que describe la tarea