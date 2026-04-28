import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import img1 from "@/assets/Video&Installation/youWereHere/Images/01_subway_view1.JPG";
import img2 from "@/assets/Video&Installation/youWereHere/Images/02_subway_view2.JPG";
import img3 from "@/assets/Video&Installation/youWereHere/Images/03_still_image.png";
import img4 from "@/assets/Video&Installation/youWereHere/Images/04_subway_view3.JPG";

const subwayImages = [img1, img2, img4];
const stillImage = img3;
const allImages = [img1, img2, img4, img3];

const YouWereHere = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (src: string) => {
    const index = allImages.indexOf(src);
    setLightboxIndex(index);
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
      <div className="w-full mt-20 md:mt-52 h-[50vh] md:h-[55vh]">
        <iframe
          src="https://player.vimeo.com/video/1136164853?h=bd746718ec&autoplay=1&muted=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="You Were Here"
        />
      </div>

      <div className="w-full px-6 md:px-12 pt-0.5 pb-6 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide text-center mb-6">
              You Were Here
            </h1>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed text-center mb-12 italic">
              (2025) durational painting filmed at 1:30pm on April 30, 2025,
              outside temperature 73 degrees fahrenheit in Jackson Heights, NY.
              16 minutes. Dimensions variable.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-relaxed text-left">
              You Were Here has just been placed as a video art installation in
              the 74th St. / Roosevelt Ave. Station in Jackson Heights, Queens,
              one of the busiest subway stations in NYC with an average of over
              100,000 people passing through daily in one of the most culturally
              diverse zip codes in the world. The title speaks to at-risk
              elements of our surroundings and society that have already or are
              gradually disappearing from view. I was reflecting on First
              Peoples, as well as recent incidents of disappeared and abducted
              members of our local community in the anti-immigration raids, and
              lost ones from the pandemic that this neighborhood was at the
              center of. In addition to the painted elements that have been the
              core of my durational painting technique, all footage was filmed in
              Jackson Heights. It opens with subway riders disappearing from view
              as they descend the stairs underground and later bumblebees
              pollinating by vibrating their bodies to shake pollen loose from
              flowers. These bees face extinction due to habitat loss,
              pesticides, and climate change. An aerial image of Jackson Heights
              shared with the artist weeks ago by an astronaut recently on board
              the International Space Station also appears as a metaphor for our
              place in the universe and how all our actions have an impact.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Three subway images in a row on desktop */}
      <div className="w-full px-6 md:px-12 pb-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {subwayImages.map((src, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="w-full cursor-pointer"
            onClick={() => openLightbox(src)}
          >
            <img
              src={src}
              alt={`You Were Here — subway ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Still image full width */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full px-6 md:px-12 pb-24 max-w-5xl mx-auto cursor-pointer"
        onClick={() => openLightbox(stillImage)}
      >
        <img
          src={stillImage}
          alt="You Were Here — still"
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </motion.div>

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
            {/* Close */}
            <button
              className="absolute top-6 right-6 text-white hover:opacity-60 transition-opacity"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close"
            >
              <X size={28} strokeWidth={1.5} />
            </button>

            {/* Prev */}
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
              alt={`You Were Here — image ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Next */}
            <button
              className="absolute right-4 md:right-8 text-white hover:opacity-60 transition-opacity"
              onClick={next}
              aria-label="Next image"
            >
              <ChevronRight size={40} strokeWidth={1.5} />
            </button>

            {/* Counter */}
            <p className="absolute bottom-6 text-white/60 text-sm font-body">
              {lightboxIndex + 1} / {allImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default YouWereHere;
