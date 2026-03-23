import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import { projects } from "@/lib/artworkData";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div className="pt-28 px-6 md:px-12 text-center">
          <p className="text-muted-foreground">Project not found.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="pt-24 pb-16">
        <div className="px-6 md:px-12 mb-8">
          <Link to="/projects" className="inline-flex items-center gap-2 font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft size={14} /> Back to Projects
          </Link>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <img src={project.image} alt={project.title} className="w-full max-h-[70vh] object-cover" width={1920} height={1080} />
        </motion.div>

        <div className="px-6 md:px-12 mt-12 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
            <h1 className="font-display text-3xl md:text-5xl font-light">{project.title}</h1>
            <div className="mt-4 space-y-1">
              <p className="font-body text-sm text-muted-foreground">{project.year}</p>
              <p className="font-body text-sm text-muted-foreground">{project.location}</p>
            </div>

            {project.artists && project.artists.length > 0 && (
              <div className="mt-6">
                <h4 className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2">Artists</h4>
                <p className="font-body text-sm">{project.artists.join(", ")}</p>
              </div>
            )}

            <p className="font-body text-sm leading-relaxed mt-8">{project.description}</p>

            {project.sections?.map((section, i) => (
              <div key={i} className="mt-10">
                <h3 className="font-display text-xl font-light mb-3">{section.heading}</h3>
                <p className="font-body text-sm leading-relaxed text-muted-foreground">{section.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectDetail;
