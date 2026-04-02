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
import prints6 from "@/assets/Paintings/02_The_Bestiary.jpg";
import prints7 from "@/assets/Paintings/prints-7.jpg";
import prints8 from "@/assets/Paintings/prints-8.jpg";
import painting9 from "@/assets/Paintings/08_mukul_slide.jpg";
import painting10 from "@/assets/Paintings/08_rock_for_light.jpg";
import painting11 from "@/assets/Paintings/09_mukul.jpg";
import painting12 from "@/assets/Paintings/15_mukul_slide.jpg";
import painting13 from "@/assets/Paintings/16_mukul_slide.jpg";
import painting14 from "@/assets/Paintings/05_Garuda.jpg";
import painting15 from "@/assets/Paintings/boom_tomb.jpg";
import painting16 from "@/assets/Paintings/brush_in_the_alley.jpg";
import painting17 from "@/assets/Paintings/hotrs_1_hi_res.jpg";
import painting18 from "@/assets/Paintings/flying_lotus_hi_res.jpg";
import painting19 from "@/assets/Paintings/17_mukul_slide.jpg";
import painting20 from "@/assets/Paintings/19_mukul_slide.jpg";
import painting21 from "@/assets/Paintings/207156fb9b072944dc0c13bad869605e.jpg";
import painting22 from "@/assets/Paintings/04_Cease_Fire.jpeg";
import painting23 from "@/assets/Paintings/Civil_Lines.jpg";
import painting24 from "@/assets/Paintings/03_Fault_Lines.jpg";
import painting25 from "@/assets/Paintings/IMG_0622.JPG";
import painting26 from "@/assets/Paintings/IMG_0712.jpg";
import painting27 from "@/assets/Paintings/IMG_1373.jpeg";
import painting28 from "@/assets/Paintings/IMG_3272.JPG";
import painting29 from "@/assets/Paintings/IMG_4648.jpg";
import painting30 from "@/assets/Paintings/IMG_4652.jpg";
import painting31 from "@/assets/Paintings/08_Levitate.jpeg";
import painting32 from "@/assets/Paintings/O1_mukul_slide.jpg";
import painting33 from "@/assets/Paintings/O6_mukul_slide.jpg";
import painting34 from "@/assets/Paintings/08_Parasolipsism.jpeg";
import painting35 from "@/assets/Paintings/07_The_Sky_is_Falling.png";
import painting36 from "@/assets/Paintings/celebration_hi_res.jpg";
import painting37 from "@/assets/Paintings/coarse_empire.jpg";
import painting38 from "@/assets/Paintings/09_confluence.jpeg";
import painting39 from "@/assets/Paintings/flower_lines.jpg";
import painting40 from "@/assets/Paintings/fountain.jpg";
import painting41 from "@/assets/Paintings/hotrs_2_hi_res.jpg";
import painting42 from "@/assets/Paintings/hotrs_3_hi_res.jpg";
import painting43 from "@/assets/Paintings/hotrs_4_hi_res.jpg";
import painting44 from "@/assets/Paintings/01_Mother.JPG";
import painting45 from "@/assets/Paintings/06_CallofKali.png";
import painting46 from "@/assets/Paintings/sociodermis.jpg";

const prints = [
  // 01–19 numbered series
  { id: "lorem-ipsum-xliv", title: "Lorem Ipsum XLIV", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting44, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "the-bestiary", title: "The Bestiary", year: "2023", medium: "Oil on canvas", dimensions: "60 × 48 inches", image: prints6, detailCrop: { x: "20%", y: "10%", size: "50%" } },
  { id: "fault-lines", title: "Fault Lines", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting24, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "cease-fire", title: "Cease Fire", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting22, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "garuda", title: "Garuda", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting14, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xlv", title: "Lorem Ipsum XLV", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting45, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "the-sky-is-falling", title: "The Sky is Falling", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting35, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "levitate", title: "Levitate", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting31, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-ix", title: "Lorem Ipsum IX", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting9, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "parasolipsism", title: "Parasolipsism", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting34, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-x", title: "Lorem Ipsum X", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting10, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxviii", title: "Lorem Ipsum XXXVIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting38, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xi", title: "Lorem Ipsum XI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting11, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xii", title: "Lorem Ipsum XII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting12, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xiii", title: "Lorem Ipsum XIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting13, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xix", title: "Lorem Ipsum XIX", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting19, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xx", title: "Lorem Ipsum XX", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting20, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  // prints series (1–8)
  {
    id: "untitled-i",
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
    id: "untitled-iii",
    title: "Untitled III",
    year: "2024",
    medium: "Mixed media sculpture",
    dimensions: "60 × 40 inches",
    image: prints3,
    detailCrop: { x: "15%", y: "20%", size: "50%" },
  },
  {
    id: "untitled-iv",
    title: "Untitled IV",
    year: "2023",
    medium: "Oil on canvas",
    dimensions: "48 × 60 inches",
    image: prints4,
    detailCrop: { x: "30%", y: "20%", size: "50%" },
  },
  {
    id: "untitled-v",
    title: "Untitled V",
    year: "2022",
    medium: "Oil on canvas",
    dimensions: "36 × 48 inches",
    image: prints5,
    detailCrop: { x: "25%", y: "15%", size: "55%" },
  },
  {
    id: "untitled-vii",
    title: "Untitled VII",
    year: "2024",
    medium: "Oil on canvas",
    dimensions: "48 × 72 inches",
    image: prints7,
    detailCrop: { x: "25%", y: "20%", size: "50%" },
  },
  {
    id: "untitled-viii",
    title: "Untitled VIII",
    year: "2022",
    medium: "Oil on canvas",
    dimensions: "36 × 48 inches",
    image: prints8,
    detailCrop: { x: "20%", y: "15%", size: "55%" },
  },
  // unnumbered
  { id: "lorem-ipsum-xv", title: "Lorem Ipsum XV", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting15, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xvi", title: "Lorem Ipsum XVI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting16, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xvii", title: "Lorem Ipsum XVII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting17, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xviii", title: "Lorem Ipsum XVIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting18, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxi", title: "Lorem Ipsum XXI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting21, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "civil-lines", title: "Civil Lines", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting23, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxv", title: "Lorem Ipsum XXV", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting25, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxvi", title: "Lorem Ipsum XXVI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting26, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxvii", title: "Lorem Ipsum XXVII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting27, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxviii", title: "Lorem Ipsum XXVIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting28, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxix", title: "Lorem Ipsum XXIX", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting29, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxx", title: "Lorem Ipsum XXX", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting30, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxii", title: "Lorem Ipsum XXXII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting32, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxiii", title: "Lorem Ipsum XXXIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting33, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxvi", title: "Lorem Ipsum XXXVI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting36, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxvii", title: "Lorem Ipsum XXXVII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting37, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xxxix", title: "Lorem Ipsum XXXIX", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting39, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xl", title: "Lorem Ipsum XL", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting40, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xli", title: "Lorem Ipsum XLI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting41, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xlii", title: "Lorem Ipsum XLII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting42, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xliii", title: "Lorem Ipsum XLIII", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting43, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "lorem-ipsum-xlvi", title: "Lorem Ipsum XLVI", year: "2023", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: painting46, detailCrop: { x: "25%", y: "10%", size: "50%" } },
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
