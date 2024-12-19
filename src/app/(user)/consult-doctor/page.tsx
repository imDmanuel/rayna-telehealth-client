import TabButton from "@/components/general/tab-button";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  Clock9Icon,
  MessageSquareTextIcon,
  PlusCircleIcon,
} from "lucide-react";
import React from "react";
import ConsultationTable from "./components/consultation-table";

const TABLIST = {
  ONGOING_CONSULTATIONS: "ONGOING_CONSULTATIONS",
  CLOSED_CONSULTATIONS: "CLOSED_CONSULTATIONS",
};

export default function ConsultDoctorPage() {
  return (
    <section className="bg-neutral-50">
      <div className="px-9 py-6">
        {/* TITLE SECTION */}
        <div className="flex justify-between items-center flex-wrap gap-5">
          {/* PAGE TITLE */}
          <div>
            <h5 className="text-black font-semibold">Consult a Doctor</h5>
            <p className="text-neutral-600 mt-1">
              Check and filter all your medical appointments here
            </p>
          </div>
          {/* END PAGE TITLE */}

          {/* NEW CONSULTATION BUTTON */}
          <Button size={"sm"} className="ml-auto">
            <PlusCircleIcon />
            <span>New Consultation</span>
          </Button>
          {/* END NEW CONSULTATION BUTTON */}
        </div>
        {/* END TITLE SECTION */}

        <Tabs className="mt-6" defaultValue={TABLIST.ONGOING_CONSULTATIONS}>
          {/* TODO: Customize signature */}
          <div className="overflow-x-auto">
            <TabsList className="bg-transparent gap-x-3">
              <TabButton
                Icon={MessageSquareTextIcon}
                notificationCount={0}
                tab={TABLIST.ONGOING_CONSULTATIONS}
              >
                Ongoing Consultations
              </TabButton>
              <TabButton
                Icon={Clock9Icon}
                notificationCount={0}
                tab={TABLIST.CLOSED_CONSULTATIONS}
              >
                Closed Consultations
              </TabButton>
            </TabsList>
          </div>

          <TabsContent value={TABLIST.ONGOING_CONSULTATIONS}>
            <ConsultationTable />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
