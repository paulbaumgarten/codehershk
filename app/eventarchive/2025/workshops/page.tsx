import { get2025WorkshopsData } from "@/app/eventarchive/2025/workshops/GetWorkshopsData";
import { get2025ScheduleData } from "@/app/eventarchive/2025/workshops/GetScheduleData";
import Accordion from "@/app/components/Accordion";

async function SessionSection({ session, index }: { session: any, index: any }) {
  const workshops = get2025WorkshopsData();
  // console.log(session);
  return (
    <div key={index} className="mt-8">
      <h3 className="text-2xl font-extrabold text-text-900 sm:text-3xl">Session {index + 1}</h3>
      <h4 className="text-sm font-medium text-secondary-400 sm:text-lg">{session.time}</h4>
      <div className="mt-4 divide-y divide-text-100/50 divide-solid">
        {session["workshopIDs"].map((workshopId: any, indexWks: any) => {
          let workshop = workshops[workshopId - 1];
          return (
            <Accordion key={indexWks} title={workshop.title} content={workshop.description} index={parseInt(workshop.id)} author={workshop.by} category={workshop.category} location={workshop.location[index]} />
          );
        })}
      </div>
    </div>
  );
}

export default async function Workshops() {
  const schedule = get2025ScheduleData();

  const scheduleSections = schedule.map((session: any, index: any) => {
    return (
      <SessionSection key={index} session={session} index={index} />
    );
  });

  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 py-10">
      <h2 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-5xl">
        2025 Workshops
      </h2>
      <div className="mt-4">{scheduleSections}</div>
    </main>
  );
}