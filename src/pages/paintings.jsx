import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
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
import { motion } from "framer-motion";

const prints = [
  // 01–19 numbered series
  { id: "lorem-ipsum-xliv", title: "Lorem Ipsum XLIV", image: _01_Mother },
  { id: "the-bestiary", title: "The Bestiary", image: _02_The_Bestiary },
  { id: "fault-lines", title: "Fault Lines", image: _03_Fault_Lines },
  { id: "cease-fire", title: "Cease Fire", image: _04_Cease_Fire },
  { id: "garuda", title: "Garuda", image: _05_Garuda },
  { id: "lorem-ipsum-xlv", title: "Lorem Ipsum XLV", image: _06_CallofKali },
  { id: "the-sky-is-falling", title: "The Sky is Falling", image: _07_The_Sky_is_Falling },
  { id: "levitate", title: "Levitate", image: _08_Levitate },
  { id: "parasolipsism", title: "Parasolipsism", image: _08_Parasolipsism },
  { id: "lorem-ipsum-x", title: "Lorem Ipsum X", image: _08_rock_for_light },
  { id: "lorem-ipsum-xxxviii", title: "Lorem Ipsum XXXVIII", image: _09_confluence },
  { id: "lorem-ipsum-xi", title: "Lorem Ipsum XI", image: _09_mukul },
  // prints series
  { id: "witness", title: "Witness", image: _30_witness },
  // unnumbered
  { id: "lorem-ipsum-xv", title: "Lorem Ipsum XV", image: _36_boom_tomb },
  { id: "lorem-ipsum-xvi", title: "Lorem Ipsum XVI", image: _15_brush_in_the_alley },
  { id: "lorem-ipsum-xvii", title: "Lorem Ipsum XVII", image: _25_hotrs_1 },
  { id: "lorem-ipsum-xviii", title: "Lorem Ipsum XVIII", image: _29_flying_lotus },
  { id: "civil-lines", title: "Civil Lines", image: Civil_Lines },
  { id: "lorem-ipsum-xxxiii", title: "Lorem Ipsum XXXIII", image: O6_mukul_slide },
  { id: "lorem-ipsum-xxxvi", title: "Lorem Ipsum XXXVI", image: _14_celebration },
  { id: "lorem-ipsum-xxxvii", title: "Lorem Ipsum XXXVII", image: _21_coarse_empire },
  { id: "lorem-ipsum-xxxix", title: "Lorem Ipsum XXXIX", image: _32_flower_lines },
  { id: "lorem-ipsum-xl", title: "Lorem Ipsum XL", image: _24_fountain },
  { id: "lorem-ipsum-xli", title: "Lorem Ipsum XLI", image: _26_hotrs_2 },
  { id: "lorem-ipsum-xlii", title: "Lorem Ipsum XLII", image: _27_hotrs_3 },
  { id: "lorem-ipsum-xliii", title: "Lorem Ipsum XLIII", image: _28_hotrs_4 },
  { id: "lorem-ipsum-xlvi", title: "Lorem Ipsum XLVI", image: _34_sociodermis },
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
