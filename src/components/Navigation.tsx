import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, Mail, X, ChevronDown, ArrowLeft } from "lucide-react";

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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [artworkOpen, setArtworkOpen] = useState(false);
  const [navLeft, setNavLeft] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateMeasurements = () => {
      if (navRef.current) setNavLeft(navRef.current.getBoundingClientRect().left);
      if (headerRef.current) setHeaderHeight(headerRef.current.offsetHeight);
    };
    updateMeasurements();
    window.addEventListener("resize", updateMeasurements);
    return () => window.removeEventListener("resize", updateMeasurements);
  }, []);

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
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
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
        <button
          key={item.path}
          onClick={() => setArtworkOpen(!artworkOpen)}
          className={`font-body text-sm font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 flex items-center gap-1 ${artworkOpen || (isActive && !artworkOpen) ? "border-b border-foreground" : ""}`}
        >
          {item.label}
        </button>
      );
    }

    return (
      <Link
        key={item.path}
        to={item.path}
        className={`font-body text-sm font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 ${isActive && !artworkOpen ? "border-b border-foreground" : ""}`}
      >
        {item.label}
      </Link>
    );
  };

  const headerClass = `fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 md:py-8 transition-colors duration-300 ${scrolled && !artworkOpen ? "bg-background/80 backdrop-blur-sm shadow-md" : "bg-background"}`;

  if (isHome) {
    return (
      <>
        <header ref={headerRef} className={headerClass}>
          <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground">
            Nitin Mukul
          </Link>
          <nav ref={navRef} className="hidden lg:flex items-center gap-6">
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

        {/* Desktop full-width artwork dropdown */}
        <AnimatePresence>
          {artworkOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="hidden lg:block fixed top-0 left-0 right-0 z-40 shadow-sm"
              style={{ backgroundColor: 'hsl(40 20% 98%)', paddingTop: headerHeight, paddingLeft: navLeft, paddingBottom: '2rem' }}
            >
              <div className="flex gap-16">
                <div className="flex flex-col gap-3">
                  {artworkSubItems.slice(0, 3).map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setArtworkOpen(false)}
                      className="font-body text-sm text-foreground hover:opacity-60 transition-opacity whitespace-nowrap">
                      {item.label}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-3">
                  {artworkSubItems.slice(3).map((item) => (
                    <Link key={item.path} to={item.path} onClick={() => setArtworkOpen(false)}
                      className="font-body text-sm text-foreground hover:opacity-60 transition-opacity whitespace-nowrap">
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} location={location} />}
        </AnimatePresence>
      </>
    );
  }

  return (
    <>
      <header ref={headerRef} className={headerClass}>
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

      {/* Desktop full-width artwork dropdown */}
      <AnimatePresence>
        {artworkOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="hidden lg:block fixed top-0 left-0 right-0 z-40 shadow-sm"
            style={{ backgroundColor: 'hsl(40 20% 98%)', paddingTop: headerHeight, paddingLeft: navLeft, paddingBottom: '2rem' }}
          >
            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                {artworkSubItems.slice(0, 3).map((item) => (
                  <Link key={item.path} to={item.path} onClick={() => setArtworkOpen(false)}
                    className="font-body text-sm text-foreground hover:opacity-60 transition-opacity whitespace-nowrap">
                    {item.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-3">
                {artworkSubItems.slice(3).map((item) => (
                  <Link key={item.path} to={item.path} onClick={() => setArtworkOpen(false)}
                    className="font-body text-sm text-foreground hover:opacity-60 transition-opacity whitespace-nowrap">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
  const [menuLevel, setMenuLevel] = useState<'main' | 'artwork'>('main');

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed inset-0 z-[60] flex flex-col overflow-hidden"
      style={{ backgroundColor: 'hsl(40 20% 98%)' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 md:px-12 py-6 md:py-8 shrink-0">
        {menuLevel === 'main' ? (
          <Link to="/" onClick={() => setIsOpen(false)} className="font-display text-xl md:text-2xl font-light tracking-wide text-foreground">
            Nitin Mukul
          </Link>
        ) : (
          <button onClick={() => setMenuLevel('main')} className="p-2 -ml-2 text-foreground hover:opacity-60 transition-opacity" aria-label="Back">
            <ArrowLeft size={24} strokeWidth={1.5} />
          </button>
        )}
        <button onClick={() => setIsOpen(false)} className="p-2 text-foreground hover:opacity-60 transition-opacity" aria-label="Close menu">
          <X size={24} />
        </button>
      </div>

      {/* Sliding panels */}
      <div className="flex flex-1 overflow-hidden relative">

        {/* Main menu panel */}
        <AnimatePresence initial={false}>
          {menuLevel === 'main' && (
            <motion.div
              key="main"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 flex items-start justify-start px-6 py-6"
            >
              <nav className="flex flex-col items-start gap-6">
                {navItems.map((item, i) => {
                  const isActive = item.path === "/" ? location.pathname === "/" : location.pathname.startsWith(item.path);

                  if (item.hasDropdown) {
                    return (
                      <motion.div key={item.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                        <button
                          onClick={() => setMenuLevel('artwork')}
                          className={`font-body text-3xl md:text-5xl font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 flex items-center gap-3 ${isActive ? "border-b border-foreground" : ""}`}
                        >
                          {item.label}
                          <ChevronDown size={22} className="text-foreground" strokeWidth={1.5} />
                        </button>
                      </motion.div>
                    );
                  }

                  return (
                    <motion.div key={item.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
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

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="flex gap-6 mt-12 items-center">
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-gallery-secondary hover:text-foreground transition-colors">
                    <Instagram size={20} />
                  </a>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="text-gallery-secondary hover:text-foreground transition-colors">
                    <Mail size={20} />
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Artwork sub-menu panel */}
        <AnimatePresence initial={false}>
          {menuLevel === 'artwork' && (
            <motion.div
              key="artwork"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 flex flex-col px-6 py-6"
            >
              <h2 className="font-body text-4xl md:text-6xl font-bold tracking-wide text-foreground border-b border-foreground pb-0.5 w-fit mb-16">Artwork</h2>
              <nav className="flex flex-col items-start gap-6">
                {artworkSubItems.map((item, i) => (
                  <motion.div key={item.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="font-body text-3xl md:text-5xl font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5" style={{ color: 'hsl(30 10% 12%)' }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default Navigation;
