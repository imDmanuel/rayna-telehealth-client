"use client";

import React from "react";
import TabButton from "@/components/general/tab-button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Clock3Icon, CrossIcon, HomeIcon } from "lucide-react";
import HospitalsTable from "./hospitals-table";
import { useGetHospitals } from "../../apis/hospitals/hospitals.queries";
import HospitalsTableSkeleton from "./hospital-table-skeleton";
import { showApiError } from "@/lib/utils";
import { parseAsStringEnum, useQueryState } from "nuqs";

const TABLIST = {
  ALL_HOSPITALS: "all-hospitals",
  RECENTLY_VISITED: "recently-visited",
  FAVOURITES: "favourites",
} as const;

type TabListValues = (typeof TABLIST)[keyof typeof TABLIST][];

export default function HospitalList() {
  const [currentTab, setCurrentTab] = useQueryState(
    "tab",
    parseAsStringEnum([
      "all-hospitals",
      "recently-visited",
      "favourites",
    ] as TabListValues).withDefault("all-hospitals")
  );
  const hospitalListQuery = useGetHospitals({ category: currentTab });
  const hospitalListData = hospitalListQuery.data?.data.data;
  const hospitalListMeta = hospitalListQuery.data?.data.meta;

  if (hospitalListQuery.isError) {
    showApiError(hospitalListQuery.error, "Error fetching hospitals");
  }

  return (
    <Tabs className="mt-6" defaultValue={TABLIST.ALL_HOSPITALS}>
      {/* TODO: Do custom scrollbar */}
      <div className="overflow-x-auto">
        <TabsList className="bg-transparent gap-x-3">
          <TabButton
            Icon={CrossIcon}
            notificationCount={hospitalListMeta?.hospitalsCount ?? 0}
            tab={TABLIST.ALL_HOSPITALS}
          >
            All Hospitals
          </TabButton>
          <TabButton
            Icon={Clock3Icon}
            notificationCount={0}
            tab={TABLIST.RECENTLY_VISITED}
          >
            Recently Visited
          </TabButton>
          <TabButton
            Icon={HomeIcon}
            notificationCount={0}
            tab={TABLIST.FAVOURITES}
          >
            Favourites
          </TabButton>
        </TabsList>
      </div>

      {hospitalListQuery.isPending || !hospitalListData ? (
        <HospitalsTableSkeleton />
      ) : (
        <>
          <TabsContent value={TABLIST.ALL_HOSPITALS}>
            <HospitalsTable
              title="All Hospitals"
              hospitals={hospitalListData}
            />
          </TabsContent>
          <TabsContent value={TABLIST.RECENTLY_VISITED}>
            <HospitalsTable
              title="Recently Visited"
              hospitals={hospitalListData}
            />
          </TabsContent>
          <TabsContent value={TABLIST.FAVOURITES}>
            <HospitalsTable title="Favourites" hospitals={hospitalListData} />
          </TabsContent>
        </>
      )}
    </Tabs>
  );
}
