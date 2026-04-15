import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const HeatMapQueens = () => {
  return (
    <Layout>
      {/* Full-width Vimeo banner */}
      <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
        <iframe
          src="https://player.vimeo.com/video/1074361458?autoplay=1&muted=1&loop=1&background=1"
          className="absolute inset-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="You Were Here"
        />
      </div>

      {/* Content section */}
      <div className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-2xl text-foreground tracking-wide font-bold md:text-3xl text-center mb-6">
              You Were Here
            </h1>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed text-center mb-12 italic">
              (2025) durational painting filmed at 1:30pm on April 30, 2025,
              outside temperature 73 degrees fahrenheit in Jackson Heights, NY.
              16 minutes. Dimensions variable.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-relaxed text-left">
              You Were Here has just been placed as a video art installation in
              the 74th St. / Roosevelt Ave. Station in Jackson Heights, Queens,
              one of the busiest subway stations in NYC with an average of over
              100,000 people passing through daily in one of the most culturally
              diverse zip codes in the world. The title speaks to at-risk
              elements of our surroundings and society that have already or are
              gradually disappearing from view. I was reflecting on First
              Peoples, as well as recent incidents of disappeared and abducted
              members of our local community in the anti-immigration raids, and
              lost ones from the pandemic that this neighborhood was at the
              center of. In addition to the painted elements that have been the
              core of my durational painting technique, all footage was filmed in
              Jackson Heights. It opens with subway riders disappearing from view
              as they descend the stairs underground and later bumblebees
              pollinating by vibrating their bodies to shake pollen loose from
              flowers. These bees face extinction due to habitat loss,
              pesticides, and climate change. An aerial image of Jackson Heights
              shared with the artist weeks ago by an astronaut recently on board
              the International Space Station also appears as a metaphor for our
              place in the universe and how all our actions have an impact.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default HeatMapQueens;
