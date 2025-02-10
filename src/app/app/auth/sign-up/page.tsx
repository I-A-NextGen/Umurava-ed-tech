"use client";

import { Button } from "@/components/ui/button";
import { LoginData, loginUser } from "@/lib/redux/actionCreators/loginAction";
import { setAuthUser } from "@/lib/redux/features/authReducer";
import { resetLoginState } from "@/lib/redux/features/loginReducer";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";
import { useRouter } from "next/navigation";
import {
  RegisterData,
  registerUser,
} from "@/lib/redux/actionCreators/registerAction";
import { resetRegisterState } from "@/lib/redux/features/registerReducer";

const Page = () => {
  useEffect(() => {
    toast.dismiss();
  }, []);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<RegisterData>();
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [isCPasswordVisible, setIsCPasswordIsVisible] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<RegisterData> = (data: RegisterData) => {
    dispatch(registerUser(data));
  };

  const password = watch("password");

  const {
    registerData: registerResponseData,
    loading,
    error: loginResponseError,
  } = useAppSelector((state) => state.register);

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && user) {
      router.replace("/app/dashboard");
    }
  }, []);

  useEffect(() => {
    if (registerResponseData) {
      toast.success(registerResponseData.message);
      dispatch(resetRegisterState());
      reset();
      router.replace("/app/auth/sign-in");
    }
    if (loginResponseError) {
      toast.error(loginResponseError);
      dispatch(resetLoginState());
    }
  }, [registerResponseData, loginResponseError]);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  return (
    <form
      className="flex min-h-screen items-center"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mx-auto my-24 flex w-[550px] flex-col items-center justify-center gap-12 rounded border border-umuravadark/60 pb-6">
        <div className="flex h-14 w-full items-center justify-center text-center">
          <Link
            className="flex h-full w-full items-center justify-center bg-slate-50"
            href={"/app/auth/sign-in"}
          >
            <h5>Sign in</h5>
          </Link>
          <h5 className="flex h-full w-full items-center justify-center border-t-2 border-umurava text-umurava">
            Create account
          </h5>
        </div>
        <div className="flex min-w-[460px] flex-col gap-6">
          <div className="text-base">
            <label className="opacity-80" htmlFor="role">
              Join as:
            </label>
            <select
              id="role"
              className={`${errors.role ? "border-red-600 outline-none" : "border-black/70 focus:outline focus:outline-black"} mt-2 w-full rounded border p-3`}
              {...register("role", { required: true })}
            >
              <option value="TALENT">Talent</option>
              <option value="CLIENT">Client</option>
            </select>
          </div>
          <div className="text-base">
            <label className="opacity-80" htmlFor="firstName">
              First name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              className={`${errors.firstName ? "border-red-600 outline-none" : "border-black/70 focus:outline focus:outline-black"} mt-2 w-full rounded border p-3`}
              {...register("firstName", { required: true })}
            />
          </div>
          <div className="text-base">
            <label className="opacity-80" htmlFor="lastName">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your Last name"
              className={`${errors.lastName ? "border-red-600 outline-none" : "border-black/70 focus:outline focus:outline-black"} mt-2 w-full rounded border p-3`}
              {...register("lastName", { required: true })}
            />
          </div>
          <div className="text-base">
            <label className="opacity-80" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Email"
              className={`${errors.email ? "border-red-600 outline-none" : "border-black/70 focus:outline focus:outline-black"} mt-2 w-full rounded border p-3`}
              {...register("email", {
                required: true,
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                  message: "Use valid email address",
                },
              })}
            />
          </div>
          <div className="text-base">
            <label className="opacity-80" htmlFor={"password"}>
              Password
            </label>
            <div className="mt-2 flex items-center">
              <input
                id="password"
                className={`${errors.password ? "border-red-600 outline-none" : "border-black/70 focus:outline focus:outline-black"} focus:rounded-0 w-full rounded-s border border-black/70 p-3`}
                placeholder="Enter your Password"
                type={isVisible ? "text" : "password"}
                {...register("password", { required: true })}
              />

              <button
                className="flex items-center justify-center rounded-e border border-l-0 border-black/70 px-5 py-4 focus:border-l focus:outline focus:outline-black"
                type="button"
                onClick={toggleVisibility}
                aria-label={isVisible ? "Hide password" : "Show password"}
                aria-pressed={isVisible}
                aria-controls="password"
              >
                {isVisible ? (
                  <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          <div className="text-base">
            <label className="opacity-80" htmlFor={"confirmPassword"}>
              Confirm Password
            </label>
            <div className="mt-2 flex items-center">
              <input
                id="confirmPassword"
                className={`${errors.confirmPassword ? "border-red-600 outline-none" : "border-black/70 focus:outline focus:outline-black"} focus:rounded-0 w-full rounded-s border border-black/70 p-3`}
                placeholder="Please confirm your Password"
                type={isCPasswordVisible ? "text" : "password"}
                {...register("confirmPassword", {
                  required: true,
                  validate: (value) => value === password,
                })}
              />

              <button
                className="flex items-center justify-center rounded-e border border-l-0 border-black/70 px-5 py-4 focus:border-l focus:outline focus:outline-black"
                type="button"
                onClick={() =>
                  setIsCPasswordIsVisible((prevState) => !prevState)
                }
                aria-label={
                  isCPasswordVisible ? "Hide password" : "Show password"
                }
                aria-pressed={isCPasswordVisible}
                aria-controls="password"
              >
                {isCPasswordVisible ? (
                  <EyeOff size={16} strokeWidth={2} aria-hidden="true" />
                ) : (
                  <Eye size={16} strokeWidth={2} aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
          <Button
            type="submit"
            disabled={loading}
            className="size-fit h-12 w-full rounded bg-umurava text-base"
          >
            {loading && <PulseLoader size={10} color="#fff" margin={3} />}
            {!loading && "Create Account"}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Page;
