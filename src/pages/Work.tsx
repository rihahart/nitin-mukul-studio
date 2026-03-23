import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { artworks } from "@/lib/artworkData";

const Work = () => {
  const { category } = useParams<{ category?: string }>();

  const filtered = category
    ? artworks.filter((a) => a.category === category)
    : artworks;

  const categories = ["all", "paintings", "drawings", "prints"] as const;

  return (
    <Layout>
      <div className="pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-light mb-8">Work</h1>

          <div className="flex gap-6 mb-12">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={cat === "all" ? "/work" : `/work/${cat}`}
                className={`font-body text-xs tracking-widest uppercase transition-opacity ${
                  (cat === "all" && !category) || cat === category
                    ? "opacity-100"
                    : "opacity-40 hover:opacity-70"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
            {filtered.map((work, i) => (
              <motion.div
                key={work.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link to={`/artwork/${work.id}`} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      loading="lazy"
                      width={1920}
                      height={1080}
                      className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="py-4">
                    <h3 className="font-display text-lg font-light">{work.title}</h3>
                    <p className="font-body text-xs text-muted-foreground tracking-wide mt-1">
                      {work.year} — {work.medium}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Work;
