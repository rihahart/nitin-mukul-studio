import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { useState } from "react";
import InquiryPanel from "@/components/InquiryPanel";
import _01_Mother from "@/assets/Paintings/01_Mother.JPG";
import _03_Fault_Lines from "@/assets/Paintings/03_Fault_Lines.jpg";
import _04_Cease_Fire from "@/assets/Paintings/04_Cease_Fire.jpeg";
import _05_Garuda from "@/assets/Paintings/05_Garuda.jpg";
import _06_CallofKali from "@/assets/Paintings/06_CallofKali.png";
import _07_The_Sky_is_Falling from "@/assets/Paintings/07_The_Sky_is_Falling.png";
import _08_Levitate from "@/assets/Paintings/08_Levitate.jpeg";
import _08_Parasolipsism from "@/assets/Paintings/08_Parasolipsism.jpeg";
import _09_confluence from "@/assets/Paintings/09_confluence.jpeg";
import _40_Drill from "@/assets/Paintings/40_Drill.jpg";
import _43_Rituals from "@/assets/Paintings/43_Rituals.jpg";
import _44_Noise from "@/assets/Paintings/44_Noise.jpg";
import _44_Pastoral from "@/assets/Paintings/44_Pastoral.jpg";
import _45_unnamed_slide from "@/assets/Paintings/45_unnamed_slide.jpg";
import _46_Elsie from "@/assets/Paintings/46_Elsie.jpg";
import _47_golden_40s from "@/assets/Paintings/47_golden_40s.jpg";
import _48_road_test from "@/assets/Paintings/48_road_test.jpeg";
import _49_detonate from "@/assets/Paintings/49_detonate.jpg";

const availableWorks = [
  {
    id: "Don't_Forget_to_Call_Your_Mother",
    title: "Don't Forget to Call Your Mother",
    year: "2026",
    medium: "Oil, acrylic and Icelandic black sand on canvas",
    dimensions: "60 × 40 inches",
    image: _01_Mother,
  },
  {
    id: "Fault_Lines",
    title: "Fault Lines",
    year: "2024",
    medium: "Oil and acrylic on 3 canvas sections",
    dimensions: "96 × 48 × 24 inches",
    image: _03_Fault_Lines,
  },
  {
    id: "Garuda",
    title: "Garuda",
    year: "2025",
    medium: "Oil and acrylic on canvas",
    dimensions: "60 × 40 inches",
    image: _05_Garuda,
  },
  {
    id: "Call_of_Kali",
    title: "Call of Kali",
    year: "2025",
    medium: "Oil and acrylic on canvas",
    dimensions: "48 × 36 inches",
    image: _06_CallofKali,
  },
  {
    id: "Confluence",
    title: "Confluence",
    year: "2023",
    medium: "Oil and acrylic on canvas",
    dimensions: "64 × 40 inches",
    image: _09_confluence,
  },
  {
    id: "Levitate",
    title: "Levitate",
    year: "2023",
    medium: "Oil and acrylic on canvas",
    dimensions: "60 × 40 inches",
    image: _08_Levitate,
  },
  {
    id: "Cease_Fire",
    title: "Cease Fire",
    year: "2023",
    medium: "Acrylic on canvas",
    dimensions: "60 × 40 inches",
    image: _04_Cease_Fire,
  },
  {
    id: "Parasolipsism",
    title: "Parasolipsism",
    year: "2022",
    medium: "Oil and acrylic on canvas",
    dimensions: "48 × 36 inches",
    image: _08_Parasolipsism,
  },
  {
    id: "The_Sky_is_Falling",
    title: "The Sky is Falling",
    year: "2021",
    medium: "Oil and acrylic on canvas",
    dimensions: "40 × 36 inches",
    image: _07_The_Sky_is_Falling,
  },
  {
    id: "Drill",
    title: "Drill",
    year: "",
    medium: "Oil and acrylic on canvas",
    dimensions: "60 × 40 inches",
    image: _40_Drill,
  },
  {
    id: "Pastoral",
    title: "Pastoral",
    year: "2004",
    medium: "Oil on canvas",
    dimensions: "60 × 36 inches",
    image: _44_Pastoral,
  },
  {
    id: "Rituals",
    title: "Rituals",
    year: "2004",
    medium: "Oil on canvas",
    dimensions: "52 × 36 inches",
    image: _43_Rituals,
  },
  {
    id: "Noise",
    title: "Noise",
    year: "2003",
    medium: "Oil and acrylic on canvas",
    dimensions: "72 × 48 inches",
    image: _44_Noise,
  },
  {
    id: "Want_Some_Candy",
    title: "Want Some Candy?",
    year: "2003",
    medium: "Acrylic paint and digital",
    dimensions: "8 × 10 inches (3)",
    image: _45_unnamed_slide,
  },
  {
    id: "Elsie",
    title: "Elsie",
    year: "1993",
    medium: "Oil and acrylic on cotton Indian tapestry",
    dimensions: "48 × 48 inches",
    image: _46_Elsie,
  },
  {
    id: "Road_Test",
    title: "Road Test",
    year: "1993",
    medium: "Oil on canvas",
    dimensions: "72 × 48 inches",
    image: _48_road_test,
  },
  {
    id: "Detonate",
    title: "Detonate",
    year: "1993",
    medium: "Oil on canvas",
    dimensions: "72 × 48 inches",
    image: _49_detonate,
  },
  {
    id: "Golden_40s",
    title: "Golden 40s",
    year: "1993",
    medium: "Oil and acrylic on canvas",
    dimensions: "",
    image: _47_golden_40s,
  },
];

