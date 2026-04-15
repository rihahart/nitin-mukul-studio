import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Instagram, LinkedinIcon, ChevronDown, ArrowLeft, Search } from "lucide-react";

const VimeoIcon = ({ size = 18 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.612-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.478 4.807z" />
  </svg>
);

const LINE_COLOR = 'hsl(var(--foreground))';

const MenuIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="w-8 h-8 relative flex items-center justify-center">
    <motion.span
      className="absolute block w-8 rounded-full"
      style={{ height: "2px" }}
      initial={{ rotate: 0, y: -6, backgroundColor: LINE_COLOR }}
      animate={isOpen
        ? { rotate: 45, y: 0, backgroundColor: LINE_COLOR }
        : { rotate: 0, y: -6, backgroundColor: LINE_COLOR }}
      transition={isOpen
        ? { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
        : { duration: 0.5, delay: 0.56, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
    <motion.span
      className="absolute block w-8 rounded-full"
      style={{ height: "2px" }}
      initial={{ rotate: 0, y: 6, backgroundColor: LINE_COLOR }}
      animate={isOpen
        ? { rotate: -45, y: 0, backgroundColor: LINE_COLOR }
        : { rotate: 0, y: 6, backgroundColor: LINE_COLOR }}
      transition={isOpen
        ? { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
        : { duration: 0.5, delay: 0.56, ease: [0.25, 0.46, 0.45, 0.94] }}
    />
  </div>
);

const artworkSubItems = [
  { label: "Painting", path: "/artwork/paintings" },
  { label: "Video and Installation", path: "/work?category=video" },
  { label: "Public Art", path: "/work?category=public-art" },
];

const paperSubItems = [
  { label: "Print", path: "/work?category=print" },
  { label: "Drawing", path: "/work?category=drawing" },
  { label: "Photo-Based", path: "/work?category=photo-based" },
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
  const [hidden, setHidden] = useState(false);
  const [artworkOpen, setArtworkOpen] = useState(false);
  const [paperOpen, setPaperOpen] = useState(false);
  const [navLeft, setNavLeft] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const headerRef = useRef<HTMLElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

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
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 10) {
        setHidden(false);
      } else if (currentY > lastScrollY.current + 5) {
        setHidden(true);
      } else if (currentY < lastScrollY.current - 5) {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  useEffect(() => {
    setArtworkOpen(false);
    setPaperOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const inHeader = headerRef.current?.contains(e.target as Node);
      const inDropdown = dropdownRef.current?.contains(e.target as Node);
      if (!inHeader && !inDropdown) setArtworkOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const renderNavItem = (item: typeof navItems[0]) => {
    const isActive = item.path === "/"
      ? location.pathname === "/"
      : item.hasDropdown
        ? location.pathname.startsWith(item.path) || location.pathname.startsWith("/artwork")
        : location.pathname.startsWith(item.path);

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

  const headerClass = `fixed top-0 left-0 right-0 z-50 flex items-start justify-between px-6 md:px-12 py-6 md:py-8 transition-colors duration-300 bg-background/80 backdrop-blur-sm ${artworkOpen ? "bg-background" : ""}`;

  const DesktopSocialIcons = () => (
    <div className="hidden lg:flex flex-col items-end gap-3">
      <div className="flex items-center gap-4">
        <a href="https://www.instagram.com/nitin_mukul_studio" target="_blank" rel="noreferrer" className="text-foreground hover:opacity-60 transition-opacity" aria-label="Instagram">
          <Instagram size={18} strokeWidth={1.5} />
        </a>
        <a href="https://www.linkedin.com/in/nitinmukul/" target="_blank" rel="noreferrer" className="text-foreground hover:opacity-60 transition-opacity" aria-label="LinkedIn">
          <LinkedinIcon size={18} strokeWidth={1.5} />
        </a>
        <a href="https://vimeo.com/user5700465" target="_blank" rel="noreferrer" className="text-foreground hover:opacity-60 transition-opacity" aria-label="Vimeo">
          <VimeoIcon size={18} />
        </a>
      </div>
      {/* Search icon — to be designed */}
      <div className="text-foreground opacity-0 pointer-events-none" aria-hidden="true">
        <Search size={18} strokeWidth={1.5} />
      </div>
    </div>
  );

  if (isHome) {
    return (
      <>
        <motion.header
          ref={headerRef}
          className={headerClass}
          animate={{ y: hidden && !artworkOpen && !isOpen ? "-100%" : "0%" }}
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="flex flex-col">
            <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground">
              Nitin Mukul
            </Link>
            <nav ref={navRef} className="hidden lg:flex items-center gap-6 mt-6">
              {navItems.map(renderNavItem)}
            </nav>
          </div>
          <DesktopSocialIcons />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden z-50 p-2 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Toggle menu"
          >
            <MenuIcon isOpen={isOpen} />
          </button>
        </motion.header>

        {/* Desktop full-width artwork dropdown */}
        <AnimatePresence>
          {artworkOpen && (
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              ref={dropdownRef}
              className="hidden lg:block fixed top-0 left-0 right-0 z-40 shadow-sm"
              style={{ backgroundColor: 'hsl(40 20% 98%)', paddingTop: headerHeight, paddingLeft: navLeft, paddingBottom: '2rem' }}
            >
              <div className="flex gap-16">
                <div className="flex flex-col gap-3">
                  {artworkSubItems.map((item) => {
                    const isSubActive = location.pathname.startsWith(item.path);
                    return (
                      <Link key={item.path} to={item.path} onClick={() => setArtworkOpen(false)}
                        className={`font-body text-sm text-foreground hover:opacity-60 transition-opacity whitespace-nowrap pb-0.5 w-fit ${isSubActive ? "border-b border-foreground" : ""}`}>
                        {item.label}
                      </Link>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-3">
                  <button
                    onClick={() => setPaperOpen(!paperOpen)}
                    className={`font-body text-sm text-foreground hover:opacity-60 transition-opacity whitespace-nowrap pb-0.5 w-fit text-left ${paperOpen ? "border-b border-foreground" : ""}`}
                  >
                    Paper
                  </button>
                  <AnimatePresence>
                    {paperOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -4 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="flex flex-col gap-3 pl-4"
                      >
                        {paperSubItems.map((item) => {
                          const isSubActive = location.pathname.startsWith(item.path);
                          return (
                            <Link key={item.path} to={item.path} onClick={() => { setArtworkOpen(false); setPaperOpen(false); }}
                              className={`font-body text-sm text-foreground hover:opacity-60 transition-opacity whitespace-nowrap pb-0.5 w-fit ${isSubActive ? "border-b border-foreground" : ""}`}>
                              {item.label}
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
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
      <motion.header
        ref={headerRef}
        className={headerClass}
        animate={{ y: hidden && !artworkOpen && !isOpen ? "-100%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex flex-col">
          <Link to="/" className="font-display text-xl md:text-2xl font-bold tracking-wide text-foreground">
            Nitin Mukul
          </Link>
          <nav ref={navRef} className="hidden lg:flex items-center gap-6 mt-6">
            {navItems.map(renderNavItem)}
          </nav>
        </div>
        <DesktopSocialIcons />
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden z-50 p-2 text-foreground hover:opacity-60 transition-opacity"
          aria-label="Toggle menu"
        >
          <MenuIcon isOpen={isOpen} />
        </button>
      </motion.header>

      {/* Desktop full-width artwork dropdown */}
      <AnimatePresence>
        {artworkOpen && (
          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            ref={dropdownRef}
            className="hidden lg:block fixed top-0 left-0 right-0 z-40 shadow-sm"
            style={{ backgroundColor: 'hsl(40 20% 98%)', paddingTop: headerHeight, paddingLeft: navLeft, paddingBottom: '2rem' }}
          >
            <div className="flex gap-16">
              <div className="flex flex-col gap-3">
                {artworkSubItems.slice(0, 3).map((item) => {
                  const isSubActive = location.pathname.startsWith(item.path);
                  return (
                    <Link key={item.path} to={item.path} onClick={() => setArtworkOpen(false)}
                      className={`font-body text-sm text-foreground hover:opacity-60 transition-opacity whitespace-nowrap pb-0.5 w-fit ${isSubActive ? "border-b border-foreground" : ""}`}>
                      {item.label}
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col gap-3">
                {artworkSubItems.slice(3).map((item) => {
                  const isSubActive = location.pathname.startsWith(item.path);
                  return (
                    <Link key={item.path} to={item.path} onClick={() => setArtworkOpen(false)}
                      className={`font-body text-sm text-foreground hover:opacity-60 transition-opacity whitespace-nowrap pb-0.5 w-fit ${isSubActive ? "border-b border-foreground" : ""}`}>
                      {item.label}
                    </Link>
                  );
                })}
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
  isOpen,
  setIsOpen,
  location,
}: {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
  location: ReturnType<typeof useLocation>;
}) => {
  const [menuLevel, setMenuLevel] = useState<'main' | 'artwork' | 'paper'>('main');

  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0, transition: { duration: 0.7, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }}
      exit={{ y: "-100%", transition: { duration: 0.7, delay: 0, ease: [0.25, 0.46, 0.45, 0.94] } }}
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
          <button
            onClick={() => setMenuLevel(menuLevel === 'paper' ? 'artwork' : 'main')}
            className="p-2 -ml-2 text-foreground hover:opacity-60 transition-opacity"
            aria-label="Back"
          >
            <ArrowLeft size={32} strokeWidth={1.5} />
          </button>
        )}
        <button onClick={() => setIsOpen(false)} className="p-2 text-foreground hover:opacity-60 transition-opacity" aria-label="Close menu">
          <MenuIcon isOpen={isOpen} />
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
                  const isActive = item.path === "/"
                    ? location.pathname === "/"
                    : item.hasDropdown
                      ? location.pathname.startsWith(item.path) || location.pathname.startsWith("/artwork")
                      : location.pathname.startsWith(item.path);

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
                  <a href="https://www.instagram.com/nitin_mukul_studio" target="_blank" rel="noreferrer" className="text-foreground hover:opacity-60 transition-opacity" aria-label="Instagram">
                    <Instagram size={20} strokeWidth={1.5} />
                  </a>
                  <a href="https://www.linkedin.com/in/nitinmukul/" target="_blank" rel="noreferrer" className="text-foreground hover:opacity-60 transition-opacity" aria-label="LinkedIn">
                    <LinkedinIcon size={20} strokeWidth={1.5} />
                  </a>
                  <a href="https://vimeo.com/user5700465" target="_blank" rel="noreferrer" className="text-foreground hover:opacity-60 transition-opacity" aria-label="Vimeo">
                    <VimeoIcon size={20} />
                  </a>
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
                {artworkSubItems.map((item, i) => {
                  const isSubActive = location.pathname.startsWith(item.path);
                  return (
                    <motion.div key={item.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`font-body text-3xl md:text-5xl font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 ${isSubActive ? "border-b border-foreground" : ""}`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: artworkSubItems.length * 0.05, duration: 0.3 }}>
                  <button
                    onClick={() => setMenuLevel('paper')}
                    className="font-body text-3xl md:text-5xl font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 flex items-center gap-3"
                  >
                    Paper
                    <ChevronDown size={22} className="text-foreground" strokeWidth={1.5} />
                  </button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Paper sub-menu panel */}
        <AnimatePresence initial={false}>
          {menuLevel === 'paper' && (
            <motion.div
              key="paper"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="absolute inset-0 flex flex-col px-6 py-6"
            >
              <h2 className="font-body text-4xl md:text-6xl font-bold tracking-wide text-foreground border-b border-foreground pb-0.5 w-fit mb-16">Paper</h2>
              <nav className="flex flex-col items-start gap-6">
                {paperSubItems.map((item, i) => {
                  const isSubActive = location.pathname.startsWith(item.path);
                  return (
                    <motion.div key={item.path} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05, duration: 0.3 }}>
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`font-body text-3xl md:text-5xl font-medium tracking-wide transition-opacity hover:opacity-60 text-foreground pb-0.5 ${isSubActive ? "border-b border-foreground" : ""}`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.div>
  );
};

export default Navigation;
