import { ApiRequestResponse, User } from "@/lib/types";
import { string } from "zod";

export type GetUserResponse = ApiRequestResponse<
  User & { auth: { email: string } }
>;
export type GetUserErrorReasons = "not-found";
