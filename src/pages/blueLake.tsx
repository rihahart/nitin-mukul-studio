import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import VideoNav from "@/components/VideoNav";
import img1 from "@/assets/Video&Installation/07_BlueLake/BlueLake/01_Bluesky.jpg";
import img2 from "@/assets/Video&Installation/07_BlueLake/BlueLake/02_blue_lake_sites.jpeg";
import img3 from "@/assets/Video&Installation/07_BlueLake/BlueLake/03_Branches.jpg";
import img4 from "@/assets/Video&Installation/07_BlueLake/BlueLake/04_WaterReflection.jpg";
import img5 from "@/assets/Video&Installation/07_BlueLake/BlueLake/05_PaintOnPlants.jpg";
import img6 from "@/assets/Video&Installation/07_BlueLake/BlueLake/06_MukulwithCamera.jpg";
import img7 from "@/assets/Video&Installation/07_BlueLake/BlueLake/07_Reflection.jpeg";

const allImages = [img1, img2, img3, img4, img5, img6, img7];

const BlueLake = () => {
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
          src="https://player.vimeo.com/video/397023480?autoplay=1&muted=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Blue Lake"
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
              Blue Lake
            </h1>

            <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-12">
              (2020) Site Specific Durational Painting. 20' x 7'
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
              In our present era, sometimes referred to as the Anthropocene, we seem to be increasingly reaping the fruits of our collective actions. The consequences of human activity are wreaking havoc as evidenced by climate change, pandemics, and the endangerment and extinction of flora and fauna that keep our planet in balance. Fellow Artist in Residence at Caldera, Maura Garcia (non-enrolled Cherokee/Mattamuskeet), created a live performance responding to the piece. The sound and movement starts at approximately 3 minutes from the beginning.
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
              alt={`Blue Lake — ${i + 1}`}
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
              alt={`Blue Lake — image ${lightboxIndex + 1}`}
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
      <VideoNav currentId="blue-lake" />
    </Layout>
  );
};

export default BlueLake;
