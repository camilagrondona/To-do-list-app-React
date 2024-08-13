import { useState } from "react"
import {v4} from "uuid"

// Este componente hijo se encarga de una sola tarea

export const FormInput = ( {addTask}) => {
    const [task, setTask] = useState("") // el primer estado va a ser un string vacío porque al ser un input, va a recibir strings. 
    const handleInputChange = (e) => { // recibe el evento, por eso la e
        setTask (e.target.value) // almacenamos el valor del input en nuestro state task. El valor es lo que realmente se escribe en el input
        // Cada vez que escribimos un nuevo texto en el input del formulario seteamos la task y lo mostramos en "newTask" en la parte de "task"
    }// las funciones que son manejadoras de eventos llevan por delante handle / on

    const handleFormSubmit = (e) => { 
        //onSubmit = evento que se utiliza directamente en el formulario y nos evita usar un onClick
        e.preventDefault() // evita que se recargue automáticamente el formulario
        const newTask = {
            id: v4(), // identificador único de la tarea - utilizamos el id dinamico de la libreria uuid. Como elegimos la versión 4 (v4), la ejecutamos acá
            task, // texto de la tarea a realizar 
            status: false // si la tarea está realizada o no. Por defecto, está en false porque no está realizada cuando la agregamos a la to do list. 
        }

        addTask (newTask) // Ejecuto la función que nos manda el padre y le pasamos por parámetro la nueva tarea que el padre está recibiendo en la función handleAddTask 
        setTask ("") // hacemos esto para resetear el input una vez que terminamos de escribir la tarea
    }

    return (
        <form onSubmit={handleFormSubmit} className="d-flex col">
            <input
            type="text" 
            className="form-control border border-2 border-black"
            placeholder="Ingrese su texto aquí"
            value={task}
            onChange={handleInputChange}
            />
            <input type="submit" className="btn btn-primary mx-2" value="Agregar"/> 
        </form>
    )
}
