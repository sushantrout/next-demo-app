export default function Dashboard({
    children,
    dashboard1,
    dashboard2,
    dashboard3,
  }: Readonly<{
    children: React.ReactNode;
    dashboard1: React.ReactNode;
    dashboard2: React.ReactNode;
    dashboard3: React.ReactNode;
  }>) {
    return (
        <div>
        <h1>Dashboard Layout</h1>
        <p>Coming soon</p>
        {children}
        {dashboard1}
        {dashboard2}
        {dashboard3}
        </div>
    );
}