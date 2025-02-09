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

const Page = () => {
  useEffect(() => {
    toast.dismiss();
  }, []);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginData>();
  const dispatch = useAppDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  const onSubmit: SubmitHandler<LoginData> = (data: LoginData) => {
    dispatch(loginUser(data));
  };

  const {
    login: loginResponseData,
    loading,
    error: loginResponseError,
  } = useAppSelector((state) => state.login);

  const { isAuthenticated, user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated && user) {
      router.replace("/app/dashboard");
    }
  }, []);

  useEffect(() => {
    if (loginResponseData) {
      toast.success(loginResponseData.message);
      dispatch(setAuthUser(loginResponseData.data.token));
      dispatch(resetLoginState());
      reset();
      router.replace("/app/dashboard");
    }
    if (loginResponseError) {
      toast.error(loginResponseError);
      dispatch(resetLoginState());
    }
  }, [loginResponseData, loginResponseError]);

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);
  return (
    <form
      className="flex min-h-screen items-center"
      method="post"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mx-auto flex w-[550px] flex-col items-center justify-center gap-12 rounded border border-umuravadark/60 pb-6">
        <div className="flex h-14 w-full items-center justify-center text-center">
          <h5 className="flex h-full w-full items-center justify-center border-t-2 border-umurava text-umurava">
            Sign in
          </h5>
          <Link
            className="flex h-full w-full items-center justify-center bg-slate-50"
            href={"/app/auth/sign-up"}
          >
            <h5>Create account</h5>
          </Link>
        </div>
        <div className="flex min-w-[460px] flex-col gap-6">
          <div className="text-base">
            <label className="opacity-80" htmlFor="email">
              Email
            </label>
            <input
              type="text"
              id="email"
              placeholder="Enter your Email"
              className="mt-2 w-full rounded border border-black/70 p-3 focus:outline focus:outline-black"
              {...register("email")}
              required
            />
          </div>
          <div className="text-base">
            <label className="opacity-80" htmlFor={"password"}>
              Password
            </label>
            <div className="mt-2 flex items-center">
              <input
                id="password"
                className="focus:rounded-0 w-full rounded-s border border-black/70 p-3 focus:outline focus:outline-black"
                placeholder="Enter your Password"
                type={isVisible ? "text" : "password"}
                {...register("password")}
                required
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
          <Button
            type="submit"
            disabled={loading}
            className="size-fit h-12 w-full rounded bg-umurava text-base"
          >
            {loading && <PulseLoader size={10} color="#fff" margin={3} />}
            {!loading && "Sign in"}
          </Button>
          <Button variant={"link"} className="size-fit w-full" asChild>
            <Link
              href={""}
              className="w-full text-center font-normal text-umurava"
            >
              Forgot your password ?
            </Link>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default Page;
