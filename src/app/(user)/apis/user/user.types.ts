import { ApiRequestResponse, User } from "@/lib/types";

export type GetUserResponse = ApiRequestResponse<
  User & { auth: { email: string } }
>;
export type GetUserErrorReasons = "not-found";
