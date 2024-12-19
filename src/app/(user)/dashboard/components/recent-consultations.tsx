"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { recentConsultations } from "@/lib/mock-data";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { useGetRecentconsultations } from "../../apis/consultation/consultation.queries";
import RecentconsultationsSkeleton from "./skeletons/recent-consultations-skeleton";

export default function RecentConsultations() {
  const recentConsultationsQuery = useGetRecentconsultations();
  const recentConsultationsData = recentConsultationsQuery.data?.data.data;

  return recentConsultationsQuery.isPending ? (
    <RecentconsultationsSkeleton />
  ) : (
    <Card>
      <CardHeader className="pt-4 flex flex-row items-center justify-between">
        <CardTitle className="p-0">Recent Consultations</CardTitle>
        <button className="text-neutral-500 flex items-center font-semibold text-sm">
          See all
          <ChevronRight className="h-5" />
        </button>
      </CardHeader>
      <CardContent className="p-0 divide-y">
        {recentConsultations.map((consultation) => {
          return (
            <div
              key={consultation.id}
              className="flex items-center flex-wrap gap-3 py-5 px-6"
            >
              {/* CONSULTANT IMAGE */}
              <Image
                src={consultation.doctor.profileImage}
                alt=""
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
              {/* END CONSULTANT IMAGE */}

              {/* CONSULTANT DETAILS */}
              <div className="flex-1 min-w-36">
                <p className="text-sm text-neutral-900 font-medium">
                  {consultation.doctor.name}
                </p>
                <p className="text-sm text-neutral-600">
                  {consultation.doctor.specialty}
                </p>
              </div>
              {/* END CONSULTANT DETAILS */}

              {/* SEND MESSAGE BUTTON */}
              <Button size={"sm"} variant={"outline"} className="ml-auto">
                Send a message
              </Button>
              {/* END SEND MESSAGE BUTTON */}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
