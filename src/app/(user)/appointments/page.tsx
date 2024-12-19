import TabButton from "@/components/general/tab-button";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { Clock3Icon, CrossIcon, PlusCircleIcon } from "lucide-react";
import React from "react";
import AllVisitsTab from "./components/all-visits-tab";

const TABLIST = {
  ALL_VISITS: "ALL_VISITS",
  UPCOMING_VISITS: "UPCOMING_VISITS",
  CANCELLED_VISITS: "CANCELLED_VISITS",
};

export default function MyAppointmentsPage() {
  return (
    <section className="bg-neutral-50">
      <div className="px-9 py-6 @container/main">
        {/* TITLE SECTION */}
        <div className="flex justify-between items-center flex-wrap gap-5">
          {/* PAGE TITLE */}
          <div>
            <h5 className="text-black font-semibold">My Appointments</h5>
            <p className="text-neutral-600 mt-1">
              Check and filter all your medical appointments here
            </p>
          </div>
          {/* END PAGE TITLE */}

          {/* NEW  APPOINTMENT BUTTON */}
          <Button size={"sm"} className="ml-auto">
            <PlusCircleIcon />
            <span>New appointment</span>
          </Button>
          {/* END NEW APPOINTMENT BUTTON */}
        </div>
        {/* END TITLE SECTION */}

        <Tabs className="mt-6" defaultValue={TABLIST.ALL_VISITS}>
          <div className="overflow-x-auto">
            <TabsList className="bg-transparent gap-x-3">
              <TabButton
                Icon={CrossIcon}
                notificationCount={0}
                tab={TABLIST.ALL_VISITS}
              >
                All Visits
              </TabButton>
              <TabButton
                Icon={Clock3Icon}
                notificationCount={0}
                tab={TABLIST.UPCOMING_VISITS}
              >
                Upcoming Visits
              </TabButton>
              <TabButton
                Icon={Clock3Icon}
                notificationCount={0}
                tab={TABLIST.CANCELLED_VISITS}
              >
                Cancelled Visits
              </TabButton>
            </TabsList>
          </div>

          <TabsContent value={TABLIST.ALL_VISITS}>
            <AllVisitsTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
