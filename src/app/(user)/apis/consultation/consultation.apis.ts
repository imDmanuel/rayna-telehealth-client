import { axiosApiClient } from "@/lib/axios-client";
import {
  GetConsultationsQueryDto,
  GetConsultationsResponse,
  GetRecentConsultationsResponse,
  GetUpcomingConsultationResponse,
} from "./consultation.types";

export const getUpcomingConsultation = async () => {
  return axiosApiClient.get<GetUpcomingConsultationResponse>(
    "/consultations/upcoming-consultation"
  );
};

export const getRecentConsultations = async () => {
  return axiosApiClient.get<GetRecentConsultationsResponse>(
    "/consultations/recent-consultations"
  );
};

export const getConsultations = async (
  queryParams?: GetConsultationsQueryDto
) => {
  const status = queryParams?.status ?? "ongoing";
  return axiosApiClient.get<GetConsultationsResponse>(
    `/consultations?status=${status}`
  );
};
