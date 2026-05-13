import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import VideoNav from "@/components/VideoNav";

const Anemone = () => {
  return (
    <Layout>
      <div className="w-full mt-20 md:mt-52 h-[50vh] md:h-[60vh]">
        <iframe
          src="https://player.vimeo.com/video/786710160?autoplay=1&muted=1&autopause=0&loop=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="The Anemone is not My Enemy (Mandala Remix)"
        />
      </div>

      <div className="w-full px-6 md:px-12 pt-0.5 pb-24 md:py-24">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-2xl md:text-4xl font-bold text-foreground tracking-wide text-center mb-6">
              The Anemone is not My Enemy (Mandala Remix)
            </h1>

            <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-12">
              (2022) Durational painting video (Acrylic Ink, dry pigments, Ice)
              <br />
              90 second infinite loop video
            </p>
          </motion.div>
        </div>
      </div>

      <VideoNav currentId="anemone" />
    </Layout>
  );
};

export default Anemone;
