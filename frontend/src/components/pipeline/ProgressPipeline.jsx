import {
  CheckCircle,
  FileText,
  Database,
  ShieldCheck,
  GitMerge,
  Rocket,
} from "lucide-react";

const pipeline = [
  {
    title: "Resume Parser",
    icon: <FileText size={20} />,
    color: "bg-blue-500",
  },
  {
    title: "LinkedIn Parser",
    icon: <Database size={20} />,
    color: "bg-indigo-500",
  },
  {
    title: "GitHub Parser",
    icon: <Database size={20} />,
    color: "bg-slate-700",
  },
  {
    title: "Merge Engine",
    icon: <GitMerge size={20} />,
    color: "bg-purple-500",
  },
  {
    title: "Validation",
    icon: <ShieldCheck size={20} />,
    color: "bg-green-600",
  },
  {
    title: "Projection",
    icon: <Rocket size={20} />,
    color: "bg-orange-500",
  },
];

export default function ProgressPipeline() {
  return (
    <section className="mt-10 rounded-3xl bg-white border shadow-lg p-8">

      <h2 className="text-2xl font-bold">
        Transformation Pipeline
      </h2>

      <p className="text-slate-500 mt-2">
        Execution stages of the candidate transformation pipeline.
      </p>

      <div className="mt-8 space-y-6">

        {pipeline.map((step, index) => (

          <div
            key={index}
            className="rounded-2xl border p-5"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`${step.color} rounded-xl p-3 text-white`}
                >
                  {step.icon}
                </div>

                <div>

                  <h3 className="font-bold">
                    {step.title}
                  </h3>

                  <p className="text-sm text-slate-500">
                    Completed Successfully
                  </p>

                </div>

              </div>

              <CheckCircle
                className="text-green-600"
                size={24}
              />

            </div>

            <div className="mt-4 h-2 rounded-full bg-slate-200">

              <div
                className={`${step.color} h-2 rounded-full w-full`}
              />

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}