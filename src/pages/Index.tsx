import { useState } from "react";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";

const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <Layout hideFooter>
      <HeroCarousel />
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
        </div>
      </section>
    </Layout>
  );
};

export default Index;
