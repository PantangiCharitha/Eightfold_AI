import {
  Database,
  GitMerge,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Canonical Schema",
    text: "Transform all sources into one unified candidate model.",
  },
  {
    icon: GitMerge,
    title: "Merge Engine",
    text: "Resolve conflicts using confidence-based rules.",
  },
  {
    icon: ShieldCheck,
    title: "Explainability",
    text: "Track provenance for every merged field.",
  },
  {
    icon: Sparkles,
    title: "Configurable Output",
    text: "Project different output schemas without code changes.",
  },
];

export default function FeatureCards() {
  return (
    <section className="grid gap-6 py-8 md:grid-cols-4">
      {features.map((feature, index) => {
        const Icon = feature.icon;

        return (
          <div
            key={index}
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Icon className="mb-4 text-blue-600" size={28} />

            <h3 className="font-semibold text-slate-900">
              {feature.title}
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              {feature.text}
            </p>
          </div>
        );
      })}
    </section>
  );
}