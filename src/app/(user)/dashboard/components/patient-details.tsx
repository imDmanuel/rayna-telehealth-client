"use client";

import { ThermometerIcon, BoxIcon, SunIcon } from "lucide-react";
import React from "react";
import HealthMetricCard from "./health-metric-card";
import PatientProfileCard from "./patient-profile-card";
import UpcomingConsultations from "./upcoming-consultations";
import { useGetUser } from "../../apis/user/user.queries";
import HealthMetricSkeleton from "./skeletons/health-metric-skeleton";

export default function PatientDetails() {
  const userQuery = useGetUser();
  const userData = userQuery.data?.data.data;

  return (
    <div className="mt-4 grid grid-cols-1 @2xl/main:grid-cols-[1fr_355px] gap-4">
      {/* MAIN INFO */}
      {/* <div className="flex-1"> */}
      {/* PATIENT'S VITALS */}
      <div className="grid grid-cols-1 gap-4 @7xl/main:grid-cols-3">
        {userQuery.isPending || !userData ? (
          Array.from({ length: 3 }).map((_, index) => {
            return <HealthMetricSkeleton key={index} />;
          })
        ) : (
          <>
            {/* BLOOD PRESSURE */}
            <HealthMetricCard
              title={"Blood pressure"}
              value={userData.bloodPressure.split(" ")[0]}
              unit={userData.bloodPressure.split(" ")[1]}
              change={"5%"}
              status={"Healthy"}
              Icon={ThermometerIcon}
            />
            {/* END BLOOD PRESSURE */}

            {/* CHOLESTEROL LEVELS */}
            <HealthMetricCard
              title={"Cholesterol levels"}
              value={userData.cholesterolLevels.split(" ")[0]}
              unit={userData.cholesterolLevels.split(" ")[1]}
              change={"5%"}
              status={"Healthy"}
              Icon={BoxIcon}
            />
            {/* END CHOLESTEROL LEVELS */}

            {/* GLUCOSE LEVELS */}
            <HealthMetricCard
              title={"Glucose levels"}
              value={userData.glucoseLevels.split(" ")[0]}
              unit={userData.glucoseLevels.split(" ")[1]}
              change={"5%"}
              status={"Healthy"}
              Icon={SunIcon}
            />
            {/* END GLUCOSE LEVELS */}
          </>
        )}
      </div>
      {/* END PATIENT'S VITALS */}

      {/* UPCOMING CONSULTATIONS */}
      <UpcomingConsultations className="@7xl/main:row-span-2" />
      {/* END UPCOMING CONSULTATIONS */}

      {/* PATIENT'S PROFILE */}
      <PatientProfileCard className="@2xl/main:col-span-2 @7xl/main:col-span-1" />
      {/* END PATIENT'S PROFILE */}
      {/* </div> */}
      {/* END MAIN INFO */}
    </div>
  );
}
