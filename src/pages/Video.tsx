import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const videos = [
  {
    title: "Heat Maps",
    year: "2023",
    embedUrl: "https://player.vimeo.com/video/000000000",
    description: "A video installation exploring thermal data and environmental change through abstracted imagery and sound.",
  },
  {
    title: "Slow Your Roll",
    year: "2024",
    embedUrl: "https://player.vimeo.com/video/000000001",
    description: "Documentation of the collaborative performance series examining presence and the politics of gathering.",
  },
];

const Video = () => {
  return (
    <Layout>
      <div className="pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-light mb-16">Video</h1>

          <div className="space-y-24">
            {videos.map((video, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <div className="w-full aspect-video bg-secondary flex items-center justify-center">
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                    Video embed — replace with Vimeo/YouTube URL
                  </p>
                </div>
                <div className="mt-6 max-w-2xl">
                  <h2 className="font-display text-2xl md:text-3xl font-light">{video.title}</h2>
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">{video.year}</p>
                  <p className="font-body text-sm leading-relaxed mt-4 text-muted-foreground">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Video;
