import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border px-6 md:px-12 py-12">
      <div className="max-w-8xl mx-auto flex flex-col items-center gap-4 text-center">
        <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground">
          Stay Connected
        </h4>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          <Instagram size={22} />
        </a>
      </div>
      <div className="max-w-8xl mx-auto mt-8 pt-4 border-t border-border">
        <p className="font-body text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Nitin Mukul. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
