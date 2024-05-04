import React from 'react'
import '../css/Table.css'
function Table({UserDetails}) {
  return (
    <div>
        <table>
            <td>
                <tr>Email</tr>
                <tr>Skill</tr>
                <tr>Gender</tr>
            </td>
            <td>
                <tr>{UserDetails.email}</tr>
                <tr>{UserDetails.skill}</tr>
                <tr>{UserDetails.gender}</tr>
            </td>
        </table>
    </div>
  )
}

export default Table