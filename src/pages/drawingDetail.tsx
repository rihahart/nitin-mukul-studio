import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { drawings } from "./drawings";

const DrawingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const drawingIndex = drawings.findIndex((d) => d.id === id);
  const drawing = drawings[drawingIndex];

  if (!drawing) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <p className="font-body text-foreground">Work not found.</p>
        </div>
      </Layout>
    );
  }

  const prevDrawing = drawings[(drawingIndex - 1 + drawings.length) % drawings.length];
  const nextDrawing = drawings[(drawingIndex + 1) % drawings.length];

  return (
    <Layout>
      <div className="px-[clamp(1.5rem,5vw,6rem)] py-[clamp(6rem,5vw+6rem,12rem)] mx-auto">
        {/* Image with prev/next arrows */}
        <div className="w-full flex items-center justify-center gap-6 mb-4 md:mb-8">
          <button
            onClick={() => navigate(`/artwork/drawings/${prevDrawing.id}`)}
            className="hidden md:flex relative shrink-0 z-10 p-2 text-foreground hover:opacity-60 transition-opacity flex-col items-center group"
            aria-label="Previous drawing"
          >
            <ChevronLeft size={32} strokeWidth={1} />
            <span className="font-body text-sm tracking-wide whitespace-nowrap absolute top-full pt-1 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
              {prevDrawing.title}
            </span>
          </button>

          <div className="w-full max-w-3xl aspect-square md:aspect-[4/3] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={drawing.image}
                  alt={drawing.title}
                  className="max-w-full max-h-full object-contain cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => navigate(`/artwork/drawings/${nextDrawing.id}`)}
            className="hidden md:flex relative shrink-0 z-10 p-2 text-foreground hover:opacity-60 transition-opacity flex-col items-center group"
            aria-label="Next drawing"
          >
            <ChevronRight size={32} strokeWidth={1} />
            <span className="font-body text-sm tracking-wide whitespace-nowrap absolute top-full pt-1 left-0 opacity-0 group-hover:opacity-100 transition-opacity">
              {nextDrawing.title}
            </span>
          </button>
        </div>

        {/* Artwork info */}
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <h1 className="font-display text-2xl text-foreground tracking-wide font-bold md:text-4xl mb-8">
            {drawing.title}
          </h1>
          <div className="flex flex-col items-center gap-0.5">
            {drawing.year && <p className="font-body text-base font-medium uppercase text-foreground underline mb-1">{drawing.year}</p>}
            <div className="flex flex-col items-center gap-0 leading-none">
              {drawing.medium && <p className="font-body text-sm text-foreground">{drawing.medium}</p>}
              {drawing.dimensions && <p className="font-body text-sm text-foreground">{drawing.dimensions}</p>}
            </div>
          </div>
        </div>

        {/* Mobile prev/next navigation */}
        <div className="flex md:hidden items-center justify-between mt-16 mb-4">
          <button
            onClick={() => navigate(`/artwork/drawings/${prevDrawing.id}`)}
            className="flex items-center gap-1 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Previous drawing"
          >
            <ChevronLeft size={20} strokeWidth={1} />
            <span className="font-body text-sm tracking-wide">{prevDrawing.title}</span>
          </button>
          <button
            onClick={() => navigate(`/artwork/drawings/${nextDrawing.id}`)}
            className="flex items-center gap-1 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Next drawing"
          >
            <span className="font-body text-sm tracking-wide">{nextDrawing.title}</span>
            <ChevronRight size={20} strokeWidth={1} />
          </button>
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
            className="fixed inset-0 z-50 bg-neutral-600/95 md:bg-neutral-600/90 flex items-center justify-center p-4 md:py-24"
            onClick={() => setLightboxOpen(false)}
          >
            <div
              className="flex flex-col items-center gap-4 max-h-full max-w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="text-white hover:opacity-60 transition-opacity font-body text-sm tracking-wide"
                onClick={() => setLightboxOpen(false)}
                aria-label="Close"
              >
                [ Close Screen ]
              </button>
              <img
                src={drawing.image}
                alt={drawing.title}
                className="max-w-full object-contain cursor-zoom-out"
                style={{ maxHeight: "calc(100vh - 12rem)" }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default DrawingDetail;
