import React, { useState } from "react";
// function Saludo({nombre, idioma}){
//   return(
//     <h1>Hola estudiante {nombre} su idioma es el {idioma}</h1>
//   )
// }
 
const Saludo = ({nombre, idioma='ES'})=>{
 
  const saludo = idioma === "ES"?`Hola estudiante ${nombre} su idioma es el espaniol`:
  `hello student ${nombre} your language is english`;
 
  return(
    <h1>{saludo}</h1>
  )
}
 
const Boton = (req,res) =>{
  let [conteo,actConteo] = useState(0); //hook
   
  return(
    <div>
      <p>Idioma: {conteo===0?"Español":"Ingles"}</p>
      <button onClick={()=>{
     if (conteo<1){
      actConteo(conteo+1) 
     
     }
     else{
      actConteo(conteo-1) 
      
     }
     


      }} >Clic me!</button>
    <div>
    {Mensaje(conteo)}
    </div>

    </div>

  ) 
}
 
// Saludo.defaultProps={
//   idioma:'ES'
// }
 
function Mensaje(Idioma){
  let msg 
  if(Idioma!==1){
    msg = <p>Level control developed with PID control theory and Arduino

    Project developed at the Lope International Clean Production Center.</p>
  
  }else{
    msg = <p>Control de nivel desarrollado con teoría de control PID y Arduino

    Proyecto desarrollado en el Centro internacional de produccion limpia lope.</p>
   
  }
  return msg
}
 
function App() {
  return (
    <div>
      <Saludo nombre="Juliano" idioma="EN"/>
      <Boton />
     {/* <Mensaje /> */}
      <Saludo nombre="Juliano"/>
    </div>
  );
}

 
export default App;
