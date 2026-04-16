import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/now";
import Paintings from "./pages/paintings.jsx";
import PaintingDetail from "./pages/paintingDetail";
import VideoInstallation from "./pages/videoInstallation.jsx";
import HeatMapQueens from "./pages/heatMapQueens";
import WaysOfShowingUp from "./pages/waysOfShowingUp";
import Prints from "./pages/prints";
import PrintDetail from "./pages/printDetail";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/artwork/paintings" element={<Paintings />} />
          <Route path="/artwork/paintings/:id" element={<PaintingDetail />} />
          <Route path="/artwork/prints" element={<Prints />} />
          <Route path="/artwork/prints/:id" element={<PrintDetail />} />
          <Route path="/artwork/video-installation" element={<VideoInstallation />} />
          <Route path="/artwork/video-installation/heat-map-queens" element={<HeatMapQueens />} />
          <Route path="/artwork/video-installation/ways-of-showing-up" element={<WaysOfShowingUp />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
