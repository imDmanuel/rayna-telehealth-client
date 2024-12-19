import { Button } from "@/components/ui/button";
import { consultations } from "@/lib/mock-data";
import { MoreVerticalIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function ConsultationTable() {
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
          {consultations.map((consultation) => {
            return (
              <tr key={consultation.id}>
                <td>
                  <div className="flex items-center gap-x-3 py-5 px-6">
                    <Image
                      width={40}
                      height={40}
                      src={consultation.doctor.profileImage}
                      alt=""
                      className="size-10 shrink-0 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-paragraph-md min-w-0 text-neutral-900">
                        {consultation.doctor.name}
                      </p>
                      <p className="text-sm text-neutral-600">
                        {consultation.doctor.specialty}
                      </p>
                    </div>
                  </div>
                </td>

                <td>
                  <div className="py-5 px-6 min-w-80 whitespace-normal">
                    <p className="text-neutral-700 font-medium text-sm line-clamp-1">
                      {consultation.conversation.topic}
                    </p>
                    <p className="text-neutral-500 text-sm line-clamp-1">
                      {consultation.conversation.response}
                    </p>
                  </div>
                </td>

                <td>
                  <div className="py-5 px-6">
                    <p className="text-neutral-700 text-sm font-medium">
                      {consultation.dateTime.date}
                    </p>
                    <p className="text-neutral-500 text-sm">
                      {consultation.dateTime.time}
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
  );
}
