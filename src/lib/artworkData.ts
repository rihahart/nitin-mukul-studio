import artwork1 from "@/assets/artwork-1.jpg";
import artwork2 from "@/assets/artwork-2.jpg";
import artwork3 from "@/assets/artwork-3.jpg";
import artwork4 from "@/assets/artwork-4.jpg";
import installation1 from "@/assets/installation-1.jpg";

export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  category: "paintings" | "drawings" | "prints";
  image: string;
  description?: string;
  dimensions?: string;
}

export interface Project {
  id: string;
  title: string;
  year: string;
  location: string;
  image: string;
  description: string;
  artists?: string[];
  sections?: { heading: string; text: string }[];
}

export interface Exhibition {
  id: string;
  title: string;
  year: string;
  location: string;
  image: string;
  description: string;
  artists?: string[];
}

export const artworks: Artwork[] = [
  { id: "terrain-of-memory", title: "Terrain of Memory", year: "2024", medium: "Oil and mixed media on canvas", category: "paintings", image: artwork1, description: "Aerial landscapes that merge cartographic precision with emotional topography, exploring themes of displacement and belonging.", dimensions: "60 × 84 inches" },
  { id: "heat-maps-chromatic", title: "Heat Maps: Chromatic Field", year: "2023", medium: "Acrylic and ink on panel", category: "paintings", image: artwork2, description: "Part of the ongoing Heat Maps series, this work translates thermal data into vibrant chromatic fields.", dimensions: "48 × 72 inches" },
  { id: "golden-meridian", title: "Golden Meridian", year: "2024", medium: "Oil, gold leaf, and resin on canvas", category: "paintings", image: artwork3, description: "Rivers and waterways rendered in gold leaf trace paths of migration and memory across textured terrain.", dimensions: "54 × 90 inches" },
  { id: "emerald-cartography", title: "Emerald Cartography", year: "2023", medium: "Mixed media on canvas", category: "paintings", image: artwork4, description: "Deep greens and blues form topographic abstractions that reference satellite imagery and environmental data.", dimensions: "60 × 96 inches" },
  { id: "study-in-ochre", title: "Study in Ochre", year: "2022", medium: "Graphite and wash on paper", category: "drawings", image: artwork3, description: "A preparatory drawing exploring tonal relationships in the landscape series.", dimensions: "22 × 30 inches" },
  { id: "thermal-print-i", title: "Thermal Print I", year: "2023", medium: "Archival pigment print", category: "prints", image: artwork2, description: "Limited edition print from the Heat Maps body of work.", dimensions: "24 × 36 inches" },
];

export const projects: Project[] = [
  {
    id: "heat-maps",
    title: "Heat Maps",
    year: "2019–Present",
    location: "Various locations",
    image: artwork2,
    description: "An ongoing body of work that translates thermal imaging data and heat signatures into large-scale paintings and video installations. The project examines climate change, urban heat islands, and the invisible forces that shape our environment.",
    artists: ["Nitin Mukul"],
    sections: [
      { heading: "Concept", text: "Heat Maps began as an investigation into the visual language of thermal data. By translating infrared imagery into painterly abstractions, the work reveals hidden patterns of energy, temperature, and human activity that remain invisible to the naked eye." },
      { heading: "Process", text: "Each painting in the series begins with collected thermal data from specific locations — urban environments, natural landscapes, and industrial sites. This data is then interpreted through layers of acrylic, ink, and mixed media, creating works that oscillate between scientific visualization and lyrical abstraction." },
    ],
  },
  {
    id: "ways-of-showing-up",
    title: "Ways of Showing Up / Slow Your Roll",
    year: "2024",
    location: "New York, NY",
    image: installation1,
    description: "A collaborative exhibition and performance series exploring presence, community, and the politics of gathering. The project brings together visual artists, musicians, and performers in a series of events that unfold slowly, resisting the urgency of contemporary culture.",
    artists: ["Nitin Mukul", "Various collaborators"],
    sections: [
      { heading: "Exhibition", text: "The gallery installation features large-scale paintings alongside video projections and sound works, creating an immersive environment that encourages slow looking and contemplation." },
      { heading: "Performance", text: "Live performances throughout the exhibition run activate the space through music, movement, and spoken word, creating temporary communities of attention and care." },
    ],
  },
];

export const exhibitions: Exhibition[] = [
  {
    id: "heat-of-the-moment-miami",
    title: "Heat of the Moment",
    year: "2023",
    location: "Satellite Art Fair, Miami",
    image: artwork1,
    description: "A curated exhibition examining the intersection of climate data and artistic practice, featuring works that respond to environmental crisis through abstraction, installation, and video.",
    artists: ["Nitin Mukul", "Artist Two", "Artist Three", "Artist Four"],
  },
  {
    id: "epicenter-nyc",
    title: "Epicenter NYC",
    year: "2022",
    location: "Long Island City, NY",
    image: installation1,
    description: "An artist-run exhibition series in LIC bringing together emerging and established artists in non-traditional spaces. Each iteration responds to the specific architecture and community of its location.",
    artists: ["Curated by Nitin Mukul"],
  },
];
