import React, { useState } from 'react'

const EditClassroomForm = props => {
  const [classroom, setClassroom] = useState(props.currentClassroom)

  const handleInputChange = event => {
    const { name, value } = event.target

    setClassroom({ ...classroom, [name]: value })
  }
  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateClassroom(classroom.id, classroom)
      }}
    >
      <label>Class Name</label>
      <input type="text" name="name" value={classroom.name} onChange={handleInputChange} />
      <button>Update Classroom</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditClassroomForm