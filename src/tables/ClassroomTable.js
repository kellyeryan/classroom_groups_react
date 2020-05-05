import React from 'react'

const ClassroomTable = (props) => (
  <table>
    <thead>
      <tr>
        <th>Class Name</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.classrooms.length > 0 ? (
        props.classrooms.map(classroom => (
          <tr key={classroom.id}>
            <td>{classroom.name}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(classroom)
                }}
                className="button muted-button"
              >
                Edit Class
              </button>
              <button
                onClick={() => props.deleteClassroom(classroom.id)}
                className="button muted-button"
              >
                Delete Class
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No classes</td>
          </tr>
        )}
    </tbody>
  </table>
)
export default ClassroomTable