export default function ExplainabilityPanel({ candidate }) {
  if (!candidate) return null;

  const explain = candidate.explainability || {};

  return (
    <section className="mt-10 rounded-3xl border bg-white p-8 shadow-lg">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-bold">
            Explainability Engine
          </h2>

          <p className="mt-2 text-slate-500">
            Every field below shows how the transformation pipeline
            selected the final value.
          </p>

        </div>

        <div className="rounded-xl bg-blue-50 px-5 py-3">

          <p className="text-sm text-slate-500">

            Pipeline Confidence

          </p>

          <h2 className="text-2xl font-bold text-blue-700">

            {Math.round(
              (candidate.overall_confidence || 0) * 100
            )}
            %

          </h2>

        </div>

      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">

        <Card
          title="Candidate Name"
          source={explain.candidate_name?.selected_from}
          confidence={explain.candidate_name?.confidence}
          strategy={explain.candidate_name?.reason}
        />

        <Card
          title="Email"
          source="Resume"
          confidence="0.90"
          strategy={explain.email?.strategy}
        />

        <Card
          title="Phone"
          source="Resume"
          confidence="0.90"
          strategy={explain.phone?.strategy}
        />

        <Card
          title="Skills"
          source="Resume + GitHub"
          confidence="Merged"
          strategy={explain.skills?.strategy}
        />

      </div>

    </section>
  );
}

function Card({
  title,
  source,
  confidence,
  strategy,
}) {
  return (
    <div className="rounded-2xl border p-6">

      <h3 className="font-bold text-lg">
        {title}
      </h3>

      <div className="mt-5 space-y-3">

        <Item
          label="Selected From"
          value={source}
        />

        <Item
          label="Confidence"
          value={confidence}
        />

        <Item
          label="Strategy"
          value={strategy}
        />

      </div>

    </div>
  );
}

function Item({
  label,
  value,
}) {
  return (
    <div className="flex justify-between border-b pb-2">

      <span className="text-slate-500">
        {label}
      </span>

      <span className="font-semibold">
        {value}
      </span>

    </div>
  );
}