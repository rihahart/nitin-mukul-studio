import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import prints1 from "@/assets/prints-1.jpg";
import prints2 from "@/assets/prints-2.jpg";
import prints3 from "@/assets/prints-3.jpg";
import { motion } from "framer-motion";

const prints = [
  { id: "untitled-1", title: "Untitled I", image: prints1 },
  { id: "untitled-2", title: "Untitled II", image: prints2 },
  { id: "untitled-3", title: "Untitled III", image: prints3 },
];

const Prints = () => {
  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-32 pb-24">
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
