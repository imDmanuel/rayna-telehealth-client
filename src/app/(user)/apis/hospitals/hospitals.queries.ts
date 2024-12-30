import { ApiRequestError } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { GetHospitalsQueryDto, GetHospitalsResponse } from "./hospitals.types";
import { getHospitals } from "./hospitals.apis";

export const useGetHospitals = (queryParams?: GetHospitalsQueryDto) => {
  return useQuery<
    AxiosResponse<GetHospitalsResponse>,
    AxiosError<ApiRequestError>
  >({
    queryFn: () => getHospitals(queryParams),
    queryKey: ["hospitals", queryParams],
  });
};
