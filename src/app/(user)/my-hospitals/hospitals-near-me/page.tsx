"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { hospitalsNearMe } from "@/lib/mock-data";
import { MapPinIcon } from "lucide-react";
import React from "react";
import { APIProvider, Map } from "@vis.gl/react-google-maps";

export default function MyAppointmentsPage() {
  return (
    <section className="bg-neutral-50">
      {/* MINI NAVBAR */}
      <nav>{/* BACK BUTTON */}</nav>
      {/* END MINI NAVBAR */}

      {/* HOSPITAL LIST */}
      <div className="">
        {/* TITLE SECTION */}
        <div className="flex justify-between items-center py-6 pl-9">
          {/* PAGE TITLE */}
          <div>
            <h5 className="text-black font-semibold">Hospitals near me</h5>
            <div className="text-neutral-500 font-medium text-sm flex items-center">
              <MapPinIcon size={20} />
              <p>Yaba, Lagos</p>
              <Button variant={"link"}>Change</Button>
            </div>
          </div>
          {/* END PAGE TITLE */}
        </div>
        {/* END TITLE SECTION */}

        {/* LIST */}
        <div className="pl-9 space-y-4">
          {hospitalsNearMe.map((hospital) => {
            return (
              <Card key={hospital.id}>
                <CardContent className="p-6 space-y-1">
                  <p className="text-neutral-700 font-semibold">
                    {hospital.name}
                  </p>
                  <div className="text-sm text-neutral-500 flex items-center">
                    <p>{hospital.rating.toFixed(1)}</p>

                    <p>({hospital.reviews})</p>
                  </div>
                  <p className="text-neutral-600 text-sm">{hospital.address}</p>
                  <p className="flex items-center gap-x-1 text-sm text-neutral-600">
                    <span className="text-success-700">{hospital.hours}</span>
                    <span>•</span>
                    <span className="">{hospital.contact}</span>
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        {/* END LIST */}
      </div>
      {/* END HOSPITAL LIST */}

      {/* VICINITY MAP */}
      {/* TODO: Vicinity map */}
      {/* <APIProvider apiKey={config?.NEXT_PUBLIC_GOOGLE_MAPS_APIKEY}>
        <Map
          style={{ width: "100vw", height: "100vh" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        />
      </APIProvider> */}
      {/* END VICINITY MAP */}
    </section>
  );
}
