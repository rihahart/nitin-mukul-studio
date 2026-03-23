import { motion } from "framer-motion";
import Layout from "@/components/Layout";

const news = [
  { title: "Ways of Showing Up opens in New York", date: "March 2024", text: "New collaborative exhibition and performance series opens at gallery space in Manhattan." },
  { title: "Heat of the Moment at Satellite Art Fair Miami", date: "December 2023", text: "Curated group exhibition exploring climate data and artistic practice during Miami Art Week." },
  { title: "Heat Maps solo exhibition", date: "September 2023", text: "New body of work translating thermal imaging data into large-scale paintings on view in New York." },
];

const News = () => (
  <Layout>
    <div className="pt-28 pb-16 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-display text-4xl md:text-6xl font-light mb-16">News</h1>
        <div className="space-y-12">
          {news.map((n, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="border-b border-border pb-8">
              <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">{n.date}</p>
              <h2 className="font-display text-xl md:text-2xl font-light mb-3">{n.title}</h2>
              <p className="font-body text-sm leading-relaxed text-muted-foreground">{n.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </Layout>
);

export default News;
