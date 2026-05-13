import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import VideoNav from "@/components/VideoNav";
import img1 from "@/assets/Video&Installation/05_HeatMapsGuwahati/HeatMapsGuwahati/02_guwhati.JPG";
import img2 from "@/assets/Video&Installation/05_HeatMapsGuwahati/HeatMapsGuwahati/03_guwhati.JPG";
import img3 from "@/assets/Video&Installation/05_HeatMapsGuwahati/HeatMapsGuwahati/04_guwhati.JPG";
import img4 from "@/assets/Video&Installation/05_HeatMapsGuwahati/HeatMapsGuwahati/06_guwhati.PNG";
import img5 from "@/assets/Video&Installation/05_HeatMapsGuwahati/HeatMapsGuwahati/07_guwhati.PNG";
import img6 from "@/assets/Video&Installation/05_HeatMapsGuwahati/HeatMapsGuwahati/09_guwhati.JPG";

const allImages = [img1, img2, img3, img4, img5, img6];

const HeatMapGuwahati = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i !== null ? (i - 1 + allImages.length) % allImages.length : null));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i !== null ? (i + 1) % allImages.length : null));
  };

  return (
    <Layout>
      <div className="w-full mt-20 md:mt-52 h-[50vh] md:h-[60vh]">
        <iframe
          src="https://player.vimeo.com/video/893088230?autoplay=1&muted=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Heat Maps: Guwahati vs Brooklyn"
        />
      </div>

      <div className="w-full px-6 md:px-12 pt-0.5 pb-6 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-wide text-center mb-6">
              Heat Maps: Guwahati vs Brooklyn
            </h1>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
              This piece collapses space across the planet by engaging atmospheric conditions of light, temperature and gravity in the painting, and incidental environmental sound in the score by Sage Hazarika, both were recorded simultaneously in Guwahati, Assam (visual) and Brooklyn, NY (sound) on 8/13/2023. The outcome is a meditative and profound work of abstraction generated as a collaborative event created remotely by the two artists. The painted form that unfolds in real-time implicates local climate conditions and globe spanning empirical data as a catalyst in the finished piece. The score was drawn from 30 minutes of field recordings, weaving sonic excerpts from Brooklyn's landscape and layering them with recordings from the analog and digital synthesizers in Hazarika's home studio.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Photo grid */}
      <div className="w-full px-6 md:px-12 pb-24 grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
        {allImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="w-full cursor-pointer"
            onClick={() => setLightboxIndex(i)}
          >
            <img
              src={src}
              alt={`Heat Maps Guwahati vs Brooklyn — ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightboxIndex(null)}
          >
            <button
              className="absolute top-6 right-6 text-white hover:opacity-60 transition-opacity"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            <button
              className="absolute left-4 md:left-8 text-white hover:opacity-60 transition-opacity"
              onClick={prev}
              aria-label="Previous image"
            >
              <ChevronLeft size={40} strokeWidth={1.5} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              src={allImages[lightboxIndex]}
              alt={`Heat Maps Guwahati vs Brooklyn — image ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 md:right-8 text-white hover:opacity-60 transition-opacity"
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight size={40} strokeWidth={1.5} />
            </button>

            <p className="absolute bottom-6 text-white/60 text-sm font-body">
              {lightboxIndex + 1} / {allImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <VideoNav currentId="heat-map-guwahati" />
    </Layout>
  );
};

export default HeatMapGuwahati;
