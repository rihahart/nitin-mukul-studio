import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, X, ChevronDown } from "lucide-react";

const HamburgerIcon = () => (
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="2" x2="32" y2="2" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="0" y1="14" x2="32" y2="14" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const artworkSubItems = [
  { label: "Video", path: "/work?category=video" },
  { label: "Painting", path: "/work?category=painting" },
  { label: "Installation", path: "/work?category=installation" },
  { label: "Prints", path: "/work?category=prints" },
  { label: "Public Art", path: "/work?category=public-art" },
];

const navItems = [
  { label: "Now", path: "/" },
  { label: "Artwork", path: "/work", hasDropdown: true },
  { label: "Being", path: "/about" },
  { label: "Epicenter", path: "/epicenter" },
  { label: "Essays", path: "/publication" },
  { label: "Press", path: "/news" },
  { label: "Collect", path: "/collect" },
];

const ArtworkDropdown = ({ onClose }: { onClose: () => void }) => {
  const leftItems = artworkSubItems.slice(0, 3);
  const rightItems = artworkSubItems.slice(3);

  return (
    <motion.div
      initial={{ opacity: 0, y: -4 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -4 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full right-0 mt-2 bg-background border border-border/40 shadow-sm px-8 py-4 z-50"
    >
      <div className="flex gap-16">
        <div className="flex flex-col gap-1.5">
          {leftItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col gap-1.5">
          {rightItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={onClose}
              className="font-body text-sm text-foreground/70 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [artworkOpen, setArtworkOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    setArtworkOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setArtworkOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderNavItem = (item: typeof navItems[0]) => {
    const isActive = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path);

    if (item.hasDropdown) {
      return (
        <div key={item.path} className="relative" ref={dropdownRef}>
          <button
            onClick={() => setArtworkOpen(!artworkOpen)}
            className={`font-body text-sm font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 flex items-center gap-1 ${isActive ? "border-b border-foreground" : ""}`}
          >
            {item.label}
          </button>
          <AnimatePresence>
            {artworkOpen && <ArtworkDropdown onClose={() => setArtworkOpen(false)} />}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`font-body text-sm font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 ${isActive ? "border-b border-foreground" : ""}`}
      >
        {item.label}
      </Link>
    );
  };

  if (isHome) {
    return (
      <>
        <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 transition-colors duration-300 ${scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-white"}`}>
          <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground">
            Nitin Mukul
          </Link>
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map(renderNavItem)}
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-50 p-2 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <HamburgerIcon />}
          </button>
        </header>
        <AnimatePresence>
          {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} location={location} />}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 transition-colors duration-300 ${scrolled ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-white"}`}>
        <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground">
          Nitin Mukul
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="z-50 p-2 text-foreground hover:opacity-60 transition-opacity"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <HamburgerIcon />}
        </button>
      </header>

      <AnimatePresence>
        {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} location={location} />}
      </AnimatePresence>
    </>
  );
};

const MobileMenu = ({
  setIsOpen,
  location,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  location: ReturnType<typeof useLocation>;
}) => {
  const [artworkExpanded, setArtworkExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-[60] flex flex-col overflow-hidden" style={{ backgroundColor: 'white' }}
    >
      <div className="flex items-center justify-between px-6 md:px-12 py-6 md:py-8">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground"
        >
          Nitin Mukul
        </Link>
        <button
          onClick={() => setIsOpen(false)}
          className="p-2 text-foreground hover:opacity-60 transition-opacity"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>

      <div className="flex flex-1 items-center justify-center">
        <nav className="flex flex-col items-center gap-1">
          {navItems.map((item, i) => {
            const isActive = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path);

            if (item.hasDropdown) {
              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="text-center"
                >
                  <button
                    onClick={() => setArtworkExpanded(!artworkExpanded)}
                    className={`font-body text-3xl md:text-5xl font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 flex items-center gap-2 ${isActive ? "border-b border-foreground" : ""}`}
                  >
                    {item.label}
                    <ChevronDown size={20} className={`transition-transform ${artworkExpanded ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {artworkExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-wrap justify-center gap-x-6 gap-y-1 mt-2 overflow-hidden"
                      >
                        {artworkSubItems.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setIsOpen(false)}
                            className="font-body text-lg text-foreground/60 hover:text-foreground transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            }

            return (
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
                  className={`font-body text-3xl md:text-5xl font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 ${isActive ? "border-b border-foreground" : ""}`}
                >
                  {item.label}
                </Link>
              </motion.div>
            );
          })}
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
  );
};

export default Navigation;
