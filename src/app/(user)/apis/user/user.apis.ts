import { axiosApiClient } from "@/lib/axios-client";
import { GetUserResponse } from "./user.types";

export const getUser = async () => {
  return axiosApiClient.get<GetUserResponse>("/user/get-user");
};
