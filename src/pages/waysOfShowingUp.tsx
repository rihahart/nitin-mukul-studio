import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import VideoNav from "@/components/VideoNav";
import img1 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/01.jpg";
import img2 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/02.jpg";
import img3 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/03 (1).JPG";
import img4 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/04.jpg";
import img5 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/05.jpg";
import img6 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/06.JPG";
import img7 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/07.JPG";
import img8 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/08.JPG";
import img9 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/09.JPG";
import img10 from "@/assets/Video&Installation/waysOfSHowingUp/SlowYourRoll/10.jpg";

const allImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const WaysOfShowingUp = () => {
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
          src="https://player.vimeo.com/video/1022198277?autoplay=1&muted=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Ways of Showing Up: Slow Your Roll"
        />
      </div>

      <div className="w-full px-6 md:px-12 pt-0.5 pb-6 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-2xl  md:text-4xl font-bold text-foreground tracking-wide text-center mb-6">
              Ways of Showing Up: Slow Your Roll
            </h1>

            <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-12 ">
              A two-day experimental event, July 9–10, 2024
              <br />
              Presented by Epicenter NYC and Department of Transformation at The Performing Garage, SoHo
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">

Epicenter NYC and Department of Transformation present Ways of Showing Up, a two-day series of immersive art, workshops, and performances on July 9–10, 2024, at the Performing Garage in Soho. Bringing together artists, therapists, musicians, and community practitioners, the event centers artistic practice as a form of care and collective learning, offering tools participants can carry into their own lives.

            </p>

            <p className="font-body text-sm md:text-base text-foreground text-left mt-6">
              Day 1, Slow Your Roll, organized by Nitin Mukul, features slow art viewing and experimental music, inviting participants to step away from digital overload and engage at a more contemplative pace. Day 2, All Together Now?, organized by Prem Krishnamurthy and Sam Rauch, presents workshops, performances, meals, and talks exploring how artistic practices can foster connection, creative care, and deeper participation in both art and everyday life.
            </p>

              <p className="font-body text-sm md:text-base text-foreground text-left mt-12">

<h2 className="text-lg font-bold leading-loose uppercase tracking-wide mb-2 ">Participating artists</h2>
Clarinda Mac Low, Neel Murgai, Ka Baird, Payal Parekh, Aneta Stojnić, Katie Freeman, Canal Street Research Association, Oliver Herring, Andros Zins-Browne, Daniel Pravit Fethke, Angel Nevarez, Valerie Tevere
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
              alt={`Ways of Showing Up — ${i + 1}`}
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
              alt={`Ways of Showing Up — image ${lightboxIndex + 1}`}
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
      <VideoNav currentId="ways-of-showing-up" />
    </Layout>
  );
};

export default WaysOfShowingUp;
