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
          <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-wide text-center mb-4">
            Music of Many Colours: Art, Music, and the Cultural Imaginary
          </h1>
          <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-1">
            A group exhibition at The Local, LIC
          </p>
          <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-1">
            Nov. 7 - Dec 7, 2025
          </p>
          <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-12">
            Opening reception Nov 7, 6-9pm
          </p>
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
      
This exhibition brings together artists exploring the enduring relationship between music and cultural identity. Across traditions and generations, music serves as both archive and amplifier—carrying ancestral memory, voicing resistance, and shaping collective belonging. The works presented here have a broad range of references connected to personal experience, memories, specific albums, songs, genres, subcultures and performances through which identities are shaped, contested, celebrated, and reimagined. The title Music of Many Colours takes its name from a collaborative album by Nigerian musician and political activist Fela Aníkúlápó Kútì and American jazz-funk pioneer Roy Ayers. Fela stands out globally as the influential innovator of Afro-beat who used his music to speak truth to power. By exploring the intersections of auditory and visual form, the artists foreground the ways music transcends language and borders while remaining rooted in lived experience. From references to folk traditions and diasporic soundscapes to reinterpretations of contemporary popular culture, these works invite viewers to consider how music shapes personal and communal narratives.

          </p>

          <p className="font-body text-sm md:text-base text-foreground font-semibold mt-6 uppercase leading-loose text-left">
            Participating Artists:
          </p>
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
            Anjali Kumar | Bayete Ross Smith | Christl Stringer | David McDonough | Franck de las Mercedes | Hema A Bharadwaj | Javaid Nayyar | Lisa Wilde | Mary Teresa Giancoli | Mathieu Josset | Michael Isaak | Nitin Mukul | Peter Stankiewicz | Qasim Ali Hussain | Roger Hsia | Seema Lisa Pandya | Shan Lyu | Shaun Ilahi | Sherwin Banfield | Smita Sen | Tanuja Desai Hidier | Tenzin Doma Lama | Total Binary Annihilation | Traci Johnson
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
