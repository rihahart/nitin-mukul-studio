import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import _02_The_Bestiary from "@/assets/Paintings/02_The_Bestiary.jpg";
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
import _10_15views from "@/assets/Paintings/10_15views.jpg";
import _11_glacialHarmony from "@/assets/Paintings/11_glacialHarmony.jpg";
import _13_2012_celebration_3 from "@/assets/Paintings/13_2012_celebration_3.jpg";
import _16_chandelier from "@/assets/Paintings/16_chandelier_hi_res.jpg";
import _17_chandelier_2 from "@/assets/Paintings/17_chandelier_2.jpg";
import _18__stand_your_ground from "@/assets/Paintings/18__stand_your_ground.jpg";
import _19_giger_counter from "@/assets/Paintings/19_giger_counter.JPG";
import _20_chandelier_3 from "@/assets/Paintings/20_chandelier_3.jpg";
import _22_rock_for_light from "@/assets/Paintings/22_rock_for_light.jpg";
import _23_empire from "@/assets/Paintings/23_empire.jpg";
import _31_supari from "@/assets/Paintings/31_supari.jpg";
import _35_birth_of_a_nation from "@/assets/Paintings/35_birth_of_a_nation.jpg";
import _37_drowningbynumbers from "@/assets/Paintings/37_drowningbynumbers.jpg";
import _38_mosque_nest from "@/assets/Paintings/38_mosque_nest.JPG";
import _39_minuteoldmigrant from "@/assets/Paintings/39_minuteoldmigrant.jpg";
import _40_Drill from "@/assets/Paintings/40_Drill.jpg";
import _41_herd from "@/assets/Paintings/41_herd.jpg";
import _42_Rickshaw from "@/assets/Paintings/42_Rickshaw.jpg";
import _43_Rituals from "@/assets/Paintings/43_Rituals.jpg";
import _44_Noise from "@/assets/Paintings/44_Noise.jpg";
import _44_Pastoral from "@/assets/Paintings/44_Pastoral.jpg";
import _45_puddle from "@/assets/Paintings/45_puddle.jpg";
import _45_unnamed_slide from "@/assets/Paintings/45_unnamed_slide.jpg";
import _46_Elsie from "@/assets/Paintings/46_Elsie.jpg";
import _47_golden_40s from "@/assets/Paintings/47_golden_40s.jpg";
import _48_road_test from "@/assets/Paintings/48_road_test.jpeg";
import _49_detonate from "@/assets/Paintings/49_detonate.jpg";

