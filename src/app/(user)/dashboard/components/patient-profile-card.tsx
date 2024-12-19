"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { userProfile } from "@/lib/mock-data";
import { useGetUser } from "../../apis/user/user.queries";
import PatientProfileSkeleton from "./skeletons/patient-profile-skeleton";

export default function PatientProfileCard({
  className,
}: {
  className?: string;
}) {
  const userQuery = useGetUser();
  const userData = userQuery.data?.data.data;

  return userQuery.isPending ? (
    <PatientProfileSkeleton className={className} />
  ) : (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Your Profile</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex divide-y @3xl/main:divide-x flex-col @3xl/main:flex-row">
        {/* LEFT SIDE */}
        <div className="p-6 pb-9">
          {/* PATIENT IMAGE */}
          <Image
            src={userProfile.profileImage}
            alt="Profile Pic"
            width={64}
            height={64}
            className="size-16 rounded-full object-cover"
          />
          {/* END PATIENT IMAGE */}

          {/* PATIENT NAME */}
          <p className="text-neutral-900 font-semibold mt-3">
            {userProfile.name}
          </p>
          {/* END PATIENT NAME */}

          {/* PATIENT ID */}
          <p className="text-neutral-600">HMO ID: {userProfile.hmoId}</p>
          {/* END PATIENT ID */}
        </div>
        {/* END LEFT SIDE */}

        {/* RIGHT SIDE */}
        <div className="p-6 pb-9 flex gap-x-10 whitespace-nowrap overflow-x-auto">
          {/* COLUMN ONE */}
          <div className="space-y-7">
            {/* AGE */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">Age</p>
              <p className="text-neutral-900 font-semibold">
                {userProfile.age} y/o
              </p>
            </div>
            {/* END AGE */}

            {/* HMO PLAN */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">HMO Plan</p>
              <p className="text-neutral-900 font-semibold">
                {userProfile.hmoPlan}
              </p>
            </div>
            {/* END HMO PLAN */}
          </div>
          {/* END COLUMN ONE */}

          {/* COLUMN TWO */}
          <div className="space-y-7">
            {/* DATE OF BIRTH */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">Date of Birth</p>
              <p className="text-neutral-900 font-semibold">
                {userProfile.dateOfBirth}
              </p>
            </div>
            {/* END DATE OF BIRTH */}

            {/* EXPIRES ON */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">Expires On</p>
              <p className="text-neutral-900 font-semibold">
                {userProfile.hmoPlan}
              </p>
            </div>
            {/* END EXPIRES ON */}
          </div>
          {/* END COLUMN TWO */}

          {/* COLUMN THREE */}
          <div className="space-y-7">
            {/* HEIGHT */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">Height</p>
              <p className="text-neutral-900 font-semibold">
                {userProfile.height}
              </p>
            </div>
            {/* END HEIGHT */}

            {/* STATUS */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">Status</p>
              <p className="text-success-700 text-sm bg-success-50 capitalize font-medium inline-block px-3 py-0.5 rounded-full">
                {userProfile.status}
              </p>
            </div>
            {/* END STATUS */}
          </div>
          {/* END COLUMN THREE */}

          {/* COLUMN FOUR */}
          <div className="space-y-7">
            {/* WEIGHT */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">Weight</p>
              <p className="text-neutral-900 font-semibold">
                {userProfile.weight} kg
              </p>
            </div>
            {/* END WEIGHT */}
          </div>
          {/* END COLUMN FOUR */}
        </div>
        {/* END RIGHT SIDE */}
      </CardContent>
    </Card>
  );
}