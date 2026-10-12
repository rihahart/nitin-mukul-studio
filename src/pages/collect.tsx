import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InquiryPanel from "@/components/InquiryPanel";
import { availableWorks, type AvailableWork } from "@/lib/availableWorks";

const crops = [
  { position: "25% 25%", scale: 1, prominent: false },
  { position: "75% 75%", scale: 2.2, prominent: true },
];

interface CollectItemProps {
  item: AvailableWork;
  i: number;
  onInquire: (item: AvailableWork) => void;
}

const CollectItem = ({ item, i, onInquire }: CollectItemProps) => {
  const [activeCrop, setActiveCrop] = useState<number | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: i * 0.08 }}
      id={item.id}
      className="flex flex-col md:flex-row gap-8 md:gap-32 py-16 scroll-mt-24 md:scroll-mt-32"
    >
      {/* Image */}
      <div className="md:w-2/5 shrink-0">
        <div
          className="relative w-full overflow-hidden cursor-zoom-in group"
          style={{ height: "420px" }}
          onClick={() => setLightboxOpen(true)}
        >
          <img
            src={item.image}
            alt={item.title}
            loading="lazy"
            className="w-full h-full transition-all duration-500"
            style={
              activeCrop !== null
                ? {
                    objectFit: "cover",
                    objectPosition: crops[activeCrop].position,
                    transform: `scale(${crops[activeCrop].scale})`,
                    transformOrigin: crops[activeCrop].position,
                  }
                : { objectFit: "contain", objectPosition: "center" }
            }
          />
          <div className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <span className="font-body text-xs tracking-widest uppercase text-white bg-black/50 px-3 py-1">
              Click to zoom in
            </span>
          </div>
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

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-neutral-600/95 flex items-center justify-center p-4 md:py-24"
            onClick={() => setLightboxOpen(false)}
          >
            <div className="flex flex-col items-center gap-4 max-h-full max-w-full" onClick={(e) => e.stopPropagation()}>
              <button
                className="text-white hover:opacity-60 transition-opacity font-body text-sm tracking-wide"
                onClick={() => setLightboxOpen(false)}
              >
                [ Close Screen ]
              </button>
              <img
                src={item.image}
                alt={item.title}
                className="max-w-full object-contain cursor-zoom-out"
                style={{ maxHeight: "calc(100vh - 12rem)" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Collect = () => {
  const [selectedWork, setSelectedWork] = useState<AvailableWork | null>(null);
  const { hash } = useLocation();

  // Jump to a painting when linked as /collect#<id> (e.g. from the Flight Delay page).
  useEffect(() => {
    if (!hash) return;
    const target = document.getElementById(decodeURIComponent(hash.slice(1)));
    if (!target) return;
    requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
  }, [hash]);

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
