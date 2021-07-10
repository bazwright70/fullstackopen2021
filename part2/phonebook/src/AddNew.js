import React from 'react';

const AddNew = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        name: <input
          value={props.newName}
          onChange={props.handleName}
        />
      </div>
      <br />
      <div>
        Number: <input
          value={props.newNumber}
          onChange={props.handleNumber}
        />
      </div>
      <br />
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default AddNew;