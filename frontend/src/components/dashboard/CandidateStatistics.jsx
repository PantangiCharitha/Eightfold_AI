export default function CandidateStatistics({ candidate }) {
  if (!candidate || !candidate.statistics) return null;

  const stats = candidate.statistics;

  const cards = [
    {
      title: "Sources",
      value: stats.total_sources,
    },
    {
      title: "Skills",
      value: stats.total_skills,
    },
    {
      title: "Emails",
      value: stats.total_emails,
    },
    {
      title: "Phones",
      value: stats.total_phones,
    },
    {
      title: "Experience",
      value: stats.experience_entries,
    },
    {
      title: "Education",
      value: stats.education_entries,
    },
  ];

  return (
    <section className="mt-10 rounded-3xl border bg-white p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Candidate Statistics
      </h2>

      <div className="mt-8 grid gap-5 md:grid-cols-3">

        {cards.map((card) => (
          <div
            key={card.title}
            className="rounded-2xl border bg-slate-50 p-6"
          >
            <p className="text-slate-500">
              {card.title}
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              {card.value}
            </h2>
          </div>
        ))}

      </div>

    </section>
  );
}