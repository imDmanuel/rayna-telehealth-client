import { ApiRequestResponse, Consultation } from "@/lib/types";

export type GetUpcomingConsultationResponse = ApiRequestResponse<Consultation>;

export type GetRecentConsultationsResponse = ApiRequestResponse<Consultation[]>;

export type GetConsultationsQueryDto = { status?: "ongoing" | "closed" };

export type GetConsultationsResponse = ApiRequestResponse<
  Consultation[],
  { ongoingCount: number; closedCount: number }
>;
