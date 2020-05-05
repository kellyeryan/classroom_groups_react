import React, { useState } from 'react'
import ClassroomTable from './tables/ClassroomTable'
import AddClassroomForm from './forms/AddClassroomForm'

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

  return (
    <div className="container">
      <h1>Classroom Groups</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Class</h2>
          <AddClassroomForm addClassroom={addClassroom} />
        </div>
        <div className="flex-large">
          <h2>View classes</h2>
          <ClassroomTable classrooms={classrooms} deleteClassroom={deleteClassroom} />
        </div>
      </div>
    </div >
  )
}

export default App
