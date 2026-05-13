import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const videoPages = [
  { id: "you-were-here", title: "You Were Here", path: "/artwork/video-installation/you-were-here" },
  { id: "ways-of-showing-up", title: "Ways of Showing Up", path: "/artwork/video-installation/ways-of-showing-up" },
  { id: "heat-map-queens", title: "Heat Map: Queens", path: "/artwork/video-installation/heat-map-queens" },
  { id: "heat-map-winter-solstice", title: "Heat Maps: Winter Solstice", path: "/artwork/video-installation/heat-map-winter-solstice" },
  { id: "heat-map-guwahati", title: "Heat Maps: Guwahati vs Brooklyn", path: "/artwork/video-installation/heat-map-guwahati" },
  { id: "searise", title: "Searise", path: "/artwork/video-installation/searise" },
  { id: "blue-lake", title: "Blue Lake", path: "/artwork/video-installation/blue-lake" },
  { id: "super-bloom", title: "Super Bloom", path: "/artwork/video-installation/super-bloom" },
  { id: "crater", title: "Crater", path: "/artwork/video-installation/crater" },
  { id: "anemone", title: "The Anemone is not My Enemy", path: "/artwork/video-installation/anemone" },
  { id: "cascade", title: "Cascade", path: "/artwork/video-installation/cascade" },
];

const VideoNav = ({ currentId }: { currentId: string }) => {
  const navigate = useNavigate();
  const index = videoPages.findIndex((v) => v.id === currentId);
  const prev = videoPages[(index - 1 + videoPages.length) % videoPages.length];
  const next = videoPages[(index + 1) % videoPages.length];

  return (
    <div className="w-full px-[clamp(1.5rem,5vw,6rem)] pb-24 flex items-center justify-between">
      <button
        onClick={() => navigate(prev.path)}
        className="flex items-center gap-2 text-foreground hover:opacity-60 transition-opacity group"
        aria-label={`Previous: ${prev.title}`}
      >
        <ChevronLeft size={20} strokeWidth={1} className="shrink-0" />
        <span className="font-body text-sm md:text-lg tracking-wide font-bold text-left">{prev.title}</span>
      </button>
      <button
        onClick={() => navigate(next.path)}
        className="flex items-center gap-2 text-foreground hover:opacity-60 transition-opacity group"
        aria-label={`Next: ${next.title}`}
      >
        <span className="font-body text-sm md:text-lg tracking-wide font-bold text-right">{next.title}</span>
        <ChevronRight size={20} strokeWidth={1} className="shrink-0" />
      </button>
    </div>
  );
};

export default VideoNav;
