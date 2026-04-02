import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
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
import { motion } from "framer-motion";

const prints = [
  // 01–19 numbered series
  { id: "01-Mother", title: "Lorem Ipsum XLIV", image: painting44 },
  { id: "02-The-Bestiary", title: "The Bestiary", image: prints6 },
  { id: "03-Fault-Lines", title: "Fault Lines", image: painting24 },
  { id: "04-Cease-Fire", title: "Cease Fire", image: painting22 },
  { id: "05-Garuda", title: "Garuda", image: painting14 },
  { id: "06-CallofKali", title: "Lorem Ipsum XLV", image: painting45 },
  { id: "07-The-Sky-is-Falling", title: "The Sky is Falling", image: painting35 },
  { id: "08-Levitate", title: "Levitate", image: painting31 },
  { id: "08-mukul-slide", title: "Lorem Ipsum IX", image: painting9 },
  { id: "08-Parasolipsism", title: "Parasolipsism", image: painting34 },
  { id: "08-rock-for-light", title: "Lorem Ipsum X", image: painting10 },
  { id: "09-confluence", title: "Lorem Ipsum XXXVIII", image: painting38 },
  { id: "09-mukul", title: "Lorem Ipsum XI", image: painting11 },
  { id: "15-mukul-slide", title: "Lorem Ipsum XII", image: painting12 },
  { id: "16-mukul-slide", title: "Lorem Ipsum XIII", image: painting13 },
  { id: "17-mukul-slide", title: "Lorem Ipsum XIX", image: painting19 },
  { id: "19-mukul-slide", title: "Lorem Ipsum XX", image: painting20 },
  // prints series (1–8)
  { id: "prints-1", title: "Untitled I", image: prints1 },
  { id: "prints-2", title: "Witness", image: prints2 },
  { id: "prints-3", title: "Untitled III", image: prints3 },
  { id: "prints-4", title: "Untitled IV", image: prints4 },
  { id: "prints-5", title: "Untitled V", image: prints5 },
  { id: "prints-7", title: "Untitled VII", image: prints7 },
  { id: "prints-8", title: "Untitled VIII", image: prints8 },
  // unnumbered
  { id: "boom-tomb", title: "Lorem Ipsum XV", image: painting15 },
  { id: "brush-in-the-alley", title: "Lorem Ipsum XVI", image: painting16 },
  { id: "hotrs-1-hi-res", title: "Lorem Ipsum XVII", image: painting17 },
  { id: "flying-lotus-hi-res", title: "Lorem Ipsum XVIII", image: painting18 },
  { id: "207156fb9b072944dc0c13bad869605e", title: "Lorem Ipsum XXI", image: painting21 },
  { id: "Civil-Lines", title: "Civil Lines", image: painting23 },
  { id: "IMG-0622", title: "Lorem Ipsum XXV", image: painting25 },
  { id: "IMG-0712", title: "Lorem Ipsum XXVI", image: painting26 },
  { id: "IMG-1373", title: "Lorem Ipsum XXVII", image: painting27 },
  { id: "IMG-3272", title: "Lorem Ipsum XXVIII", image: painting28 },
  { id: "IMG-4648", title: "Lorem Ipsum XXIX", image: painting29 },
  { id: "IMG-4652", title: "Lorem Ipsum XXX", image: painting30 },
  { id: "O1-mukul-slide", title: "Lorem Ipsum XXXII", image: painting32 },
  { id: "O6-mukul-slide", title: "Lorem Ipsum XXXIII", image: painting33 },
  { id: "celebration-hi-res", title: "Lorem Ipsum XXXVI", image: painting36 },
  { id: "coarse-empire", title: "Lorem Ipsum XXXVII", image: painting37 },
  { id: "flower-lines", title: "Lorem Ipsum XXXIX", image: painting39 },
  { id: "fountain", title: "Lorem Ipsum XL", image: painting40 },
  { id: "hotrs-2-hi-res", title: "Lorem Ipsum XLI", image: painting41 },
  { id: "hotrs-3-hi-res", title: "Lorem Ipsum XLII", image: painting42 },
  { id: "hotrs-4-hi-res", title: "Lorem Ipsum XLIII", image: painting43 },
  { id: "sociodermis", title: "Lorem Ipsum XLVI", image: painting46 },
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
