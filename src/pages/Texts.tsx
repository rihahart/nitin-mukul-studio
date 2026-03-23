import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const texts = [
  { title: "On Landscape and Memory", year: "2024", type: "Essay", excerpt: "An exploration of how aerial perspectives reshape our understanding of place, belonging, and the traces we leave on the land." },
  { title: "Heat and Visibility", year: "2023", type: "Artist Statement", excerpt: "Reflections on the Heat Maps series and the challenge of making invisible environmental forces visible through painting." },
  { title: "Collaborative Practices in Contemporary Art", year: "2022", type: "Writing", excerpt: "Notes on the politics and poetics of collaboration, drawn from a decade of working across disciplines." },
];

const Texts = () => (
  <Layout>
    <div className="pt-28 pb-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-light mb-16">Texts</h1>
        <div className="space-y-12">
          {texts.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="border-b border-border pb-8">
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">{t.type} — {t.year}</p>
              <h2 className="font-display text-xl md:text-2xl font-light mb-3">{t.title}</h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{t.excerpt}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default Texts;
