import {
  Users,
  Database,
  CheckCircle,
  Award,
} from "lucide-react";

export default function AnalyticsCards({ candidate }) {

  if (!candidate) return null;

  const confidence = Math.round(
    (candidate.overall_confidence || 0) * 100
  );

  const totalSources =
    candidate.metadata?.merged_sources?.length || 0;

  const totalSkills =
    candidate.skills?.length || 0;

  return (

    <div className="grid gap-6 md:grid-cols-4 my-10">

      <Card
        icon={<Users size={28} />}
        title="Candidate"
        value={candidate.candidate_name}
        color="bg-blue-600"
      />

      <Card
        icon={<Database size={28} />}
        title="Sources"
        value={totalSources}
        color="bg-purple-600"
      />

      <Card
        icon={<Award size={28} />}
        title="Confidence"
        value={`${confidence}%`}
        color="bg-green-600"
      />

      <Card
        icon={<CheckCircle size={28} />}
        title="Skills"
        value={totalSkills}
        color="bg-orange-500"
      />

    </div>

  );

}

function Card({
  icon,
  title,
  value,
  color,
}) {

  return (

    <div className="rounded-2xl bg-white shadow-lg border p-6">

      <div className="flex items-center justify-between">

        <div>

          <p className="text-sm text-slate-500">
            {title}
          </p>

          <h2 className="mt-2 text-2xl font-bold">

            {value}

          </h2>

        </div>

        <div
          className={`${color} rounded-xl p-3 text-white`}
        >
          {icon}
        </div>

      </div>

    </div>

  );

}