"use client";

import { useRouter } from "next/navigation";

const EmployeeDepartmentDetail = ({ params }) => {

  const router = useRouter();

  return (
    <>
      <h1>Employee ID: {params.employeeId}</h1>
      <h1>Department ID: {params.departmentId}</h1>
      <button onClick={() => {
        alert("Back");
        router.push("/") ;
      }}>Back</button>
    </>
  );
};

export default EmployeeDepartmentDetail;
