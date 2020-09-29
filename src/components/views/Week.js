import React, {useState} from 'react';
import './Week.css'


export const Week = () => {
    const [radioPersona, setRadioPersona] = useState('')
    const [radioTecnologia, setRadioTecnologia] = useState('')
    const [radioProcesos, setRadioProcesos] = useState('')

return(
    <div className='main-container'>
    <div className='content'>
    <h1>Mi semana</h1>
    <div className="weekText">
        <p>Déjanos saber cómo te sentiste en promedio esta semana, en relación a cada
            una de las áreas que se preguntan a continuación. Por ejemplo si estuviste
            triste, marca la opción triste
        </p>
    </div>
    <h1>Prueba, radio button: {radioPersona}</h1>
    <h1>Prueba, radio button: {radioTecnologia}</h1>
    <h1>Prueba, radio button: {radioProcesos}</h1>


    <div className="personaTxt">
        <p>Persona</p>
    </div>
    <div className="weekRadiosPersona">
        <input 
        className="firstRadio"
        type="radio"
        checked = {radioPersona === "1"}
        value="1"
        onChange={(e)=> { setRadioPersona(e.target.value) }}
        />
        <input 
        className="secondRadio"
        type="radio"
        checked = {radioPersona === "2"}
        value="2"
        onChange={(e)=> { setRadioPersona(e.target.value) }}
        />
        <input 
        className="thirdRadio"
        type="radio"
        checked = {radioPersona === "3"}
        value="3"
        onChange={(e)=> { setRadioPersona(e.target.value) }}
        />
    </div>
    <div className="tecnologiaTxt">
        <p>Tecnologia</p>
    </div>
    <div className="weekRadiosTecnologia">
        <input 
        className="firstRadio"
        type="radio"
        checked = {radioTecnologia === "1"}
        value="1"
        onChange={(e)=> { setRadioTecnologia(e.target.value) }}
        />
        <input 
        className="secondRadio"
        type="radio"
        checked = {radioTecnologia === "2"}
        value="2"
        onChange={(e)=> { setRadioTecnologia(e.target.value) }}
        />
        <input 
        className="thirdRadio"
        type="radio"
        checked = {radioTecnologia === "3"}
        value="3"
        onChange={(e)=> { setRadioTecnologia(e.target.value) }}
        />
    </div>
    <div className="procesosTxt">
        <p>Procesos</p>
    </div>
    <div className="weekRadiosProcesos">
        <input 
        className="firstRadio"
        type="radio"
        checked = {radioProcesos === "1"}
        value="1"
        onChange={(e)=> { setRadioProcesos(e.target.value) }}
        />
        <input 
        className="secondRadio"
        type="radio"
        checked = {radioProcesos === "2"}
        value="2"
        onChange={(e)=> { setRadioProcesos(e.target.value) }}
        />
        <input 
        className="thirdRadio"
        type="radio"
        checked = {radioProcesos === "3"}
        value="3"
        onChange={(e)=> { setRadioProcesos(e.target.value) }}
        />
    </div>
    </div>
    </div>
)

};
