"use client";

import TabButton from "@/components/general/tab-button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Clock3Icon, CrossIcon } from "lucide-react";
import React from "react";
import { useGetAppointments } from "../../apis/appointments/appointment.queries";
import { parseAsStringEnum, useQueryState } from "nuqs";
import AppointmentTable from "./appointment-table";
import { showApiError } from "@/lib/utils";
import AppointmentTableSkeleton from "./skeletons/appointment-table-skeleton";
import AppointmentCalendar from "./appointment-calendar";

const TABLIST = {
  ALL_VISITS: "all-visits",
  UPCOMING_VISITS: "upcoming-visits",
  PAST_VISITS: "past-visits",
  CANCELLED_VISITS: "cancelled-visits",
} as const;

type TabListValues = (typeof TABLIST)[keyof typeof TABLIST][];

export default function AppointmentsDetails() {
  const [currentTab, setCurrentTab] = useQueryState(
    "tab",
    parseAsStringEnum([
      "all-visits",
      "upcoming-visits",
      "past-visits",
      "cancelled-visits",
    ] as TabListValues).withDefault("all-visits")
  );

  const appointmentsQuery = useGetAppointments({ status: currentTab });
  const appointmentsData = appointmentsQuery.data?.data.data;
  const appoinementsMeta = appointmentsQuery.data?.data.meta;

  if (appointmentsQuery.isError) {
    showApiError(appointmentsQuery.error, "Error fetching appointments");
  }

  return (
    <Tabs className="mt-6" defaultValue={TABLIST.ALL_VISITS} value={currentTab}>
      <div className="overflow-x-auto">
        <TabsList className="bg-transparent gap-x-3">
          <TabButton
            Icon={CrossIcon}
            notificationCount={appoinementsMeta?.allVisitsCount ?? 0}
            tab={TABLIST.ALL_VISITS}
            onClick={() => setCurrentTab(TABLIST.ALL_VISITS)}
          >
            All Visits
          </TabButton>
          <TabButton
            Icon={Clock3Icon}
            notificationCount={appoinementsMeta?.upcomingVisitsCount ?? 0}
            tab={TABLIST.UPCOMING_VISITS}
            onClick={() => setCurrentTab(TABLIST.UPCOMING_VISITS)}
          >
            Upcoming Visits
          </TabButton>
          <TabButton
            Icon={Clock3Icon}
            notificationCount={appoinementsMeta?.pastVisitsCount ?? 0}
            tab={TABLIST.PAST_VISITS}
            onClick={() => setCurrentTab(TABLIST.PAST_VISITS)}
          >
            Past Visits
          </TabButton>
          <TabButton
            Icon={Clock3Icon}
            notificationCount={appoinementsMeta?.cancelledVisitsCount ?? 0}
            tab={TABLIST.CANCELLED_VISITS}
            onClick={() => setCurrentTab(TABLIST.CANCELLED_VISITS)}
          >
            Cancelled Visits
          </TabButton>
        </TabsList>
      </div>
      <div className="mt-10 flex gap-4 items-start flex-col @4xl/main:flex-row">
        {/* TODO: Show loading skeleton */}
        <AppointmentCalendar />

        {appointmentsQuery.isPending || !appointmentsData ? (
          <AppointmentTableSkeleton />
        ) : (
          <>
            <TabsContent
              className="max-w-full flex-1 min-w-0"
              value={TABLIST.ALL_VISITS}
            >
              <AppointmentTable
                title="All Visits"
                appointments={appointmentsData}
              />
            </TabsContent>
            <TabsContent
              className="max-w-full flex-1 min-w-0"
              value={TABLIST.UPCOMING_VISITS}
            >
              <AppointmentTable
                title="Upcoming Visits"
                appointments={appointmentsData}
              />
            </TabsContent>
            <TabsContent
              className="max-w-full flex-1 min-w-0"
              value={TABLIST.PAST_VISITS}
            >
              <AppointmentTable
                title="Past Visits"
                appointments={appointmentsData}
              />
            </TabsContent>
            <TabsContent
              className="max-w-full flex-1 min-w-0"
              value={TABLIST.CANCELLED_VISITS}
            >
              <AppointmentTable
                title="Cancelled Visits"
                appointments={appointmentsData}
              />
            </TabsContent>
          </>
        )}
      </div>
    </Tabs>
  );
}
