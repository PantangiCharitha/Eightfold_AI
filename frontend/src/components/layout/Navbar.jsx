import { BrainCircuit } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2 text-white">
            <BrainCircuit size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold text-slate-900">
              Eightfold AI
            </h1>
            <p className="text-sm text-slate-500">
  Unified Candidate Intelligence Platform
</p>
          </div>
        </div>

        <button className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700">
          Documentation
        </button>
      </div>
    </header>
  );
}