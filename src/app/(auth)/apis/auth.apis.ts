import { axiosApiClient } from "@/lib/axios-client";
import {
  ConfirmSignupOtpData,
  ConfirmSignupOtpResponse,
  LoginData,
  LoginResponse,
  ResendSignupOtpData,
  ResendSignupOtpResponse,
  SignupData,
  SignupResponse,
} from "./auth.types";
import { AxiosResponse } from "axios";

export const login = async (data: LoginData) => {
  return axiosApiClient.post<
    LoginResponse,
    AxiosResponse<LoginResponse>,
    LoginData
  >("/auth/login", {
    email: data.email,
    password: data.password,
  });
};

export const signup = async (data: SignupData) => {
  return axiosApiClient.post<
    SignupResponse,
    AxiosResponse<SignupResponse>,
    SignupData
  >("/auth/signup", {
    email: data.email,
    password: data.password,
    firstName: data.firstName,
    lastName: data.lastName,
  });
};

export const confirmSignupOtp = async (data: ConfirmSignupOtpData) => {
  return axiosApiClient.post<
    ConfirmSignupOtpResponse,
    AxiosResponse<ConfirmSignupOtpResponse>,
    ConfirmSignupOtpData
  >("/auth/confirm-signup-otp", {
    email: data.email,
    otp: data.otp,
  });
};

export const resendSignupOtp = async (data: ResendSignupOtpData) => {
  return axiosApiClient.post<
    ResendSignupOtpResponse,
    AxiosResponse<ResendSignupOtpResponse>,
    ResendSignupOtpData
  >("/auth/resend-signup-otp", {
    email: data.email,
  });
};
