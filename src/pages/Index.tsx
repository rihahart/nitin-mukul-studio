import { useState, useRef } from "react";
import { Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import { exhibitions, projects, artworks } from "@/lib/artworkData";

const Index = () => {
  const [email, setEmail] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  const currentlyShowing = projects[1];
  const recentExhibitions = exhibitions.slice(0, 2);
  const prints = artworks.filter((a) => a.category === "prints").length > 0
    ? artworks
    : artworks;

  return (
    <Layout hideFooter>
      <HeroCarousel />

      {/* Navigation Cards Section */}
      <section className="bg-background px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:grid-rows-[1fr]">
            {/* Large Left Card - Currently Showing */}
            <div className="md:col-span-3">
              <Link to={`/projects/${currentlyShowing.id}`} className="group block">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={currentlyShowing.image}
                    alt={currentlyShowing.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4">
                  <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-1">
                    Currently Showing
                  </p>
                  <h3 className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground uppercase">
                    {currentlyShowing.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground mt-1">
                    {currentlyShowing.location} · {currentlyShowing.year}
                  </p>
                </div>
              </Link>
            </div>

            {/* Right Column - Recent Exhibitions (clipped & scrollable) */}
            <div className="md:col-span-2 overflow-y-auto" style={{ maxHeight: 'calc(75vw * 3 / 4 + 3.5rem)', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <div className="flex flex-col gap-6">
                {exhibitions.map((exhibition) => (
                  <Link
                    key={exhibition.id}
                    to={`/curation`}
                    className="group block shrink-0"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={exhibition.image}
                        alt={exhibition.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="mt-3">
                      <h4 className="font-display text-sm md:text-base font-bold tracking-wide text-foreground uppercase">
                        {exhibition.title}
                      </h4>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">
                        {exhibition.location} · {exhibition.year}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* See All Exhibitions - right-aligned */}
          <div className="mt-6 flex justify-end">
            <Link
              to="/curation"
              className="inline-flex items-center gap-1 font-body text-sm tracking-wide text-foreground hover:opacity-60 transition-opacity"
            >
              See All Exhibitions
              <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Prints / Collection Section */}
      <section className="bg-background px-6 md:px-12 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground uppercase">
              Dive Into the Collection
            </h2>
            <Link
              to="/work"
              className="inline-flex items-center gap-1 font-body text-sm tracking-wide text-foreground hover:opacity-60 transition-opacity shrink-0"
            >
              View all
              <ChevronRight size={16} />
            </Link>
          </div>
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {artworks.map((artwork) => (
              <Link
                key={artwork.id}
                to={`/artwork/${artwork.id}`}
                className="group shrink-0 w-[220px] md:w-[260px]"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-background px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-light tracking-wide text-foreground mb-3">
            Stay Connected
          </h2>
          <p className="font-body text-sm text-muted-foreground mb-8">
            Sign up for updates on new work, exhibitions, and projects.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="flex-1 bg-transparent border-b border-border px-1 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
            />
            <button
              type="submit"
              className="font-body text-xs tracking-widest uppercase text-foreground hover:opacity-60 transition-opacity py-2 px-4"
            >
              Subscribe
            </button>
          </form>
          <div className="flex justify-center gap-5 mt-8">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
