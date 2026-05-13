import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const photoPages = [
  { id: "microhabitats", title: "Microhabitats", path: "/artwork/photo-based/microhabitats" },
  { id: "fluxus", title: "Fluxus", path: "/artwork/photo-based/fluxus" },
  { id: "cyanotypes", title: "Cyanotypes", path: "/artwork/photo-based/cyanotypes" },
];

const PhotoNav = ({ currentId }: { currentId: string }) => {
  const navigate = useNavigate();
  const index = photoPages.findIndex((p) => p.id === currentId);
  const prev = photoPages[(index - 1 + photoPages.length) % photoPages.length];
  const next = photoPages[(index + 1) % photoPages.length];

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

export default PhotoNav;
