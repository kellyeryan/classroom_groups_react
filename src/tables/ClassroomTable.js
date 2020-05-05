import React from 'react'

const ClassroomTable = () => (
  <table>
    <thead>
      <tr>
        <th>Class Name</th>
        <th>Student Names</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name data</td>
        <td>Names of Students</td>
        <td>
          <button className="button muted-button">Add Student</button>
          <button className="button muted-button">Edit Student</button>
          <button className="button muted-button">Delete Student</button>
        </td>
      </tr>
    </tbody>
  </table>
)
export default ClassroomTable