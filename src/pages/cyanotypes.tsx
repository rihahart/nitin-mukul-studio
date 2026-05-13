import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PhotoNav from "@/components/PhotoNav";

import img1 from "@/assets/Photo-Based/Cyanotypes/Banff_2025_cyanotype_7x5_inches.JPG";
import img2 from "@/assets/Photo-Based/Cyanotypes/Seaweed_2025_cyanotype_12x8_inches.JPG";
import img3 from "@/assets/Photo-Based/Cyanotypes/Seedling_2025_cyanotype_12x8_inches.JPG";

const allImages = [img1, img2, img3];

const Cyanotypes = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [currentHero, setCurrentHero] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const prevHero = () => {
    setCurrentHero((i) => (i - 1 + allImages.length) % allImages.length);
  };

  const nextHero = () => {
    setCurrentHero((i) => (i + 1) % allImages.length);
  };

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
      <div className="w-full mt-20 md:mt-52 h-[50vh] md:h-[60vh] cursor-pointer" onClick={() => openLightbox(currentHero)}>
        <img
          src={allImages[currentHero]}
          alt="Cyanotypes"
          className="w-full h-full object-contain"
        />
      </div>

      <div className="flex items-center justify-center gap-8 py-6">
        <button
          onClick={prevHero}
          className="p-2 text-foreground hover:opacity-60 transition-opacity"
          aria-label="Previous image"
        >
          <ChevronLeft size={32} strokeWidth={1} />
        </button>
        <div className="flex items-center justify-center gap-2">
          {allImages.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setCurrentHero(i); }}
              className={`w-1 md:w-2 h-1 md:h-2 rounded-full transition-all ${currentHero === i ? "bg-foreground scale-125" : "bg-foreground/30"}`}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextHero}
          className="p-2 text-foreground hover:opacity-60 transition-opacity"
          aria-label="Next image"
        >
          <ChevronRight size={32} strokeWidth={1} />
        </button>
      </div>

      

      <div className="w-full px-6 md:px-12 pt-0.5 pb-6 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-2xl md:text-5xl font-bold text-foreground tracking-wide text-center mb-6">
              Cyanotypes
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Images grid */}
      <div className="w-full px-6 md:px-12 pb-6 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {allImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="w-full cursor-pointer"
            onClick={() => openLightbox(i)}
          >
            <img
              src={src}
              alt={`Cyanotypes — ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <PhotoNav currentId="cyanotypes" />

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
              aria-label="Previous"
            >
              <ChevronLeft size={32} strokeWidth={1.5} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              src={allImages[lightboxIndex]}
              alt={`Cyanotypes — ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain cursor-zoom-out"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 md:right-8 text-white hover:opacity-60 transition-opacity"
              onClick={next}
              aria-label="Next"
            >
              <ChevronRight size={32} strokeWidth={1.5} />
            </button>

            <p className="absolute bottom-6 text-white/60 text-sm font-body">
              {lightboxIndex + 1} / {allImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Cyanotypes;
