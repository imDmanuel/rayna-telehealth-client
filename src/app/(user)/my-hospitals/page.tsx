import TabButton from "@/components/general/tab-button";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import {
  Clock3Icon,
  CrossIcon,
  HomeIcon,
  PlusCircleIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import AllHospitalsTable from "./components/all-hospitals-table";

const TABLIST = {
  ALL_HOSPITALS: "ALL_HOSPITALS",
  RECENTLY_VISITED: "RECENTLY_VISITED",
  FAVOURITES: "FAVOURITES",
};

export default function MyHospitalsPage() {
  return (
    <section className="bg-neutral-50">
      <div className="px-9 py-6">
        {/* TITLE SECTION */}
        <div className="flex justify-between items-center gap-x-10 gap-y-5 flex-wrap">
          {/* PAGE TITLE */}
          <h5 className="text-black font-semibold">My Hospitals</h5>
          {/* END PAGE TITLE */}

          {/* FIND HOSPITALS NEAR ME BUTTON */}
          <Button size={"sm"} className="ml-auto">
            <SearchIcon />
            <span>Find hospitals near me</span>
          </Button>
          {/* END FIND HOSPITALS NEAR ME BUTTON */}
        </div>
        {/* END TITLE SECTION */}

        <Tabs className="mt-6" defaultValue={TABLIST.ALL_HOSPITALS}>
          {/* TODO: Do custom scrollbar */}
          <div className="overflow-x-auto">
            <TabsList className="bg-transparent gap-x-3">
              <TabButton
                Icon={CrossIcon}
                notificationCount={0}
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

          <TabsContent value={TABLIST.ALL_HOSPITALS}>
            <AllHospitalsTable />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
