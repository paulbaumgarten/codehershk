import Image from 'next/image';
import Link from 'next/link';
import getWorkshopsCategories from "./GetWorkshopsCategories";

export default function WorkshopsSection() {
  const workshopsCategories = getWorkshopsCategories();
  const isProd = process.env.NODE_ENV === 'production';

  const workshopCards = workshopsCategories.map((workshop: any) => {
    return (
      <div
        className="p-6 rounded-lg shadow-md w-72 bg-primary-500/20"
        key={workshop.id}
      >
        <Image
          alt={workshop.title}
          src={isProd ? '/codehershk/' + `workshop-icons/${workshop.icon}` : `/workshop-icons/${workshop.icon}`}
          width={0}
          height={0}
          className="w-10 h-10 mb-3"
        ></Image>
        <h5 className="mb-2 text-2xl font-semibold text-text-900 ">
          {workshop.title}
        </h5>
        <p className="mb-3 font-normal text-text-400">{workshop.description}</p>
        {/* <Link
          href={`/workshops/${workshop.slug}`}
          className="inline-flex items-center text-accent-600 hover:underline"
        >
          Learn More
          <svg
            className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 18"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
            />
          </svg>
        </Link> */}
      </div>
    );
  });

  return (
    <div className="items-center py-10 space-y-12 md:py-16">
      <div className="flex flex-col space-y-4">
        <h2 className="text-4xl font-extrabold tracking-wide text-center text-text-900 sm:text-6xl">
          Workshops
        </h2>
        <h5 className="block text-2xl leading-6 tracking-wide text-center text-text-800">
          Choose from over 40 workshops from a range of experts from tech-related companies and professors to our own members!
        </h5>
      </div>
      <div className="flex flex-wrap justify-center gap-12">
        {workshopCards}
      </div>
    </div>
  );
}