import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  ChevronsUpDownIcon,
  ListFilterIcon,
  MoreVerticalIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";

export default function AppointmentTableSkeleton() {
  return (
    <div className="flex-1 min-w-0 max-w-full">
      {/* TITLE AND ACTIONS */}
      <div className="flex items-center flex-wrap gap-x-5 justify-between">
        <Skeleton>
          <div className="whitespace-nowrap font-semibold text-neutral-900 text-lg">
            All Visits
          </div>
        </Skeleton>

        {/* ACTIONS */}
        <div className="flex items-center flex-wrap justify-end text-neutral-500 ml-auto">
          {/* SEARCH */}
          <div className="flex items-center gap-x-1.5">
            <SearchIcon size={16} className="text-neutral-500" />
            <input
              type="text"
              placeholder="Search"
              className="focus:outline-none bg-transparent"
            />
          </div>
          {/* END SEARCH */}

          <div className="flex items-center">
            {/* FILTER */}
            <Button className="" variant={"ghost"} size={"sm"}>
              <ListFilterIcon />
              Filter
            </Button>

            {/* END FILTER */}

            {/* SORT */}
            <Button variant={"ghost"} size={"sm"}>
              <ChevronsUpDownIcon />
              Sort
            </Button>
            {/* END SORT */}
          </div>
        </div>
        {/* END ACTIONS */}
      </div>
      {/* END TITLE AND ACTIONS */}

      {/* TABLE DATA */}
      <div className="my-5 whitespace-nowrap border rounded-lg overflow-x-auto">
        <table className="min-w-0">
          <thead>
            <tr className="border-b border-neutral-100">
              <th className="text-left px-6 py-3">
                <Skeleton>Name</Skeleton>
              </th>
              <th className="text-left px-6 py-3">
                <Skeleton>Conversation</Skeleton>
              </th>
              <th className="text-left px-6 py-3">
                <Skeleton>Date and time</Skeleton>
              </th>
              <th className="text-left px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="flex items-center gap-x-3 py-5 px-6">
                      <Avatar>
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
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
                          Cottage Medicare Hospital
                        </p>
                      </Skeleton>
                      <Skeleton>
                        <p className="text-neutral-500 text-sm line-clamp-1">
                          18 Iwaya Rd, Yaba 101245, Lagos
                        </p>
                      </Skeleton>
                    </div>
                  </td>

                  <td>
                    <div className="py-5 px-6">
                      <Skeleton>
                        <p className="text-neutral-700 text-sm font-medium">
                          6 Jul, 2023
                        </p>
                      </Skeleton>
                      <Skeleton>
                        <p className="text-neutral-500 text-sm">1:00 PM</p>
                      </Skeleton>
                    </div>
                  </td>

                  <td>
                    <Skeleton>
                      <Button variant={"outline"} size={"icon-sm"}>
                        <MoreVerticalIcon />
                      </Button>
                    </Skeleton>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* END TABLE DATA */}
    </div>
  );
}
