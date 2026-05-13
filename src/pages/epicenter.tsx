import Layout from "@/components/Layout";

const Epicenter = () => {
  return (
    <Layout>
      <div className="w-full mt-28 md:mt-52">
        <img
          src="/Epicenter_logo_black-1.webp"
          alt="Epicenter NYC"
          className="w-full max-h-[50vh] md:max-h-[60vh] object-contain"
        />
      </div>

      <p className="font-body text-xs text-foreground text-center mt-1 px-4">
        <a
          href="https://epicenter-nyc.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:opacity-50 transition-opacity duration-200"
        >
          Visit Website
        </a>
      </p>

      <div className="w-full px-6 md:px-12 pb-12 py-12 md:py-24">
        <div className="max-w-5xl mx-auto space-y-6">
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
            Mukul co-founded Epicenter NYC in 2020, a local news platform that aims to report 'with' our community as much as 'on' issues relevant to New Yorkers. We keep our content inclusive and accessible. Epicenter stands out from the local news landscape in that we were founded by a former CNN executive, and an arts professional who both saw the need for keeping our neighborhoods connected to resources and informed as the pandemic threatened the livelihoods and vibrancy of those who make NYC unique. We continue to grow and serve the public, centering local business and culture, and weaving art and the arts community into our storytelling. Epicenter's team achieves this through a multichannel approach that includes newsletters, podcasts, panels, curated art exhibitions, on site activations, and partnerships and sponsorships with other organizations.
          </p>
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
            For more than 5 years, Epicenter NYC has featured a new artist every week, amplifying their work, and giving each one a $100 micro-grant with no strings attached. Beyond that, this archive of hundreds of artists becomes a font for annual curated exhibitions in public spaces so generously provided by businesses and institutions that see the value of partnering with us.
          </p>
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
            This year's annual exhibition was our largest yet, featuring over 20 artists representing the vibrant diversity that defines this city and must continue to do so.
          </p>
          <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
            Many remark that they have never seen an organization that sits at the intersection of journalism, art, and community service, and like the pandemic that gave rise to Epicenter, it is the challenges we face collectively that give us the momentum to remain a vital resource.
          </p>
          <div className="flex flex-col items-center py-12 md:py-24 max-w-3xl mx-auto space-y-8">
            <a
              href="https://epicenter-nyc.com/artists/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-sm tracking-widest uppercase bg-transparent text-foreground border border-foreground hover:opacity-70 transition-opacity py-3 px-16"
            >
              SPREAD THE WORD
            </a>
             <p className="font-body text-sm md:text-base text-foreground leading-loose md:text-center">
            Please spread the word to artists and arts organizations in your orbit.  Epicenter could really use your support so that we can continue to support art and artists that are essential to the community. It’s been a tough year on many fronts but certainly the arts.
          </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Epicenter;
