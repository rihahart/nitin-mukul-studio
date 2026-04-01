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
import painting14 from "@/assets/Paintings/Garuda.jpg";
import painting15 from "@/assets/Paintings/boom_tomb.jpg";
import painting16 from "@/assets/Paintings/brush_in_the_alley.jpg";
import painting17 from "@/assets/Paintings/hotrs_1_hi_res.jpg";
import painting18 from "@/assets/Paintings/flying_lotus_hi_res.jpg";
import painting19 from "@/assets/Paintings/17_mukul_slide.jpg";
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
