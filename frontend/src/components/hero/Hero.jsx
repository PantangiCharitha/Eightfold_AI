import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="py-20 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-black text-slate-900 md:text-6xl"
      >
        TalentFusion AI
      </motion.h1>
      
     

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mt-6 max-w-3xl text-lg text-slate-600"
      >
       Transform candidate information from multiple sources into a trusted,
  explainable, and confidence-driven canonical profile.
      </motion.p>

      <button
  onClick={() => {
    document
      .getElementById("candidate-sources")
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }}
  className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg hover:bg-blue-700 transition"
>
  Start Transformation
</button>

    </section>
  );
}