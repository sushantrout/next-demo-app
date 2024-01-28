export default function EmployeeListLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>Employee List Header</header>
      {children}

      <footer>Employee List Footer</footer>
    </>
  );
}
