"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { boxClass, inputClass, labelClass, errorClass } from "@ui/form-class";
import Button from "@ui/button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createPortal } from "react-dom";

const registerSchema = z.object({
  firstName: z.string().min(4, "First name must be at least 4 characters"),
  lastName: z.string().min(4, "Last name must be at least 4 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Register() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onChange",
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success(result.message);
        reset();
      } else {
        toast.error(`${result.message}`);
      }
    } catch (err) {
      toast.error("Something went wrong! Please try again.");
    }
  };

  return (
    <>
      {createPortal(
        <ToastContainer
          closeButton={false}
          icon={false}
          hideProgressBar
          closeOnClick
          pauseOnFocusLoss
        />,
        document.body,
      )}
      <div className="flex w-full flex-col items-center px-5">
        <span className="mb-2 mt-5 text-center text-black/70">
          Create an account and benefit from a more personal shopping
          experience, and quicker online checkout.
        </span>
        <span className="mb-8 text-black/70">All fields are mandatory.</span>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-1 text-black/65"
        >
          <div className={boxClass}>
            <input
              className={inputClass}
              id="FirstName"
              type="text"
              placeholder="First Name"
              {...register("firstName")}
            />
            <label className={labelClass} htmlFor="FirstName">
              First Name
            </label>
            {errors.firstName && (
              <p className={errorClass}>{errors.firstName.message}</p>
            )}
          </div>
          <div className={boxClass}>
            <input
              className={inputClass}
              id="LastName"
              type="text"
              placeholder="Last Name"
              {...register("lastName")}
            />
            <label className={labelClass} htmlFor="LastName">
              Last Name
            </label>
            {errors.lastName && (
              <p className={errorClass}>{errors.lastName.message}</p>
            )}
          </div>
          <div className={boxClass}>
            <input
              className={inputClass}
              id="Email"
              type="email"
              placeholder="Email"
              {...register("email")}
            />
            <label className={labelClass} htmlFor="Email">
              Email
            </label>
            {errors.email && (
              <p className={errorClass}>{errors.email.message}</p>
            )}
          </div>
          <div className={boxClass}>
            <input
              className={inputClass}
              id="Password"
              type="password"
              placeholder="Password"
              {...register("password")}
            />
            <label className={labelClass} htmlFor="Password">
              Password
            </label>
            {errors.password && (
              <p className={errorClass}>{errors.password.message}</p>
            )}
          </div>
          <Button
            disabled={!isValid || isSubmitting}
            className="h-10"
            type="submit"
          >
            {isSubmitting ? (
              <div className="mx-auto h-5 w-5 animate-spin rounded-full border-4 border-gray-300 border-t-black" />
            ) : (
              "CONTINUE"
            )}
          </Button>
        </form>
      </div>
    </>
  );
}
