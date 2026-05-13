import Layout from "@/components/Layout";

import sothebysImg from "@/assets/Press/Sotheby's Exhibition.jpg";
import videoImg from "@/assets/Press/Video Instllation.jpg";
import hyperrealImg from "@/assets/Press/Hyperreal at Aicon Gallery.jpg";
import printImg from "@/assets/Press/International Print Biennale.jpg";

const pressItems = [
  {
    image: sothebysImg,
    caption: "Sotheby's Exhibition, October - November, 2018",
    description: "A group exhibition and artist's talk at Sotheby's Institute featuring Nitin Mukul, Bahar Behbahani and Mona Saeed Kamal",
  },
  {
    image: videoImg,
    caption: "Video Installation at Pioneer Works, October 2018",
  },
  {
    image: hyperrealImg,
    caption: "Hyperreal at Aicon Gallery, through March 31, 2018",
  },
  {
    image: printImg,
    caption: "International Print Biennale, New Delhi, March 25-April 2018",
    description: "Nitin's work was included in India's first International Print Biennale organized by Lalit Kala Akademi in collaboration with The National Gallery of Modern Art. Rabindra Bhavan, New Delhi",
    href: "https://www.millenniumpost.in/features/first-international-print-biennale-to-be-held-in-india-272107",
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
