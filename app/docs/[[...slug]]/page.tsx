"use client"
const Docs = ({ params }) => {
    return (
        <>
            <h1>Docs Home Page</h1>
            {params.slug && params.slug[0] === "docs" ? (
                <h2>Docs Home Page</h2>
            ) : (
                <h2>Docs Page: {params.slug && params.slug[0]}</h2>
            )}
        </>
    );
}


export default Docs;