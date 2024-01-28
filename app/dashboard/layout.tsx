export default function Dashboard({
    children,
    dashboard1,
    dashboard2,
    dashboard3,
    login
  }: Readonly<{
    children: React.ReactNode;
    dashboard1: React.ReactNode;
    dashboard2: React.ReactNode;
    dashboard3: React.ReactNode;
    login : React.ReactNode;
  }>) {
    let isLoggedIn = false;
    return (
        <div>
        <h1>Dashboard Layout</h1>
        <p>Coming soon</p>
        {children}
        {dashboard1}
        {dashboard2}
        {dashboard3}
        {isLoggedIn ? login : <>TESTS</>}
        </div>
    );
}