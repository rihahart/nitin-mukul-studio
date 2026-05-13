import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import heatMapVideo from "@/assets/Video&Installation/HeatMapsQueens/jamaica_social.mp4";
import youWereHereVideo from "@/assets/Video&Installation/youWereHere/YWH_30_second_clip.mp4";

function VimeoPreview({ videoId, startTime = 0 }) {
  const ref = useRef(null);
  useEffect(function () {
    const el = ref.current;
    if (!el) return;
    function send(method) {
      el.contentWindow?.postMessage(
        JSON.stringify({ method }),
        "https://player.vimeo.com",
      );
    }
    function onLoad() {
      const obs = new IntersectionObserver(
        function ([entry]) {
          entry.isIntersecting ? send("play") : send("pause");
        },
        { threshold: 0.1 },
      );
      obs.observe(el);
      el._obs = obs;
    }
    el.addEventListener("load", onLoad);
    return function () {
      el.removeEventListener("load", onLoad);
      el._obs?.disconnect();
    };
  }, []);
  return (
    <iframe
      ref={ref}
      src={`https://player.vimeo.com/video/${videoId}?autoplay=0&muted=1&controls=0&loop=1&autopause=0#t=${startTime}s`}
      className="w-full aspect-video"
      style={{ border: "none" }}
      allow="autoplay; fullscreen; picture-in-picture"
      title="Video preview"
    />
  );
}

function YoutubePreview({ videoId }) {
  const ref = useRef(null);
  useEffect(function () {
    const el = ref.current;
    if (!el) return;
    function send(func) {
      el.contentWindow?.postMessage(
        JSON.stringify({ event: "command", func }),
        "https://www.youtube.com",
      );
    }
    function onLoad() {
      const obs = new IntersectionObserver(
        function ([entry]) {
          entry.isIntersecting ? send("playVideo") : send("pauseVideo");
        },
        { threshold: 0.1 },
      );
      obs.observe(el);
      el._obs = obs;
    }
    el.addEventListener("load", onLoad);
    return function () {
      el.removeEventListener("load", onLoad);
      el._obs?.disconnect();
    };
  }, []);
  return (
    <div className="relative w-full">
      <iframe
        ref={ref}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&controls=0&loop=1&playlist=${videoId}&enablejsapi=1`}
        className="w-full aspect-video"
        style={{ border: "none" }}
        allow="autoplay; fullscreen; picture-in-picture"
        title="Video preview"
      />
      <div className="absolute inset-0" />
    </div>
  );
}

const items = [
  {
    id: "You_Were_Here",
    title: "You Were Here",
    type: "video",
    src: youWereHereVideo,
    link: "/artwork/video-installation/you-were-here",
  },
  {
    id: "Ways_of_Showing_Up",
    title: "Ways of Showing Up",
    type: "vimeo",
    vimeoId: "1022198277",
    startTime: 473,
    link: "/artwork/video-installation/ways-of-showing-up",
  },
  {
    id: "Heat_Map_Queens",
    title: "Heat Map: Queens",
    type: "video",
    src: heatMapVideo,
    link: "/artwork/video-installation/heat-map-queens",
  },
  {
    id: "Heat_Map_Winter_Solstice",
    title: "Heat Maps: Winter Solstice.",
    type: "vimeo",
    vimeoId: "815927109",
    startTime: 6,
    link: "/artwork/video-installation/heat-map-winter-solstice",
  },
  {
    id: "Heat_Map_Guwahati",
    title: "Heat Maps: Guwahati vs Brooklyn",
    type: "vimeo",
    vimeoId: "893088230",
    startTime: 140,
    link: "/artwork/video-installation/heat-map-guwahati",
  },
  {
    id: "Searise",
    title: "Searise",
    type: "vimeo",
    vimeoId: "1180108088",
    startTime: 543,
    link: "/artwork/video-installation/searise",
  },
  {
    id: "Blue_Lake",
    title: "Blue Lake",
    type: "vimeo",
    vimeoId: "397023480",
    startTime: 20,
    link: "/artwork/video-installation/blue-lake",
  },
  {
    id: "Super_Bloom",
    title: "Super Bloom",
    type: "youtube",
    youtubeId: "CGZNp1TMp-U",
    link: "/artwork/video-installation/super-bloom",
  },
  {
    id: "Crater",
    title: "Crater",
    type: "vimeo",
    vimeoId: "76923501",
    startTime: 45,
    link: "/artwork/video-installation/crater",
  },
  {
    id: "Anemone",
    title: "The Anemone is not My Enemy (Mandala Remix)",
    type: "vimeo",
    vimeoId: "786710160",
    startTime: 0,
    link: "/artwork/video-installation/anemone",
  },
  {
    id: "Cascade",
    title: "Cascade",
    type: "video",
    src: "/videos/cascade.mp4",
    link: "/artwork/video-installation/cascade",
  },
];

const VideoInstallation = () => {
  return (
    <Layout>
      <div className="w-full px-[clamp(1.5rem,5vw,6rem)] py-[clamp(6rem,5vw+6rem,12rem)]">
        <div className="max-w-6xl mx-auto mb-16">
          <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground tracking-wide mb-8 mt-4 text-center">
            What is durational painting?
          </h1>
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
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
          {items.map((item, i) => {
            const content = (
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
                      preload="auto"
                      className="w-full h-auto object-contain"
                    />
                  ) : item.type === "youtube" ? (
                    <YoutubePreview videoId={item.youtubeId} />
                  ) : item.type === "vimeo" ? (
                    <div className="relative w-full">
                      <VimeoPreview
                        videoId={item.vimeoId}
                        startTime={item.startTime ?? 0}
                      />
                      <div className="absolute inset-0" />
                    </div>
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
            );
            return item.link ? (
              <Link key={item.id} to={item.link}>
                {content}
              </Link>
            ) : (
              <div key={item.id}>{content}</div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default VideoInstallation;
