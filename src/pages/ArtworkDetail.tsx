import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { artworks } from "@/lib/artworkData";
import { ArrowLeft } from "lucide-react";

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = artworks.find((a) => a.id === id);

  if (!artwork) {
    return (
      <Layout>
        <div className="pt-28 px-6 md:px-12 text-center">
          <p className="text-muted-foreground">Artwork not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="px-6 md:px-12 mb-8">
          <Link to="/work" className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Back to Work
          </Link>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <img
            src={artwork.image}
            alt={artwork.title}
            className="w-full max-h-[80vh] object-contain bg-secondary"
            width={1920}
            height={1080}
          />
        </motion.div>

        <div className="px-6 md:px-12 mt-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h1 className="font-display text-3xl md:text-5xl font-light">{artwork.title}</h1>
            <div className="mt-4 space-y-1">
              <p className="font-body text-sm text-muted-foreground">{artwork.year}</p>
              <p className="font-body text-sm text-muted-foreground">{artwork.medium}</p>
              {artwork.dimensions && (
                <p className="font-body text-sm text-muted-foreground">{artwork.dimensions}</p>
              )}
            </div>
            {artwork.description && (
              <p className="font-body text-sm leading-relaxed mt-8 max-w-xl">{artwork.description}</p>
            )}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ArtworkDetail;
