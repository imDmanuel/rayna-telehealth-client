"use client";

import { CalendarIcon } from "lucide-react";
import React from "react";
import * as dateFns from "date-fns";
import { useGetUser } from "../../apis/user/user.queries";
import { Skeleton } from "@/components/ui/skeleton";

export default function WelcomeUser() {
  const userQuery = useGetUser();
  const userData = userQuery.data?.data.data;

  return (
    <div className="flex justify-between items-center gap-5 flex-wrap">
      {/* WELCOME MESSAGE */}
      <div>
        <h5 className="text-black font-semibold">
          Welcome{" "}
          {userQuery.isPending ? (
            <Skeleton className="inline-block">David</Skeleton>
          ) : (
            userData?.firstName
          )}
        </h5>
        <p className="text-neutral-600 mt-1">
          It’s a sunny day today, we hope you’re taking good care of your health
          😊
        </p>
      </div>
      {/* END WELCOME MESSAGE */}

      {/* TODAY'S DATE */}
      <div className="ml-auto inline-flex whitespace-nowrap items-center border border-neutral-200 bg-white rounded-xl px-5 py-4">
        {/* CALENDAR ICON */}
        <div className="bg-neutral-100 size-10 rounded-full grid place-items-center">
          <CalendarIcon className="h-5 text-neutral-700" />
        </div>
        {/* END CALENDAR ICON */}

        {/* DATE */}
        <div>
          <p className="text-neutral-600 text-xs">Today’s Date</p>
          <p className="font-semibold text-neutral-700">
            {dateFns.format(Date.now(), "do MMMM, yyyy")}
          </p>
        </div>
        {/* END DATE */}
      </div>
      {/* END TODAY'S DATE */}
    </div>
  );
}
