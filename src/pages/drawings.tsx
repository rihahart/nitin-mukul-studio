import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

import figureStudy1991 from "@/assets/Drawing/Figure_study_1991_charcoal_on_paper_36x24_inches.JPG";
import figureStudy2025_18x12 from "@/assets/Drawing/Figure_study_2025_ink_and_charcoal_on_paper_18x12_inches.JPG";
import figureStudy2025_24x12 from "@/assets/Drawing/Figure_study_2025_ink_and_charcoal_on_paper_24x12_inches.JPG";
import figureStudy2_2025 from "@/assets/Drawing/Figure_study_2_2025_ink_and_charcoal_on_paper_18x12_inches.JPG";
import figureStudy3_2025 from "@/assets/Drawing/Figure_study_3_2025_ink_and_charcoal_on_paper_18x12_inches.JPG";
import monks from "@/assets/Drawing/Monks, 2016  Acrylic ink and charcoal  11 x 15 in.jpeg";
import narasimha from "@/assets/Drawing/Narasimha_2024_ink_and_graphite_on_paper_36x24_inches.JPG";

const drawings = [
  { id: "Figure_study_1991", title: "Figure Study", year: "1991", medium: "Charcoal on paper", dimensions: "36 × 24 in", image: figureStudy1991 },
  { id: "Figure_study_2025_18x12", title: "Figure Study", year: "2025", medium: "Ink and charcoal on paper", dimensions: "18 × 12 in", image: figureStudy2025_18x12 },
  { id: "Figure_study_2025_24x12", title: "Figure Study", year: "2025", medium: "Ink and charcoal on paper", dimensions: "24 × 12 in", image: figureStudy2025_24x12 },
  { id: "Figure_study_2_2025", title: "Figure Study 2", year: "2025", medium: "Ink and charcoal on paper", dimensions: "18 × 12 in", image: figureStudy2_2025 },
  { id: "Figure_study_3_2025", title: "Figure Study 3", year: "2025", medium: "Ink and charcoal on paper", dimensions: "18 × 12 in", image: figureStudy3_2025 },
  { id: "Monks_2016", title: "Monks", year: "2016", medium: "Acrylic ink and charcoal", dimensions: "11 × 15 in", image: monks },
  { id: "Narasimha_2024", title: "Narasimha", year: "2024", medium: "Ink and graphite on paper", dimensions: "36 × 24 in", image: narasimha },
];

export { drawings };

const Drawings = () => {
  return (
    <Layout>
      <div className="w-full px-[clamp(1.5rem,5vw,6rem)] py-[clamp(6rem,5vw+6rem,12rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {drawings.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <Link to={`/artwork/drawings/${item.id}`} className="w-full group touch-manipulation">
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-lg md:text-xl mt-4 text-foreground tracking-wide text-center font-bold">
                  {item.title}
                </h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Drawings;
