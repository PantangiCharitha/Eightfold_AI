import { useState } from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/hero/Hero";
import FeatureCards from "../components/hero/FeatureCards";
import UploadPanel from "../components/upload/UploadPanel";
import Footer from "../components/layout/Footer";
import Dashboard from "../components/dashboard/Dashboard";
import AnalyticsCards from "../components/dashboard/AnalyticsCards";
import ExplainabilityPanel from "../components/dashboard/ExplainabilityPanel";
import ProgressPipeline from "../components/pipeline/ProgressPipeline";
import JsonViewer from "../components/dashboard/JsonViewer";
import CandidateStatistics from "../components/dashboard/CandidateStatistics";
import TransformationSummary from "../components/dashboard/TransformationSummary";
import SourceExplorer from "../components/dashboard/SourceExplorer";
export default function Home() {
  const [candidate, setCandidate] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6">
        <Hero />
        <FeatureCards />

        <UploadPanel onResult={setCandidate} />

{candidate && (
<>
<TransformationSummary candidate={candidate} />

<AnalyticsCards candidate={candidate} />

<CandidateStatistics candidate={candidate} />

<Dashboard candidate={candidate} />

<ExplainabilityPanel candidate={candidate} />

<SourceExplorer candidate={candidate} />

<ProgressPipeline />

<JsonViewer data={candidate} />
</>
)}

      </main>

      <Footer />
    </div>
  );
}