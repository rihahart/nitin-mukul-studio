import Layout from "@/components/Layout";

import outsideIndiaImg from "@/assets/Press/OutsideIndia.jpg";
import whiteHotMagazineImg from "@/assets/Press/WhiteHotMagazine.jpg";
import newBloodImg from "@/assets/Press/NewBlood.webp";
import printImg from "@/assets/Press/International Print Biennale.jpg";
import Mappingimg from "@/assets/Press/Mapping.webp";

const pressItems = [
    {
    image: printImg,
    caption: "International Print Biennale, New Delhi, March 25-April 2018",
    description: "Nitin's work was included in India's first International Print Biennale organized by Lalit Kala Akademi in collaboration with The National Gallery of Modern Art. Rabindra Bhavan, New Delhi",
    href: "https://www.millenniumpost.in/features/first-international-print-biennale-to-be-held-in-india-272107",
  },

  {
    image: outsideIndiaImg,
    caption: "Review of Outside (In)dia at Lincoln Center, 2017",
    description: "Radical Cross-Pollination From Amir ElSaffar and the Brooklyn Raga Massive at Lincoln Center by Delarue",
    href: "https://newyorkmusicdaily.wordpress.com/2017/09/11/aes/",
  },
  {
    image: whiteHotMagazineImg,
    caption: "White Hot Magazine, Susannah Edelbaum, February 2013",
    href: "https://whitehotmagazine.com/articles/2013-fact-fission-aicon-gallery/2713",
  },
  {
    image: newBloodImg,
    caption: "Al Jazeera, Dinesh Sharma, January 2014",
    description: "Cultural diffusion of news: New blood in the American News Media",
    href: "https://www.aljazeera.com/features/2014/01/indian-artists-bridge-cultural-divide-20141231104339.html",
  },

    {
    image: Mappingimg,
    caption: "New York Press, Melissa Stern, June 2012",
    description: "Mapping Globalization at the Aicon Gallery",
    href: "https://www.nypress.com/news/mapping-globalization-at-the-aicon-gallery-ADNP1020120613306139951",
  },

];

const News = () => {
  return (
    <Layout>
      <div className="w-full px-6 md:px-12 mt-28 md:mt-52 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-24">
          {pressItems.map((item) => (
            <div key={item.caption} className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24">
              <img
                src={item.image}
                alt={item.caption}
                className="w-full md:w-96 md:shrink-0 object-cover"
              />
              <div className="flex flex-col gap-4 md:gap-8">
                <div className="font-body text-base md:text-lg font-semibold text-foreground underline underline-offset-2">
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                      {item.caption}
                    </a>
                  ) : (
                    item.caption
                  )}
                </div>
                {item.description && (
                  <p className="font-body text-sm text-foreground">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default News;
