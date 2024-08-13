// ESTE COMPONENTE VA A MOSTRAR LA TAREA

export const Task = ({id, status, task, changeStatus, deleteTask}) => {
    return (
        <div className="d-flex col mt-2 p-2 align-items-center justify-content-between border border-2 ">
            <p style={ status ? { textDecoration: "line-through" } : {} }> {task} </p> 
            <div>
                <button className="btn btn-success mx-2" onClick={ () => changeStatus (id) }> Realizada</button>
                <button className="btn btn-danger mx-2" onClick={ () => deleteTask (id) }> Eliminar</button>
            </div>
        </div>
    )
}

// Se pueden ejecutar las funciones dentro del onclick, sin necesidad de crearlas antes y llamarlas. Es una forma sencilla de sugar sintax. 

//Traducción del operador ternario dentro de la p (estilo en línea): si status está en true, vas a poner el text decoration que tacha el texto, si está en false, no hagas nada. 