const paintings = [

  { id: "Don't_Forget_to_Call_Your_Mother", 
    title: "Don't Forget to Call Your Mother", 
    year: "2026",
    collection: "", 
    gallery: "Available Works", 
    medium: "Oil, acrylic and Icelandic black sand on canvas", 
    dimensions: "60 × 40 inches", 
    image: _01_Mother,
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "The_Bestiary", 
    title: "The Bestiary",
    year: "2025", 
    collection: "", 
    gallery: "", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "60 × 40 inches", 
    image: _02_The_Bestiary, 
    detailCrop: { x: "20%", y: "10%", size: "50%" } },

  { id: "Fault_Lines", 
    title: "Fault Lines", 
    year: "2024", 
    collection: "", 
    gallery: "Available Works", 
    medium: "Oil and acrylic on 3 canvas sections", 
    dimensions: "96 × 48 x 24 inches", 
    image: _03_Fault_Lines, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Cease_Fire", 
    title: "Cease Fire", 
    year: "2023", 
    collection: "", 
    gallery: "Available works", 
    medium: "Acrylic on canvas", 
    dimensions: "60 × 40 inches", 
    image: _04_Cease_Fire, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Garuda", 
    title: "Garuda", 
    year: "2025", 
    collection: "", 
    gallery: "Private Collection", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "00 × 00 inches", 
    image: _05_Garuda,
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Call_of_Kali", 
    title: "Call of Kali (with Angela Dufresne and David Humphrey)", 
    year: "2025", 
    collection: "", 
    gallery: "Available works", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "48 × 36 inches", 
    image: _06_CallofKali, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "The_Sky_is_Falling", 
    title: "The Sky is Falling", 
    year: "2021", 
    collection: "", 
    gallery: "", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "40 × 36 inches", 
    image: _07_The_Sky_is_Falling, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Levitate", 
    title: "Levitate", 
    year: "2023", 
    collection: "", 
    gallery: "Available Works", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "60 × 40 inches", 
    image: _08_Levitate, detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Parasolipsism", 
    title: "Parasolipsism", 
    year: "2022", 
    collection: "", 
    gallery: "", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "48 × 36 inches", 
    image: _08_Parasolipsism, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Confluence", 
    title: "Confluence", 
    year: "2023",
    collection: "Confluence", 
    gallery: "", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "64 × 40 inches", 
    image: _09_confluence,
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Mukul", 
    title: "Mukul", 
    year: "2023", 
    collection: "", 
    gallery: "", 
    medium: "Lorem ipsum dolor sit amet", 
    dimensions: "00 × 00 inches", 
    image: _09_mukul, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "15_Views", 
    title: "15 Views", 
    year: "2016", 
    collection: "Confluence", 
    gallery: "", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "00 × 00 inches", 
    image: _10_15views, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Glacial_Harmony", 
    title: "Glacial Harmony", 
    year: "2016", 
    collection: "Confluence", 
    gallery: "", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "24 × 10 inches", 
    image: _11_glacialHarmony, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Celebration_3", 
    title: "Celebration 3", 
    year: "2012", 
    collection: "Fact Fission", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas",
    dimensions: "24 × 18 inches", 
    image: _13_2012_celebration_3, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Celebration", 
    title: "Celebration",
    year: "2010",
    collection: "Malleable Memory",
    gallery: "Private Collection",
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "72 × 48 inches", 
    image: _14_celebration, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Brush_in_the_Alley", 
    title: "Brush in the Alley", 
    year: "2010", 
    collection: "Malleable Memory", 
    gallery: "Kiran Nadar Museum of Art", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "90 × 50 inches", 
    image: _15_brush_in_the_alley, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Chandelier", 
    title: "Chandelier", 
    year: "2023", 
    collection: "", 
    gallery: "",
    medium: "Lorem ipsum dolor sit amet", 
    dimensions: "00 × 00 inches", 
    image: _16_chandelier, detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Chandelier_2", 
    title: "Chandelier 2", 
    year: "2016", 
    collection: "Those that Blossom, and the Blossomless", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "72 × 48 inches", 
    image: _17_chandelier_2, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Stand_Your_Ground",
    title: "Stand Your Ground",
    year: "2016",
    collection: "Those that Blossom, and the Blossomless",
    gallery: "",
    medium: "Oil and acrylic on canvas",
    dimensions: "48 × 36 inches",
    image: _18__stand_your_ground,
    detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Giger_Counter", 
    title: "Giger Counter", 
    year: "2016", 
    collection: "Those that Blossom, and the Blossomless", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "48 × 36 inches",
     image: _19_giger_counter, 
     detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Chandelier_3", 
    title: "Chandelier 3", 
    year: "2014", 
    collection: "Those that Blossom, and the Blossomless", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "60 × 40 inches", 
    image: _20_chandelier_3, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Coarse_Empire", 
    title: "Coarse Empire", 
    year: "2008", 
    collection: "The Nature of the City", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "48 × 36 inches", 
    image: _21_coarse_empire, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Rock_for_Light", 
    title: "Rock for Light", 
    year: "2008", 
    collection: " I Woke Up Somewhere Else", 
    gallery: "Private Collection", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "00 × 00 inches", 
    image: _22_rock_for_light,
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Empire", 
    title: "Empire", 
    year: "2008", 
    collection: "I Woke Up Somewhere Else", 
    gallery: "Private Collection", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "72 × 48 inches", 
    image: _23_empire, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Fountain", 
    title: "Fountain", 
    year: "2008", 
    collection: "I Woke Up Somewhere Else", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "72 × 48 inches", 
    image: _24_fountain, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Hotrs_1", 
    title: "House of the Rising Sun 1", 
    year: "2007", 
    collection: "House of the Rising Sun", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "60 × 30 inches", 
    image: _25_hotrs_1, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Hotrs_2", 
    title: "House of the Rising Sun 2", 
    year: "2007", 
    collection: "House of the Rising Sun",
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "60 × 30 inches", 
    image: _26_hotrs_2, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Hotrs_3", 
    title: "House of the Rising Sun 3", 
    year: "2007", 
    collection: "House of the Rising Sun", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "60 × 30 inches", 
    image: _27_hotrs_3, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Hotrs_4", 
    title: "House of the Rising Sun 4", 
    year: "2007", 
    collection: "House of the Rising Sun", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "60 × 30 inches", 
    image: _28_hotrs_4,
    detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Flying_Lotus", 
    title: "Flying Lotus",
    year: "2008",
    collection: "The Nature of the City", 
    gallery: "Private Collection",
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "48 × 36 inches", 
    image: _29_flying_lotus,
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Witness", 
    title: "Witness", 
    year: "2006", 
    collection: "I Woke Up Somewhere Else", 
    gallery: "The Guild Gallery, New York City", 
    medium: "Oil on canvas", 
    dimensions: "24 × 18 inches", 
    image: _30_witness, 
    detailCrop: { x: "20%", y: "15%", size: "55%" } },

  { id: "Supari", 
    title: "Supari", 
    year: "2007", 
    collection: "I Woke Up Somewhere Else", 
    gallery: "Private Collection",
    medium: "Oil on canvas", 
    dimensions: "00 × 00 inches", 
    image: _31_supari, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Flower_Lines", 
    title: "Flower Lines", 
    year: "2008", 
    collection: "The Nature of the City", 
    gallery: "Private Collection",
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "48 × 36 inches", 
    image: _32_flower_lines,
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Sociodermis", 
    title: "Sociodermis", 
    year: "2008", 
    collection: "I Woke Up Somewhere Else", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "48 × 36 inches", 
    image: _34_sociodermis, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Birth_of_a_Nation", 
    title: "Birth of a Nation", 
    year: "2008", 
    collection: "The Nature of the City", 
    gallery: "Private Collection", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "72 × 48 inches", 
    image: _35_birth_of_a_nation, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Boom_Tomb", 
    title: "Boom Tomb", 
    year: "2008", 
    collection: "I Woke Up Somewhere Else", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "96 × 36 inches", 
    image: _36_boom_tomb, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Drowning_by_Numbers", 
    title: "Drowning by Numbers", 
    year: "2008", 
    collection: "The Nature of the City", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "48 × 36 inches", 
    image: _37_drowningbynumbers, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Mosque_Nest", 
    title: "Mosque Nest", 
    year: "2008", 
    collection: "I Woke Up Somewhere Else", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas", 
    dimensions: "48 × 36 inches", 
    image: _38_mosque_nest, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Minute_Old_Migrant", 
    title: "Minute Old Migrant", 
    year: "2008", 
    collection: "I Woke Up Somewhere Else", 
    gallery: "", 
    medium: "Oil, acrylic and tea stain on canvas",
    dimensions: "48 × 36 inches",
    image: _39_minuteoldmigrant, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Drill", 
    title: "Drill", 
    year: "", 
    collection: "", 
    gallery: "Available Works", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "60 × 40 inches", 
    image: _40_Drill, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Herd", 
    title: "Herd", 
    year: "2003", 
    collection: "", 
    gallery: "Private Collection", 
    medium: "Oil on canvas", 
    dimensions: "48 × 36 inches", 
    image: _41_herd, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Rickshaw", 
    title: "Rickshaw", 
    year: "", 
    collection: "", 
    gallery: "Private Collection", 
    medium: "Oil on canvas", 
    dimensions: "", 
    image: _42_Rickshaw, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Rituals", 
    title: "Rituals", 
    year: "2004", 
    collection: "", 
    gallery: "Available Works", 
    medium: "Oil on canvas", 
    dimensions: "52 × 36 inches", 
    image: _43_Rituals, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Noise", 
    title: "Noise", 
    year: "2003", 
    collection: "", 
    gallery: "Available Works",
     medium: "Oil and acrylic on canvas", 
     dimensions: "72 × 48 inches", 
     image: _44_Noise, 
     detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Pastoral", 
    title: "Pastoral", 
    year: "2004", 
    collection: "", 
    gallery: "Available Works", 
    medium: "Oil on canvas", 
    dimensions: "60 × 36 inches", 
    image: _44_Pastoral, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Puddle", 
    title: "Puddle", 
    year: "2007", 
    collection: "I Woke Up Somewhere Else", 
    gallery: "", 
    medium: "Oil on canvas", 
    dimensions: "20 × 20 inches", 
    image: _45_puddle, 
    detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Unnamed_45", title: "Unnamed", year: "2023", collection: "", gallery: "", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _45_unnamed_slide, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "Elsie", title: "Elsie", year: "2023", collection: "", gallery: "", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _46_Elsie, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "Golden_40s", title: "Golden 40s", year: "2023", collection: "", gallery: "", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _47_golden_40s, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "Road_Test", title: "Road Test", year: "2023", collection: "", gallery: "", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _48_road_test, detailCrop: { x: "25%", y: "10%", size: "50%" } },
  { id: "Detonate", title: "Detonate", year: "2023", collection: "", gallery: "", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: _49_detonate, detailCrop: { x: "25%", y: "10%", size: "50%" } },

  { id: "Civil_Lines", 
    title: "Civil Lines", 
    year: "2022", 
    collection: "", 
    gallery: "", 
    medium: "Oil and acrylic on canvas", 
    dimensions: "72 × 48 inches", 
    image: Civil_Lines,
     detailCrop: { x: "25%", y: "10%", size: "50%" } },


  { id: "Unnamed_49", title: "Unnamed", year: "2023", collection: "", gallery: "", medium: "Lorem ipsum dolor sit amet", dimensions: "00 × 00 inches", image: O6_mukul_slide, detailCrop: { x: "25%", y: "10%", size: "50%" } },
];

const PaintingDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const paintingIndex = paintings.findIndex((p) => p.id === id);
  const painting = paintings[paintingIndex];

  if (!painting) {
    return (
      <Layout>
        <div className="flex items-center justify-center min-h-screen">
          <p className="font-body text-foreground">Work not found.</p>
        </div>
      </Layout>
    );
  }

  const prevPainting = paintings[(paintingIndex - 1 + paintings.length) % paintings.length];
  const nextPainting = paintings[(paintingIndex + 1) % paintings.length];

  return (
    <Layout>
      <div className="pt-24 md:pt-32 pb-16 px-6 md:px-12 max-w-6xl mx-auto">
{/* Image with prev/next arrows */}
        <div className="relative w-full flex items-center justify-center mb-4 md:mb-12">
          <button
            onClick={() => navigate(`/artwork/paintings/${prevPainting.id}`)}
            className="hidden md:flex absolute left-0 md:-left-12 z-10 p-2 text-foreground hover:opacity-60 transition-opacity flex-col items-center gap-1 group"
            aria-label="Previous painting"
          >
            <ChevronLeft size={32} strokeWidth={1} />
            <span className="font-body text-sm tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {prevPainting.title}
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
                  src={painting.image}
                  alt={painting.title}
                  className="max-w-full max-h-full object-contain cursor-zoom-in"
                  onClick={() => setLightboxOpen(true)}
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <button
            onClick={() => navigate(`/artwork/paintings/${nextPainting.id}`)}
            className="hidden md:flex absolute right-0 md:-right-12 z-10 p-2 text-foreground hover:opacity-60 transition-opacity flex-col items-center gap-1 group"
            aria-label="Next painting"
          >
            <ChevronRight size={32} strokeWidth={1} />
            <span className="font-body text-sm tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              {nextPainting.title}
            </span>
          </button>
        </div>
        {/* Artwork info */}
        <div className="text-center mb-10">
          <h1 className="font-display text-2xl text-foreground tracking-wide font-bold md:text-3xl mb-3">
            {painting.title}
          </h1>
          {(painting.collection || painting.year) && (
            <p className="font-body text-sm text-foreground mb-6">
              {painting.collection && `${painting.collection}, `}{painting.year}
            </p>
          )}
          <div className="flex flex-col items-center gap-1 mt-4 md:mt-8">
            <p className="font-body text-sm text-foreground">{painting.medium}</p>
            <p className="font-body text-sm text-foreground">{painting.dimensions}</p>
            {painting.gallery && (
              <p className="font-body text-sm text-foreground">{painting.gallery}</p>
            )}
          </div>
        </div>

        {/* Mobile prev/next navigation */}
        <div className="flex md:hidden items-center justify-between mt-16 mb-4">
          <button
            onClick={() => navigate(`/artwork/paintings/${prevPainting.id}`)}
            className="flex items-center gap-1 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Previous painting"
          >
            <ChevronLeft size={20} strokeWidth={1} />
            <span className="font-body text-sm tracking-wide">{prevPainting.title}</span>
          </button>
          <button
            onClick={() => navigate(`/artwork/paintings/${nextPainting.id}`)}
            className="flex items-center gap-1 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Next painting"
          >
            <span className="font-body text-sm tracking-wide">{nextPainting.title}</span>
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
                src={painting.image}
                alt={painting.title}
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

export default PaintingDetail;
