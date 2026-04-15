import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import heatMapVideo from "@/assets/Video&Installation/HeatMapsQueens/jamaica_social.mp4";
import waysOfShowingUpCover from "@/assets/Video&Installation/waysOfSHowingUp/cover.JPG";
import youWereHereVideo from "@/assets/Video&Installation/youWereHere/YWH_30_second_clip.mp4";

const items = [
  {
    id: "Heat_Map_Queens",
    title: "Heat Map: Queens",
    type: "video",
    src: heatMapVideo,
  },
  {
    id: "Ways_of_Showing_Up",
    title: "Ways of Showing Up: Slow Your Roll",
    type: "image",
    src: waysOfShowingUpCover,
  },
  {
    id: "You_Were_Here",
    title: "You Were Here",
    type: "video",
    src: youWereHereVideo,
  },
];

const VideoInstallation = () => {
  return (
    <Layout>
      <div className="w-full px-6 md:px-12 pt-24 md:pt-48 pb-24">
        <div className="max-w-5xl mx-auto mb-16">
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide mb-6 text-center">
            What is durational painting:
          </h1>
          <p className="font-body text-sm md:text-base text-foreground leading-relaxed text-left">
            Durational painting is an immersive slow art experience that
            encourages participants to momentarily disconnect from the
            spectacles of social media and the like, in order to sync with a
            more meditative pace and circadian rhythms. The process of creating
            a durational painting necessitates an engagement with the
            atmospheric conditions at the site of its production. These ambient
            improvisational paintings begin by layering paint in sheets of ice,
            freezing each layer so it accumulates layers of color and texture.
            The frozen form is placed outside on an easel and allowed to melt
            according to natural weather conditions while it is filmed.
            Experiencing the resulting piece can be therapeutic, giving us a
            glimpse of elapsing geologic time. Viewers have space to build
            empathy with the forces at play in these pieces, and foster an
            almost animistic connection to them. We can identify with the
            material bodily quality of the metamorphing painting, its viscous
            glistening surface juxtaposed with and acted upon by the landscape
            and atmospheric conditions reveals that there is less separation
            between our human containers and the seemingly non sentient matter
            around us than we might think. This is slow, ambient art that also
            functions as an empirical reflection of the site on which it is
            made: light, temperatures, time of day, location, and our climate at
            large. It can be seen as a new context for understanding abstract
            painting as a durational experience that is site specific, yet
            borderless.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="flex flex-col items-center"
            >
              <div className="w-full">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-auto object-contain"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                )}
                <h3 className="font-display text-lg md:text-xl mt-4 text-foreground tracking-wide text-center font-bold">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default VideoInstallation;
