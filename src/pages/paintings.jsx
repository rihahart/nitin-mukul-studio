import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
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
import { motion } from "framer-motion";

const paintings = [
  {
    id: "Don't_Forget_to_Call_Your_Mother",
    title: "Don't Forget to Call Your Mother",
    image: _01_Mother,
  },
  { id: "The_Bestiary", title: "The Bestiary", image: _02_The_Bestiary },
  { id: "Fault_Lines", title: "Fault Lines", image: _03_Fault_Lines },
  { id: "Cease_Fire", title: "Cease Fire", image: _04_Cease_Fire },
  { id: "Garuda", title: "Garuda", image: _05_Garuda },
  { id: "Call_of_Kali", title: "Call of Kali", image: _06_CallofKali },
  {
    id: "The_Sky_is_Falling",
    title: "The Sky is Falling",
    image: _07_The_Sky_is_Falling,
  },
  { id: "Levitate", title: "Levitate", image: _08_Levitate },
  { id: "Parasolipsism", title: "Parasolipsism", image: _08_Parasolipsism },
  { id: "Confluence", title: "Confluence", image: _09_confluence },
  { id: "Mukul", title: "Mukul", image: _09_mukul },
  { id: "15_Views", title: "15 Views", image: _10_15views },
  {
    id: "Glacial_Harmony",
    title: "Glacial Harmony",
    image: _11_glacialHarmony,
  },
  {
    id: "Celebration_3",
    title: "Celebration 3",
    image: _13_2012_celebration_3,
  },
  { id: "Celebration", title: "Celebration", image: _14_celebration },
  {
    id: "Brush_in_the_Alley",
    title: "Brush in the Alley",
    image: _15_brush_in_the_alley,
  },
  { id: "Chandelier", title: "Chandelier", image: _16_chandelier },
  { id: "Chandelier_2", title: "Chandelier 2", image: _17_chandelier_2 },
  {
    id: "Stand_Your_Ground",
    title: "Stand Your Ground",
    image: _18__stand_your_ground,
  },
  { id: "Giger_Counter", title: "Giger Counter", image: _19_giger_counter },
  { id: "Chandelier_3", title: "Chandelier 3", image: _20_chandelier_3 },
  { id: "Coarse_Empire", title: "Coarse Empire", image: _21_coarse_empire },
  {
    id: "Rock_for_Light",
    title: "Rock for Light",
    image: _22_rock_for_light,
  },
  { id: "Empire", title: "Empire", image: _23_empire },
  { id: "Fountain", title: "Fountain", image: _24_fountain },
  { id: "Hotrs_1", title: "House of the Rising Sun 1", image: _25_hotrs_1 },
  { id: "Hotrs_2", title: "House of the Rising Sun 2", image: _26_hotrs_2 },
  { id: "Hotrs_3", title: "House of the Rising Sun 3", image: _27_hotrs_3 },
  { id: "Hotrs_4", title: "House of the Rising Sun 4", image: _28_hotrs_4 },
  { id: "Flying_Lotus", title: "Flying Lotus", image: _29_flying_lotus },
  { id: "Witness", title: "Witness", image: _30_witness },
  { id: "Supari", title: "Supari", image: _31_supari },
  { id: "Flower_Lines", title: "Flower Lines", image: _32_flower_lines },
  { id: "Sociodermis", title: "Sociodermis", image: _34_sociodermis },
  {
    id: "Birth_of_a_Nation",
    title: "Birth of a Nation",
    image: _35_birth_of_a_nation,
  },
  { id: "Boom_Tomb", title: "Boom Tomb", image: _36_boom_tomb },
  {
    id: "Drowning_by_Numbers",
    title: "Drowning by Numbers",
    image: _37_drowningbynumbers,
  },
  { id: "Mosque_Nest", title: "Mosque Nest", image: _38_mosque_nest },
  {
    id: "Minute_Old_Migrant",
    title: "Minute Old Migrant",
    image: _39_minuteoldmigrant,
  },
  { id: "Drill", title: "Drill", image: _40_Drill },
  { id: "Herd", title: "Herd", image: _41_herd },
  { id: "Rickshaw", title: "Rickshaw", image: _42_Rickshaw },
  { id: "Rituals", title: "Rituals", image: _43_Rituals },
  { id: "Noise", title: "Noise", image: _44_Noise },
  { id: "Pastoral", title: "Pastoral", image: _44_Pastoral },
  { id: "Puddle", title: "Puddle", image: _45_puddle },
  {
    id: "Want_Some_Candy",
    title: "Want Some Candy?",
    image: _45_unnamed_slide,
  },
  { id: "Elsie", title: "Elsie", image: _46_Elsie },
  { id: "Golden_40s", title: "Golden 40s", image: _47_golden_40s },
  { id: "Road_Test", title: "Road Test", image: _48_road_test },
  { id: "Detonate", title: "Detonate", image: _49_detonate },
  { id: "Civil_Lines", title: "Civil Lines", image: Civil_Lines },
  { id: "Unnamed_49", title: "Unnamed", image: O6_mukul_slide },
];

const Paintings = () => {
  return (
    <Layout>
      <div className="w-full px-[clamp(1.5rem,5vw,6rem)] py-[clamp(6rem,5vw+6rem,12rem)]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {paintings.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <Link
                to={`/artwork/paintings/${item.id}`}
                className="w-full group"
              >
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

export default Paintings;
