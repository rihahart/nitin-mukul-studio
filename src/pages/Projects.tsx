import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { projects } from "@/lib/artworkData";

const Projects = () => {
  return (
    <Layout>
      <div className="pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-light mb-16">Projects</h1>

          <div className="space-y-24">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
              >
                <Link to={`/projects/${project.id}`} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      width={1920}
                      height={1080}
                      className="w-full aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="mt-6">
                    <h2 className="font-display text-2xl md:text-4xl font-light">{project.title}</h2>
                    <p className="font-body text-xs tracking-widest uppercase text-muted-foreground mt-2">
                      {project.year} — {project.location}
                    </p>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-4 max-w-2xl">
                      {project.description.slice(0, 200)}…
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
