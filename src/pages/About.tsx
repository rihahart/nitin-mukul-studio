import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { Instagram } from "lucide-react";

const About = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <Layout>
      <div className="pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-display text-4xl md:text-6xl font-light mb-12">About</h1>

            <div className="font-body text-sm leading-relaxed space-y-6 text-muted-foreground">
              <p>
                Nitin Mukul is a visual artist and curator based in New York. His practice spans painting, video, and collaborative projects, with a focus on landscape, memory, and the politics of place.
              </p>
              <p>
                Drawing from aerial perspectives, thermal imaging, and cartographic traditions, Mukul's paintings transform data and observation into layered, immersive abstractions. His work has been exhibited internationally and is held in private and public collections.
              </p>
              <p>
                As a curator, Mukul has organized exhibitions and events including Epicenter NYC, programming at Satellite Art Fair Miami, and collaborative projects across Long Island City and beyond.
              </p>
            </div>

            <div className="mt-16">
              <h2 className="font-display text-2xl font-light mb-6">Selected Exhibitions</h2>
              <div className="space-y-3">
                {[
                  "2024 — Ways of Showing Up / Slow Your Roll, New York",
                  "2023 — Heat of the Moment, Satellite Art Fair, Miami",
                  "2023 — Heat Maps, Solo Exhibition, New York",
                  "2022 — Epicenter NYC, Long Island City",
                  "2021 — Group Exhibition, International Gallery",
                ].map((item, i) => (
                  <p key={i} className="font-body text-sm text-muted-foreground">{item}</p>
                ))}
              </div>
            </div>

            <div className="mt-16">
              <h2 className="font-display text-2xl font-light mb-6">Contact</h2>
              <div className="flex gap-4 mb-8">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="mailto:studio@nitinmukul.com" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
                  studio@nitinmukul.com
                </a>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 max-w-lg">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-sm outline-none placeholder:text-muted-foreground focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-sm outline-none placeholder:text-muted-foreground focus:border-foreground transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 font-body text-sm outline-none placeholder:text-muted-foreground focus:border-foreground transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="font-body text-xs tracking-widest uppercase border border-foreground px-8 py-3 hover:bg-foreground hover:text-background transition-colors"
                >
                  Send
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
