"use client";

import {
  boxClass,
  inputClass,
  labelClass,
  buttonClass,
} from "@/ui/account/class";

export default function Register() {
  return (
    <div className="flex w-full flex-col items-center px-5">
      <span className="mb-2 mt-5 text-center text-black/70">
        Create an account and benefit from a more personal shopping experience,
        and quicker online checkout.
      </span>
      <span className="mb-8 text-black/70">All fields are mandatory.</span>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="flex w-full flex-col gap-1 text-black/65"
      >
        <div className={boxClass}>
          <input
            className={inputClass}
            id="FirstName"
            type="text"
            placeholder="FirstName"
          />
          <label className={labelClass} htmlFor="FirstName">
            First Name
          </label>
        </div>
        <div className={boxClass}>
          <input
            className={inputClass}
            id="LastName"
            type="text"
            placeholder="LastName"
          />
          <label className={labelClass} htmlFor="LastName">
            Last Name
          </label>
        </div>
        <div className={boxClass}>
          <input
            className={inputClass}
            id="Email"
            type="email"
            placeholder="Email"
          />
          <label className={labelClass} htmlFor="Email">
            Email
          </label>
        </div>
        <div className={boxClass}>
          <input
            className={inputClass}
            id="Password"
            type="password"
            placeholder="Password"
          />
          <label className={labelClass} htmlFor="Password">
            Password
          </label>
        </div>
        <button className={buttonClass} type="submit">
          <span className="relative after:absolute after:-bottom-[6px] after:left-0 after:right-0 after:h-[2px] after:transition-all after:duration-300 group-hover:after:bg-white">
            CONTINUE
          </span>
        </button>
      </form>
    </div>
  );
}
