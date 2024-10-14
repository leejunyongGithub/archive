"use client";

export default function Content({ children }: { children: React.ReactNode }) {
  return <main className="min-h-[calc(100vh-8rem)] p-[4rem]">{children}</main>;
}
