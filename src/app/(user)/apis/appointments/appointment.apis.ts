import { axiosApiClient } from "@/lib/axios-client";
import {
  GetAppointmentsByDateQueryDto,
  GetAppointmentsByDateResponse,
  GetAppointmentsQueryDto,
  GetAppointmentsResponse,
} from "./appointment.types";

export const getAppointments = async (
  queryParams?: GetAppointmentsQueryDto
) => {
  const status: GetAppointmentsQueryDto["status"] =
    queryParams?.status ?? "all-visits";

  return axiosApiClient.get<GetAppointmentsResponse>(
    `/appointments?status=${status}`
  );
};

export const getAppointmentsByDate = async (
  queryParams?: GetAppointmentsByDateQueryDto
) => {
  const status: GetAppointmentsByDateQueryDto["status"] =
    queryParams?.status ?? "all-visits";

  return axiosApiClient.get<GetAppointmentsByDateResponse>(
    `/appointments/by-date?status=${status}`
  );
};
