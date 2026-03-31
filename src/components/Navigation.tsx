import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, X } from "lucide-react";

const HamburgerIcon = () => (
  <svg width="32" height="16" viewBox="0 0 32 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="0" y1="2" x2="32" y2="2" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="0" y1="14" x2="32" y2="14" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const navItems = [
  { label: "Now", path: "/now" },
  { label: "Artwork", path: "/work" },
  { label: "Being", path: "/about" },
  { label: "Epicenter", path: "/epicenter" },
  { label: "Essays", path: "/publication" },
  { label: "Press", path: "/news" },
  { label: "Collect", path: "/collect" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  // Homepage: inline horizontal nav like Cannupa Hanska
  if (isHome) {
    return (
      <>
        <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 transition-colors duration-300 ${scrolled ? "bg-background/80 backdrop-blur-sm" : "bg-white"}`}>
          <Link to="/" className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground">
            Nitin Mukul
          </Link>
          {/* Desktop inline nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-body text-sm tracking-wide transition-opacity hover:opacity-60 ${
                  location.pathname.startsWith(item.path) ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          {/* Mobile: still use hamburger */}
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

  // Inner pages: hamburger menu
  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 transition-colors duration-300 ${scrolled ? "bg-background/80 backdrop-blur-sm" : "bg-white"}`}>
        <Link to="/" className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground">
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
}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 z-[60] flex flex-col overflow-hidden" style={{ backgroundColor: 'white' }}
  >
    {/* Menu header row */}
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

    {/* Nav links */}
    <div className="flex flex-1 items-center justify-center">
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
);

export default Navigation;
