import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { LoginData, LoginErrorReasons, LoginResponse } from "./auth.types";
import { login } from "./auth.apis";
import { ApiRequestError } from "@/lib/types";

export const useLogin = (
  onError: (error: AxiosError<ApiRequestError<LoginErrorReasons>>) => void,
  onSuccess: (data: AxiosResponse<LoginResponse>) => void
) => {
  return useMutation<
    AxiosResponse<LoginResponse>,
    AxiosError<ApiRequestError<LoginErrorReasons>>,
    LoginData
  >({
    mutationFn: login,
    onError,
    onSuccess,
  });
};
