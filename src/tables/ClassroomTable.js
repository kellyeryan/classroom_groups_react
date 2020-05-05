import React from 'react'

const ClassroomTable = () => (
  <table>
    <thead>
      <tr>
        <th>Class Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Name data</td>
        <td>
          <button className="button muted-button">Edit Class</button>
          <button className="button muted-button">Delete Class</button>
        </td>
      </tr>
    </tbody>
  </table>
)
export default ClassroomTable