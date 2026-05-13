import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import PhotoNav from "@/components/PhotoNav";

import img1 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_1.jpg";
import img2 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_2.jpg";
import img3 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_3.jpg";
import img4 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_4.jpg";
import img5 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_5.jpg";
import img6 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_6.jpg";
import img7 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_7.jpg";
import img8 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_8.jpg";
import img9 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_9.jpg";
import img10 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_10.jpg";
import img11 from "@/assets/Photo-Based/Fluxus/fluxus_delhi_11.jpg";

const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];

const Fluxus = () => {
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
          alt="Fluxus"
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
            <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-wide text-center mb-2">
            Fluxus Performances
            </h1>

            <p className="font-body uppercase text-lg md:text-lg leading-loose font-bold underline text-center mb-2">
             2008
            </p>

            <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-2">
            National Gallery of Modern Art, New Delhi.
            </p>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-loose text-center mb-12">
           Photo documentation: Kiran Bhushi

            </p>


            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
           In May 2008, a significant Fluxus exhibition and performance series was held at the National Gallery of Modern Art (NGMA) in New Delhi, titled "A Long Story with Many Knots: Fluxus in Germany 1962–1994. The exhibition highlighted how Fluxus artists merged art and life through performance, intermedia, and conceptual work, focusing on the "anti-art" aesthetic pioneered by figures such as George Maciunas, George Brecht, and Yoko Ono. 
            </p>
             <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
          I performed pieces by Dick Higgins and George Maciunas among others, as directed by American Fluxus artist and musician Ben Patterson who performed John Cage’s 4’33”
the same evening.

            </p>
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
              alt={`Fluxus — ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      <PhotoNav currentId="fluxus" />

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
              alt={`Fluxus — ${lightboxIndex + 1}`}
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

export default Fluxus;
