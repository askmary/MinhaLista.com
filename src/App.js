import React from "react"
import "./App.css"
export default class ToDo extends React.Component{
  state={
    tarefa: "",
    lista: []
 }
 handleChange = (e) =>{
   this.setState({
     tarefa: e.target.value
   })
 }
 add = () =>{
   let {lista, tarefa} = this.state
   if(tarefa != ""){
     this.setState({
       lista: lista.concat({
         tarefa,
         id: Date.now()
        }), 
        tarefa: "" 
      })
    }
  }
 remove = (id) =>{
   let {lista, tarefa} = this.state
   this.setState({
     lista: lista.filter((item) =>(
       item.id != id
     ))
   })
 }
  render(){
    let {handleChange, add} = this
    let {lista, tarefa} = this.state
    return(
      <div className="container-list">
        <h1>MinhaLista.com</h1>
        <div className="input-container">
          <input value={tarefa} onChange={handleChange} type = "text" placeholder="Digite aqui sua tarefa..."/>
          <button onClick={add}>Adicionar</button>
        </div>
        {lista.map((item) => (
        <ul>
          <li>{item.tarefa}</li>
          <img onClick={() => this.remove(item.id)} className="trash" src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/64/000000/external-trash-bin-cleaning-kiranshastry-lineal-color-kiranshastry.png"/>
        </ul>
        ))}
      </div>
    )
  }
}