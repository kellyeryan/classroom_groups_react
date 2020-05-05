import React, { useState } from 'react'
import ClassroomTable from './tables/ClassroomTable'
import AddClassroomForm from './forms/AddClassroomForm'
import EditClassroomForm from './forms/EditClassroomForm'

const App = () => {
  const classroomsData = [
    { id: 1, name: 'Latin 1' },
    { id: 2, name: 'Latin 2' },
    { id: 3, name: 'Latin 3' }
  ]

  const [classrooms, setClassrooms] = useState(classroomsData)

  const addClassroom = classroom => {
    classroom.id = classrooms.length + 1
    setClassrooms([...classrooms, classroom])
  }

  const deleteClassroom = id => {
    setClassrooms(classrooms.filter(classroom => classroom.id !== id))
  }

  const [editing, setEditing] = useState(false)
  const initialFormState = { id: null, name: "" }
  const [currentClassroom, setCurrentClassroom] = useState(initialFormState)

  const editRow = classroom => {
    setEditing(true)

    setCurrentClassroom({ id: classroom.id, name: classroom.name })
  }

  const updateClassroom = (id, updatedClassroom) => {
    setEditing(false)

    setClassrooms(classrooms.map(classroom => (classroom.id === id ? updatedClassroom : classroom)))
  }

  return (
    <div className="container">
      <h1>Classroom Groups</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit Classroom</h2>
              <EditClassroomForm
                setEditing={setEditing}
                currentClassroom={currentClassroom}
                updateClassroom={updateClassroom}
              />
            </div>
          ) : (
              <div>
                <h2>Add Classroom</h2>
                <AddClassroomForm addClassroom={addClassroom} />
              </div>
            )}
        </div>
        <div className="flex-large">
          <h2>View classes</h2>
          <ClassroomTable classrooms={classrooms} editRow={editRow} deleteClassroom={deleteClassroom} />
        </div>
      </div>
    </div >
  )
}

export default App
