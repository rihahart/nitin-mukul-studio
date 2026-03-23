import { useState } from "react";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer className="border-t border-border px-6 md:px-12 py-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-display text-2xl font-light mb-4">Nitin Mukul</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed">
            Visual artist and curator working across painting, video, and collaborative projects.
          </p>
        </div>

        <div>
          <h4 className="font-body text-xs tracking-widest uppercase mb-4 text-muted-foreground">Mailing List</h4>
          <form onSubmit={handleSubmit} className="flex border-b border-foreground">
            <input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent py-2 font-body text-sm outline-none placeholder:text-muted-foreground"
            />
            <button type="submit" className="font-body text-xs tracking-widest uppercase py-2 pl-4 hover:opacity-60 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>

        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-4">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Instagram size={18} />
            </a>
          </div>
          <div className="flex gap-6 font-body text-xs tracking-widest uppercase text-muted-foreground">
            <Link to="/about" className="hover:text-foreground transition-colors">Contact</Link>
            <Link to="/about" className="hover:text-foreground transition-colors">CV</Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-border">
        <p className="font-body text-xs text-muted-foreground">
          © {new Date().getFullYear()} Nitin Mukul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
