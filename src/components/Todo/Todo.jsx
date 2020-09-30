import React, { useState } from 'react';
import {firebase} from '../../firebase';
import './Todo.css';
import Plus from '../../Images/plus.png'
import 'bulma/css/bulma.css'
import Alert from '../../Images/task-icons/alert.png'
import Calendar from '../../Images/task-icons/calendar.png'
import Return from '../../Images/task-icons/return.png'
import Star from '../../Images/task-icons/star.png'

const TaskIcons = () => {
    return (
        <div class='containerIcons'>
            <img src={Calendar} alt="" className="taskIcon"/>
            <img src={Alert} alt="" className="taskIcon"/>
            <img src={Return} alt="" className="taskIcon"/>
            <img src={Star} alt="" className="taskIcon"/>
        </div>
    )
}

function Todo() {
    const [tareas, setTareas] = useState([]);
    const [tarea, setTarea]= useState('')

    React.useEffect(() =>{
        const obtenerDatos = async () =>{
            try { //intenta hacer esto
                const db = firebase.firestore()
                const data = await db.collection('tareas').get()
                console.log(data.docs)
                const arrayData = data.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()  
                }))
                setTareas(arrayData)
            } catch (error) { //si falla hace esto
                console.log(error)
            }
        }
        obtenerDatos()
    }) 
 
    const agregar = async (e) => {
        e.preventDefault() //previene comportamiento por defecto get
        
        if(!tarea.trim()){
            console.log('esta vacio')
            return
        }

        try {
            const db = firebase.firestore()
            const nuevaTarea = {
                name: tarea,
                completed: false,
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

    const checked = async (id) => {
        try {
            const db = firebase.firestore()
            await db.collection("tareas").doc(id).update({
                completed: true
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="containerActivities">
                {/* <div className='containerHeaderActivities'>
                    <h1>Completitud de tareas</h1>
                    <progress class="progress is-grey-darker is-large" value="60" max="100" style={{border: '2px solid #F5E433', backgroundColor: 'white', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
                </div> */}
                <div className="formTareas">
                    <form onSubmit={agregar} className='form-container'>
                        <input 
                        type="text"
                        placeholder="Agregar actividades del Sprint "
                        onChange={e => setTarea(e.target.value)}
                        value={tarea}
                        />
                        <button 
                        className="btnTarea"
                        type="submit"
                        >
                           <img src={Plus} alt="add plus" className="iconBtnTarea"/>
                        </button>
                    </form>
                </div>
         
                <div className="row">
                    <ul className="list">
                        
                        {   
                            tareas.filter(item => item.completed === false).map(filteredItem => (
                                <li className="listItem" key={filteredItem.id}>
                                    <label class="containerListItem">{filteredItem.name}
                                        <input type="checkbox" checked={filteredItem.completed} onChange={() => checked(filteredItem.id)} />
                                        <span class="checkmark"></span>
                                    </label>
                                    {/* <button 
                                        className="btnEliminarTarea"
                                        onClick={() => eliminar(filteredItem.id)}
                                    >
                                        Eliminar
                                    </button> */}
                                    <TaskIcons />
                                </li>  
                            ))
                        }
                        { tareas.filter(item => item.completed === true).length > 0 ? <div className='buttonCompleted'>Completado</div> : null}
                        {
                            tareas.filter(item => item.completed === true).map(filteredItem => (
                                <li className="listItem" key={filteredItem.id}>
                                    <div>
                                        <label class="containerListItem">{filteredItem.name}
                                            <input type="checkbox" checked={filteredItem.completed} />
                                            <span class="checkmark"></span>
                                        </label>
                                        {/* <button 
                                            className="btnEliminarTarea"
                                            onClick={() => eliminar(filteredItem.id)}
                                        >
                                            Eliminar
                                        </button> */}
                                    </div>
                                    <TaskIcons />
                                </li>
                            ))
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Todo