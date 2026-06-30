export default function TransformationSummary({ candidate }) {

    if (!candidate) return null;

    return (

        <section className="mt-10 rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-8 shadow-xl">

            <h2 className="text-3xl font-bold">

                Transformation Complete

            </h2>

            <p className="mt-2 opacity-90">

                Candidate profile successfully transformed into the canonical schema.

            </p>

            <div className="grid md:grid-cols-4 gap-6 mt-8">

                <Stat
                    title="Sources"
                    value={candidate.statistics.total_sources}
                />

                <Stat
                    title="Confidence"
                    value={`${Math.round(candidate.overall_confidence*100)}%`}
                />

                <Stat
                    title="Skills"
                    value={candidate.statistics.total_skills}
                />

                <Stat
                    title="Status"
                    value="Success"
                />

            </div>

        </section>

    );

}

function Stat({title,value}){

    return(

        <div className="rounded-2xl bg-white/10 p-5">

            <p className="text-sm opacity-80">

                {title}

            </p>

            <h2 className="text-3xl font-bold mt-2">

                {value}

            </h2>

        </div>

    );

}