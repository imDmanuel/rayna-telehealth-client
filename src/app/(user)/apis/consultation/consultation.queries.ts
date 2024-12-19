import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import {
  GetRecentConsultationsResponse,
  GetUpcomingConsultationResponse,
} from "./consultation.types";
import { ApiRequestError } from "@/lib/types";
import {
  getRecentConsultations,
  getUpcomingConsultation,
} from "./consultation.apis";

export const useGetUpcomingconsultation = () => {
  return useQuery<
    AxiosResponse<GetUpcomingConsultationResponse>,
    AxiosError<ApiRequestError>
  >({
    queryFn: getUpcomingConsultation,
    queryKey: ["upcoming-consultation"],
  });
};

export const useGetRecentconsultations = () => {
  return useQuery<
    AxiosResponse<GetRecentConsultationsResponse>,
    AxiosError<ApiRequestError>
  >({
    queryFn: getRecentConsultations,
    queryKey: ["recent-consultations"],
  });
};
