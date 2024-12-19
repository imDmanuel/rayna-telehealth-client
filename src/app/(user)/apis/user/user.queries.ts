import { ApiRequestError } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { GetUserErrorReasons, GetUserResponse } from "./user.types";
import { getUser } from "./user.apis";

export const useGetUser = () => {
  return useQuery<
    AxiosResponse<GetUserResponse>,
    AxiosError<ApiRequestError<GetUserErrorReasons>>
  >({
    queryFn: getUser,
    queryKey: ["get-user"],
  });
};
