import { axiosApiClient } from "@/lib/axios-client";
import { GetHospitalsQueryDto, GetHospitalsResponse } from "./hospitals.types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const getHospitals = async (queryParams?: GetHospitalsQueryDto) => {
  return axiosApiClient.get<GetHospitalsResponse>(`/hospitals`);
};
