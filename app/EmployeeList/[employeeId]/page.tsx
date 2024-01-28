/* "use client" */

import { Metadata } from "next";
import Link from "next/link";

export const generateMetadata = ({params}) : Metadata => {
    return {
        title: `Product ${params.employeeId}`,
        description: "Generated Login",
        
    };
}

const EmployeeDetail = ({params}) => {
    return (
        <>
        <h1>Employee Details</h1>
        <h1>PRODUCT ID: {params.employeeId}</h1> 
        <Link  href={"/"}>Back</Link>
        </>
    );
}

export default EmployeeDetail;