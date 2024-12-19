import { isAxiosError } from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ApiRequestError } from "./types";
import { toast } from "sonner";

export * as dateFns from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function showApiError(e: unknown, message?: string) {
  if (isAxiosError<ApiRequestError<string>>(e)) {
    toast.error(
      e.response?.data.message || "An error occurred while making the request"
    );
  } else {
    toast.error(message || "An error occurred while making the request");
  }
}

export function getErrorReason<T = string>(e: unknown) {
  if (isAxiosError<ApiRequestError<T>>(e)) {
    const reason = e.response?.data.reason;
    return reason;
  }
}
