import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const Bio = () => {
  return (
    <Layout>
      <div className="w-full mt-28 md:mt-52">
        <img
          src="/nitinmukul.jpeg"
          alt="Nitin Mukul"
          className="w-full max-h-[50vh] md:max-h-[60vh] object-contain"
        />
      </div>

      <p className="text-xs text-foreground text-center mt-1 px-4">Photo Credit: Anshika Varma</p>

      <div className="w-full px-6 md:px-12 pb-12 py-12 md:py-16">
        <div className="max-w-5xl mx-auto">
       
            <p className="font-body text-sm md:text-base text-foreground leading-loose text-left">
              <strong>Nitin Mukul</strong> is an American visual artist of Indian descent mapping spaces where painting and video intersect as a durational experience. He has lived and worked in Massachusetts, India, Los Angeles, Washington DC, and currently New York City. In 2020 he was Artist in Residence at Caldera Arts in Sisters, Oregon, and is the recipient of 2020, 2023 and 2025 fellowships from NYFA. He was a nominee for the 2025 Creative Time fellowship. His work has been shown at The Institute of Contemporary Art, Philadelphia, Pioneer Works, The Queens Museum, Lincoln Center, Nature Morte Gallery, and The Rubin Museum, among others. His recent project Heat Maps was presented in 2024 as a solo exhibition at the New York Hall of Science. He has been showing with Aicon gallery in NYC since 2008. In 2020 Mukul co-founded Epicenter NYC, a community journalism multiplatform initiative that engages, connects and informs and empowers through the power of culture and community.
            </p>
      
        </div>
      </div>
    </Layout>
  );
};

export default Bio;
