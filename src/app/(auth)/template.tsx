"use client";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    name: "Login",
    href: "/login",
  },
  {
    name: "Register",
    href: "/register",
  },
  {
    name: "Forgot Password",
    href: "/forgot-password",
  },
];

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  const [input, setInput] = useState("");

  return (
    <div>
      <div className="p-3">
        <input
          type="text"
          name="username"
          className="border"
          id="username"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link, i) => {
        const isActive = pathName === link.href;
        return (
          <Link
            href={link.href}
            key={`link` + i}
            className={
              isActive
                ? "mr-3 text-blue-600 underline"
                : "mr-3 text-black underline"
            }
          >
            {link.name}
          </Link>
        );
      })}
      {children}
    </div>
  );
};

export default AuthLayout;
