import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { prints } from "./prints";

const PrintDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const printIndex = prints.findIndex((p) => p.id === id);
  const print = prints[printIndex];

  if (!print) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <p className="font-body text-foreground">Work not found.</p>
        </div>
      </Layout>
    );
  }

  const prevPrint = prints[(printIndex - 1 + prints.length) % prints.length];
  const nextPrint = prints[(printIndex + 1) % prints.length];

  return (
    <Layout>
      <div className="px-[clamp(1.5rem,5vw,6rem)] py-[clamp(6rem,5vw+6rem,12rem)] mx-auto">
        {/* Image with prev/next arrows */}
        <div className="relative w-full flex items-center justify-center mb-4 md:mb-12">
          <button
            onClick={() => navigate(`/artwork/prints/${prevPrint.id}`)}
            className="hidden md:flex absolute left-0 md:-left-12 z-10 p-2 text-foreground hover:opacity-60 transition-opacity flex-col items-center gap-1 group"
            aria-label="Previous print"
          >
            <ChevronLeft size={32} strokeWidth={1} />
            <span className="font-body text-sm tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {prevPrint.title}
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
                  src={print.image}
                  alt={print.title}
                  className="max-w-full max-h-full object-contain cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <button
            onClick={() => navigate(`/artwork/prints/${nextPrint.id}`)}
            className="hidden md:flex absolute right-0 md:-right-12 z-10 p-2 text-foreground hover:opacity-60 transition-opacity flex-col items-center gap-1 group"
            aria-label="Next print"
          >
            <ChevronRight size={32} strokeWidth={1} />
            <span className="font-body text-sm tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {nextPrint.title}
            </span>
          </button>
        </div>

        {/* Artwork info */}
        <div className="text-center mb-10">
          <h1 className="font-display text-2xl text-foreground tracking-wide font-bold md:text-3xl mb-3">
            {print.title}
          </h1>
          {print.year && (
            <p className="font-body text-sm text-foreground mb-6">{print.year}</p>
          )}
          <div className="flex flex-col items-center gap-1 mt-4 md:mt-8">
            {print.medium && <p className="font-body text-sm text-foreground">{print.medium}</p>}
            {print.dimensions && <p className="font-body text-sm text-foreground">{print.dimensions}</p>}
          </div>
        </div>

        {/* Mobile prev/next navigation */}
        <div className="flex md:hidden items-center justify-between mt-16 mb-4">
          <button
            onClick={() => navigate(`/artwork/prints/${prevPrint.id}`)}
            className="flex items-center gap-1 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Previous print"
          >
            <ChevronLeft size={20} strokeWidth={1} />
            <span className="font-body text-sm tracking-wide">{prevPrint.title}</span>
          </button>
          <button
            onClick={() => navigate(`/artwork/prints/${nextPrint.id}`)}
            className="flex items-center gap-1 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Next print"
          >
            <span className="font-body text-sm tracking-wide">{nextPrint.title}</span>
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
                src={print.image}
                alt={print.title}
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

export default PrintDetail;
