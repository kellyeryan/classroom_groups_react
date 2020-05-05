import React, { useState } from 'react'
import ClassroomTable from './tables/ClassroomTable'

const App = () => {

  const classroomsData = [
    { id: 1, name: 'Latin 1' },
    { id: 2, name: 'Latin 2' },
    { id: 3, name: 'Latin 3' }
  ]

  const [classrooms, setClassrooms] = useState(classroomsData)

  return (
    <div className="container">
      <h1>Classroom Groups</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Class</h2>
        </div>
        <div className="flex-large">
          <h2>View classes</h2>
          <ClassroomTable classrooms={classrooms} />
        </div>
      </div>
    </div >
  )
}

export default App
