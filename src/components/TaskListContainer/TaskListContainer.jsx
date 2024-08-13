import { useState } from "react"
import { FormInput } from "../FormInput/FormInput"
import { TaskList } from "../TaskList/TaskList"

// Este componente padre se encarga de todas las tareas 

export const TaskListContainer = () => {
    const [tasks, setTasks] = useState([])

    // Función que va a agregar las tasks que vamos a recibir del hijo

    const handleAddTask = (task) => { 
        setTasks ([...tasks, task]) // para setear las tareas y almacenarlas en el estado, hacemos una copia de las tasks que ya tenemos y le agregamos la task nueva que recibimos del hijo que se va almacenando con las anteriores
    }

    // TAREA REALIZADA

    // esta función recibe el id de la tarea, ya que tiene que cambiar el estado de false a true, y la forma de identificar cada una es con su id.
    const handleChangeStatus = (id) => { 
        // Buscamos la posición índice de la tarea 
        const index = tasks.findIndex(task => task.id === id)
        // Hacemos una copia de las tareas para no modificar la original. Debemos evitar modificar los estados = principio de inimutabilidad 
        const updateTasks = [...tasks]
        // Modificamos el estado de la tarea en la posición index
        updateTasks[index] = {
            ...updateTasks[index],
            status: !updateTasks[index].status // Si estaba en false lo pasamos a true o viceversa
        }
        setTasks(updateTasks)
    }
    // Para pasarla al hijo pasamos la función "handleAddTask" como prop en la función "formInput" del hijo y en el componente formInput acá en el padre. Le podemos poner cualquier nombre al prop, en este caso "addTask". 

    // ELIMINAR TAREA

    const handleDeleteTask = (id) => { 
        const tasksFilter = tasks.filter ( task => task.id !== id) // devolveme todas las tareas q no sean iguales al id que acabo de recibir. 
        setTasks(tasksFilter)
    }

    return (
        <div className="d-flex flex-column col-6">
            <FormInput addTask={handleAddTask}/> 
            <TaskList tasks={tasks} changeStatus={handleChangeStatus} deleteTask={handleDeleteTask}/> 
        </div>
    )
}

// La forma de pasar información de hijo a padre es por medio de funciones. En este caso, queremos almacenar el input de la task que se genera en el formulario hijo a nuestras tasks del padre. 