import React, { useState } from 'react'
import {firebase} from '../../firebase'

function Todo() {

    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea]= useState('')


    React.useEffect(() =>{
        const obtenerDatos = async()=>{
            try { //intenta hacer esto
                const db = firebase.firestore()
                const data = await db.collection('tareas').get()
                console.log(data.docs)
                const arrayData= data.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()  
                }))
                setTareas(arrayData)
            } catch (error) { //si falla hace esto
                console.log(error)
            }
        }
        obtenerDatos()
    }, []) //corchetes para que solo se ejecute una vez
 
    const agregar = async (e) =>{
        e.preventDefault() //previene comportamiento por defecto get
        
        if(!tarea.trim()){
            console.log('esta vacio')
            return
        }

        try {
            const db = firebase.firestore()
            const nuevaTarea = {
                name: tarea,
                fecha: Date.now()
            }
            const data = await db.collection('tareas').add(nuevaTarea)
            setTareas([
                ...tareas,
                {...nuevaTarea, id: data.id}
            ])
            setTarea('')
        } catch (error) {
            console.log(error)
        }
        console.log(tarea)

    }

    const eliminar = async (id) =>{
        try {
            const db = firebase.firestore()
            await db.collection('tareas').doc(id).delete()

            const arrayFiltrado = tareas.filter(item => item.id !== id)
            setTareas(arrayFiltrado)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row">
                    <ul className="list">
                        {
                            tareas.map(item => (
                                <li className="listItem" key={item.id}>
                                    {item.name}
                                    <button 
                                    className="btnEliminarTarea"
                                    onClick={() => eliminar(item.id)}
                                    >
                                        Eliminar

                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="formTareas">
                    <h3>Agregar actividades</h3>
                    <form onSubmit={agregar}>
                        <input 
                        type="text"
                        placeholder="ingrese actividad a realizar"
                        onChange={e => setTarea(e.target.value)}
                        value={tarea}
                        />
                        <button 
                        className="btnTarea"
                        type="submit"
                        >
                            Agregar tarea
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Todo

