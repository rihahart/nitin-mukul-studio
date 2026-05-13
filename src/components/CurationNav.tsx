import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const curationPages = [
  { id: "music-of-many-colors", title: "Music of Many Colors", path: "/curation/music-of-many-colors" },
  { id: "heat-of-the-moment", title: "Heat of the Moment", path: "/curation/heat-of-the-moment" },
];

const CurationNav = ({ currentId }: { currentId: string }) => {
  const navigate = useNavigate();
  const index = curationPages.findIndex((p) => p.id === currentId);
  const prev = curationPages[(index - 1 + curationPages.length) % curationPages.length];
  const next = curationPages[(index + 1) % curationPages.length];

  const isSame = prev.id === next.id;

  return (
    <div className="w-full px-[clamp(1.5rem,5vw,6rem)] pb-24 flex items-center justify-between">
      {!isSame && (
        <button
          onClick={() => navigate(prev.path)}
          className="flex items-center gap-2 text-foreground hover:opacity-60 transition-opacity"
          aria-label={`Previous: ${prev.title}`}
        >
          <ChevronLeft size={20} strokeWidth={1} className="shrink-0" />
          <span className="font-body text-sm md:text-lg tracking-wide font-bold text-left">{prev.title}</span>
        </button>
      )}
      <button
        onClick={() => navigate(next.path)}
        className="flex items-center gap-2 text-foreground hover:opacity-60 transition-opacity ml-auto"
        aria-label={`Next: ${next.title}`}
      >
        <span className="font-body text-sm md:text-lg tracking-wide font-bold text-right">{next.title}</span>
        <ChevronRight size={20} strokeWidth={1} className="shrink-0" />
      </button>
    </div>
  );
};

export default CurationNav;
