import {
  Mail,
  Phone,
  Briefcase,
  ShieldCheck,
} from "lucide-react";

export default function Dashboard({ candidate }) {
  if (!candidate) return null;

  const confidence = Math.round(
    (candidate.overall_confidence || 0) * 100
  );

  return (
    <section className="mt-10 rounded-3xl bg-white p-8 shadow-xl border">

      <div className="flex items-center justify-between">

        <div>

          <h2 className="text-3xl font-bold text-slate-900">
            Candidate Intelligence
          </h2>

          <p className="text-slate-500 mt-2">
            Canonical Candidate Profile
          </p>

        </div>

        <div className="rounded-xl bg-green-100 px-5 py-3">

          <div className="flex items-center gap-2">

            <ShieldCheck
              className="text-green-600"
              size={22}
            />

            <span className="font-bold text-green-700">

              {confidence}%

            </span>

          </div>

          <p className="text-xs text-green-700">
            Confidence
          </p>

        </div>

      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-3">

        {/* Candidate */}

        <div className="rounded-2xl border p-6">

          <h3 className="text-xl font-bold">
            {candidate.candidate_name}
          </h3>

          <p className="mt-2 text-slate-500">
            {candidate.headline}
          </p>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-3">

              <Mail size={18} />

              <span>
                {candidate.primary_email}
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Phone size={18} />

              <span>
                {candidate.primary_phone}
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Briefcase size={18} />

              <span>

                {candidate.experience_years} Years Experience

              </span>

            </div>

          </div>

        </div>

        {/* Skills */}

        <div className="rounded-2xl border p-6">

          <h3 className="text-lg font-bold">
            Skills
          </h3>

          <div className="mt-5 flex flex-wrap gap-3">

            {candidate.skills?.map((skill) => (

              <span
                key={skill}
                className="rounded-full bg-blue-100 px-4 py-2 text-blue-700"
              >
                {skill}
              </span>

            ))}

          </div>

        </div>

        {/* Sources */}

        <div className="rounded-2xl border p-6">

          <h3 className="text-lg font-bold">
            Sources Used
          </h3>

          <div className="mt-6 space-y-4">

            <div className="flex items-center justify-between">

              <span>Resume</span>

              <span className="font-semibold text-green-600">

                ✓

              </span>

            </div>

            <div className="flex items-center justify-between">

              <span>LinkedIn</span>

              <span className="text-blue-600 font-semibold">
  in
</span>

            </div>

            <div className="flex items-center justify-between">

              <span>GitHub</span>

              <span className="font-semibold">
  GH
</span>

            </div>

            <div className="flex items-center justify-between">

              <span>Recruiter Notes</span>

              <span className="font-semibold text-green-600">

                ✓

              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Confidence */}

      <div className="mt-10">

        <div className="flex justify-between">

          <span className="font-semibold">

            Overall Confidence

          </span>

          <span className="font-bold">

            {confidence}%

          </span>

        </div>

        <div className="mt-3 h-4 rounded-full bg-slate-200">

          <div
            className="h-4 rounded-full bg-gradient-to-r from-green-500 to-blue-600"
            style={{
              width: `${confidence}%`,
            }}
          />

        </div>

      </div>

    </section>
  );
}