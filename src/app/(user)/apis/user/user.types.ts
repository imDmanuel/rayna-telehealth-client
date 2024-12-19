import { ApiRequestResponse, User } from "@/lib/types";

export type GetUserResponse = ApiRequestResponse<User>;
export type GetUserErrorReasons = "not-found";
