import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import VideoNav from "@/components/VideoNav";

const Cascade = () => {
  return (
    <Layout>
      <div className="w-full mt-20 md:mt-52 h-[50vh] md:h-[60vh]">
        <iframe
          src="https://player.vimeo.com/video/659524418?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          title="Cascade"
        />
      </div>

      <div className="w-full px-6 md:px-12 pt-0.5 pb-6 md:py-24">
        <div className="max-w-5xl mx-auto">

            <h1 className="font-display text-2xl md:text-5xl font-bold text-foreground tracking-wide text-center mb-6">
              Cascade
            </h1>

            <p className="font-body uppercase text-sm md:text-base text-muted-foreground leading-loose text-center mb-12">
              1 minute and 30 second infinite loop.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
              Painted over 1 week, and filmed on February 22, 2020, 1:00PM PST, Temperature: 56 degrees fahrenheit, Location: Caldera Arts Center, in Cascade Mountains near Sisters, Oregon.  Edited in October 2021, Materials used: Acrylic paint and ink, metallic dust, tea, charcoal, ice
            </p>

        </div>
      </div>

      <VideoNav currentId="cascade" />
    </Layout>
  );
};

export default Cascade;
