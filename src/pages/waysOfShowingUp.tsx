import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const WaysOfShowingUp = () => {
  return (
    <Layout>
      <div className="w-full mt-12 md:mt-48 h-[50vh] md:h-[55vh]">
        <iframe
          src="https://player.vimeo.com/video/1022198277?autoplay=1&muted=1"
          className="w-full h-full"
          style={{ border: "none" }}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Ways of Showing Up: Slow Your Roll"
        />
      </div>

      <div className="w-full px-6 md:px-12 pt-0.5 pb-24 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground tracking-wide text-center mb-6">
              Ways of Showing Up: Slow Your Roll
            </h1>

            <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed text-center mb-12 italic">
              A two-day experimental event, July 9–10, 2024
              <br />
              Presented by Epicenter NYC and Department of Transformation at The Performing Garage, SoHo
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-relaxed text-left">
              Epicenter NYC, a local media, arts and community organization, and
              Department of Transformation, an artist-organized group that
              prototypes new formats for togetherness and mutual learning, are
              thrilled to present Ways of Showing Up, a two day series of
              immersive art, workshops, and performances on July 9th and 10th,
              2024, at the legendary Performing Garage in Soho. Centering the
              artistic process as a form of care for the self and others, the
              event gathers together artists, therapists, musicians,
              choreographers, and community practitioners. They will each share
              tools for collective learning and collaboration that participants
              can carry away with them. Ways of Showing Up offers new visions
              for the intersection of art, well-being, and community.
            </p>

            <p className="font-body text-sm md:text-base text-foreground leading-relaxed text-left mt-6">
              Organized by Epicenter NYC co-founder and visual artist Nitin
              Mukul, the first day of Ways of Showing Up: Slow Your Roll
              facilitates an immersive slow art viewing experience in conjunction
              with a series of experimental musical performances. The work
              encourages participants to momentarily disconnect from the
              spectacles of today's digital media in order to connect with a
              more meditative and contemplative pace. Organized by Prem
              Krishnamurthy and Sam Rauch of Department of Transformation, the
              second day of Ways of Showing Up: All Together Now? brings
              together creative practitioners including artists, musicians,
              teachers, writers, and therapists for a series of experimental
              workshops, performances, tours, meals, and talks which will
              collectively explore the questions: How can we design processes for
              engaging others through artistic action? What are the resources for
              creative care that exist within both our own close communities and
              everyday encounters? And what does it mean to participate fully in
              both life and art?
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default WaysOfShowingUp;
