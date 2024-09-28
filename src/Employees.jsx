import React from 'react'
import Employ from './Employ'


export default function Employees({ data, style }) {
  const estyle ="px-3 py-2 border-2 border-purple-700 rounded-2xl"
  return (
      <div className={style}>
          
      {
          data.map(emp => (<Employ emp={emp} estyle={estyle} />))
      }
    </div>
  )
}
