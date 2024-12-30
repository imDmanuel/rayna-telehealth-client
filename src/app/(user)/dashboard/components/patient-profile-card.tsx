"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import { useGetUser } from "../../apis/user/user.queries";
import PatientProfileSkeleton from "./skeletons/patient-profile-skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn, dateFns, showApiError } from "@/lib/utils";

export default function PatientProfileCard({
  className,
}: {
  className?: string;
}) {
  const userQuery = useGetUser();
  const userData = userQuery.data?.data.data;
  if (userQuery.isError) {
    showApiError(userQuery.error, "Error fetching user details");
  }

  return userQuery.isPending || !userData ? (
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
          <Avatar>
            <AvatarImage src={userData.profileImage} alt="Pic" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          {/* <Image
            src={userData?.profileImage}
            alt="Profile Pic"
            width={64}
            height={64}
            className="size-16 rounded-full object-cover"
          /> */}
          {/* END PATIENT IMAGE */}

          {/* PATIENT NAME */}
          <p className="text-neutral-900 font-semibold mt-3">
            {userData.firstName} {userData.lastName}
          </p>
          {/* END PATIENT NAME */}

          {/* PATIENT ID */}
          <p className="text-neutral-600">HMO ID: {userData.hmoId}</p>
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
                {userData.age} y/o
              </p>
            </div>
            {/* END AGE */}

            {/* HMO PLAN */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">HMO Plan</p>
              <p className="text-neutral-900 font-semibold">
                {userData.hmoPlan}
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
                {dateFns.format(userData.dateOfBirth, "dd-MM-yyyy")}
              </p>
            </div>
            {/* END DATE OF BIRTH */}

            {/* EXPIRES ON */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">Expires On</p>
              <p className="text-neutral-900 font-semibold">
                {dateFns.format(userData.expiresOn, "dd-MM-yyy")}
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
                {userData.height}
              </p>
            </div>
            {/* END HEIGHT */}

            {/* STATUS */}
            <div>
              <p className="text-neutral-600 text-sm mb-1">Status</p>
              <p
                className={cn(
                  "text-success-700 text-sm capitalize font-medium inline-block px-3 py-0.5 rounded-full",
                  userData.isActive ? "bg-success-50" : "bg-error-50"
                )}
              >
                {userData.isActive ? "Active" : "Inactive"}
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
                {userData.weight}
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
