import { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import { exhibitions, projects } from "@/lib/artworkData";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  // Currently showing = first project, recent exhibitions = first 2
  const currentlyShowing = projects[1]; // Ways of Showing Up
  const recentExhibitions = exhibitions.slice(0, 2);

  return (
    <Layout hideFooter>
      <HeroCarousel />

      {/* Navigation Cards Section */}
      <section className="bg-background px-6 md:px-12 py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
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

            {/* Right Column - Recent Exhibitions */}
            <div className="md:col-span-2 flex flex-col gap-6">
              {recentExhibitions.map((exhibition) => (
                <Link
                  key={exhibition.id}
                  to={`/curation`}
                  className="group block"
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

          {/* See All Button */}
          <div className="mt-10 text-center">
            <Link
              to="/curation"
              className="inline-block font-body text-xs tracking-widest uppercase border border-foreground text-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
            >
              See All Exhibitions
            </Link>
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
