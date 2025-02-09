import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { jwtDecode } from "jwt-decode";
import { isBefore } from "date-fns";

export enum UserRoles {
  ADMIN = "ADMIN",
  TALENT = "TALENT",
  CLIENT = "CLIENT",
}

interface AuthState {
  isAuthenticated: boolean;
  token?: string;
  user?: { sub: string; email: string; role: UserRoles } | null;
}

const getAuthToken = () => {
  if (typeof window !== "undefined" && localStorage.getItem("authToken")) {
    const authToken = JSON.parse(localStorage.getItem("authToken")!);
    return authToken.token;
  }
  return null;
};

const getDecodedToken = (token: string | null) => {
  if (token) {
    const decodedToken = jwtDecode(token as string);
    const expirationTime = (decodedToken.exp || 1) * 1000;
    if (expirationTime && expirationTime < Date.now()) {
      localStorage.removeItem("authToken");
      return;
    }
    return decodedToken as unknown as AuthState["user"];
  }
  return undefined;
};

const initialState: AuthState = {
  isAuthenticated: !!getAuthToken(),
  token: getAuthToken(),
  user: getDecodedToken(getAuthToken()),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthUser: (state, action: PayloadAction<AuthState["token"]>) => {
      if (action.payload) {
        localStorage.setItem(
          "authToken",
          JSON.stringify({
            token: action.payload,
          }),
        );
        state.token = action.payload;
        state.isAuthenticated = !!action.payload;
        state.user = getDecodedToken(action.payload);
      } else {
        localStorage.removeItem("authToken");
      }
    },
    clearAuthUser: (state) => {
      state.user = undefined;
      state.token = undefined;
      state.isAuthenticated = false;
      localStorage.removeItem("authToken");
    },
  },
});

export const { setAuthUser, clearAuthUser } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export const selectUser = (state: RootState) => state.auth.token;
export const selectIsAuthenticated = (state: RootState) =>
  state.auth.isAuthenticated;

export default authSlice.reducer;
