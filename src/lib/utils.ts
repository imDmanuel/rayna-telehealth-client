import { isAxiosError } from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ApiRequestError } from "./types";
import { toast } from "sonner";
import * as dateFns from "date-fns";

export { dateFns };

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

export function getInitials(name: [string | undefined, string | undefined]) {
  const a = name?.[0]?.[0] ?? "A";
  const b = name?.[1]?.[0] ?? "B";

  return [a, b].join("");
}

export function formatInterval(startTime: Date, endTime: Date) {
  // Format the start and end times
  const formattedStart = dateFns.format(startTime, "HH:mm"); // "11:30"
  const formattedEnd = dateFns.format(endTime, "HH:mm"); // "14:15"

  // Calculate the duration in minutes
  const totalMinutes = dateFns.differenceInMinutes(endTime, startTime);

  // Convert the total minutes into hours and minutes
  const hours = Math.floor(totalMinutes / 60);
  const minutes = totalMinutes % 60;

  // Format the duration as "X hr Y min" or "X min" if less than 1 hour
  let duration = "";
  if (hours > 0) {
    duration = `${hours} hr${hours > 1 ? "s" : ""} `;
  }
  if (minutes > 0) {
    duration += `${minutes} min`;
  }

  // Display the interval
  const timeInterval = `${formattedStart} - ${formattedEnd} (${duration.trim()})`;

  return timeInterval;
}

export const combineDateAndTime = (date: Date, time: string) => {
  const [hours, minutes] = time.split(":").map((value) => Number(value));
  date.setHours(hours, minutes, 0, 0);
  //   dateFns.add(dateFns.startOfDay(date), {
  //     hours: hours,
  //     minutes: minutes,
  //   }),
  //   newYorkTimeZone,
  // );
  return date;
};
