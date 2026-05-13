import Layout from "@/components/Layout";

import heatMapsQueensImg from "@/assets/Video&Installation/HeatMapsQueens/HeatMapsQueens/04_ElmhurstSBSProjectedJPG.JPG";
import futurePresentImg from "@/assets/Paintings/10_15views.jpg";

const essayItems = [
  {
    image: heatMapsQueensImg,
    title: "Heat Maps Queens",
    href: "/pdfs/HeatMaps.pdf",
    description: "The Local NYC, Long Island City, 13-02 44th Avenue, Queens, NY 11101\nDecember 2023 - January 2024\nMade with support from a 2023 New York Foundation for the Arts grant.",
  },
  {
    image: futurePresentImg,
    title: "Future Present (by Tausif Noor, 2018)",
    href: "/pdfs/FuturePresent.pdf",
  },
];

const Essay = () => {
  return (
    <Layout>
      <div className="w-full px-6 md:px-12 mt-28 md:mt-52 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-24">
          {essayItems.map((item) => (
            <div key={item.title} className="flex flex-col md:flex-row md:items-center gap-8 md:gap-24">
              <img
                src={item.image}
                alt={item.title}
                className="w-full md:w-96 md:shrink-0 object-cover"
              />
              <div className="flex flex-col gap-4 md:gap-8">
                <div className="font-body text-base md:text-lg font-semibold text-foreground underline underline-offset-2">
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="hover:opacity-60 transition-opacity">
                    {item.title}
                  </a>
                </div>
                {item.description && (
                  <p className="font-body text-sm text-foreground whitespace-pre-line">{item.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Essay;
