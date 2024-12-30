import { ApiRequestResponse, Hospital } from "@/lib/types";

export type GetHospitalsQueryDto = {
  category?: "all-hospitals" | "recently-visited" | "favourites";
};

export type GetHospitalsResponse = ApiRequestResponse<
  Hospital[],
  { hospitalsCount: number }
>;
