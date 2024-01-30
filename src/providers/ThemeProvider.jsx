"use client";
import React, { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeProvider({ children }) {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  if (!mounted) {
    return <div className={theme}>{children}</div>;
  }
}
