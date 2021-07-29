import React  from "react";

const Form = (props) => {
const {handler, name, number, setName,setNumber} = props;
  return(
    <form onSubmit={handler}>
        <div>
          Name: <input 
            type="text"
            placeholder="Add new name..."
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
          />
        </div>
        <div>
          Number:<input 
            type="text"
            placeholder="Add new number..."
            value={number}
            onChange={(e)=>{setNumber(e.target.value)}}
          />
        </div>
       
        <button type="submit">Add</button>
      </form>
  )
}

export default Form;