type AvailableWork = typeof availableWorks[0];

const crops = [
  { position: "20% 20%" },
  { position: "50% 50%" },
  { position: "80% 80%" },
];

interface CollectItemProps {
  item: AvailableWork;
  i: number;
  onInquire: (item: AvailableWork) => void;
}

const CollectItem = ({ item, i, onInquire }: CollectItemProps) => {
  const [activeCrop, setActiveCrop] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      className="flex flex-col md:flex-row gap-8 md:gap-32 py-16"
    >
      {/* Image */}
      <div className="md:w-2/5 shrink-0">
        <div
          className="relative w-full overflow-hidden cursor-zoom-in group"
          style={{ height: "420px" }}
          onClick={() => setActiveCrop(null)}
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full transition-all duration-500"
            style={
              activeCrop !== null
                ? { objectFit: "cover", objectPosition: crops[activeCrop].position }
                : { objectFit: "contain", objectPosition: "center" }
            }
          />
          {activeCrop === null && (
            <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="font-body text-xs tracking-widest uppercase text-white bg-black/50 px-3 py-1">
                Click to zoom in
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="flex flex-col justify-center gap-1 md:w-3/5">
        <h2 className="font-display text-xl md:text-2xl font-bold text-foreground mb-1">
          {item.title}
        </h2>
        {item.year && (
          <p className="font-body text-sm text-foreground/60">{item.year}</p>
        )}
        <p className="font-body text-sm text-foreground/60">{item.medium}</p>
        {item.dimensions && (
          <p className="font-body text-sm text-foreground/60">{item.dimensions}</p>
        )}
        <button
          onClick={() => onInquire(item)}
          className="mt-6 w-full md:w-48 bg-black text-white font-body text-sm tracking-widest uppercase hover:opacity-70 transition-opacity py-4 px-8"
        >
          Inquire
        </button>

        {/* Crop thumbnails */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={() => setActiveCrop(null)}
            className={`w-16 h-16 overflow-hidden border-2 transition-colors ${activeCrop === null ? "border-foreground" : "border-transparent hover:border-foreground/40"}`}
            aria-label="Full image"
          >
            <img src={item.image} alt="" className="w-full h-full object-cover object-center" />
          </button>
          {crops.map((crop, ci) => (
            <button
              key={ci}
              onClick={() => setActiveCrop(ci)}
              className={`w-16 h-16 overflow-hidden border-2 transition-colors ${activeCrop === ci ? "border-foreground" : "border-transparent hover:border-foreground/40"}`}
              aria-label={`Zoom section ${ci + 1}`}
            >
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover"
                style={{ objectPosition: crop.position }}
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Collect = () => {
  const [selectedWork, setSelectedWork] = useState<AvailableWork | null>(null);

  return (
    <Layout>
      <div className="w-full px-[clamp(1.5rem,5vw,6rem)] py-[clamp(6rem,5vw+6rem,12rem)]">
        <div className="flex flex-col divide-y divide-foreground/10">
          {availableWorks.map((item, i) => (
            <CollectItem key={item.id} item={item} i={i} onInquire={setSelectedWork} />
          ))}
        </div>
      </div>


<InquiryPanel
        isOpen={selectedWork !== null}
        onClose={() => setSelectedWork(null)}
        painting={selectedWork ?? availableWorks[0]}
      />
    </Layout>
  );
};

export default Collect;
