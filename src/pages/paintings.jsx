import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
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
import { motion } from "framer-motion";

const prints = [
  { id: "untitled-1", title: "Untitled I", image: prints1 },
  { id: "witness", title: "Witness", image: prints2 },
  { id: "untitled-3", title: "Untitled III", image: prints3 },
  { id: "untitled-4", title: "Untitled IV", image: prints4 },
  { id: "untitled-5", title: "Untitled V", image: prints5 },
  { id: "untitled-6", title: "The Bestiary", image: prints6 },
  { id: "untitled-7", title: "Untitled VII", image: prints7 },
  { id: "untitled-8", title: "Untitled VIII", image: prints8 },
  { id: "painting-9", title: "Lorem Ipsum IX", image: painting9 },
  { id: "painting-10", title: "Lorem Ipsum X", image: painting10 },
  { id: "painting-11", title: "Lorem Ipsum XI", image: painting11 },
  { id: "painting-12", title: "Lorem Ipsum XII", image: painting12 },
  { id: "painting-13", title: "Lorem Ipsum XIII", image: painting13 },
  { id: "painting-14", title: "Garuda", image: painting14 },
  { id: "painting-15", title: "Lorem Ipsum XV", image: painting15 },
  { id: "painting-16", title: "Lorem Ipsum XVI", image: painting16 },
  { id: "painting-17", title: "Lorem Ipsum XVII", image: painting17 },
  { id: "painting-18", title: "Lorem Ipsum XVIII", image: painting18 },
  { id: "painting-19", title: "Lorem Ipsum XIX", image: painting19 },
  { id: "painting-20", title: "Lorem Ipsum XX", image: painting20 },
  { id: "painting-21", title: "Lorem Ipsum XXI", image: painting21 },
  { id: "Cease-Fire", title: "Cease Fire", image: painting22 },
  { id: "Civil-Lines", title: "Civil Lines", image: painting23 },
  { id: "Fault-Lines", title: "Fault Lines", image: painting24 },
  { id: "painting-25", title: "Lorem Ipsum XXV", image: painting25 },
  { id: "painting-26", title: "Lorem Ipsum XXVI", image: painting26 },
  { id: "painting-27", title: "Lorem Ipsum XXVII", image: painting27 },
  { id: "painting-28", title: "Lorem Ipsum XXVIII", image: painting28 },
  { id: "painting-29", title: "Lorem Ipsum XXIX", image: painting29 },
  { id: "painting-30", title: "Lorem Ipsum XXX", image: painting30 },
  { id: "Levitate", title: "Levitate", image: painting31 },
  { id: "painting-32", title: "Lorem Ipsum XXXII", image: painting32 },
  { id: "painting-33", title: "Lorem Ipsum XXXIII", image: painting33 },
  { id: "Parasolipsism", title: "Parasolipsism", image: painting34 },
  { id: "The-Sky-is-Falling", title: "The Sky is Falling", image: painting35 },
  { id: "painting-36", title: "Lorem Ipsum XXXVI", image: painting36 },
  { id: "painting-37", title: "Lorem Ipsum XXXVII", image: painting37 },
  { id: "painting-38", title: "Lorem Ipsum XXXVIII", image: painting38 },
  { id: "painting-39", title: "Lorem Ipsum XXXIX", image: painting39 },
  { id: "painting-40", title: "Lorem Ipsum XL", image: painting40 },
  { id: "painting-41", title: "Lorem Ipsum XLI", image: painting41 },
  { id: "painting-42", title: "Lorem Ipsum XLII", image: painting42 },
  { id: "painting-43", title: "Lorem Ipsum XLIII", image: painting43 },
  { id: "painting-44", title: "Lorem Ipsum XLIV", image: painting44 },
  { id: "painting-45", title: "Lorem Ipsum XLV", image: painting45 },
  { id: "painting-46", title: "Lorem Ipsum XLVI", image: painting46 },
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
              <Link to={`/work/${item.id}`} className="w-full group">
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
