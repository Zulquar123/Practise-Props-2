import React from 'react'
import Employees from './employees'


export default function App() {
  const style = "flex flex-col gap-1 items-center mt-4 "
  const employee = [
    {
      id: 1,
      name: "Zulquar",
      designation: "Developer",
      email: "zulquar@123",
    },
    { id: 1, name: "Zeeshan", designation: "Barista", email: "zeeshan@786" },
    { id: 1, name: "Danish", designation: "Designer", email: "danish@123" },
    { id: 1, name: "Zia-ull", designation: "Analyst", email: "zia@0341" },
    { id: 1, name: "Harish", designation: "Consultant", email: "zulquar@123" },
    { id: 1, name: "Sunney", designation: "Manager", email: "zulquar@123" },
  ];
  return (
    <>
      <Employees data={employee} style={style} />
    </>
  );
}
