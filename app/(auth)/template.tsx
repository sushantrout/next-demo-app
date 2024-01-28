"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

/* export const metadata = {
  title: "Auth Layout",
  description: "Generated Auth Layout",
}; */

const navLinks = [
  {
    href: "/register",
    label: "Register",
  },
  {
    href: "/login",
    label: "Login",
  },
  {
    href: "/forgot-password",
    label: "Forgot Password",
  },
];

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let path = usePathname();
  const [input, setInput] = useState("");
  return (
    <>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <br/>
      {navLinks.map((navLink) => {
        return (
          <Link href={navLink.href} key={navLink.href} style={{ color: path === navLink.href ? "red" : "black" }}>
              {navLink.label}
          </Link>
        );
      })}
      {children}
    </>
  );
}
