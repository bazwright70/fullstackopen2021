import React from 'react';

const AddNew = ({ values, handlers }) => {
  console.log(handlers);
  return (
    <form onSubmit={handlers.handleSubmit}>
      <div>
        name: <input
          value={values.newName}
          onChange={handlers.updateName}
        />
      </div>
      <div>
        Number: <input
          value={values.newNumber}
          onChange={handlers.updateNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default AddNew;