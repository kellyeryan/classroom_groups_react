import React from 'react'
import ClassroomTable from './tables/ClassroomTable'

const App = () => {
  return (
    <div className="container">
      <h1>Classroom Groups</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add Class</h2>
        </div>
        <div className="flex-large">
          <h2>View classes</h2>
          <ClassroomTable />
        </div>
      </div>
    </div >
  )
}

export default App
