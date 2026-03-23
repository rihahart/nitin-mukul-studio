import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { exhibitions } from "@/lib/artworkData";

const Curation = () => {
  return (
    <Layout>
      <div className="pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-light mb-16">Curation</h1>

          <div className="space-y-24">
            {exhibitions.map((ex, i) => (
              <motion.div
                key={ex.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="overflow-hidden">
                  <img
                    src={ex.image}
                    alt={ex.title}
                    loading="lazy"
                    width={1920}
                    height={1080}
                    className="w-full aspect-[21/9] object-cover"
                  />
                </div>
                <div className="mt-6 max-w-3xl">
                  <h2 className="font-display text-2xl md:text-4xl font-light">{ex.title}</h2>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">
                    {ex.year} — {ex.location}
                  </p>
                  <p className="font-body text-sm leading-relaxed mt-4 text-muted-foreground">{ex.description}</p>
                  {ex.artists && (
                    <div className="mt-4">
                      <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">Artists</h4>
                      <p className="font-body text-sm">{ex.artists.join(", ")}</p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Curation;
