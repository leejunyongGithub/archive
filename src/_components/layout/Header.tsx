"use client";

import { useRouter } from "@/app/hooks/useRouter";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

const menuList = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Feed",
    path: "/feed",
  },
  {
    name: "Resume",
    path: "/resume",
  },
];
export default function Header() {
  const [isFixed, setIsFixed] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsFixed(scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const handleMenuClick = (path: string) => {
    router.push(path);
  };

  return (
    <>
      <header
        className={`h-[4rem] flex items-center justify-center sticky top-0 left-0 right-0 z-50 transition-all ${
          isFixed && "border-b border-gray-300"
        } px-[0.5rem]`}
      >
        <div className="w-full flex items-center justify-between max-w-[1080px]">
          <div id="logo">11</div>
          <div id="menu">
            <ul className="flex items-center justify-center cursor-pointer gap-x-2">
              {menuList.map((menu) => (
                <li
                  key={menu.name}
                  className={`min-w-[5rem] h-[2.5rem] flex items-center justify-center rounded-md text-center relative ${
                    pathname === menu.path && "font-bold"
                  }`}
                  onClick={() => handleMenuClick(menu.path)}
                >
                  {menu.name}
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-black origin-left transition-transform duration-300 ease-out ${
                      pathname === menu.path ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
