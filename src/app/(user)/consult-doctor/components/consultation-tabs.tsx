"use client";

import React from "react";
import TabButton from "@/components/general/tab-button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Clock9Icon, MessageSquareTextIcon } from "lucide-react";
import ConsultationTable from "./consultation-table";
import { useGetconsultations } from "../../apis/consultation/consultation.queries";
import { parseAsStringEnum, useQueryState } from "nuqs";
import ConsultationTableSkeleton from "./skeletons/consultation-table-skeleton";
import { showApiError } from "@/lib/utils";

const TABLIST = {
  ONGOING_CONSULTATIONS: "ongoing",
  CLOSED_CONSULTATIONS: "closed",
} as const;

type TabListValues = (typeof TABLIST)[keyof typeof TABLIST][];

export function ConsutationTabs() {
  const [currentTab, setCurrentTab] = useQueryState(
    "tab",
    parseAsStringEnum(["ongoing", "closed"] as TabListValues).withDefault(
      "ongoing"
    )
  );

  const consultationsQuery = useGetconsultations({ status: currentTab });
  const consultationsData = consultationsQuery.data?.data.data;
  const consultationsMeta = consultationsQuery.data?.data.meta;

  if (consultationsQuery.isError) {
    showApiError(consultationsQuery.error, "Error fetching consultations");
  }

  return (
    <Tabs
      className="mt-6"
      defaultValue={TABLIST.ONGOING_CONSULTATIONS}
      value={currentTab}
    >
      {/* TODO: Customize signature */}
      <div className="overflow-x-auto">
        <TabsList className="bg-transparent gap-x-3">
          <TabButton
            Icon={MessageSquareTextIcon}
            notificationCount={consultationsMeta?.ongoingCount ?? 0}
            tab={TABLIST.ONGOING_CONSULTATIONS}
            onClick={() => setCurrentTab(TABLIST.ONGOING_CONSULTATIONS)}
          >
            Ongoing Consultations
          </TabButton>
          <TabButton
            Icon={Clock9Icon}
            notificationCount={consultationsMeta?.closedCount ?? 0}
            tab={TABLIST.CLOSED_CONSULTATIONS}
            onClick={() => setCurrentTab(TABLIST.CLOSED_CONSULTATIONS)}
          >
            Closed Consultations
          </TabButton>
        </TabsList>
      </div>

      {consultationsQuery.isPending || !consultationsData ? (
        <ConsultationTableSkeleton />
      ) : (
        <>
          {/* Tabs is useless here butt... */}
          <TabsContent value={TABLIST.ONGOING_CONSULTATIONS}>
            <ConsultationTable consultations={consultationsData} />
          </TabsContent>
          <TabsContent value={TABLIST.CLOSED_CONSULTATIONS}>
            <ConsultationTable consultations={consultationsData} />
          </TabsContent>
        </>
      )}
    </Tabs>
  );
}
