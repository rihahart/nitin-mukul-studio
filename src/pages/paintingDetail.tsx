import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import _02_The_Bestiary from "@/assets/Paintings/02_The_Bestiary.jpg";
import _08_rock_for_light from "@/assets/Paintings/08_rock_for_light.jpg";
import _09_mukul from "@/assets/Paintings/09_mukul.jpg";
import _05_Garuda from "@/assets/Paintings/05_Garuda.jpg";
import _36_boom_tomb from "@/assets/Paintings/36_boom_tomb.jpg";
import _15_brush_in_the_alley from "@/assets/Paintings/15_brush_in_the_alley.jpg";
import _25_hotrs_1 from "@/assets/Paintings/25_hotrs_1.jpg";
import _29_flying_lotus from "@/assets/Paintings/29_flying_lotus.jpg";
import _04_Cease_Fire from "@/assets/Paintings/04_Cease_Fire.jpeg";
import Civil_Lines from "@/assets/Paintings/Civil_Lines.jpg";
import _03_Fault_Lines from "@/assets/Paintings/03_Fault_Lines.jpg";
import _08_Levitate from "@/assets/Paintings/08_Levitate.jpeg";
import O6_mukul_slide from "@/assets/Paintings/O6_mukul_slide.jpg";
import _08_Parasolipsism from "@/assets/Paintings/08_Parasolipsism.jpeg";
import _07_The_Sky_is_Falling from "@/assets/Paintings/07_The_Sky_is_Falling.png";
import _14_celebration from "@/assets/Paintings/14_celebration.jpg";
import _21_coarse_empire from "@/assets/Paintings/21_coarse_empire.jpg";
import _09_confluence from "@/assets/Paintings/09_confluence.jpeg";
import _32_flower_lines from "@/assets/Paintings/32_flower_lines.jpg";
import _24_fountain from "@/assets/Paintings/24_fountain.jpg";
import _26_hotrs_2 from "@/assets/Paintings/26_hotrs_2.jpg";
import _27_hotrs_3 from "@/assets/Paintings/27_hotrs_3.jpg";
import _28_hotrs_4 from "@/assets/Paintings/28_hotrs_4.jpg";
import _01_Mother from "@/assets/Paintings/01_Mother.JPG";
import _06_CallofKali from "@/assets/Paintings/06_CallofKali.png";
import _34_sociodermis from "@/assets/Paintings/34_sociodermis.jpg";
import _30_witness from "@/assets/Paintings/30_witness.jpg";

const prints = [
  // 01–19 numbered series
  { id: "lorem-ipsum-xliv", title: "Lorem Ipsum XLIV", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _01_Mother, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "the-bestiary", title: "The Bestiary", year: "2023", medium: "Oil on canvas", dimensions: "60 × 48 inches", image: _02_The_Bestiary, detailCrop: { x: "20%", y: "10%", size: "50%" } },
  { id: "fault-lines", title: "Fault Lines", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _03_Fault_Lines, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "cease-fire", title: "Cease Fire", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _04_Cease_Fire, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "garuda", title: "Garuda", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _05_Garuda, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xlv", title: "Lorem Ipsum XLV", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _06_CallofKali, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "the-sky-is-falling", title: "The Sky is Falling", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _07_The_Sky_is_Falling, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "levitate", title: "Levitate", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _08_Levitate, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "parasolipsism", title: "Parasolipsism", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _08_Parasolipsism, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-x", title: "Lorem Ipsum X", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _08_rock_for_light, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxviii", title: "Lorem Ipsum XXXVIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _09_confluence, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xi", title: "Lorem Ipsum XI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _09_mukul, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  // prints series
  {
    id: "witness",
    title: "Witness",
    year: "2006",
    credit: "I Woke Up Somewhere Else",
    gallery: "The Guild Gallery, New York City",
    medium: "Oil on canvas",
    dimensions: "24 × 18 inches",
    image: _30_witness,
    detailCrop: { x: "20%", y: "15%", size: "55%" },
  },
  // unnumbered
  { id: "lorem-ipsum-xv", title: "Lorem Ipsum XV", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _36_boom_tomb, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xvi", title: "Lorem Ipsum XVI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _15_brush_in_the_alley, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xvii", title: "Lorem Ipsum XVII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _25_hotrs_1, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xviii", title: "Lorem Ipsum XVIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _29_flying_lotus, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "civil-lines", title: "Civil Lines", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: Civil_Lines, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxiii", title: "Lorem Ipsum XXXIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: O6_mukul_slide, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxvi", title: "Lorem Ipsum XXXVI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _14_celebration, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxvii", title: "Lorem Ipsum XXXVII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _21_coarse_empire, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxix", title: "Lorem Ipsum XXXIX", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _32_flower_lines, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xl", title: "Lorem Ipsum XL", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _24_fountain, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xli", title: "Lorem Ipsum XLI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _26_hotrs_2, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xlii", title: "Lorem Ipsum XLII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _27_hotrs_3, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xliii", title: "Lorem Ipsum XLIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _28_hotrs_4, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xlvi", title: "Lorem Ipsum XLVI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _34_sociodermis, detailCrop: { x: "25%", y: "10%", size: "50%" } },
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
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link
            to="/artwork/paintings"
            className="font-body text-sm text-foreground hover:opacity-60 transition-opacity tracking-wide"
          >
            ← Paintings
          </Link>
        </div>

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
            to={`/artwork/paintings/${prevPrint.id}`}
            className="flex items-center gap-2 group hover:opacity-60 transition-opacity"
          >
            <ChevronLeft size={24} strokeWidth={1} className="text-foreground" />
            <p className="font-display text-lg md:text-xl text-foreground">
              {prevPrint.title}
            </p>
          </Link>
          <Link
            to={`/artwork/paintings/${nextPrint.id}`}
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
