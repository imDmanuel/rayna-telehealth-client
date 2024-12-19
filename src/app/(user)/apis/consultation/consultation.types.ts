import { ApiRequestResponse, Consultation } from "@/lib/types";

export type GetUpcomingConsultationResponse = ApiRequestResponse<Consultation>;

export type GetRecentConsultationsResponse = ApiRequestResponse<Consultation[]>;
