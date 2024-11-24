"use client";

import { boxClass, inputClass, labelClass, buttonClass } from "./class";

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
            FirstName
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
            LastName
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
          CONTINUE
        </button>
      </form>
    </div>
  );
}
