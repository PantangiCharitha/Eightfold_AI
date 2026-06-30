export default function SourceExplorer({ candidate }) {
  if (!candidate) return null;

  const sources =
    candidate.metadata?.merged_sources || [];

  return (
    <section className="mt-10 rounded-3xl bg-white border p-8 shadow-lg">

      <h2 className="text-2xl font-bold">
        Source Explorer
      </h2>

      <p className="mt-2 text-slate-500">
        Sources used to build the canonical candidate profile.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

        {sources.map((source) => (
          <div
            key={source}
            className="rounded-2xl border p-6 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">

              <h3 className="font-bold text-lg">
                {source}
              </h3>

              <span className="text-green-600 text-xl">
                ✓
              </span>

            </div>

            <p className="mt-4 text-sm text-slate-500">
              Successfully processed and merged into the
              canonical profile.
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}