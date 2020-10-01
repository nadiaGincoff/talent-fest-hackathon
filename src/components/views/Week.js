import React, {useState} from 'react';
import './Week.css'
import happy from '../../Images/happy.png';
import medium from '../../Images/medium.png';
import sad from '../../Images/sad.png';


export const Week = () => {
    const [radioPersona, setRadioPersona] = useState('')
    const [radioTecnologia, setRadioTecnologia] = useState('')
    const [radioProcesos, setRadioProcesos] = useState('')

return(
    <div className='main-container'>

    <div className='content'>


    <span className='weekText'><h1>Mi semana</h1>

        <p>Déjanos saber cómo te sentiste esta semana en relación a cada
            una de las áreas que se preguntan a continuación.<br></br>
            Por ejemplo, si estuviste triste, marca la opción triste
        </p>
    </span>


    <div className="weekRadiosPersona">

    <div className='radiobuttons-container'>
    <span className="personaTxt"><p>Persona</p>
    </span>
    {<img alt="Happy" width='50px' src= {happy} />} 
        <input className="firstRadio" type="radio" checked = {radioPersona === "1"}
         value="1" onChange={(e)=> { setRadioPersona(e.target.value) }}/>
     
  
   {<img alt="Happy" width='50px' src= {medium} />} 
        <input 
        className="secondRadio"
        type="radio"
        checked = {radioPersona === "2"}
        value="2"
        onChange={(e)=> { setRadioPersona(e.target.value) }} />

{<img alt="Happy" width='50px' src= {sad} />} 
        <input 
        className="thirdRadio"
        type="radio"
        checked = {radioPersona === "3"}
        value="3"
        onChange={(e)=> { setRadioPersona(e.target.value) }} />
    </div>


    <div className="weekRadiosTecnologia">
    <span className="tecnologiaTxt">
        <p>Tecnologia</p>
    </span>

    {<img alt="Happy" width='50px' src= {happy} />} 
        <input 
        className="firstRadio"
        type="radio"
        checked = {radioTecnologia === "1"}
        value="1"
        onChange={(e)=> { setRadioTecnologia(e.target.value) }} />

{<img alt="Happy" width='50px' src= {medium} />} 
        <input 
        className="secondRadio"
        type="radio"
        checked = {radioTecnologia === "2"}
        value="2"
        onChange={(e)=> { setRadioTecnologia(e.target.value) }} />

{<img alt="Happy" width='50px' src= {sad} />} 
        <input 
        className="thirdRadio"
        type="radio"
        checked = {radioTecnologia === "3"}
        value="3"
        onChange={(e)=> { setRadioTecnologia(e.target.value) }} />
    </div>


    <div className="weekRadiosProcesos">
    <span className="procesosTxt">
        <p>Procesos</p>
    </span>

    {<img alt="Happy" width='50px' src= {happy} />} 
        <input 
        className="firstRadio"
        type="radio"
        checked = {radioProcesos === "1"}
        value="1"
        onChange={(e)=> { setRadioProcesos(e.target.value) }}/>

{<img alt="Happy" width='50px' src= {medium} />} 
        <input 
        className="secondRadio"
        type="radio"
        checked = {radioProcesos === "2"}
        value="2"
        onChange={(e)=> { setRadioProcesos(e.target.value) }} />

{<img alt="Happy" width='50px' src= {sad} />} 
        <input 
        className="thirdRadio"
        type="radio"
        checked = {radioProcesos === "3"}
        value="3"
        onChange={(e)=> { setRadioProcesos(e.target.value) }} />

</div>

    </div>

<div className='btncontainer'>
<button className='sendBtn' onClick>Enviar</button>
</div>

    </div>

    </div>
)

};

