import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import installation1 from "@/assets/installation-1.jpg";

const collabs = [
  { title: "Slow Your Roll", year: "2024", type: "Performance & Installation", description: "A collaborative performance series bringing together visual art, live music, and community gathering." },
  { title: "Sound & Surface", year: "2023", type: "Music & Painting", description: "Live painting sessions in dialogue with improvised music, exploring the intersections of visual and sonic composition." },
];

const Collaborations = () => (
  <Layout>
    <div className="pt-28 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-light mb-16">Collaborations</h1>
        <div className="space-y-16">
          {collabs.map((c, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <div className="overflow-hidden">
                <img src={installation1} alt={c.title} loading="lazy" width={1920} height={1080} className="w-full aspect-[21/9] object-cover" />
              </div>
              <div className="mt-6 max-w-2xl">
                <h2 className="font-display text-2xl md:text-3xl font-light">{c.title}</h2>
                <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">{c.year} — {c.type}</p>
                <p className="font-body text-sm leading-relaxed mt-4 text-muted-foreground">{c.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Collaborations;
