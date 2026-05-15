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
import photoBasedImg from "@/assets/Photo-Based/Fluxus/fluxus_delhi_2.jpg";

const exploreItems = [
  { id: "paintings", title: "Painting", image: paintingImg, path: "/artwork/paintings" },
  { id: "video-installation", title: "Video and Installation", image: "/08_guwhati.JPG", path: "/artwork/video-installation" },
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
      React.createElement("div", { className: "flex flex-col md:flex-row md:items-center md:gap-12" },
          React.createElement("div", { className: "aspect-[4/3] overflow-hidden w-full md:w-[700px] md:shrink-0" },
            React.createElement("img", {
              src: "/avian_american_wide.jpg",
              alt: currentlyShowing.title,
              className: "w-full h-full object-cover"
            })
          ),
          React.createElement("div", { className: "mt-3 md:mt-0" },
            React.createElement("p", { className: "font-body text-xs tracking-widest uppercase text-muted-foreground mb-1" },
              "Upcoming"
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
    React.createElement("section", { className: "bg-background px-4 md:px-12 pb-12 md:pb-36" },
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
