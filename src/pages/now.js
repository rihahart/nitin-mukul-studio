import React, { useState, useRef } from "react";
import { Instagram, Linkedin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import { exhibitions, projects, artworks } from "@/lib/artworkData";

const Index = () => {
  const [email, setEmail] = useState("");
  const scrollRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail("");
  };

  const currentlyShowing = projects[1];
  const recentExhibitions = exhibitions.slice(0, 2);
  const prints = artworks.filter((a) => a.category === "prints").length > 0
    ? artworks
    : artworks;

  return React.createElement(Layout, { hideFooter: true },
    React.createElement(HeroCarousel, null),
    React.createElement("section", { className: "bg-background px-4 md:px-12 py-10 md:py-28" },
      React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-14 md:grid-rows-[1fr]" },
          React.createElement("div", { className: "md:col-span-3" },
            React.createElement(Link, { to: `/projects/${currentlyShowing.id}`, className: "group block" },
              React.createElement("div", { className: "aspect-[4/3] overflow-hidden" },
                React.createElement("img", {
                  src: currentlyShowing.image,
                  alt: currentlyShowing.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                })
              ),
              React.createElement("div", { className: "mt-3 md:mt-5" },
                React.createElement("p", { className: "font-body text-xs tracking-widest uppercase text-muted-foreground mb-1" },
                  "Currently Showing"
                ),
                React.createElement("h3", { className: "font-display text-lg md:text-2xl font-bold tracking-wide text-foreground uppercase" },
                  currentlyShowing.title
                ),
                React.createElement("p", { className: "font-body text-sm text-muted-foreground mt-1" },
                  currentlyShowing.location + " · " + currentlyShowing.year
                )
              )
            )
          ),
          React.createElement("div", { className: "md:col-span-2 md:relative" },
            React.createElement("div", {
              className: "flex flex-col gap-6 md:gap-9 md:absolute md:inset-0 md:overflow-y-auto",
            },
              exhibitions.map((exhibition) =>
                React.createElement(Link, {
                  key: exhibition.id,
                  to: "/curation",
                  className: "group block shrink-0"
                },
                  React.createElement("div", { className: "aspect-[4/3] overflow-hidden" },
                    React.createElement("img", {
                      src: exhibition.image,
                      alt: exhibition.title,
                      className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    })
                  ),
                  React.createElement("div", { className: "mt-2 md:mt-3.5" },
                    React.createElement("h4", { className: "font-display text-sm md:text-base font-bold tracking-wide text-foreground uppercase" },
                      exhibition.title
                    ),
                    React.createElement("p", { className: "font-body text-xs text-muted-foreground mt-1" },
                      exhibition.location + " · " + exhibition.year
                    )
                  )
                )
              ),
              React.createElement("div", { className: "flex justify-end" },
                React.createElement(Link, {
                  to: "/curation",
                  className: "inline-flex items-center gap-1 font-body text-sm tracking-wide text-foreground hover:opacity-60 transition-opacity"
                },
                  "See All Exhibitions",
                  React.createElement(ChevronRight, { size: 16 })
                )
              )
            )
          )
      )
    ),
    React.createElement("section", { className: "bg-background px-4 md:px-12 pb-10 md:pb-28" },
      React.createElement("div", { className: "flex items-center justify-between mb-5 md:mb-8" },
          React.createElement("h2", { className: "font-display text-lg md:text-2xl font-bold tracking-wide text-foreground uppercase" },
            "Explore Work"
          )
        ),
        React.createElement("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-14"
        },
          artworks.map((artwork) =>
            React.createElement(Link, {
              key: artwork.id,
              to: `/artwork/${artwork.id}`,
              className: "group"
            },
              React.createElement("div", { className: "aspect-[3/4] overflow-hidden" },
                React.createElement("img", {
                  src: artwork.image,
                  alt: artwork.title,
                  className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                })
              )
            )
          )
        )
    ),
    React.createElement("section", { className: "bg-background px-4 md:px-12 py-16 md:py-44" },
      React.createElement("div", { className: "max-w-xl mx-auto text-center" },
        React.createElement("h2", { className: "font-display text-xl md:text-3xl font-light tracking-wide text-foreground mb-2 md:mb-3.5" },
          "Stay Connected"
        ),
        React.createElement("p", { className: "font-body text-sm text-muted-foreground mb-6 md:mb-10" },
          "Sign up for updates on new work, exhibitions, and projects."
        ),
        React.createElement("form", { onSubmit: handleSubmit, className: "flex gap-2 md:gap-3.5 max-w-md mx-auto" },
          React.createElement("input", {
            type: "email",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            placeholder: "Your email",
            required: true,
            className: "flex-1 bg-transparent border-b border-border px-1 py-2 font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
          }),
          React.createElement("button", {
            type: "submit",
            className: "font-body text-xs tracking-widest uppercase text-foreground hover:opacity-60 transition-opacity py-2 px-4"
          },
            "Subscribe"
          )
        ),
        React.createElement("div", { className: "flex justify-center gap-5 md:gap-6 mt-6 md:mt-10" },
          React.createElement("a", {
            href: "https://instagram.com",
            target: "_blank",
            rel: "noreferrer",
            className: "text-muted-foreground hover:text-foreground transition-colors"
          },
            React.createElement(Instagram, { size: 20 })
          ),
          React.createElement("a", {
            href: "https://linkedin.com",
            target: "_blank",
            rel: "noreferrer",
            className: "text-muted-foreground hover:text-foreground transition-colors"
          },
            React.createElement(Linkedin, { size: 20 })
          )
        )
      )
    )
  );
};

export default Index;
