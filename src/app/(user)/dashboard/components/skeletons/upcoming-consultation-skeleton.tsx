import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { ClockIcon, MapPinIcon } from "lucide-react";
import React from "react";

export default function UpcomingConsultationSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={cn("flex flex-col", className)}>
      <Skeleton>
        <CardHeader>
          <CardTitle>Upcoming Consultations</CardTitle>
        </CardHeader>
      </Skeleton>
      <Skeleton className="flex-1">
        <CardContent className="pt-6 flex-1">
          {/* CONSULTATION DATE */}
          <p className="font-semibold mb-3">Friday, 6 July</p>
          {/* END CONSULTATION DATE */}

          {/* CONSULTATION TIME */}
          <div className="flex mb-3">
            <ClockIcon className="h-5 shrink-0" />
            <p className="text-sm">11:30 - 12:00 (30 min)</p>
          </div>
          {/* END CONSULTATION TIME */}

          {/* LOCATION */}
          <div className="flex mb-6">
            <MapPinIcon className="h-5 shrink-0" />
            <p className="text-sm">
              Cottage Medicare Hospital, 18 Iwaya Rd, Yaba 101245, Lagos
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
              <p className="font-medium">Dr. Alison Ogaga</p>
              {/* END CONSULTANT NAME */}

              {/* CONSULTANT TITLE */}
              <p className="text-sm">General Practitioner</p>
              {/* END CONSULTANT TITLE */}
            </div>
            {/* END DETAILS */}
          </div>
          {/* END CONSULTANT */}
        </CardContent>
      </Skeleton>
      <Skeleton>
        <CardFooter className="gap-x-2 border-t pt-6">
          <Skeleton>
            <Button
              className="bg-transparent text-transparent"
              size={"sm"}
              variant={"outline"}
              disabled
            >
              Reschedule
            </Button>
          </Skeleton>
          <Skeleton>
            <Button
              className="bg-transparent text-transparent"
              size={"sm"}
              disabled
            >
              Confirm Appointment
            </Button>
          </Skeleton>
        </CardFooter>
      </Skeleton>
    </Card>
  );
}
