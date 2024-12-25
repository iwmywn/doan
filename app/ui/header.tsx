"use client";

import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import Logo from "@ui/logo";
import { useRef, useState } from "react";
import NavMenu from "@ui/nav/nav-menu";
import useOverflow from "@ui/hooks/overflow";
import { useElementHeight } from "@ui/hooks/height";
import CartSummary from "@ui/nav/cart-aside";
import AccountMenu from "@ui/nav/account-menu";
import Image from "next/image";
import { CategoryDropDown } from "@ui/shifting-dropdown";
import SearchOverlay from "@ui/search/search-overlay";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  const ref = useRef<HTMLElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  useOverflow(isMenuOpen);
  useOverflow(isSearchOpen);
  useElementHeight(ref);

  return (
    <>
      {isMenuOpen && <NavMenu setIsOpen={setIsMenuOpen} />}
      {isSearchOpen && <SearchOverlay setIsOpen={setIsSearchOpen} />}
      <header
        ref={ref}
        id="header"
        className="space-right fixed left-0 right-0 top-0 z-20 flex justify-center border-b bg-white/80 backdrop-blur"
      >
        <nav className="mx-8 flex w-full items-center justify-between pb-3 pt-4 md:mx-20 md:pb-4 md:pt-7">
          <div className="hidden max-w-[26rem] flex-1 lg:flex lg:items-center lg:justify-between">
            <Link
              className="select-none text-2xl font-bold"
              href="/"
              title="StyleWave"
            >
              <Image
                src="/logo-text.svg"
                alt="StyleWave"
                width={132}
                height={23}
                priority
              />
            </Link>
            <CategoryDropDown />
          </div>

          <Logo />

          <div className="flex items-center justify-end gap-5 text-base lg:max-w-[26rem] lg:flex-1 lg:gap-10">
            <CiSearch
              className="cursor-pointer text-[22px] md:text-2xl"
              onClick={() => setIsSearchOpen(true)}
            />
            <AccountMenu />
            <CartSummary />
            <IoIosMenu
              className="block cursor-pointer text-[22px] md:text-2xl lg:hidden"
              onClick={() => setIsMenuOpen(true)}
            />
          </div>
        </nav>
      </header>
    </>
  );
}
