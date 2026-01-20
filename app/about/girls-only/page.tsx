"use client";

import Link from "next/link";

export default function WhyGirlsOnly() {
  return (
    <main className="flex flex-col px-6 md:px-16 lg:px-24 2xl:px-64 xl:px-48 space-y-10">
      {/* Title Section */}
      <section className="pt-8 text-center">
        <h1 className="text-4xl font-extrabold tracking-wide text-text-900 sm:text-6xl mb-4">
          Why a Girls-Only Event?
        </h1>
      </section>

      {/* Content Section */}
      <section className="space-y-6">
        <div className="p-6 bg-secondary-500/10 shadow rounded-lg">
          <h2 className="text-2xl font-bold text-text-900 mb-2">
            Why run a girls-only event?
          </h2>
          <p className="text-text-600">
            In the tech-centric world we inhabit, a glaring gender disparity pervades the field of Computer Science. 
            Girls-only coding events, such as CodeHers, are a crucial response to the historical and ongoing 
            underrepresentation of women in tech. These specialised events are not born out of a desire for segregation 
            but from a necessity to create environments that encourage and empower young girls to engage with 
            technology and coding.
          </p>
        </div>

        <div className="p-6 bg-secondary-500/10 shadow rounded-lg">
          <h2 className="text-2xl font-bold text-text-900 mb-2">
            Addressing the Gender Gap
          </h2>
          <p className="text-text-600">
            The stark underrepresentation of women in tech is not a relic of the past but a present-day challenge. In 
            classrooms and workplaces alike, the ratio of males to females is overwhelmingly skewed, with women and 
            girls frequently outnumbered and, by extension, often marginalised. This reality is reflected in the low 
            number of females in tech roles and the disproportionate male presence in Computer Science classes.
          </p>
        </div>

        <div className="p-6 bg-secondary-500/10 shadow rounded-lg">
          <h2 className="text-2xl font-bold text-text-900 mb-2">
            Learning Without Barriers
          </h2>
          <p className="text-text-600">
            Learning, inherently influenced by the environment, can be hampered for girls who face stereotypes and 
            biases in mixed-gender settings, particularly if they are overwhelmingly male. These psychological barriers 
            can lead to decreased confidence and a decline in interest in tech-related subjects. Girls-only coding events 
            offer a counter-environment where these pressures are absent, allowing girls to explore and learn without 
            fear of judgement or competition from male counterparts.
          </p>
        </div>

        <div className="p-6 bg-secondary-500/10 shadow rounded-lg">
          <h2 className="text-2xl font-bold text-text-900 mb-2">
            The Power of Female Role Models
          </h2>
          <p className="text-text-600">
            The impact of role models in shaping career aspirations is well-documented, and in the context of tech, the 
            scarcity of women in the field means a dearth of mentors for aspiring young girls. Girls-only events 
            intentionally address this gap by involving female mentors who can inspire participants with their 
            experiences and success stories, demonstrating that a career in tech is attainable regardless of gender.
          </p>
        </div>

        <div className="p-6 bg-secondary-500/10 shadow rounded-lg">
          <h2 className="text-2xl font-bold text-text-900 mb-2">
            Encouraging Self-Confidence
          </h2>
          <p className="text-text-600">
            These events also serve to positively reinforce girls' self-perception in relation to their abilities in Computer 
            Science. They promote the message that girls are not only capable of excelling in tech but that they 
            inherently belong in the space. Such affirmation is crucial in early development stages, where self-concept 
            and interest in future career paths are formed.
          </p>
        </div>

        <div className="p-6 bg-secondary-500/10 shadow rounded-lg">
          <h2 className="text-2xl font-bold text-text-900 mb-2">
            A Step Towards a More Inclusive Future
          </h2>
          <p className="text-text-600">
            The long-term impact of events like CodeHers on the tech industry cannot be overstated. By engaging girls 
            in Computer Science, we are not only addressing gender inequality but also nurturing a future workforce that 
            is diverse, balanced, and capable. The ultimate aim is to normalise the presence of women in tech, making 
            the need for such events obsolete. Until that day comes, the justification for girls-only coding events remains 
            strong.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-8">
        <h2 className="text-2xl font-bold text-text-900 mb-2">Want to Get Involved?</h2>
        <p className="text-text-700 mb-4">
          Join us in empowering the next generation of women in tech!
        </p>
        <Link
          href="/events"
          className="inline-block px-6 py-2 text-base font-medium leading-loose text-white rounded-lg bg-primary-500 hover:bg-primary-600 transition-all"
        >
          Explore Our Events
        </Link>
      </section>
    </main>
  );
}
