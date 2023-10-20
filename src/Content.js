import React from 'react'
import { useState } from 'react';
import { FaTrashAlt } from "react-icons/fa";

const Content = () => {

  const [items,setItems] = useState([
    {id:1,checked:true,activity:'Wake up at 8 am'},
    {id:2,checked:true,activity:'React office before 10'},
    {id:3,checked:false,activity:'Do the recruitment'},
    {id:4,checked:false,activity:'Coding Practise'},
    {id:5,checked:true,activity:'Leave office by 7 pm'},
])
     const handleCheck = (id)=>{
     const listItems = items.map((item) =>
     item.id === id ? {...item,checked:!item.checked}:item
     )
     console.log(listItems)
     setItems(listItems)
     localStorage.setItem('To-do List',JSON.stringify(listItems))
     }  

     const deleteRow = (id)=>{
      const deleteLine= items.filter((item) =>
      item.id !== id )
      console.log(deleteLine)
      setItems(deleteLine)
      localStorage.setItem('To-do List',JSON.stringify(deleteLine))
      }  

    return(
    <main>
      {(items.length)?(<ul>
        {items.map((item)=>(
          <li className='item' key={item.id}>
          <input 
          type='checkbox'
          onChange={()=>handleCheck(item.id)}
          checked = {item.checked}>
          </input>
          <label 
          style={(item.checked)? {textDecoration: 'line-through'}:null}
          onDoubleClick={()=>handleCheck(item.id)}>{item.activity}</label>
          <FaTrashAlt
          role  = 'button'
          onClick= {()=>deleteRow(item.id)}
          tabIndex='0'
          />
          </li>
        ))}
      </ul>  
       ) :(
        <p
         style ={{marginTop:'2rem'}}>Your List is Empty</p>
       )}
      
    </main>
   
  )
}

export default Content
