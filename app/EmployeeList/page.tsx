"use client";

import React from "react";
import { Employee } from "../model/Employee";
import Link from "next/link";

const employees: Employee[] = [
  {
    id: 1,
    name: "John",
    email: "skr@mail.com",
  },
  {
    id: 2,
    name: "John",
    email: "mail@mail2.com",
  },
  {
    id: 3,
    name: "John",
    email: "tteteet@mqilcon",
  }
];

const EmployeeList = () => {

  const viewElement = (employee: Employee) => {
    console.log(employee);
    debugger
  }

  return (
    <>
    {
      employees.map((employee) => (
        <div key={employee.id}>
          <span>{employee.name}</span>
          <span>{employee.email}</span>
          <Link href={"/EmployeeList/" + employee.id} replace={true}> View</Link>
          {/* <button onClick={() => viewElement(employee)}>View</button> */}
        </div>
      ))
    }
    </>
  );
}

export default EmployeeList;
