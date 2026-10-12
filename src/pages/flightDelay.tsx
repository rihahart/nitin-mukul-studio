import { useRef, useState, type KeyboardEvent } from "react";
import Layout from "@/components/Layout";
import flightDelayFrames from "@/assets/flight_delay_frames_title.jpg";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const artistBios = [
  {
    id: "nitin-mukul",
    label: "Nitin Mukul",
    paragraphs: [
      "Nitin Mukul is an American visual artist of Indian descent mapping spaces where painting and video intersect as a durational experience. He has lived and worked in Massachusetts, India, Los Angeles, Washington DC, and currently is in New York City. In 2020 he was awarded an Artist Residency at the Caldera Arts Center in Sisters, Oregon, and is the recipient of 2020, 2023 and 2025 New Works Grant from NYFA. In 2019 he completed video installations at The Institute of Contemporary Art, Philadelphia, Pioneer Works, Brooklyn and Lincoln Center, NYC. His work was included in the 2013 Queens Biennial at the Queens Museum. Mukul was an assistant to the late artist Sol Lewitt, and a former creative director of the Indocenter of Art & Culture in Chelsea. His work was recently acquired by the Kiran Nadar Museum of Art in New Delhi. He has been showing with Aicon gallery in NYC since 2008.",
      "Nitin\u2019s exhibitions on the impact of climate change such as Heat Maps: Queens and Heat of the Moment have brought together artists, neighbors, local government officials and organizations like the Nature Conservancy into meaningful dialogue. He led the curatorial effort of Queens largest public art project, an open street in Jackson Heights spanning 26 city blocks which has since become a permanent linear park recognized globally by urban planners. Nitin frequently collaborates with cultural institutions and city officials to drive awareness on issues and make art more accessible.",
    ],
  },
  {
    id: "liz-phillips",
    label: "Liz Phillips",
    paragraphs: [
      "For more than 55 years, Queens-based pioneer artist Liz Phillips has been making interactive, often collaborative, multi-media installations. Creating responsive environments that sense wind, plants, fish, people, water and food, she uses sound as her primary descriptive material. In 2024 Phillips received an Anonymous was a Woman Award (Visual Arts) and in 2025 a United States Artists Fellowship (music). Phillips has exhibited at museums, galleries, festivals, and public spaces, including; Philadelphia\u2019s Academy of Natural Sciences, Milwaukee Art Museum, Queens Museum, Jewish Museum, Whitney Museum of American Art, San Francisco Museum of Modern Art, Spoleto Festival USA, Walker Art Museum, Ars Electronica, Lincoln Center, Jacob\u2019s Pillow, The Kitchen, Rene Block and Frederieke Taylor galleries. Work has been presented by Creative Time, the Cleveland Orchestra, IBM Japan, and the World Financial Center. Site-specific installations have transformed public spaces, as diverse as a wind turbine in an alternative energy site in a South Bronx, the Anchorage under the Brooklyn Bridge, Minneapolis\u2019s Peavy Plaza and Art Park in Lewiston NY.",
      "Phillips\u2019 site-specific public sound installation plays continuously in and around the dovecote at Caramoor Center for Music and Art from May-November 2023-2026. In Philadelphia, with Annea Lockwood, Phillips created two installations \u201cThe River Feeds Back\u201d and \u201cInside the Watershed\u201d (2022-2023.) \u201cRelative Fields in a Garden,\u201d a 22-channel collaborative sound installation and mural with Heidi Howard was commissioned for the Queens Museum center atrium and extended to last a year and a half. Harvestworks and New York State Council on the Arts commissioned \u201cWaves Crossing,\u201d for Governors Island. Phillips often collaborates with the audience and other artists, among them; Merce Cunningham Dance Company, Simone Forti, Earl Howard, Alison Knowles, Mary Lucier, Nam June Paik, Paula Rabinowitz and Yoshimasa Wada. Phillips received a Guggenheim Fellowship (1987) and numerous Individual and collaborative commissions from New York State Council on the Arts and National Endowment for the Arts as a composer, video artist, audio artist and multi-media artist and curator.",
    ],
  },
];

