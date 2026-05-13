import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import VideoNav from "@/components/VideoNav";
import img1 from "@/assets/Video&Installation/04_HeatMapsWinterSosltice/HeatMapsWinter/01_IMG_9190.jpeg";
import img2 from "@/assets/Video&Installation/04_HeatMapsWinterSosltice/HeatMapsWinter/02_IMG_9105.jpeg";
import img3 from "@/assets/Video&Installation/04_HeatMapsWinterSosltice/HeatMapsWinter/03_IMG_9112.jpeg";

const allImages = [img1, img2, img3];

const HeatMapWinterSolstice = () => {
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
          src="https://player.vimeo.com/video/815927109?autoplay=1&muted=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Heat Maps: Winter Solstice"
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
              Heat Maps: Winter Solstice.
            </h1>

            <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-12">
              (2023) Durational painting by Nitin Mukul / Sound: KD Edulji
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
              Filmed on the winter solstice, using clay collected from the Chesapeake Bay in Maryland, charred wood from a fire in NYC, acrylic inks and paint, silicone oil. Filmed on 12/21/21 in Queens, NYC. Sound recorded in the city of Hyderabad, India on 12/21/2021. 10 minutes. Dimensions variable.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left mt-6">
              This piece collapses space across the planet by engaging atmospheric conditions of light, temperature and gravity in the painting, and incidental environmental sound in the score by @kdeduljimusic. Both were recorded simultaneously in Hyderabad (sound) and New York City (visual) on 12/21/21, the shortest day of that year, and first day of winter. The outcome is a meditative and profound work of abstraction generated as a collaborative event created remotely by the two artists. The painted form that unfolds in real-time implicates local climate conditions and globe spanning empirical data as a catalyst in the finished piece.
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
              alt={`Heat Maps Winter Solstice — ${i + 1}`}
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
              alt={`Heat Maps Winter Solstice — image ${lightboxIndex + 1}`}
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
      <VideoNav currentId="heat-map-winter-solstice" />
    </Layout>
  );
};

export default HeatMapWinterSolstice;
