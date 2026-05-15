import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";

import momcHero from "@/assets/Curation/MusicofManyColors/MOMC_flyer_print.jpg";
import hotmHero from "@/assets/Curation/HeatoftheMoment/hotm_flyer_nitin.jpg";

const sections = [
  { id: "music-of-many-colors", title: "Music of Many Colors", image: momcHero, link: "/curation/music-of-many-colors" },
  { id: "heat-of-the-moment", title: "Heat of the Moment", image: hotmHero, link: "/curation/heat-of-the-moment" },
];

const Curations = () => {
  return (
    <Layout>
      <div className="w-full px-[clamp(1.5rem,5vw,6rem)] py-[clamp(6rem,5vw+6rem,12rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {sections.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <Link to={item.link} className="w-full group touch-manipulation">
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

export default Curations;
