import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import artwork5 from "@/assets/artwork-5.jpg";
import artwork6 from "@/assets/artwork-6.jpg";
type Slide = {
  title: string;
  year: string;
  medium: string;
} & ({ type: "image"; image: string } | { type: "video"; video: string });

const slides: Slide[] = [
  { type: "image", image: artwork5, title: "Avian American", year: "2024", medium: "Mixed media sculpture" },
  { type: "image", image: artwork6, title: "Cease Fire", year: "2023", medium: "Mixed media on canvas" },
  { type: "video", video: "/videos/anenome.mp4", title: "Anenome", year: "2024", medium: "Video art" },
  { type: "video", video: "/videos/cascade.mp4", title: "Cascade", year: "2024", medium: "Video art" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
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
    <div className="relative h-screen w-full overflow-hidden cursor-pointer" onClick={next}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
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

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gallery-overlay/60 to-transparent px-6 md:px-12 pb-8 pt-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-2xl md:text-4xl font-light text-primary-foreground tracking-wide">
              {slide.title}
            </h2>
            <p className="font-body text-xs md:text-sm tracking-widest uppercase text-primary-foreground/70 mt-2">
              {slide.year} — {slide.medium}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 right-6 md:right-12 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => { e.stopPropagation(); setCurrent(i); }}
            className={`w-8 h-0.5 transition-all duration-300 ${
              i === current ? "bg-primary-foreground" : "bg-primary-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
