import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import artwork6 from "@/assets/artwork-6.jpg";
type Slide = {
  title: string;
  year: string;
  medium: string;
  path?: string;
} & ({ type: "image"; image: string } | { type: "video"; video: string });

const slides: Slide[] = [
{ type: "image", image: artwork6, title: "Cease Fire", year: "2023", medium: "Acrylic on canvas", path: "/artwork/paintings/Cease_Fire" },
  { type: "video", video: "/videos/anenome.mp4", title: "Anenome", year: "2022", medium: "Durational painting", path: "/artwork/video-installation/anemone" },
  { type: "video", video: "/videos/cascade.mp4", title: "Cascade", year: "February 22, 2020", medium: "Durational painting", path: "/artwork/video-installation/cascade" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const slide = slides[current];
    // Videos advance on end; images use timer
    if (slide.type === "image") {
      const timer = setInterval(next, 5000);
      return () => clearInterval(timer);
    }
  }, [current, next]);

  const slide = slides[current];

  return (
    <div className="relative h-screen w-full overflow-hidden group/carousel">
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {slide.type === "image" ? (
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
              width={1920}
              height={1080}
            />
          ) : (
            <video
              src={slide.video}
              autoPlay
              muted
              playsInline
              onEnded={next}
              className="w-full h-full object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next buttons */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-primary-foreground transition-all p-2 opacity-0 group-hover/carousel:opacity-100"
        aria-label="Previous"
      >
        <ChevronLeft size={36} strokeWidth={1} />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-10 bg-black/60 hover:bg-black/80 text-primary-foreground transition-all p-2 opacity-0 group-hover/carousel:opacity-100"
        aria-label="Next"
      >
        <ChevronRight size={36} strokeWidth={1} />
      </button>

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-8 pt-4">
        {slide.path ? (
          <Link to={slide.path} className="inline-block bg-black/60 px-4 py-3 hover:bg-black/80 transition-colors">
            <h2 className="font-display text-2xl md:text-4xl font-light text-primary-foreground tracking-wide">
              {slide.title}
            </h2>
            <p className="font-body text-xs md:text-sm tracking-widest uppercase text-primary-foreground/70 mt-2">
              {slide.medium}
            </p>
          </Link>
        ) : (
          <div className="inline-block bg-black/60 px-4 py-3">
            <h2 className="font-display text-2xl md:text-4xl font-light text-primary-foreground tracking-wide">
              {slide.title}
            </h2>
            <p className="font-body text-xs md:text-sm tracking-widest uppercase text-primary-foreground/70 mt-2">
              {slide.medium}
            </p>
          </div>
        )}
      </div>

    </div>
  );
};

export default HeroCarousel;
