"use client";

import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
}
