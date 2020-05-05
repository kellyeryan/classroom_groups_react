import React, { useState } from 'react'

const AddClassroomForm = props => {
  const initialFormState = { id: null, name: '' }
  const [classroom, setClassroom] = useState(initialFormState)

  const handleInputChange = event => {
    console.log(event)
    console.log(props)
    const { name, value } = event.target

    setClassroom({ ...classroom, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!classroom.name) return
        props.addClassroom(classroom)
        setClassroom(initialFormState)
      }}
    >
      <label>Class Name</label>
      <input type="text" name="name" value={classroom.name} onChange={handleInputChange} />
      <button>Add New User</button>
    </form>
  )
}

export default AddClassroomForm