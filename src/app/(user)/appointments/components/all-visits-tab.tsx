import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { appointments } from "@/lib/mock-data";
import {
  ChevronsUpDownIcon,
  ListFilterIcon,
  MoreVerticalIcon,
  SearchIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AllVisitsTab() {
  return (
    <div className="mt-10 flex gap-4 items-start flex-col @4xl/main:flex-row">
      {/* CALENDAR */}
      <Card className="inline-block">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar />
        </CardContent>
        <CardFooter className="flex items-stretch gap-x-3 border-t pt-8">
          {/* APPOINTMENT DATE DETAILS */}
          <div className="w-[6px] bg-primary-200 rounded-full"></div>
          <div className="max-w-72">
            <p className="text-neutral-600 text-sm">11.30 - 12.00 (30 min)</p>
            <p className="text-neutral-900 font-medium">Dr. Alison Ogaga</p>
            <p className="text-neutral-600 text-sm">
              Cottage Medicare Hospital, 18 Iwaya Rd, Yaba 101245, Lagos
            </p>
          </div>
          {/* END APPOINTMENT DATE DETAILS */}
        </CardFooter>
      </Card>
      {/* END CALENDAR */}

      {/* VISITATION TABLE */}
      <div className="flex-1 min-w-0 max-w-full">
        {/* TITLE AND ACTIONS */}
        <div className="flex items-center flex-wrap gap-x-5 justify-between">
          <div className="whitespace-nowrap font-semibold text-neutral-900 text-lg">
            All Visits
          </div>

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
              <Button className="" variant={"ghost"}>
                <ListFilterIcon />
                Filter
              </Button>

              {/* END FILTER */}

              {/* SORT */}
              <Button variant={"ghost"}>
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
                <th className="text-left px-6 py-3">Name</th>
                <th className="text-left px-6 py-3">Conversation</th>
                <th className="text-left px-6 py-3">Date and time</th>
                <th className="text-left px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {appointments.map((appointment) => {
                return (
                  <tr key={appointment.id}>
                    <td>
                      <div className="flex items-center gap-x-3 py-5 px-6">
                        <Image
                          width={40}
                          height={40}
                          src={appointment.doctor.profileImage}
                          alt=""
                          className="size-10 shrink-0 rounded-full"
                        />
                        <div>
                          <p className="font-medium text-paragraph-md min-w-0 text-neutral-900">
                            {appointment.doctor.name}
                          </p>
                          <p className="text-sm text-neutral-600">
                            {appointment.doctor.specialty}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td>
                      <div className="py-5 px-6 min-w-80 whitespace-normal">
                        <p className="text-neutral-700 font-medium text-sm line-clamp-1">
                          {appointment.hospital.name}
                        </p>
                        <p className="text-neutral-500 text-sm line-clamp-1">
                          {appointment.hospital.address}
                        </p>
                      </div>
                    </td>

                    <td>
                      <div className="py-5 px-6">
                        <p className="text-neutral-700 text-sm font-medium">
                          {appointment.dateTime.date}
                        </p>
                        <p className="text-neutral-500 text-sm">
                          {appointment.dateTime.time}
                        </p>
                      </div>
                    </td>

                    <td>
                      <Button variant={"outline"} size={"icon-lg"}>
                        <MoreVerticalIcon />
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {/* END TABLE DATA */}
      </div>
      {/* END VISITATION TABLE */}
    </div>
  );
}
