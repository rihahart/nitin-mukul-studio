import Layout from "@/components/Layout";
import CurationNav from "@/components/CurationNav";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import mainImg from "@/assets/Curation/HeatoftheMoment/hotm_flyer_nitin.jpg";
import img1 from "@/assets/Curation/HeatoftheMoment/IMG_2199.JPG";
import img2 from "@/assets/Curation/HeatoftheMoment/IMG_2210.JPG";
import img3 from "@/assets/Curation/HeatoftheMoment/IMG_2217.JPG";
import img4 from "@/assets/Curation/HeatoftheMoment/IMG_2225.JPG";
import img5 from "@/assets/Curation/HeatoftheMoment/IMG_2231.JPG";
import img6 from "@/assets/Curation/HeatoftheMoment/IMG_3093.JPG";
import img7 from "@/assets/Curation/HeatoftheMoment/IMG_3147.JPG";
import img8 from "@/assets/Curation/HeatoftheMoment/IMG_3148.JPG";
import img9 from "@/assets/Curation/HeatoftheMoment/IMG_3158.JPG";
import img10 from "@/assets/Curation/HeatoftheMoment/IMG_3162.JPG";
import img11 from "@/assets/Curation/HeatoftheMoment/IMG_3163.JPG";
import img12 from "@/assets/Curation/HeatoftheMoment/IMG_3183.JPG";
import img13 from "@/assets/Curation/HeatoftheMoment/IMG_3208.JPG";
import img14 from "@/assets/Curation/HeatoftheMoment/IMG_3227.JPG";
import img15 from "@/assets/Curation/HeatoftheMoment/IMG_6820.jpeg";
import img16 from "@/assets/Curation/HeatoftheMoment/IMG_9194.jpeg";

const galleryImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, img15, img16];

const HeatOfTheMoment = () => {
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
          alt="Heat of the Moment"
          className="w-full max-h-[70vh] object-contain"
        />
      </div>

      <div className="w-full px-6 md:px-12 pt-8 pb-6 md:py-24">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-wide text-center mb-12">
            Heat of the Moment
          </h1>
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
            For the NYC version of Heat of the Moment, Epicenter NYC partnered with Thirstygallerina. The artists, their works, and the concept of the show embrace the need to raise awareness of the interconnectedness of numerous crises around the globe and act responsibly for a stable future. The multiplicity of cultures meeting in Queens is perhaps unmatched globally, which makes it an ideal setting. We are grateful to The Local for the exhibition space.
          </p>
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left mt-6">
            Featuring work by Josefina Bahamondes, Dev Benegal, Sanie Bokhari, Greg Kessler, Nitin Mukul, Ram Rahman, Toussaint Rosefort, Pranav Sood, Anokha Venugopal, Saks Afridi, Ruby Chishti, Tej Hazarika, and Sarah Ahmad.
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
              alt={`Heat of the Moment — ${i + 1}`}
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
              alt={`Heat of the Moment — ${lightboxIndex + 1}`}
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
      <CurationNav currentId="heat-of-the-moment" />
    </Layout>
  );
};

export default HeatOfTheMoment;
