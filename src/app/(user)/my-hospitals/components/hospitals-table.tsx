import StarRating from "@/components/general/star-rating";
import { Button } from "@/components/ui/button";
import { Hospital } from "@/lib/types";
import {
  ChevronsUpDownIcon,
  ListFilterIcon,
  MoreVerticalIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";

type HospitalTableProps = {
  title: string;
  hospitals: Hospital[];
};

export default function HospitalsTable({
  title,
  hospitals,
}: HospitalTableProps) {
  return (
    <>
      <div className="flex items-center gap-x-5 flex-wrap justify-between mt-10 mb-5">
        <div className="whitespace-nowrap font-semibold text-neutral-900 text-lg">
          {title}
        </div>

        {/* ACTIONS */}
        <div className="flex items-center flex-wrap justify-end text-neutral-500">
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

          <div className="flex items-center ml-auto">
            {/* FILTER */}
            <Button className="font-medium" size={"sm"} variant={"ghost"}>
              <ListFilterIcon />
              Filter
            </Button>

            {/* END FILTER */}

            {/* SORT */}
            <Button className="font-medium" size={"sm"} variant={"ghost"}>
              <ChevronsUpDownIcon />
              Sort
            </Button>
            {/* END SORT */}
          </div>
        </div>
        {/* END ACTIONS */}
      </div>
      {/* END TITLE AND ACTIONS */}
      <div className="whitespace-nowrap border rounded-lg overflow-x-auto">
        <table>
          <thead className="text-neutral-700 text-xs">
            <tr className="border-b border-neutral-100">
              <th className="text-left px-6 py-3">
                <button className="w-full flex items-center justify-between">
                  Name
                  <ChevronsUpDownIcon size={20} />
                </button>
              </th>
              <th className="text-left px-6 py-3">
                <button className="w-full flex items-center justify-between">
                  Address
                  <ChevronsUpDownIcon size={20} />
                </button>
              </th>
              <th className="text-left px-6 py-3">
                <button className="w-full flex items-center justify-between">
                  Phone no
                  <ChevronsUpDownIcon size={20} />
                </button>
              </th>
              <th className="text-left px-6 py-3">
                <button className="w-full flex items-center justify-between">
                  Ratings
                  <ChevronsUpDownIcon size={20} />
                </button>
              </th>
              <th className="text-left px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="bg-white text-neutral-700 text-sm divide-y">
            {hospitals.map((hospital) => {
              return (
                <tr key={hospital.id}>
                  <td className="py-5 px-6 font-medium text-neutral-900">
                    {hospital.name}
                  </td>

                  <td className="py-5 px-6 min-w-80 whitespace-normal">
                    {hospital.address}
                  </td>

                  <td>
                    <div className="py-5 px-6">{hospital.phone}</div>
                  </td>

                  <td>
                    <div className="py-5 px-6">
                      <StarRating rating={hospital.ratings} />
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
    </>
  );
}
