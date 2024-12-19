import { axiosApiClient } from "@/lib/axios-client";
import {
  GetRecentConsultationsResponse,
  GetUpcomingConsultationResponse,
} from "./consultation.types";

export const getUpcomingConsultation = async () => {
  return axiosApiClient.get<GetUpcomingConsultationResponse>(
    "/consultation/upcoming-consultation"
  );
};

export const getRecentConsultations = async () => {
  return axiosApiClient.get<GetRecentConsultationsResponse>(
    "/consultation/recent-consultations"
  );
};
