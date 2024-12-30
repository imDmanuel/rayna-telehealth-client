import { Button } from "@/components/ui/button";
import { PlusCircleIcon } from "lucide-react";
import React from "react";
import { QueryClient } from "@tanstack/react-query";
import { getAppointments } from "../apis/appointments/appointment.apis";
import AppointmentsDetails from "./components/appointment-details";

export default async function MyAppointmentsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["appointments"],
    queryFn: () => getAppointments(),
  });

  return (
    <section className="bg-neutral-50">
      <div className="px-9 py-6 @container/main">
        {/* TITLE SECTION */}
        <div className="flex justify-between items-center flex-wrap gap-5">
          {/* PAGE TITLE */}
          <div>
            <h5 className="text-black font-semibold">My Appointments</h5>
            <p className="text-neutral-600 mt-1">
              Check and filter all your medical appointments here
            </p>
          </div>
          {/* END PAGE TITLE */}

          {/* NEW  APPOINTMENT BUTTON */}
          <Button size={"sm"} className="ml-auto">
            <PlusCircleIcon />
            <span>New appointment</span>
          </Button>
          {/* END NEW APPOINTMENT BUTTON */}
        </div>
        {/* END TITLE SECTION */}

        <AppointmentsDetails />
      </div>
    </section>
  );
}
