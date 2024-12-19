import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  CalendarIcon,
  ChevronRightIcon,
  MapPinIcon,
  MegaphoneIcon,
  MessageSquareTextIcon,
} from "lucide-react";
import React from "react";

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="divide-y">
        {/* BOOK AN APPOINTMENT */}
        <div className="flex items-center gap-x-4 py-6">
          {/* ICON */}
          <div className="bg-neutral-100 size-11 rounded-full shrink-0 grid place-items-center">
            <CalendarIcon className="h-5 text-neutral-700" />
          </div>
          {/* END ICON */}

          {/* DETAILS */}
          <div className="flex-1">
            <p className="text-neutral-900 font-medium mb-1">
              Book an Appointment
            </p>
            <p className="text-neutral-600 text-sm">
              Find a doctor and specialization
            </p>
          </div>
          {/* END DETAILS */}

          {/* CHEVRON RIGHT */}
          <ChevronRightIcon className="text-base text-neutral-500" />
          {/* END CHEVRON RIGHT */}
        </div>
        {/* END BOOK AN APPOINTMENT */}

        {/* REQUEST CONSULTATION */}
        <div className="flex items-center gap-x-4 py-6">
          {/* ICON */}
          <div className="bg-neutral-100 size-11 rounded-full shrink-0 grid place-items-center">
            <MessageSquareTextIcon className="h-5 text-neutral-700" />
          </div>
          {/* END ICON */}

          {/* DETAILS */}
          <div className="flex-1">
            <p className="text-neutral-900 font-medium mb-1">
              Request Consultation
            </p>
            <p className="text-neutral-600 text-sm">Talk to a specialist</p>
          </div>
          {/* END DETAILS */}

          {/* CHEVRON RIGHT */}
          <ChevronRightIcon className="text-base text-neutral-500" />
          {/* END CHEVRON RIGHT */}
        </div>
        {/* END REQUEST CONSULTATION */}

        {/* LOCATE A HOSPITAL */}
        <div className="flex items-center gap-x-4 py-6">
          {/* ICON */}
          <div className="bg-neutral-100 size-11 rounded-full shrink-0 grid place-items-center">
            <MapPinIcon className="h-5 text-neutral-700" />
          </div>
          {/* END ICON */}

          {/* DETAILS */}
          <div className="flex-1">
            <p className="text-neutral-900 font-medium mb-1">
              Locate a hospital near you
            </p>
            <p className="text-neutral-600 text-sm">Find closest hospitals</p>
          </div>
          {/* END DETAILS */}

          {/* CHEVRON RIGHT */}
          <ChevronRightIcon className="text-base text-neutral-500" />
          {/* END CHEVRON RIGHT */}
        </div>
        {/* END LOCATE A HOSPITAL */}

        {/* EMERGENCY */}
        <div className="flex items-center gap-x-4 py-6">
          {/* ICON */}
          <div className="bg-neutral-100 size-11 rounded-full shrink-0 grid place-items-center">
            <MegaphoneIcon className="h-5 text-neutral-700" />
          </div>
          {/* END ICON */}

          {/* DETAILS */}
          <div className="flex-1">
            <p className="text-neutral-900 font-medium mb-1">Emergency</p>
            <p className="text-neutral-600 text-sm">Request immediate help</p>
          </div>
          {/* END DETAILS */}

          {/* CHEVRON RIGHT */}
          <ChevronRightIcon className="text-base text-neutral-500" />
          {/* END CHEVRON RIGHT */}
        </div>
        {/* END EMERGENCY */}
      </CardContent>
    </Card>
  );
}
