import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Work from "./pages/Work";
import ArtworkDetail from "./pages/ArtworkDetail";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Curation from "./pages/Curation";
import Video from "./pages/Video";
import About from "./pages/About";
import Collaborations from "./pages/Collaborations";
import Texts from "./pages/Texts";
import News from "./pages/News";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:category" element={<Work />} />
          <Route path="/artwork/:id" element={<ArtworkDetail />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/curation" element={<Curation />} />
          <Route path="/video" element={<Video />} />
          <Route path="/collaborations" element={<Collaborations />} />
          <Route path="/texts" element={<Texts />} />
          <Route path="/news" element={<News />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
