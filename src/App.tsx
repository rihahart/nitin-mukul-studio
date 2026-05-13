import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/now";
import Paintings from "./pages/paintings.jsx";
import PaintingDetail from "./pages/paintingDetail";
import VideoInstallation from "./pages/videoInstallation.jsx";
import YouWereHere from "./pages/youWereHere";
import WaysOfShowingUp from "./pages/waysOfShowingUp";
import HeatMapQueens from "./pages/heatMapQueens";
import HeatMapWinterSolstice from "./pages/heatMapWinterSolstice";
import HeatMapGuwahati from "./pages/heatMapGuwahati";
import Searise from "./pages/searise";
import BlueLake from "./pages/blueLake";
import SuperBloom from "./pages/superBloom";
import Crater from "./pages/crater";
import Anemone from "./pages/anemone";
import Drawings from "./pages/drawings";
import DrawingDetail from "./pages/drawingDetail";
import PhotoBased from "./pages/photoBased";
import Cyanotypes from "./pages/cyanotypes";
import Fluxus from "./pages/fluxus";
import Microhabitats from "./pages/microhabitats";
import Prints from "./pages/prints";
import PrintDetail from "./pages/printDetail";
import Bio from "./pages/bio";
import Epicenter from "./pages/epicenter";
import News from "./pages/news";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artwork/paintings" element={<Paintings />} />
          <Route path="/artwork/paintings/:id" element={<PaintingDetail />} />
          <Route path="/artwork/prints" element={<Prints />} />
          <Route path="/artwork/prints/:id" element={<PrintDetail />} />
          <Route path="/artwork/video-installation" element={<VideoInstallation />} />
          <Route path="/artwork/video-installation/you-were-here" element={<YouWereHere />} />
          <Route path="/artwork/video-installation/ways-of-showing-up" element={<WaysOfShowingUp />} />
          <Route path="/artwork/video-installation/heat-map-queens" element={<HeatMapQueens />} />
          <Route path="/artwork/video-installation/heat-map-winter-solstice" element={<HeatMapWinterSolstice />} />
          <Route path="/artwork/video-installation/heat-map-guwahati" element={<HeatMapGuwahati />} />
          <Route path="/artwork/video-installation/searise" element={<Searise />} />
          <Route path="/artwork/video-installation/blue-lake" element={<BlueLake />} />
          <Route path="/artwork/video-installation/super-bloom" element={<SuperBloom />} />
          <Route path="/artwork/video-installation/crater" element={<Crater />} />
          <Route path="/artwork/video-installation/anemone" element={<Anemone />} />
          <Route path="/artwork/drawings" element={<Drawings />} />
          <Route path="/artwork/drawings/:id" element={<DrawingDetail />} />
          <Route path="/artwork/photo-based" element={<PhotoBased />} />
          <Route path="/artwork/photo-based/cyanotypes" element={<Cyanotypes />} />
          <Route path="/artwork/photo-based/fluxus" element={<Fluxus />} />
          <Route path="/artwork/photo-based/microhabitats" element={<Microhabitats />} />
          <Route path="/being" element={<Bio />} />
          <Route path="/epicenter" element={<Epicenter />} />
          <Route path="/press" element={<News />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
