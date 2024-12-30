import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { ApiRequestError } from "@/lib/types";
import {
  GetAppointmentsByDateQueryDto,
  GetAppointmentsByDateResponse,
  GetAppointmentsQueryDto,
  GetAppointmentsResponse,
} from "./appointment.types";
import { getAppointments, getAppointmentsByDate } from "./appointment.apis";

export const useGetAppointments = (queryParams?: GetAppointmentsQueryDto) => {
  return useQuery<
    AxiosResponse<GetAppointmentsResponse>,
    AxiosError<ApiRequestError>
  >({
    queryFn: () => getAppointments(queryParams),
    queryKey: ["appointments", queryParams],
  });
};

export const useGetAppointmentsByDate = (
  queryParams?: GetAppointmentsByDateQueryDto
) => {
  return useQuery<
    AxiosResponse<GetAppointmentsByDateResponse>,
    AxiosError<ApiRequestError>
  >({
    queryFn: () => getAppointmentsByDate(queryParams),
    queryKey: ["appointments", queryParams],
  });
};
