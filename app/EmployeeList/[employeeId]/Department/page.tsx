"use client"

const EmployeeDepartment = ({params}) => {
    return (
        <>
        <h1>Department</h1>
        <h1>(Employee) Employee ID: {params.employeeId}</h1>
        </>
    );
}

export default EmployeeDepartment;