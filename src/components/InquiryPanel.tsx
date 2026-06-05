import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

type Status = "idle" | "loading" | "success";

interface Painting {
  title: string;
  year?: string;
  medium?: string;
  dimensions?: string;
  image: string;
}

interface InquiryPanelProps {
  isOpen: boolean;
  onClose: () => void;
  painting: Painting;
}

const InquiryPanel = ({ isOpen, onClose, painting }: InquiryPanelProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  useEffect(() => {
    if (isOpen) setStatus("idle");
  }, [isOpen, painting.title]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const subject = `Inquiry: ${painting.title}${painting.year ? ` (${painting.year})` : ""}`;

    fetch("https://formsubmit.co/ajax/nmukul@gmail.com", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        country: country || undefined,
        postcode: postcode || undefined,
        message: message || undefined,
        artwork: `${painting.title}${painting.year ? `, ${painting.year}` : ""}`,
        medium: painting.medium || undefined,
        dimensions: painting.dimensions || undefined,
        _subject: subject,
        _replyto: email,
      }),
    })
      .then(() => {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setCountry("");
        setPostcode("");
        setMessage("");
      })
      .catch(() => setStatus("idle"));
  };

  const inputClass =
    "w-full bg-transparent border-b border-foreground/30 py-3 font-body text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-foreground transition-colors";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[70] bg-black/20"
            onClick={onClose}
          />

          {/* Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 bottom-0 z-[80] w-full max-w-lg bg-background overflow-y-auto"
          >
            {/* Close */}
            <div className="flex justify-end px-6 pt-6 pb-2">
              <button
                onClick={onClose}
                className="flex items-center gap-2 font-body text-sm tracking-widest uppercase text-foreground hover:opacity-60 transition-opacity"
                aria-label="Close"
              >
                Close <X size={16} strokeWidth={1.5} />
              </button>
            </div>

            <div className="px-6 pb-10">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-8">
                Send an Inquiry
              </h2>

              {status === "success" ? (
                <p className="font-body text-base text-foreground">
                  Your inquiry has been sent. We'll be in touch soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-0">
                  <input
                    type="text"
                    placeholder="Name *"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    placeholder="Email *"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={inputClass}
                  />
                  <input
                    type="tel"
                    placeholder="Phone *"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Country"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className={inputClass}
                  />
                  <input
                    type="text"
                    placeholder="Postcode / Zipcode"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className={inputClass}
                  />
                  <textarea
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    className={`${inputClass} resize-none mt-2`}
                  />

                  {/* Artwork summary */}
                  <div className="flex gap-4 items-start py-6 border-t border-b border-foreground/15 mt-8">
                    <img
                      src={painting.image}
                      alt={painting.title}
                      className="w-16 h-16 object-cover shrink-0"
                    />
                    <div>
                      <p className="font-display text-sm font-bold text-foreground">{painting.title}</p>
                      {painting.year && (
                        <p className="font-body text-sm text-foreground/70">{painting.year}</p>
                      )}
                      {painting.medium && (
                        <p className="font-body text-sm text-foreground/70 italic">{painting.medium}</p>
                      )}
                      {painting.dimensions && (
                        <p className="font-body text-sm text-foreground/70">{painting.dimensions}</p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="mt-6 w-full bg-black text-white font-body text-sm tracking-widest uppercase py-4 hover:opacity-70 transition-opacity disabled:opacity-50"
                  >
                    {status === "loading" ? "Sending…" : "Send Inquiry"}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default InquiryPanel;
