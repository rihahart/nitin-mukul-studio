import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import VideoNav from "@/components/VideoNav";

const Crater = () => {
  return (
    <Layout>
      <div className="w-full mt-20 md:mt-52 h-[50vh] md:h-[60vh]">
        <iframe
          src="https://player.vimeo.com/video/76923501?autoplay=1&muted=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="CRATER by Nitin Mukul"
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
              Crater
            </h1>

            <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-12">
              (2013) Video, 18 minutes. Dimensions variable.
              <br />
              Made for Queens International, Queens Museum, NYC
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
              While there is a degree of pre-meditation in making the piece, the disintegration and its visual register over an unfixed passage of time is subject to forces beyond the artist's control. The work is informed by an awareness of the Hindu Shaivite concept of creation and destruction being intertwined, as well as the aesthetic philosophies of artists such as Anish Kapoor, Robert Smithson, Stan Brakhage, Andy Goldsworthy, and others embracing the notion of transience.
            </p>
          </motion.div>
        </div>
      </div>

      <VideoNav currentId="crater" />
    </Layout>
  );
};

export default Crater;
