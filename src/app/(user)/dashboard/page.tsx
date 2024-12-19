import React from "react";
import QuickActions from "./components/quick-actions";
import RecentConsultations from "./components/recent-consultations";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { getUser } from "../apis/user/user.apis";
import WelcomeUser from "./components/welcome-user";
import PatientDetails from "./components/patient-details";
import { getUpcomingConsultation } from "../apis/consultation/consultation.apis";

export default async function DashboardPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["user"],
    queryFn: getUser,
  });

  await queryClient.prefetchQuery({
    queryKey: ["upcoming-consultation"],
    queryFn: getUpcomingConsultation,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <section className="bg-neutral-50">
        <div className="px-9 py-6 @container/main">
          {/* WELCOME SECTION */}
          <WelcomeUser />
          {/* END WELCOME SECTION */}

          {/* PATIENT'S DETAILS */}
          <PatientDetails />
          {/* END PATIENT'S DETAILS */}

          {/* QUICK ACTIONS AND RECENT CONSULTATIONS */}
          <div className="flex flex-col @4xl/main:flex-row gap-4 mt-4">
            {/* QUICK ACTIONS */}
            <div className="@4xl/main:w-5/12">
              <QuickActions />
            </div>
            {/* END QUICK ACTIONS */}

            {/* RECENT CONSULTATIONS */}
            <div className="@4xl/main:w-7/12">
              <RecentConsultations />
            </div>
            {/* END RECENT CONSULTATIONS */}
          </div>
          {/* END QUICK ACTIONS AND RECENT CONSULTATIONS */}
        </div>
      </section>
    </HydrationBoundary>
  );
}
