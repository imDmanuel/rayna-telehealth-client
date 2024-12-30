import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { MoreVerticalIcon } from "lucide-react";
import React from "react";

function ConsultationTableSkeleton() {
  return (
    <div className="my-10 whitespace-nowrap border rounded-lg overflow-x-auto">
      <table className="">
        <thead>
          <tr className="border-b border-neutral-100">
            <th className="text-left px-6 py-3">Name</th>
            <th className="text-left px-6 py-3">Conversation</th>
            <th className="text-left px-6 py-3">Date and time</th>
            <th className="text-left px-6 py-3"></th>
          </tr>
        </thead>
        <tbody className="bg-white">
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <tr key={index}>
                <td>
                  <div className="flex items-center gap-x-3 py-5 px-6">
                    <Skeleton className="rounded-full">
                      <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                    </Skeleton>
                    <div>
                      <Skeleton>
                        <p className="font-medium text-paragraph-md min-w-0 text-neutral-900">
                          Dr. Alison Ogaga
                        </p>
                      </Skeleton>
                      <Skeleton>
                        <p className="text-sm text-neutral-600">
                          General Practioner
                        </p>
                      </Skeleton>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="py-5 px-6 min-w-80 whitespace-normal">
                    <Skeleton>
                      <p className="text-neutral-700 font-medium text-sm line-clamp-1">
                        I’m feeling uneasy
                      </p>
                    </Skeleton>
                    <Skeleton>
                      <p className="text-neutral-500 text-sm line-clamp-1">
                        Good morning. I'm sorry to hear that you're not feeling
                        well. Can you tell me more about your symptoms? How long
                        have you been feeling this way?'
                      </p>
                    </Skeleton>
                  </div>
                </td>

                <td>
                  <div className="py-5 px-6">
                    <Skeleton>
                      <p className="text-neutral-700 text-sm font-medium">
                        1 Jul, 2023
                      </p>
                    </Skeleton>
                    <Skeleton>
                      <p className="text-neutral-500 text-sm">1:00 PM</p>
                    </Skeleton>
                  </div>
                </td>

                <td>
                  <Button variant={"outline"} size={"icon-sm"}>
                    <MoreVerticalIcon />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ConsultationTableSkeleton;
