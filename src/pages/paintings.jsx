import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import prints6 from "@/assets/Paintings/02_The_Bestiary.jpg";
import painting10 from "@/assets/Paintings/08_rock_for_light.jpg";
import painting11 from "@/assets/Paintings/09_mukul.jpg";
import painting14 from "@/assets/Paintings/05_Garuda.jpg";
import painting15 from "@/assets/Paintings/36_boom_tomb.jpg";
import painting16 from "@/assets/Paintings/15_brush_in_the_alley.jpg";
import painting17 from "@/assets/Paintings/25_hotrs_1.jpg";
import painting18 from "@/assets/Paintings/29_flying_lotus.jpg";
import painting22 from "@/assets/Paintings/04_Cease_Fire.jpeg";
import painting23 from "@/assets/Paintings/Civil_Lines.jpg";
import painting24 from "@/assets/Paintings/03_Fault_Lines.jpg";
import painting31 from "@/assets/Paintings/08_Levitate.jpeg";
import painting33 from "@/assets/Paintings/O6_mukul_slide.jpg";
import painting34 from "@/assets/Paintings/08_Parasolipsism.jpeg";
import painting35 from "@/assets/Paintings/07_The_Sky_is_Falling.png";
import painting36 from "@/assets/Paintings/14_celebration.jpg";
import painting37 from "@/assets/Paintings/21_coarse_empire.jpg";
import painting38 from "@/assets/Paintings/09_confluence.jpeg";
import painting39 from "@/assets/Paintings/32_flower_lines.jpg";
import painting40 from "@/assets/Paintings/24_fountain.jpg";
import painting41 from "@/assets/Paintings/26_hotrs_2.jpg";
import painting42 from "@/assets/Paintings/27_hotrs_3.jpg";
import painting43 from "@/assets/Paintings/28_hotrs_4.jpg";
import painting44 from "@/assets/Paintings/01_Mother.JPG";
import painting45 from "@/assets/Paintings/06_CallofKali.png";
import painting46 from "@/assets/Paintings/34_sociodermis.jpg";
import witness from "@/assets/Paintings/30_witness.jpg";
import { motion } from "framer-motion";

const prints = [
  // 01–19 numbered series
  { id: "lorem-ipsum-xliv", title: "Lorem Ipsum XLIV", image: painting44 },
  { id: "the-bestiary", title: "The Bestiary", image: prints6 },
  { id: "fault-lines", title: "Fault Lines", image: painting24 },
  { id: "cease-fire", title: "Cease Fire", image: painting22 },
  { id: "garuda", title: "Garuda", image: painting14 },
  { id: "lorem-ipsum-xlv", title: "Lorem Ipsum XLV", image: painting45 },
  { id: "the-sky-is-falling", title: "The Sky is Falling", image: painting35 },
  { id: "levitate", title: "Levitate", image: painting31 },
  { id: "parasolipsism", title: "Parasolipsism", image: painting34 },
  { id: "lorem-ipsum-x", title: "Lorem Ipsum X", image: painting10 },
  { id: "lorem-ipsum-xxxviii", title: "Lorem Ipsum XXXVIII", image: painting38 },
  { id: "lorem-ipsum-xi", title: "Lorem Ipsum XI", image: painting11 },
  // prints series
  { id: "witness", title: "Witness", image: witness },
  // unnumbered
  { id: "lorem-ipsum-xv", title: "Lorem Ipsum XV", image: painting15 },
  { id: "lorem-ipsum-xvi", title: "Lorem Ipsum XVI", image: painting16 },
  { id: "lorem-ipsum-xvii", title: "Lorem Ipsum XVII", image: painting17 },
  { id: "lorem-ipsum-xviii", title: "Lorem Ipsum XVIII", image: painting18 },
  { id: "civil-lines", title: "Civil Lines", image: painting23 },
  { id: "lorem-ipsum-xxxiii", title: "Lorem Ipsum XXXIII", image: painting33 },
  { id: "lorem-ipsum-xxxvi", title: "Lorem Ipsum XXXVI", image: painting36 },
  { id: "lorem-ipsum-xxxvii", title: "Lorem Ipsum XXXVII", image: painting37 },
  { id: "lorem-ipsum-xxxix", title: "Lorem Ipsum XXXIX", image: painting39 },
  { id: "lorem-ipsum-xl", title: "Lorem Ipsum XL", image: painting40 },
  { id: "lorem-ipsum-xli", title: "Lorem Ipsum XLI", image: painting41 },
  { id: "lorem-ipsum-xlii", title: "Lorem Ipsum XLII", image: painting42 },
  { id: "lorem-ipsum-xliii", title: "Lorem Ipsum XLIII", image: painting43 },
  { id: "lorem-ipsum-xlvi", title: "Lorem Ipsum XLVI", image: painting46 },
];

const Prints = () => {
  return (
    <Layout>
      <div className="w-full px-6 md:px-12 pt-32 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {prints.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <Link to={`/artwork/paintings/${item.id}`} className="w-full group">
                <div className="w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto object-contain group-hover:opacity-80 transition-opacity"
                    loading="lazy"
                  />
                </div>
                <h3 className="font-display text-lg md:text-xl mt-4 text-foreground tracking-wide text-center">
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
