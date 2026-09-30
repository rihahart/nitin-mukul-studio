import Layout from "@/components/Layout";
import flightDelayFrames from "@/assets/flight_delay_frames_title.jpg";
import { ArrowUpRight } from "lucide-react";

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

      <div className="px-4 md:px-12 pt-12 md:pt-24 pb-24 md:pb-40">
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
    </article>
  </Layout>
);

export default FlightDelay;