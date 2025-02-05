"use client"
import { clearAuthUser } from "@/lib/redux/features/authReducer";
import { useAppDispatch, useAppSelector } from "@/lib/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

type Props = {
  children?: React.ReactNode;
};

export const AuthWrapper = ({ children }: Props) => {
  
  const isFirstRun = useRef(true)
  const dispatch = useAppDispatch();
  const { push, replace } = useRouter();
  const { user, token, isAuthenticated } = useAppSelector(
    (state) => state.auth,
  );

  useEffect(() => {
    // if (isFirstRun.current && isAuthenticated === undefined) {
    //   isFirstRun.current = false;
    //   return;
    // }

    if (!isAuthenticated || !token) {
      push("/app/auth/sign-in");
      dispatch(clearAuthUser());
    }
  }, [isAuthenticated, token, push]);

  return children;
};
