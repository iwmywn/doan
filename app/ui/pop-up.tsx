"use client";

import Link from "next/link";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { GoArrowDown } from "react-icons/go";
import Backdrop from "@ui/overlay/backdrop";
import { linkClass } from "@ui/form-class";
import { useAnimation } from "@ui/hooks";
import { useUIStateContext } from "@ui/contexts";

const contact = [
  {
    name: "Ngô Nguyễn Việt Anh",
    mssv: "215052056",
    email: "anhnnv21@uef.edu.vn",
  },
  {
    name: "Hoàng Anh Tuấn",
    mssv: "215052152",
    email: "tuanha321@uef.edu.vn",
  },
];

export default function PopUp() {
  const { state, setState } = useUIStateContext();
  const { isAnimating, triggerAnimation } = useAnimation();

  useEffect(() => {
    if (!(sessionStorage.getItem("popup") === "true")) {
      setState("isPopupOpen", true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClose = () => {
    sessionStorage.setItem("popup", "true");
    triggerAnimation(() => setState("isPopupOpen", false));
  };

  return (
    state.isPopupOpen && (
      <Backdrop isAnimating={isAnimating} onMouseDown={handleClose}>
        <div
          className={`relative mx-6 w-full max-w-[30rem] rounded-2xl bg-white px-8 py-6 text-black ${isAnimating ? "animate-popUpOut" : "animate-popUpIn"}`}
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col items-center justify-center gap-2 text-center">
            <h3 className="font-semibold">ĐỒ ÁN 2024</h3>
            {contact.map(({ name, mssv, email }) => (
              <div className="text-sm" key={name}>
                <span>
                  {name} - {mssv}{" "}
                </span>
                <Link
                  className={linkClass}
                  href={`mailto:${email}`}
                  rel="noopener"
                >
                  {email}
                </Link>
              </div>
            ))}
            <div className="mt-1 flex h-8 w-8 animate-bounce items-center justify-center rounded-full">
              <GoArrowDown fontSize={24} className="fill-black" />
            </div>
            <a
              href="https://github.com/iwmywn/doan"
              target="_blank"
              rel="noopener"
            >
              <FaGithub
                className="transition-all duration-300 hover:scale-110"
                fontSize={24}
              />
            </a>
          </div>
        </div>
      </Backdrop>
    )
  );
}
