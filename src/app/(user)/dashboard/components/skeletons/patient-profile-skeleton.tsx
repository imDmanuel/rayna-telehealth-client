import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

export default function PatientProfileSkeleton({
  className,
}: {
  className?: string;
}) {
  return (
    <Card className={className}>
      <Skeleton>
        <CardHeader>
          <CardTitle>Your Profile</CardTitle>
        </CardHeader>
      </Skeleton>
      <Skeleton>
        <CardContent className="p-0 flex divide-y @3xl/main:divide-x flex-col @3xl/main:flex-row">
          {/* LEFT SIDE */}
          <div className="p-6 pb-9">
            {/* PATIENT IMAGE */}
            <Skeleton className="size-16 rounded-full" />
            {/* END PATIENT IMAGE */}

            {/* PATIENT NAME */}
            <p className="font-semibold mt-3">David Fayemi</p>
            {/* END PATIENT NAME */}

            {/* PATIENT ID */}
            <p className="">HMO ID: RET/15118/A</p>
            {/* END PATIENT ID */}
          </div>
          {/* END LEFT SIDE */}

          {/* RIGHT SIDE */}
          <div className="p-6 pb-9 flex gap-x-10 whitespace-nowrap overflow-x-auto">
            {/* COLUMN ONE */}
            <div className="space-y-7">
              {/* AGE */}
              <div>
                <p className="text-sm mb-1">Age</p>
                <p className="font-semibold">26 y/o</p>
              </div>
              {/* END AGE */}

              {/* HMO PLAN */}
              <div>
                <p className="text-sm mb-1">HMO Plan</p>
                <p className="font-semibold">Red Beryl</p>
              </div>
              {/* END HMO PLAN */}
            </div>
            {/* END COLUMN ONE */}

            {/* COLUMN TWO */}
            <div className="space-y-7">
              {/* DATE OF BIRTH */}
              <div>
                <p className="text-sm mb-1">Date of Birth</p>
                <p className="font-semibold">15-05-1994</p>
              </div>
              {/* END DATE OF BIRTH */}

              {/* EXPIRES ON */}
              <div>
                <p className="text-sm mb-1">Expires On</p>
                <p className="font-semibold">24-07-2024</p>
              </div>
              {/* END EXPIRES ON */}
            </div>
            {/* END COLUMN TWO */}

            {/* COLUMN THREE */}
            <div className="space-y-7">
              {/* HEIGHT */}
              <div>
                <p className="text-sm mb-1">Height</p>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <p className="font-semibold">6'7"</p>
              </div>
              {/* END HEIGHT */}

              {/* STATUS */}
              <div>
                <p className="text-sm mb-1">Status</p>
                <p className="text-sm capitalize font-medium inline-block px-3 py-0.5 rounded-full">
                  Active
                </p>
              </div>
              {/* END STATUS */}
            </div>
            {/* END COLUMN THREE */}

            {/* COLUMN FOUR */}
            <div className="space-y-7">
              {/* WEIGHT */}
              <div>
                <p className="text-sm mb-1">Weight</p>
                <p className="font-semibold">80 kg</p>
              </div>
              {/* END WEIGHT */}
            </div>
            {/* END COLUMN FOUR */}
          </div>
          {/* END RIGHT SIDE */}
        </CardContent>
      </Skeleton>
    </Card>
  );
}
