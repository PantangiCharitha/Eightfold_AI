import { useState } from "react";
import api from "../../services/api";
import {
  Upload,
  User,
  Database,
  FileText,
  Globe,
  Rocket,
} from "lucide-react";

export default function UploadPanel({ onResult }) {
  const [mode, setMode] = useState("demo");
  const [loading, setLoading] = useState(false);

  const [resume, setResume] = useState(null);
  const [linkedin, setLinkedin] = useState(null);
  const [github, setGithub] = useState(null);
  const [recruiterNotes, setRecruiterNotes] = useState("");
  const [githubUrl, setGithubUrl] = useState("");

  const [manualData, setManualData] = useState({
    name: "",
    email: "",
    phone: "",
    skills: "",
    recruiter: "",
  });

  const handleChange = (e) => {
    setManualData({
      ...manualData,
      [e.target.name]: e.target.value,
    });
  };

  const readJsonFile = (file, setter) => {
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      try {
        setter(JSON.parse(e.target.result));
      } catch {
        alert("Invalid JSON file");
      }
    };

    reader.readAsText(file);
  };
  const fetchGithubProfile = async () => {
  if (!githubUrl) {
    alert("Please enter a GitHub profile URL.");
    return;
  }

  try {
    const response = await api.post("/github-profile", {
      url: githubUrl,
    });

    setGithub(response.data);

    alert("GitHub profile fetched successfully!");
  } catch (err) {
    console.error(err);
    alert("Unable to fetch GitHub profile.");
  }
};

  const handleTransform = async () => {
   
    console.log("Transform button clicked");
    try {
      setLoading(true);

      let payload;

      if (mode === "manual") {
        payload = {
          resume: {
            name: manualData.name,
            email: manualData.email,
            phone: manualData.phone,
            skills: manualData.skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
          },

          linkedin: {
            fullName: manualData.name,
            headline: "Frontend Developer",
            experience: 2,
          },

          github: {
            skills: manualData.skills
              .split(",")
              .map((s) => s.trim())
              .filter(Boolean),
          },

          recruiter: manualData.recruiter,
        };
      } else if (mode === "upload") {
        payload = {
          resume,
          linkedin,
          github,
          recruiter: recruiterNotes,
        };
      } else {
        payload = {
          resume: {
            name: "Pantangi Charitha",
            email: "charitha@gmail.com",
            phone: "+919876543210",
            skills: ["React", "Node.js", "Java"],
            education: [
              {
                degree: "B.Tech CSE",
                institution:
                  "Institute of Aeronautical Engineering",
                year: 2025,
              },
            ],
          },

          linkedin: {
            fullName: "Pantangi Charitha",
            headline: "Frontend Developer",
            experience: 2,
            linkedin:
              "https://linkedin.com/in/charitha",
          },

          github: {
            github: "https://github.com/charitha",
            skills: [
              "JavaScript",
              "TypeScript",
              "Frontend",
              "Backend",
            ],
          },

          recruiter:
            "Strong communication skills. Salary Negotiable.",
        };
      }

      const response = await api.post(
        "/transform",
        payload
      );

      if (response.data.success) {
        onResult(response.data.output);
        alert("Transformation Successful!");
      } else {
        console.log(response.data);
alert(JSON.stringify(response.data.validation, null, 2));
      }

    } catch (err) {
      console.error(err);
      alert("Backend Connection Failed");
    } finally {
      setLoading(false);
    }
  };
    return (
    <section
  id="candidate-sources"
  className="my-12 rounded-3xl bg-white p-8 shadow-lg"
>

      <h2 className="text-3xl font-bold text-slate-900">
        Candidate Sources
      </h2>

      <p className="mt-2 text-slate-500">
        Choose how you want to provide candidate information.
      </p>

      <div className="mt-8 flex flex-wrap gap-4">

        <button
          onClick={() => setMode("upload")}
          className={`flex items-center gap-2 rounded-xl px-5 py-3 ${
            mode === "upload"
              ? "bg-blue-600 text-white"
              : "bg-slate-100"
          }`}
        >
          <Upload size={18} />
          Upload Files
        </button>

        <button
          onClick={() => setMode("manual")}
          className={`flex items-center gap-2 rounded-xl px-5 py-3 ${
            mode === "manual"
              ? "bg-purple-600 text-white"
              : "bg-slate-100"
          }`}
        >
          <User size={18} />
          Quick Candidate Entry
        </button>

        <button
          onClick={() => setMode("demo")}
          className={`flex items-center gap-2 rounded-xl px-5 py-3 ${
            mode === "demo"
              ? "bg-green-600 text-white"
              : "bg-slate-100"
          }`}
        >
          <Database size={18} />
          Demo Data
        </button>

      </div>

      {mode === "upload" && (
        <div className="mt-8 grid gap-6 md:grid-cols-2">

          <UploadCard
            icon={<FileText />}
            title="Resume JSON"
            onFileSelect={(file) => readJsonFile(file, setResume)}
          />

          <UploadCard
            icon={<Globe />}
            title="LinkedIn JSON"
            onFileSelect={(file) => readJsonFile(file, setLinkedin)}
          />

          <div className="rounded-2xl border p-5">

  <h3 className="font-semibold">
    GitHub Profile
  </h3>

  <input
    type="text"
    placeholder="https://github.com/username"
    value={githubUrl}
    onChange={(e) => setGithubUrl(e.target.value)}
    className="mt-4 w-full rounded-xl border p-3"
  />

  <button
    onClick={fetchGithubProfile}
    className="mt-4 rounded-xl bg-black px-5 py-3 text-white hover:bg-slate-800"
  >
    Fetch GitHub Profile
  </button>

  <p className="mt-3 text-sm text-slate-500">
    Or upload a GitHub JSON file below.
  </p>

  <input
    type="file"
    className="mt-3 w-full"
    onChange={(e) =>
      readJsonFile(e.target.files[0], setGithub)
    }
  />

</div>

          <div className="rounded-2xl border p-5">
            <label className="font-semibold">
              Recruiter Notes
            </label>

            <textarea
              rows={5}
              value={recruiterNotes}
              onChange={(e) =>
                setRecruiterNotes(e.target.value)
              }
              className="mt-3 w-full rounded-xl border p-3"
              placeholder="Paste recruiter notes..."
            />
          </div>

        </div>
      )}

     {mode === "manual" && (

  <div className="mt-8">

    <div className="mb-8 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-6 text-white">

      <h2 className="text-2xl font-bold">
        Quick Candidate Entry
      </h2>

      <p className="mt-2 text-purple-100">
        Use this option when Resume, LinkedIn or GitHub data is unavailable.
        Recruiters can quickly create a candidate profile manually.
      </p>

    </div>

    <div className="grid gap-8 lg:grid-cols-2">

      {/* Candidate Information */}

      <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm">

        <h3 className="mb-6 text-xl font-semibold">
          👤 Candidate Information
        </h3>

        <div className="space-y-5">

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Candidate Name
            </label>

            <input
              name="name"
              value={manualData.name}
              onChange={handleChange}
              placeholder="Pantangi Charitha"
              className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-500"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Email Address
            </label>

            <input
              name="email"
              value={manualData.email}
              onChange={handleChange}
              placeholder="charitha@gmail.com"
              className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-500"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Phone Number
            </label>

            <input
              name="phone"
              value={manualData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

      </div>

      {/* Professional Information */}

      <div className="rounded-2xl border bg-slate-50 p-6 shadow-sm">

        <h3 className="mb-6 text-xl font-semibold">
          💼 Professional Information
        </h3>

        <div className="space-y-5">

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Technical Skills
            </label>

            <input
              name="skills"
              value={manualData.skills}
              onChange={handleChange}
              placeholder="React, Java, Node.js, TypeScript..."
              className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-500"
            />

          </div>

          <div>

            <label className="mb-2 block font-medium text-slate-700">
              Recruiter Notes
            </label>

            <textarea
              rows={8}
              name="recruiter"
              value={manualData.recruiter}
              onChange={handleChange}
              placeholder="Strong React developer with good communication skills. Suitable for Frontend Engineer role. Salary Negotiable."
              className="w-full rounded-xl border p-3 outline-none transition focus:border-blue-500"
            />

          </div>

        </div>

      </div>

    </div>

  </div>

)}

      {mode === "demo" && (
        <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-8 text-center">

          <Database
            className="mx-auto text-green-600"
            size={40}
          />

          <h3 className="mt-4 text-xl font-bold">
            Demo Candidate Ready
          </h3>

          <p className="mt-2 text-slate-500">
            Click Transform Candidate to test the complete backend pipeline.
          </p>

        </div>
      )}

      <button
        onClick={handleTransform}
        disabled={loading}
        className="mt-10 flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white hover:bg-blue-700 disabled:opacity-50"
      >
        <Rocket size={18} />

        {loading
          ? "Transforming..."
          : "Transform Candidate"}
      </button>

    </section>
  );
}

function UploadCard({ icon, title, onFileSelect }) {
  return (
    <div className="rounded-2xl border p-5">

      <div className="flex items-center gap-3">
        {icon}
        <h3 className="font-semibold">
          {title}
        </h3>
      </div>

      <input
        type="file"
        accept=".json"
        className="mt-5 w-full"
        onChange={(e) =>
          onFileSelect(e.target.files[0])
        }
      />

    </div>
  );
}