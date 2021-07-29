import React  from ("react");

const Form = (props) => {
  
  return(
    <form onSubmit={handleForm}>
        <div>
          Name: <input 
            type="text"
            placeholder="Add new name..."
            value={newName}
            onChange={(e)=>{setNewName(e.target.value)}}
          />
        </div>
        <div>
          Number:<input 
            type="text"
            placeholder="Add new number..."
            value={newNumber}
            onChange={(e)=>{setNewNumber(e.target.value)}}
          />
        </div>
       
        <button type="submit">Add</button>
      </form>
  )
}

export default Form;