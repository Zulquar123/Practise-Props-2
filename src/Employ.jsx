import React from 'react'

export default function Employ({ emp, estyle }) {
  const { name, email, designation } = emp;
  return (
    <div className={estyle}>
      <h1>Employee Name : {name }</h1>
      <h1>Employee Email : {email }</h1>
      <h1>Employee Designation : {designation }</h1>
    </div>
  )
}
