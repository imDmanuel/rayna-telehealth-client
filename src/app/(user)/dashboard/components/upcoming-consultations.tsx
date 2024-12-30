"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { upcomingConsultation } from "@/lib/mock-data";
import { cn } from "@/lib/utils";
import { ClockIcon, MapPinIcon } from "lucide-react";
import React, { useState } from "react";
import { useGetUpcomingconsultation } from "../../apis/consultation/consultation.queries";
import UpcomingConsultationSkeleton from "./skeletons/upcoming-consultation-skeleton";
import * as dateFns from "date-fns";
import { RescheduleConsultationDialog } from "./reschedule-consultation-dialog";

export default function UpcomingConsultations({
  className,
}: {
  className?: string;
}) {
  const upcomingConsultationQuery = useGetUpcomingconsultation();
  const upcomingConsultationData = upcomingConsultationQuery.data?.data.data;

  const [rescheduleDialogOpen, setRescheduleDialogOpen] = useState(false);

  return upcomingConsultationQuery.isPending ? (
    <UpcomingConsultationSkeleton className={className} />
  ) : (
    <>
      <Card className={cn("flex flex-col", className)}>
        <CardHeader>
          <CardTitle>Upcoming Consultations</CardTitle>
        </CardHeader>
        <CardContent className="pt-6 flex-1">
          {/* TODO: Find what to display if there is no upcoming consultation */}
          {/* CONSULTATION DATE */}
          <p className="text-neutral-900 font-semibold mb-3">
            {upcomingConsultationData?.date
              ? dateFns.format(upcomingConsultationData.date, "EEEE, d MMMM")
              : "Date N/A"}
          </p>
          {/* END CONSULTATION DATE */}

          {/* CONSULTATION TIME */}
          <div className="flex mb-3">
            <ClockIcon className="h-5 shrink-0 text-neutral-500" />
            <p className="text-neutral-600 text-sm">
              {upcomingConsultation.time.start} -{" "}
              {upcomingConsultation.time.end} (
              {upcomingConsultation.time.duration})
            </p>
          </div>
          {/* END CONSULTATION TIME */}

          {/* LOCATION */}
          <div className="flex mb-6">
            <MapPinIcon className="h-5 shrink-0 text-neutral-500" />
            <p className="text-neutral-600 text-sm">
              {upcomingConsultation.location.name},{" "}
              {upcomingConsultation.location.address}
            </p>
          </div>
          {/* END LOCATION */}

          {/* CONSULTANT */}
          <div>
            {/* IMAGE */}
            {/* END IMAGE */}

            {/* DETAILS */}
            <div>
              {/* CONSULTANT NAME */}
              <p className="text-neutral-900 font-medium">
                Dr. {upcomingConsultationData?.doctor?.firstName}{" "}
                {upcomingConsultationData?.doctor?.lastName}
              </p>
              {/* END CONSULTANT NAME */}

              {/* CONSULTANT TITLE */}
              <p className="text-neutral-600 text-sm">
                {upcomingConsultation.doctor.specialty}
              </p>
              {/* END CONSULTANT TITLE */}
            </div>
            {/* END DETAILS */}
          </div>
          {/* END CONSULTANT */}
        </CardContent>
        <CardFooter className="gap-x-2 border-t pt-6">
          <Button
            size={"sm"}
            variant={"outline"}
            onClick={() => setRescheduleDialogOpen(true)}
          >
            Reschedule
          </Button>
          <Button size={"sm"}>Confirm Appointment</Button>
        </CardFooter>
      </Card>

      <RescheduleConsultationDialog
        open={rescheduleDialogOpen}
        onOpenChange={setRescheduleDialogOpen}
      />
    </>
  );
}
