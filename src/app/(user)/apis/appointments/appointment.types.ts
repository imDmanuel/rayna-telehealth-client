import { ApiRequestResponse, Appointment } from "@/lib/types";

export type GetAppointmentsQueryDto = {
  status?:
    | "all-visits"
    | "upcoming-visits"
    | "past-visits"
    | "cancelled-visits";
};

export type GetAppointmentsResponse = ApiRequestResponse<
  Appointment[],
  {
    allVisitsCount: number;
    upcomingVisitsCount: number;
    pastVisitsCount: number;
    cancelledVisitsCount: number;
  }
>;

export type GetAppointmentsByDateQueryDto = GetAppointmentsQueryDto & {
  startDate?: Date;
  endDate?: Date;
};

export type GetAppointmentsByDateResponse = ApiRequestResponse<{
  [date: string]: Appointment[];
}>;
