import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, Menu, X } from "lucide-react";

const navItems = [
  {
    label: "Work",
    path: "/work",
    sub: [
      { label: "Paintings", path: "/work/paintings" },
      { label: "Drawings", path: "/work/drawings" },
      { label: "Prints", path: "/work/prints" },
    ],
  },
  { label: "Video", path: "/video" },
  { label: "Projects", path: "/projects" },
  { label: "Collaborations", path: "/collaborations" },
  { label: "Curation", path: "/curation" },
  { label: "Texts", path: "/texts" },
  { label: "News", path: "/news" },
  { label: "About", path: "/about" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6">
        <Link to="/" className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground">
          Nitin Mukul
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 p-2 text-foreground hover:opacity-60 transition-opacity"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <div className="flex h-full items-center justify-center">
              <nav className="flex flex-col items-center gap-1">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="text-center"
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`font-display text-3xl md:text-5xl font-light tracking-wide transition-opacity hover:opacity-50 ${
                        location.pathname.startsWith(item.path) ? "opacity-100" : "opacity-70"
                      }`}
                    >
                      {item.label}
                    </Link>
                    {item.sub && (
                      <div className="flex gap-4 justify-center mt-1 mb-2">
                        {item.sub.map((s) => (
                          <Link
                            key={s.path}
                            to={s.path}
                            onClick={() => setIsOpen(false)}
                            className="font-body text-xs tracking-widest uppercase text-gallery-secondary hover:text-foreground transition-colors"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex gap-6 mt-12 items-center"
                >
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gallery-secondary hover:text-foreground transition-colors">
                    <Instagram size={20} />
                  </a>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="text-gallery-secondary hover:text-foreground transition-colors">
                    <Mail size={20} />
                  </Link>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
