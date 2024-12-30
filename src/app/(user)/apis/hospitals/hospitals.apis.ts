import { axiosApiClient } from "@/lib/axios-client";
import { GetHospitalsQueryDto, GetHospitalsResponse } from "./hospitals.types";

export const getHospitals = async (queryParams?: GetHospitalsQueryDto) => {
  return axiosApiClient.get<GetHospitalsResponse>(`/hospitals`);
};
