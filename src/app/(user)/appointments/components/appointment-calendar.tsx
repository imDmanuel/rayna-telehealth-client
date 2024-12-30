import { Calendar } from "@/components/ui/calendar";
import { Appointment } from "@/lib/types";
import React, { useCallback, useEffect, useState } from "react";
import { useGetAppointmentsByDate } from "../../apis/appointments/appointment.queries";
import { toast } from "sonner";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, combineDateAndTime, dateFns, formatInterval } from "@/lib/utils";
import {} from "date-fns/locale";
import { DayContent } from "react-day-picker";

export default function AppointmentCalendar() {
  const [activeAppointments, setActiveAppointments] = useState<Appointment[]>();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const appointmentsByDateQuery = useGetAppointmentsByDate();
  const appointmentsByDateData = appointmentsByDateQuery.data?.data.data;

  const handleSetActiveAppointment = useCallback(
    (selectedDate: Date) => {
      const dateStr = dateFns.format(selectedDate, "yyyy-MM-dd");
      let foundActiveAppointments: Appointment[] = [];
      if (appointmentsByDateData) {
        for (const date in appointmentsByDateData) {
          if (date === dateStr) {
            foundActiveAppointments = appointmentsByDateData[date];
            break;
          }
        }
      } else {
        toast.error(
          "Error picking active appointments, no appointment to pick from"
        );
      }
      setActiveAppointments(foundActiveAppointments);
      setSelectedDate(selectedDate);
    },
    [appointmentsByDateData]
  );

  useEffect(() => {
    if (appointmentsByDateQuery.isFetched) {
      handleSetActiveAppointment(new Date());
    }
  }, [appointmentsByDateQuery.isFetched, handleSetActiveAppointment]);

  return (
    <>
      {/* CALENDAR */}
      <Card className="inline-block @4xl/main:max-w-[355px]">
        <CardHeader>
          <CardTitle>Calendar</CardTitle>
        </CardHeader>
        <CardContent>
          <Calendar
            className="px-0"
            selected={selectedDate}
            modifiers={{
              hasAppointment: (date) => {
                const dateStr = dateFns.format(date, "yyyy-MM-dd");
                return (appointmentsByDateData?.[dateStr]?.length ?? 0) > 0;
              },
            }}
            modifiersStyles={{
              selected: {
                backgroundColor: "rgb(var(--color-primary-500))",
                color: "white",
              },
              today: {
                border: "1px solid rgb(var(--color-primary-500))",
              },
            }}
            components={{
              DayContent: ({ ...props }) => {
                const hasAppointment = props.activeModifiers["hasAppointment"];

                return (
                  <div className="relative w-full h-full grid place-items-center">
                    <DayContent {...props} />
                    <div
                      className={cn(
                        "inline-block size-1.5 rounded-full bg-primary-200 absolute bottom-0 left-1/2 -translate-x-1/2",
                        !hasAppointment && "hidden"
                      )}
                    />
                  </div>
                );
              },
            }}
            onDayClick={handleSetActiveAppointment}
          />
        </CardContent>
        <CardFooter className="border-t pt-8">
          {!activeAppointments
            ? "No active appointments"
            : activeAppointments?.length > 0
            ? activeAppointments.map((activeAppointment) => {
                const startTime = combineDateAndTime(
                  new Date(activeAppointment.date),
                  activeAppointment.startTime
                );
                const endTime = combineDateAndTime(
                  new Date(activeAppointment.date),
                  activeAppointment.endTime
                );
                const timeInterval = formatInterval(startTime, endTime);
                return (
                  <div
                    key={activeAppointment.id}
                    className="flex items-stretch gap-x-3 "
                  >
                    {/* APPOINTMENT DATE DETAILS */}
                    <div className="w-[6px] bg-primary-200 rounded-full"></div>
                    <div className="max-w-72">
                      <p className="text-neutral-600 text-sm">{timeInterval}</p>
                      <p className="text-neutral-900 font-medium">
                        Dr. {activeAppointment.doctor?.firstName}{" "}
                        {activeAppointment.doctor?.lastName}
                      </p>
                      <p className="text-neutral-600 text-sm">
                        {activeAppointment.hospital?.address}
                      </p>
                    </div>
                    {/* END APPOINTMENT DATE DETAILS */}
                  </div>
                );
              })
            : "No appointments on selected date"}
        </CardFooter>
      </Card>
      {/* END CALENDAR */}
    </>
  );
}
