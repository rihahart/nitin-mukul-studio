import Layout from "@/components/Layout";
import CurationNav from "@/components/CurationNav";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import mainImg from "@/assets/Curation/MusicofManyColors/MOMC_flyer_print.jpg";
import img1 from "@/assets/Curation/MusicofManyColors/BayetéRossSmith_.jpg";
import img2 from "@/assets/Curation/MusicofManyColors/IMG_0276.JPG";
import img3 from "@/assets/Curation/MusicofManyColors/IMG_0294.JPG";
import img4 from "@/assets/Curation/MusicofManyColors/IMG_0690.JPG";
import img5 from "@/assets/Curation/MusicofManyColors/IMG_0693.JPG";
import img6 from "@/assets/Curation/MusicofManyColors/Mathieu_Josset_Piano_90x90.png";
import img7 from "@/assets/Curation/MusicofManyColors/Nitin_Ritual_30x40_10k.png";
import img8 from "@/assets/Curation/MusicofManyColors/Peter_noise_music_10x10_in.JPG";
import img9 from "@/assets/Curation/MusicofManyColors/Roger_Hsia_24x20.png";
import img10 from "@/assets/Curation/MusicofManyColors/SeemaLisaPandya-Tabla Drip Bulge-2018.jpg";
import img11 from "@/assets/Curation/MusicofManyColors/Shaun Ilahi-The Dance_30x45.jpg";
import img12 from "@/assets/Curation/MusicofManyColors/Traci_Johnson_ Birthing_3.6x6ft.png";
import img13 from "@/assets/Curation/MusicofManyColors/mukul_04_QueensArtsFund.png";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13];

const MusicOfManyColors = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : null));
  };

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : null));
  };

  return (
    <Layout>
      <div className="w-full mt-20 md:mt-52 px-6 md:px-12">
        <img
          src={mainImg}
          alt="Music of Many Colors"
          className="w-full max-h-[70vh] object-contain"
        />
      </div>

      <div className="w-full px-6 md:px-12 pt-8 pb-6 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-wide text-center mb-12">
            Music of Many Colors
          </h1>
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
            On the occasion of Miami Art Week 2024, This presentation calls attention to the fragility of this coastal landmark that annually accommodates a global convergence of the art world. The artists, their works, and the ethos this show embraces and signals, among other things, the need to raise awareness of our climate crisis and act responsibly for a stable future. A selection of paintings, works on paper, and multimedia work allude to the turbulent and pivotal moments that are emerging at an alarming pace here and across the globe. The stakes are higher than ever it seems and artists have never been so vital in giving form to a paradigm shift that calls for a heightened sensitivity to our common challenges, the vulnerable among us, and our finite natural resources.
          </p>
        </div>
      </div>

      <div className="w-full px-6 md:px-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {galleryImages.map((src, i) => (
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
              alt={`Music of Many Colors — ${i + 1}`}
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

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
              <ChevronLeft size={40} strokeWidth={1.5} />
            </button>

            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.2 }}
              src={galleryImages[lightboxIndex]}
              alt={`Music of Many Colors — ${lightboxIndex + 1}`}
              className="max-w-full max-h-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 md:right-8 text-white hover:opacity-60 transition-opacity"
              onClick={next}
              aria-label="Next"
            >
              <ChevronRight size={40} strokeWidth={1.5} />
            </button>

            <p className="absolute bottom-6 text-white/60 text-sm font-body">
              {lightboxIndex + 1} / {galleryImages.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      <CurationNav currentId="music-of-many-colors" />
    </Layout>
  );
};

export default MusicOfManyColors;
