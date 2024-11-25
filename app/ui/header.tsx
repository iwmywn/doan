"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoIosMenu } from "react-icons/io";
import { GiShoppingCart } from "react-icons/gi";
import Logo from "@ui/logo";
import links from "@/data/nav-links";
import { useRef, useState } from "react";
import Menu from "@/ui/menu";
import useOverflow from "@/hooks/useOverflow";
import { useElementHeight } from "@/hooks/useHeight";

export default function Header() {
  const pathname = usePathname();
  const ref = useRef<HTMLElement>(null);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  useOverflow(isShowMenu);
  useElementHeight(ref);

  return (
    <>
      {isShowMenu && <Menu setIsShowMenu={setIsShowMenu} />}
      <header
        ref={ref}
        className="fixed left-0 right-0 top-0 z-20 flex justify-center bg-white/80"
      >
        <nav className="mx-8 flex w-full items-center justify-between pb-1 pt-5 backdrop-blur md:mx-20 md:pb-3 md:pt-8">
          <div className="hidden w-[25rem] items-center gap-5 lg:flex">
            {links.map(({ name, href }) => {
              return (
                <Link
                  key={name}
                  href={href}
                  className={`rounded-md border px-4 py-1 ${pathname === href ? "bg-stone-100" : "border-transparent transition-all duration-300 hover:border-inherit hover:bg-stone-100"}`}
                >
                  <span className="hidden font-medium md:block">{name}</span>
                </Link>
              );
            })}
          </div>

          <Logo />

          <div className="flex items-center justify-end gap-5 text-base lg:w-[25rem] lg:gap-10">
            <CiSearch
              className="cursor-pointer text-[22px] md:text-2xl"
              // todo: search
              // onClick={() => console.log("hello")}
            />
            <Link href="/account">
              <CiUser className="text-[22px] md:text-2xl" />
            </Link>
            <Link href="/cart">
              <GiShoppingCart className="text-[22px] md:text-2xl" />
            </Link>
            <IoIosMenu
              className="block cursor-pointer text-[22px] md:text-2xl lg:hidden"
              onClick={() => setIsShowMenu(true)}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
