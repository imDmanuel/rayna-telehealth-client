import { Button } from "@/components/ui/button";
import React from "react";
import { QueryClient } from "@tanstack/react-query";
import { getHospitals } from "../apis/hospitals/hospitals.apis";
import { SearchIcon } from "lucide-react";
import HospitalList from "./components/hospital-list";

export default async function MyHospitalsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["hospitals"],
    queryFn: () => getHospitals(),
  });
  return (
    <section className="bg-neutral-50">
      <div className="px-9 py-6">
        {/* TITLE SECTION */}
        <div className="flex justify-between items-center gap-x-10 gap-y-5 flex-wrap">
          {/* PAGE TITLE */}
          <h5 className="text-black font-semibold">My Hospitals</h5>
          {/* END PAGE TITLE */}

          {/* FIND HOSPITALS NEAR ME BUTTON */}
          <Button size={"sm"} className="ml-auto">
            <SearchIcon />
            <span>Find hospitals near me</span>
          </Button>
          {/* END FIND HOSPITALS NEAR ME BUTTON */}
        </div>
        {/* END TITLE SECTION */}

        <HospitalList />
      </div>
    </section>
  );
}
