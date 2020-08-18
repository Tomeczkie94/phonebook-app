import React from 'react'

const PersonForm = ({onSubmit, valueName, onChangeName, valueNumber, onChangeNumber}) => {
  return (
    <form onSubmit={onSubmit}>
      <div>
        name: <input
          type='text'
          value={valueName}
          onChange={onChangeName}
        />
      </div>
      <div>
        number: <input
          type='number'
          value={valueNumber}
          onChange={onChangeNumber}
        />
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
  )
}

export default PersonForm
