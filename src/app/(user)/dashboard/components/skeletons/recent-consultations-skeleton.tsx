import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

export default function RecentconsultationsSkeleton() {
  return (
    <Card>
      <CardHeader className="pt-4 flex flex-row items-center justify-between">
        <CardTitle className="p-0">Recent Consultations</CardTitle>
        <button className="text-neutral-500 flex items-center font-semibold text-sm">
          See all
          <ChevronRight className="h-5" />
        </button>
      </CardHeader>
      <CardContent className="p-0 divide-y">
        {new Array(5).fill(0).map((_, index) => {
          return (
            <div
              key={index}
              className="flex items-center flex-wrap gap-3 py-5 px-6"
            >
              {/* CONSULTANT IMAGE */}
              <Skeleton className="size-10 rounded-full" />
              {/* END CONSULTANT IMAGE */}

              {/* CONSULTANT DETAILS */}
              <div className="flex-1 min-w-36">
                <Skeleton>
                  <p className="text-sm font-medium">Dr. Alison Ogaga</p>
                </Skeleton>
                <Skeleton>
                  <p className="text-sm">General Practitioner</p>
                </Skeleton>
              </div>
              {/* END CONSULTANT DETAILS */}

              {/* SEND MESSAGE BUTTON */}
              <Button
                disabled
                size={"sm"}
                variant={"outline"}
                className="ml-auto"
              >
                Send a message
              </Button>
              {/* END SEND MESSAGE BUTTON */}
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
