"use client";

import Footer from "@/components/layouts/Footer";
import NavBar from "@/components/layouts/NavBar";
import { ThemeProvider } from "@/components/layouts/Theme";
import { HeroUIProvider } from "@heroui/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <HeroUIProvider>
        <NavBar />
        <section className="container">{children}</section>
        <Footer />
      </HeroUIProvider>
    </ThemeProvider>
  );
}
