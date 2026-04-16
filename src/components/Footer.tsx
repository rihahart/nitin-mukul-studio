import { useState } from "react";
import { Instagram, Linkedin } from "lucide-react";

const VimeoIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197c1.185-1.044 2.351-2.084 3.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.612-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.478 4.807z" />
  </svg>
);

const Footer = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFirstName("");
    setLastName("");
    setEmail("");
  };

  return (
    <footer className="bg-neutral-900 px-4 md:px-12 py-16 md:py-24">
      <div className="max-w-xl mx-auto">
        <h2 className="font-display text-2xl md:text-4xl font-bold text-white mb-10">
          Join Nitin Mukul Newsletter
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="flex gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-body text-sm text-white mb-1">
                First Name <span className="text-white/40 text-xs">(required)</span>
              </label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
                className="bg-white/10 border border-white/20 px-3 py-2 font-body text-sm text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="font-body text-sm text-white mb-1">
                Last Name <span className="text-white/40 text-xs">(required)</span>
              </label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
                className="bg-white/10 border border-white/20 px-3 py-2 font-body text-sm text-white focus:outline-none focus:border-white transition-colors"
              />
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <label className="font-body text-sm text-white mb-1">
              Email <span className="text-white/40 text-xs">(required)</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-white/10 border border-white/20 px-3 py-2 font-body text-sm text-white focus:outline-none focus:border-white transition-colors"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="font-body text-sm tracking-widest uppercase bg-transparent text-white border border-white hover:opacity-70 transition-opacity py-3 px-16"
            >
              Subscribe
            </button>
          </div>
        </form>

        <div className="flex justify-center gap-5 mt-10">
          <a href="https://www.instagram.com/nitin_mukul_studio" target="_blank" rel="noreferrer" className="text-white hover:opacity-60 transition-opacity" aria-label="Instagram">
            <Instagram size={20} strokeWidth={1.5} />
          </a>
          <a href="https://www.linkedin.com/in/nitinmukul/" target="_blank" rel="noreferrer" className="text-white hover:opacity-60 transition-opacity" aria-label="LinkedIn">
            <Linkedin size={20} strokeWidth={1.5} />
          </a>
          <a href="https://vimeo.com/user5700465" target="_blank" rel="noreferrer" className="text-white hover:opacity-60 transition-opacity" aria-label="Vimeo">
            <VimeoIcon size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
