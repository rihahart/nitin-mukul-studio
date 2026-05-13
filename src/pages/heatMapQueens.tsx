import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import VideoNav from "@/components/VideoNav";
import img1 from "@/assets/Video&Installation/HeatMapsQueens/HeatMapsQueens/01_JacksonMillGreenBoard.JPG";
import img2 from "@/assets/Video&Installation/HeatMapsQueens/HeatMapsQueens/02_PortableFieldEasel.JPG";
import img3 from "@/assets/Video&Installation/HeatMapsQueens/HeatMapsQueens/03_elmhurst_sbs.jpg";
import img4 from "@/assets/Video&Installation/HeatMapsQueens/HeatMapsQueens/04_ElmhurstSBSProjectedJPG.JPG";
import img5 from "@/assets/Video&Installation/HeatMapsQueens/HeatMapsQueens/05_ArtonScreen.JPG";
import img6 from "@/assets/Video&Installation/HeatMapsQueens/HeatMapsQueens/06_MultipleArtonScreen.JPG";
import img7 from "@/assets/Video&Installation/HeatMapsQueens/HeatMapsQueens/07_roosevelt_ida_15_sec.jpeg";

const allImages = [img1, img2, img3, img4, img5, img6, img7];

const HeatMapQueens = () => {
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
          src="https://player.vimeo.com/video/1074361458?autoplay=1&muted=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Heat Maps Queens: Jackson Mill Green (East Elmhurst)"
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
              Heat Maps Queens: Jackson Mill Green (East Elmhurst)
            </h1>

            <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-12">
              Filmed September 21, 2023, 2:50pm, 72 degrees fahrenheit, mostly sunny
              <br />
              Heat Vulnerability Index rating: 4 out of 5.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
              Heat Maps: Queens is a new series of durational painting video works. These pieces were made on location in 3 selected localities in the borough of Queens, NYC. In a way, the technique parallels the 19th century school of painters known as the Impressionists, which included Monet, Pissarro and others, by disrupting accepted norms of landscape painting and seeking to depict the atmospheric effects of light while painting outdoors on location.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left mt-6">
              My intention with this particular project, supported by a grant from the New York Foundation for the Arts, was not only to contextualize the durational painting process alongside the canon of eurocentric landscape painting, but to raise awareness of the climate crisis on a local level. These pieces serve as documentation of green space inequity in the city by focusing on 3 specific neighborhoods in Queens that have been rated high risk on a scale called the Heat Vulnerability Index (HVI): East Elmhurst and Corona, Jamaica and Hollis, and Kew Gardens and Richmond Hill. Elmhurst is within walking distance of my residence in Jackson Heights, where the need for more green space and pedestrian friendly space peaked during the pandemic.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left mt-6">
              Jackson Mill Green appears more like a median at an intersection than a park. I timed myself walking the length of it, which I managed to do in one minute. There are a few large boulders which may have been placed there but it's hard to tell. The ground is scattered with long twisted maroon colored seed pods from the tall honey locust trees that populate the green, a species that has been around since the dinosaurs roamed here. They provide the only shade cover in view. Given the proximity of this area to La Guardia Airport and the notoriously inhumane and dysfunctional prison Rikers Island, it's easier to understand how it's a high risk area. The only store in sight is a liquor store.
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
              alt={`Heat Maps Queens — ${i + 1}`}
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
              alt={`Heat Maps Queens — image ${lightboxIndex + 1}`}
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
      <VideoNav currentId="heat-map-queens" />
    </Layout>
  );
};

export default HeatMapQueens;
