import React, { useRef } from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import HeroCarousel from "@/components/HeroCarousel";
import { exhibitions, projects, artworks } from "@/lib/artworkData";
import paintingImg from "@/assets/Paintings/02_The_Bestiary.jpg";
import publicArtImg from "@/assets/Video&Installation/HeatMapsQueens/HeatMapsQueens/05_ArtonScreen.JPG";
import printImg from "@/assets/Print/celebration2_silkscreenprint.jpg";
import drawingImg from "@/assets/Drawing/Narasimha_2024_ink_and_graphite_on_paper_36x24_inches.JPG";
import photoBasedImg from "@/assets/Photo-Based/Fluxus/fluxus_delhi_1.jpg";

const exploreItems = [
  { id: "paintings", title: "Painting", image: paintingImg, path: "/artwork/paintings" },
  { id: "video-installation", title: "Video and Installation", image: "/08_guwhati.JPG", path: "/artwork/video-installation" },
  { id: "public-art", title: "Public Art", image: publicArtImg, path: "/work?category=public-art" },
  { id: "prints", title: "Print", image: printImg, path: "/artwork/prints" },
  { id: "drawings", title: "Drawing", image: drawingImg, path: "/artwork/drawings" },
  { id: "photo-based", title: "Photo-Based", image: photoBasedImg, path: "/artwork/photo-based" },
];

const Index = () => {
  const scrollRef = useRef(null);

  const currentlyShowing = projects[1];
  const recentExhibitions = exhibitions.slice(0, 2);
  const prints = artworks.filter((a) => a.category === "prints").length > 0
    ? artworks
    : artworks;

  return React.createElement(Layout, null,
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
              className: "flex flex-col gap-6 md:gap-9 md:absolute md:inset-0 md:overflow-y-auto md:pr-3",
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
    React.createElement("section", { className: "bg-background px-4 md:px-12 pb-12 md:pb-36" },
      React.createElement("div", { className: "flex items-center justify-between mb-5 md:mb-8" },
          React.createElement("h1", { className: "font-display text-lg md:text-2xl font-bold tracking-wide text-foreground uppercase" },
            "Explore Nitin's Work"
          )
        ),
        React.createElement("div", {
          className: "grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-14"
        },
          exploreItems.map((item) =>
            React.createElement(Link, {
              key: item.id,
              to: item.path,
              className: "group flex flex-col items-center"
            },
              React.createElement("div", { className: "aspect-[3/4] overflow-hidden w-full" },
                React.createElement("img", {
                  src: item.image,
                  alt: item.title,
                  className: "w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                })
              ),
              React.createElement("h3", { className: "font-display text-lg md:text-xl mt-4 text-foreground tracking-wide text-center font-bold" },
                item.title
              )
            )
          )
        )
    ),
  );
};

export default Index;
