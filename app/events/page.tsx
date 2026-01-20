import Image from "next/image";
import Link from "next/link";
import Countdown from "../components/countdown";

export default function CurrentEventsPage() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      <section className="pt-8">
          <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl">
          Current Events
        </h1>

        <p className="text-text-700 text-lg">
          Check out what we have going on right now!
        </p>
      </section>


            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
        {/* Mascot on the left */}
            <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/mascot26/mascot3.png" // Update with your actual mascot path
            alt="CodeHers Mascot 3"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Countdown in the middle */}
        <Countdown/>

        <div className="relative w-48 h-48 md:w-64 md:h-64">
          <Image
            src="/mascot26/mascot4.png" // Update with your actual mascot path
            alt="CodeHers Mascot 4"
            fill
            className="object-contain"
            priority
          />
        </div>
        
      </div>


      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-bold text-text-900">CodeHers 2026</h3>
          <p className="text-text-700">
            Our annual flagship event! Join us for workshops, talks, and fun.
          </p>
          <div className="flex flex-col gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/events/2026"
              className="relative top-0 inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transition-all bg-secondary-100 text-text-700"
            >
              Learn More
            </Link>
            <div className="relative inline-flex items-center justify-center ease-out group">
              <div className="absolute duration-1000 transition-all opacity-70 -inset-px bg-primary-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
              <Link
                href="https://app.codehershk.org/"
                className="relative top-0 inline-flex items-center justify-center w-full px-6 py-2 text-base font-medium leading-loose text-center text-white duration-300 rounded-lg bg-primary-500 hover:-top-2 transition-all"
                target="_blank"
              >
                Sign Up
              </Link>
            </div>
          </div>
          
        </div>

        <div className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-2">
          <h3 className="text-xl font-bold text-text-900">CodeHers 2nd Hackathon</h3>
          <p className="text-text-700">
            Join our hackathon to tackle real-world problems with code.
          </p>
          <div className="flex flex-col gap-4 space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link
              href="/events/2026/hackathon"
              className="relative top-0 inline-flex items-center justify-center px-6 py-2 text-base font-medium leading-loose text-center duration-300 ease-out rounded-lg hover:-top-2 transition-all bg-secondary-100 text-text-700"
            >
              Learn More
            </Link>
            <div className="relative inline-flex items-center justify-center ease-out group">
              <div className="absolute duration-1000 transition-all opacity-70 -inset-px bg-primary-500 blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-300 animate-tilt"></div>
              <Link
                href="https://forms.gle/mJV9tqRHKPaEhtS38"
                className="relative top-0 inline-flex items-center justify-center w-full px-6 py-2 text-base font-medium leading-loose text-center text-white duration-300 rounded-lg bg-primary-500 hover:-top-2 transition-all"
                target="_blank"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="p-6 bg-secondary-500/10 rounded-xl shadow space-y-6">
        <h2 className="text-2xl font-bold text-text-900">
          CodeHers Highlights
        </h2>
        <p className="text-text-700">
          Watch our latest highlights video, and check out our promotional materials!
        </p>

        <div className="relative w-full overflow-hidden rounded-lg" style={{ paddingBottom: "56.25%" }}>
          <iframe
            src="https://www.youtube.com/embed/zgT_fEx4XTk"
            title="CodeHers Highlights 2025"
            frameBorder="0"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/marketing/2025poster.pdf"
            target="_blank"
            className="inline-block px-4 py-2 text-base font-medium leading-loose text-white rounded-lg bg-accent-500 hover:bg-accent-600 transition-all"
          >
            View Promotional Poster
          </Link>
          <Link
            href="/about/school-introduction/"
            target="_blank"
            className="inline-block px-4 py-2 text-base font-medium leading-loose text-white rounded-lg bg-accent-500 hover:bg-accent-600 transition-all"
          >
            Introduction to Schools
          </Link>
        </div>
      </section>
    </main>
  );
}
