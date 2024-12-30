import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import React from "react";
import { QueryClient } from "@tanstack/react-query";
import { getConsultations } from "../apis/consultation/consultation.apis";
import { ConsutationTabs } from "./components/consultation-tabs";

export default async function ConsultDoctorPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["consultations"],
    queryFn: () => getConsultations(),
  });

  return (
    <section className="bg-neutral-50">
      <div className="px-9 py-6">
        {/* TITLE SECTION */}
        <div className="flex justify-between items-center flex-wrap gap-5">
          {/* PAGE TITLE */}
          <div>
            <h5 className="text-black font-semibold">Consult a Doctor</h5>
            <p className="text-neutral-600 mt-1">
              Check and filter all your medical appointments here
            </p>
          </div>
          {/* END PAGE TITLE */}

          {/* NEW CONSULTATION BUTTON */}
          <Button size={"sm"} className="ml-auto">
            <PlusCircleIcon />
            <span>New Consultation</span>
          </Button>
          {/* END NEW CONSULTATION BUTTON */}
        </div>
        {/* END TITLE SECTION */}

        <ConsutationTabs />
      </div>
    </section>
  );
}
