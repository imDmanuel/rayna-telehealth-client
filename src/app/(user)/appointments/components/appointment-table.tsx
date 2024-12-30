import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Appointment } from "@/lib/types";
import { dateFns, getInitials } from "@/lib/utils";
import {
  ChevronsUpDownIcon,
  ListFilterIcon,
  MoreVerticalIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";

export default function AppointmentTable({
  title = "All Visits",
  appointments,
}: {
  title: string;
  appointments: Appointment[];
}) {
  return (
    <div className="flex-1 min-w-0 max-w-full">
      {/* TITLE AND ACTIONS */}
      <div className="flex items-center flex-wrap gap-x-5 justify-between">
        <div className="whitespace-nowrap font-semibold text-neutral-900 text-lg">
          {title}
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
              <th className="text-left px-6 py-3">Name</th>
              <th className="text-left px-6 py-3">Address</th>
              <th className="text-left px-6 py-3">Date and time</th>
              <th className="text-left px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y">
            {appointments.map((appointment) => {
              return (
                <tr key={appointment.id}>
                  <td>
                    <div className="flex items-center gap-x-3 py-5 px-6">
                      <Avatar>
                        <AvatarImage />
                        <AvatarFallback>
                          {getInitials([
                            appointment.doctor?.firstName,
                            appointment.doctor?.lastName,
                          ])}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-paragraph-md min-w-0 text-neutral-900">
                          Dr. {appointment.doctor?.firstName}{" "}
                          {appointment.doctor?.lastName}
                        </p>
                        <p className="text-sm text-neutral-600">
                          {appointment.doctor?.specialty}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td>
                    <div className="py-5 px-6 min-w-80 whitespace-normal">
                      <p className="text-neutral-700 font-medium text-sm line-clamp-1">
                        {appointment.hospital?.name}
                      </p>
                      <p className="text-neutral-500 text-sm line-clamp-1">
                        {appointment.hospital?.address}
                      </p>
                    </div>
                  </td>

                  <td>
                    <div className="py-5 px-6">
                      <p className="text-neutral-700 text-sm font-medium">
                        {dateFns.format(
                          appointment?.date ?? new Date(),
                          "dd MM, yyyy"
                        )}
                      </p>
                      <p className="text-neutral-500 text-sm">
                        {appointment.startTime}
                      </p>
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
      {/* END TABLE DATA */}
    </div>
  );
}
