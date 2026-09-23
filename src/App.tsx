import React, { useState } from 'react';
import { CursorProvider } from './context/CursorContext';
import { CustomCursor } from './components/common/CustomCursor';
import { Navbar } from './components/common/Navbar';
import { VideoModal } from './components/common/VideoModal';
import { ProjectModal } from './components/common/ProjectModal';
import { Hero } from './components/sections/Hero';
import { Statement } from './components/sections/Statement';
import { About } from './components/sections/About';
import { Expertise } from './components/sections/Expertise';
import { Software } from './components/sections/Software';
import { ContentCategories } from './components/sections/ContentCategories';
import { PresentationVideos } from './components/sections/PresentationVideos';
import { Reels } from './components/sections/Reels';
import { MotionGraphics } from './components/sections/MotionGraphics';
import { GraphicDesign } from './components/sections/GraphicDesign';
import { BeforeAfter } from './components/sections/BeforeAfter';
import { Process } from './components/sections/Process';
import { SelectedWork } from './components/sections/SelectedWork';
import { Showreel } from './components/sections/Showreel';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { useLenis } from './hooks/useLenis';
import { Project } from './types/portfolio';
import { showreelData } from './data/projects';

export const AppContent: React.FC = () => {
  useLenis();

  // Video Modal State
  const [videoModal, setVideoModal] = useState<{
    isOpen: boolean;
    videoUrl: string;
    title: string;
    category?: string;
  }>({
    isOpen: false,
    videoUrl: '',
    title: '',
    category: '',
  });

  // Project Modal State
  const [projectModal, setProjectModal] = useState<{
    isOpen: boolean;
    project: Project | null;
  }>({
    isOpen: false,
    project: null,
  });

  const handleOpenVideo = (videoUrl: string, title: string, category?: string) => {
    setVideoModal({
      isOpen: true,
      videoUrl,
      title,
      category,
    });
  };

  const handleOpenProject = (project: Project) => {
    setProjectModal({
      isOpen: true,
      project,
    });
  };

  return (
    <div className="relative min-h-screen bg-[#F7F7F5] text-[#111111] overflow-x-hidden">
      {/* Subtle Noise Texture Overlay */}
      <div className="noise-overlay" />

      {/* Interactive Custom Cursor (Desktop) */}
      <CustomCursor />

      {/* Global Architectural Navbar */}
      <Navbar />

      {/* 16 Sequential Editorial Sections */}
      <main>
        <Hero />
        <Statement />
        <About />
        {/* <Expertise /> */}
        <Software />
        <ContentCategories />
        <PresentationVideos
          onSelectVideo={handleOpenVideo}
          onOpenProject={handleOpenProject}
        />
        <Reels onSelectVideo={handleOpenVideo} />
        <MotionGraphics onSelectVideo={handleOpenVideo} />
        <GraphicDesign />
        <BeforeAfter />
        <Process />
        {/* <SelectedWork
          onOpenProject={handleOpenProject}
          onPlayVideo={handleOpenVideo}
        /> */}
        <Showreel
          onPlayShowreel={() =>
            handleOpenVideo(showreelData.videoUrl, showreelData.title, '2026 Showreel')
          }
        />
        <Contact />
      </main>

      <Footer />

      {/* Fullscreen Video Player Modal */}
      <VideoModal
        isOpen={videoModal.isOpen}
        videoUrl={videoModal.videoUrl}
        title={videoModal.title}
        category={videoModal.category}
        onClose={() => setVideoModal((prev) => ({ ...prev, isOpen: false }))}
      />

      {/* Fullscreen Project Archive Modal */}
      <ProjectModal
        isOpen={projectModal.isOpen}
        project={projectModal.project}
        onClose={() => setProjectModal((prev) => ({ ...prev, isOpen: false }))}
        onPlayVideo={(videoUrl, title) => handleOpenVideo(videoUrl, title, projectModal.project?.category)}
      />
    </div>
  );
};

export default function App() {
  return (
    <CursorProvider>
      <AppContent />
    </CursorProvider>
  );
}
