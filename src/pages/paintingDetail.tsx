import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import prints1 from "@/assets/Paintings/prints-1.jpg";
import prints2 from "@/assets/Paintings/prints-2.jpg";
import prints3 from "@/assets/Paintings/prints-3.jpg";
import prints4 from "@/assets/Paintings/prints-4.jpg";
import prints5 from "@/assets/Paintings/prints-5.jpg";
import prints6 from "@/assets/Paintings/prints-6.jpg";
import prints7 from "@/assets/Paintings/prints-7.jpg";
import prints8 from "@/assets/Paintings/prints-8.jpg";
import painting9 from "@/assets/Paintings/08_mukul_slide.jpg";
import painting10 from "@/assets/Paintings/08_rock_for_light.jpg";
import painting11 from "@/assets/Paintings/09_mukul.jpg";
import painting12 from "@/assets/Paintings/15_mukul_slide.jpg";
import painting13 from "@/assets/Paintings/16_mukul_slide.jpg";
import painting14 from "@/assets/Paintings/Garuda.jpg";
import painting15 from "@/assets/Paintings/boom_tomb.jpg";
import painting16 from "@/assets/Paintings/brush_in_the_alley.jpg";
import painting17 from "@/assets/Paintings/hotrs_1_hi_res.jpg";
import painting18 from "@/assets/Paintings/flying_lotus_hi_res.jpg";

const prints = [
  {
    id: "untitled-1",
    title: "Untitled I",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "48 × 72 inches",
    image: prints1,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "witness",
    title: "Witness",
    year: "2006",
    credit: "I Woke Up Somewhere Else",
    gallery: "The Guild Gallery, New York City",
    medium: "Oil on canvas",
    dimensions: "24 × 18 inches",
    image: prints2,
    detailCrop: { x: "20%", y: "15%", size: "55%" },
  },
  {
    id: "untitled-3",
    title: "Untitled III",
    year: "2024",
    medium: "Mixed media sculpture",
    dimensions: "60 × 40 inches",
    image: prints3,
    detailCrop: { x: "15%", y: "20%", size: "50%" },
  },
  {
    id: "untitled-4",
    title: "Untitled IV",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "48 × 60 inches",
    image: prints4,
    detailCrop: { x: "30%", y: "20%", size: "50%" },
  },
  {
    id: "untitled-5",
    title: "Untitled V",
    year: "2022",
    medium: "Oil on canvas",
    dimensions: "36 × 48 inches",
    image: prints5,
    detailCrop: { x: "25%", y: "15%", size: "55%" },
  },
  {
    id: "untitled-6",
    title: "The Bestiary",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "60 × 48 inches",
    image: prints6,
    detailCrop: { x: "20%", y: "10%", size: "50%" },
  },
  {
    id: "untitled-7",
    title: "Untitled VII",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "48 × 72 inches",
    image: prints7,
    detailCrop: { x: "25%", y: "20%", size: "50%" },
  },
  {
    id: "untitled-8",
    title: "Untitled VIII",
    year: "2022",
    medium: "Oil on canvas",
    dimensions: "36 × 48 inches",
    image: prints8,
    detailCrop: { x: "20%", y: "15%", size: "55%" },
  },
  {
    id: "painting-9",
    title: "Lorem Ipsum IX",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting9,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "painting-10",
    title: "Lorem Ipsum X",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting10,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "painting-11",
    title: "Lorem Ipsum XI",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting11,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "painting-12",
    title: "Lorem Ipsum XII",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting12,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "painting-13",
    title: "Lorem Ipsum XIII",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting13,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "painting-14",
    title: "Garuda",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting14,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "painting-15",
    title: "Lorem Ipsum XV",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting15,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "painting-16",
    title: "Lorem Ipsum XVI",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting16,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "painting-17",
    title: "Lorem Ipsum XVII",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting17,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
  {
    id: "painting-18",
    title: "Lorem Ipsum XVIII",
    year: "2023",
    medium: "Lorem ipsum dolor sit amet",
    dimensions: "00 × 00 inches",
    image: painting18,
    detailCrop: { x: "25%", y: "10%", size: "50%" },
  },
];

const PrintDetail = () => {
  const { id } = useParams();
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    setSlideIndex(0);
  }, [id]);

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

  // Two slides: full image, then detail crop
  const slideImages = [
    { type: "full" as const },
    { type: "detail" as const },
  ];

  const prevPrint = prints[(printIndex - 1 + prints.length) % prints.length];
  const nextPrint = prints[(printIndex + 1) % prints.length];

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
        {/* Image carousel */}
        <div className="relative w-full flex items-center justify-center mb-12">
          {/* Prev arrow */}
          <button
            onClick={() => setSlideIndex((prev) => (prev - 1 + slideImages.length) % slideImages.length)}
            className="absolute left-0 md:-left-12 z-10 p-2 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Previous"
          >
            <ChevronLeft size={32} strokeWidth={1} />
          </button>

          {/* Image area */}
          <div className="w-full max-w-3xl aspect-[4/3] relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={slideIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {slideImages[slideIndex].type === "full" ? (
                  <img
                    src={print.image}
                    alt={print.title}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <div
                    className="w-full h-full bg-no-repeat"
                    style={{
                      backgroundImage: `url(${print.image})`,
                      backgroundPosition: `${print.detailCrop.x} ${print.detailCrop.y}`,
                      backgroundSize: "250%",
                    }}
                    role="img"
                    aria-label={`${print.title} — detail`}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next arrow */}
          <button
            onClick={() => setSlideIndex((prev) => (prev + 1) % slideImages.length)}
            className="absolute right-0 md:-right-12 z-10 p-2 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Next"
          >
            <ChevronRight size={32} strokeWidth={1} />
          </button>
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mb-12">
          {slideImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlideIndex(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === slideIndex ? "bg-foreground" : "bg-foreground/20"}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Artwork info */}
        <div className="text-center space-y-2 mb-20">
          <h1 className="font-display text-2xl md:text-3xl font-light text-foreground tracking-wide">
            {print.title}
          </h1>
          <p className="font-body text-sm text-foreground">
            {(print as any).credit ?? "Nitin Mukul"}, {print.year}
          </p>
          {(print as any).gallery && (
            <p id="gallery" className="font-body text-sm text-foreground">
              {(print as any).gallery}
            </p>
          )}
          <p className="font-body text-sm text-foreground">
            {print.medium} | {print.dimensions}
          </p>
        </div>

        {/* Prev / Next artwork navigation */}
        <div className="pt-8 flex items-center justify-between">
          <Link
            to={`/work/${prevPrint.id}`}
            className="flex items-center gap-2 group hover:opacity-60 transition-opacity"
          >
            <ChevronLeft size={24} strokeWidth={1} className="text-foreground" />
            <p className="font-display text-lg md:text-xl text-foreground">
              {prevPrint.title}
            </p>
          </Link>
          <Link
            to={`/work/${nextPrint.id}`}
            className="flex items-center gap-2 group hover:opacity-60 transition-opacity"
          >
            <p className="font-display text-lg md:text-xl text-foreground">
              {nextPrint.title}
            </p>
            <ChevronRight size={24} strokeWidth={1} className="text-foreground" />
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default PrintDetail;