const ArtistBios = () => {
  const [activeId, setActiveId] = useState(artistBios[0].id);
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const activeIndex = artistBios.findIndex((artist) => artist.id === activeId);
  const active = artistBios[activeIndex];

  const selectAdjacent = (direction: 1 | -1) => {
    const next = artistBios[(activeIndex + direction + artistBios.length) % artistBios.length];
    setActiveId(next.id);
    tabRefs.current[next.id]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      selectAdjacent(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      selectAdjacent(-1);
    }
  };

  return (
    <div className="mt-6 lg:mt-0">
      <div role="tablist" aria-label="Artist biographies" className="flex gap-8 md:gap-10 border-b border-border">
        {artistBios.map((artist) => {
          const isActive = artist.id === activeId;
          return (
            <button
              key={artist.id}
              type="button"
              role="tab"
              id={`bio-tab-${artist.id}`}
              ref={(node) => {
                tabRefs.current[artist.id] = node;
              }}
              aria-selected={isActive}
              aria-controls={`bio-panel-${artist.id}`}
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveId(artist.id)}
              onKeyDown={handleKeyDown}
              className={cn(
                "relative -mb-px py-3 font-body text-sm md:text-base whitespace-nowrap transition-colors",
                isActive
                  ? "font-bold text-foreground"
                  : "font-medium text-muted-foreground hover:text-foreground"
              )}
            >
              {artist.label}
              {isActive && (
                <span aria-hidden="true" className="absolute inset-x-0 -bottom-px h-[3px] bg-foreground" />
              )}
            </button>
          );
        })}
      </div>

      <div
        role="tabpanel"
        id={`bio-panel-${active.id}`}
        aria-labelledby={`bio-tab-${active.id}`}
        tabIndex={0}
        className="pt-8 font-body text-sm md:text-base text-foreground space-y-7"
      >
        {active.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

const FlightDelay = () => (
  <Layout>
    <article>
      <div className="bg-[var(--flight-delay-banner)] px-4 md:px-12 pt-36 md:pt-52 pb-8 md:pb-10">
        <div className="mx-auto max-w-[1240px]">
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight text-foreground">Flight Delay</h1>
          <p className="font-display text-2xl md:text-4xl font-bold leading-tight tracking-tight text-foreground mt-2 md:mt-3">Nitin Mukul &amp; Liz Phillips</p>
          <div className="mt-[72px] md:mt-[132px] font-display text-base md:text-xl font-bold leading-tight text-foreground">
            <p>October 10–16, 2026</p>
            <p>New York Hall of Science</p>
          </div>
        </div>
      </div>
      <div className="bg-[var(--flight-delay-banner-deep)] md:px-12">
        <img
          src={flightDelayFrames}
          alt="Flight Delay — Nitin Mukul and Liz Phillips, with birds, landscape imagery, and paintings"
          className="block w-full max-w-[1240px] h-auto mx-auto"
          width={1920}
          height={1080}
        />
      </div>

      <div className="px-4 md:px-12 pt-12 md:pt-24 pb-16 md:pb-24">
        <div className="mx-auto max-w-[1240px]">
          <div className="grid lg:grid-cols-[minmax(200px,320px)_minmax(0,1fr)] lg:grid-rows-[auto_1fr] gap-6 lg:gap-x-16 lg:gap-y-10">
            <h2 className="font-display text-2xl md:text-3xl font-bold lg:col-start-1 lg:row-start-1">About the installation</h2>
            <div className="order-first lg:order-none lg:col-start-1 lg:row-start-2 self-start pb-10 mb-4 border-b border-border lg:pb-0 lg:mb-0 lg:border-b-0">
              <p className="font-body text-xs uppercase text-muted-foreground font-medium mb-3">Hours</p>
              <p className="font-body text-lg md:text-xl font-medium leading-normal">10am-5pm | last entry at 4pm</p>
              <p className="font-body text-xs uppercase text-muted-foreground font-medium mt-8 mb-3">Free community hour admission</p>
              <p className="font-body text-lg md:text-xl font-medium leading-normal">Friday October 16<br />2pm-5pm</p>
              <p className="font-body text-xs uppercase text-muted-foreground font-medium mt-8 mb-3">Location</p>
              <p className="font-body text-lg md:text-xl font-medium leading-normal">New York Hall of Science<br />Flushing Meadows Park, Queens</p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=New+York+Hall+of+Science+Queens"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 hover:opacity-60 transition-opacity w-fit"
              >
                Directions <ArrowUpRight aria-hidden="true" size={16} />
              </a>
            </div>
            <div className="max-w-[760px] font-body text-base md:text-lg text-foreground space-y-7 lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <p>Heat Maps: Flight Delay, is a new video installation that reflects on how climate change has altered patterns in the migration patterns of birds, which recently amplified the bird flu epidemic and wiped out the entire population of 100,000 ducks through forced euthanization at a local duck farm on Long Island.</p>
              <p>This project feels crucial in a moment when the erasure of scientific data about the effects of global warming has become a national priority. The Flight Delay series of durational paintings will register the conditions on location at sites known to be sanctuaries, refuges, and breeding grounds. Over the course of the last year we gathered sound and visuals at specific locations along migration paths, sanctuaries and park lands at times when bird activity and their sounds are especially active.</p>
              <p>This new body of work will serve as a poetic and expressive archive, manifesting in a video installation that combines the recorded video and sound which may have the effect of helping viewers build empathy and a visceral understanding of the role humans play in the alteration of our natural world. Through the disintegration of the durational paintings and shifts in sound we draw an analogy to how human activity is erasing and irreversibly altering the natural world.</p>
            </div>
          </div>
        </div>
      </div>

      <section
        aria-labelledby="about-artists-heading"
        className="border-t border-border px-4 md:px-12 pt-16 md:pt-24 pb-24 md:pb-40"
      >
        <div className="mx-auto max-w-[1240px] grid lg:grid-cols-[minmax(200px,320px)_minmax(0,1fr)] lg:gap-x-16">
          <h2
            id="about-artists-heading"
            className="font-display text-2xl md:text-3xl font-bold"
          >
            About the artists
          </h2>
          <ArtistBios />
        </div>
      </section>
    </article>
  </Layout>
);

export default FlightDelay;
