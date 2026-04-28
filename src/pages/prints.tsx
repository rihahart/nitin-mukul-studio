import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

import ablution2 from "@/assets/Print/Ablution_2_unique_viscosity_monoprint_11_x15__2018.jpg";
import ablution from "@/assets/Print/Ablution_unique_viscosity_monoprint_11_x15__2018.jpg";
import blizzard from "@/assets/Print/Blizzard_of_78_unique_viscosity_monoprint_11_x15__2018.jpg";
import celebration from "@/assets/Print/Celebration_silkscreenprint.jpg";
import fossil from "@/assets/Print/Fossil_unique_viscosity_monoprint_11_x15__2018.jpg";
import riversEdge from "@/assets/Print/Rivers_Edge_2019_Unique_viscosity_monoprint_11_x_15_in.jpeg";
import snowblind from "@/assets/Print/Snowblind_unique_viscosity_monoprint_11_x15__20182018.jpg";
import stroll from "@/assets/Print/Stroll_1991_Unique_silkscreen_with_monoprint_11_x_15_in.jpeg";
import tsunami2 from "@/assets/Print/Tsunami_2_unique_viscosity_monoprint_11_x15__2018.jpg";
import tsunami from "@/assets/Print/Tsunami_unique_viscosity_monoprint_11_x15__2018.jpg";
import birthOfVenus from "@/assets/Print/birthofvenus_silkscreenprint.jpg";
import celebration2 from "@/assets/Print/celebration2_silkscreenprint.jpg";
import flyingLotus from "@/assets/Print/flyinglotussilkscreenprint.jpg";
import landscape from "@/assets/Print/landscape_monoprint.jpg";

const prints = [
  { id: "Ablution_2", title: "Ablution 2", year: "2018", medium: "Unique viscosity monoprint", dimensions: "11 × 15 in", image: ablution2 },
  { id: "Ablution", title: "Ablution", year: "2018", medium: "Unique viscosity monoprint", dimensions: "11 × 15 in", image: ablution },
  { id: "Blizzard_of_78", title: "Blizzard of 78", year: "2018", medium: "Unique viscosity monoprint", dimensions: "11 × 15 in", image: blizzard },
  { id: "Celebration", title: "Celebration", year: "", medium: "Silkscreen print", dimensions: "", image: celebration },
  { id: "Fossil", title: "Fossil", year: "2018", medium: "Unique viscosity monoprint", dimensions: "11 × 15 in", image: fossil },
  { id: "Rivers_Edge", title: "River's Edge", year: "2019", medium: "Unique viscosity monoprint", dimensions: "11 × 15 in", image: riversEdge },
  { id: "Snowblind", title: "Snowblind", year: "2018", medium: "Unique viscosity monoprint", dimensions: "11 × 15 in", image: snowblind },
  { id: "Stroll", title: "Stroll", year: "1991", medium: "Unique silkscreen with monoprint", dimensions: "11 × 15 in", image: stroll },
  { id: "Tsunami_2", title: "Tsunami 2", year: "2018", medium: "Unique viscosity monoprint", dimensions: "11 × 15 in", image: tsunami2 },
  { id: "Tsunami", title: "Tsunami", year: "2018", medium: "Unique viscosity monoprint", dimensions: "11 × 15 in", image: tsunami },
  { id: "Birth_of_Venus", title: "Birth of Venus", year: "", medium: "Silkscreen print", dimensions: "", image: birthOfVenus },
  { id: "Celebration_2", title: "Celebration 2", year: "", medium: "Silkscreen print", dimensions: "", image: celebration2 },
  { id: "Flying_Lotus", title: "Flying Lotus", year: "", medium: "Silkscreen print", dimensions: "", image: flyingLotus },
  { id: "Landscape", title: "Landscape", year: "", medium: "Monoprint", dimensions: "", image: landscape },
];

export { prints };

const Prints = () => {
  return (
    <Layout>
      <div className="w-full px-[clamp(1.5rem,5vw,6rem)] py-[clamp(6rem,5vw+6rem,12rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {prints.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <Link to={`/artwork/prints/${item.id}`} className="w-full group">
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain group-hover:opacity-80 transition-opacity"
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

export default Prints;
