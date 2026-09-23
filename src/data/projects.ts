import { Project, ReelProject } from '../types/portfolio';

export const presentationVideos: Project[] = [
  {
    id: "pres-01",
    title: "NEO TOKYO: ARCHITECTURAL ESSENCE",
    category: "Presentation Video",
    subCategory: "Keynote & Brand Film",
    year: "2026",
    duration: "02:14",
    role: "Lead Editor / Sound Design",
    client: "Studio Kanso",
    description: "An immersive brand keynote showcasing brutalist Japanese architecture, balanced pacing, and ambient sound design designed for high-resolution LED stage projection.",
    thumbnail: "/assets/images/automotive_reel.jpg",
    videoUrl: "/assets/videos/presentation-01.mp4",
    aspectRatio: "16:9",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"]
  },
  {
    id: "pres-02",
    title: "LUMINA: SOUND REINVENTED",
    category: "Presentation Video",
    subCategory: "Product Launch Showcase",
    year: "2026",
    duration: "01:45",
    role: "Motion Design / Editing",
    client: "Acoustic Labs",
    description: "High-octane product launch video combining 3D product CAD animations with dynamic split-screens and rhythm-locked acoustic percussion.",
    thumbnail: "/assets/images/motion_graphics.jpg",
    videoUrl: "/assets/videos/presentation-02.mp4",
    aspectRatio: "16:9",
    tools: ["After Effects", "Premiere Pro", "Photoshop"]
  },
  {
    id: "pres-03",
    title: "APEX HORIZON: ANNUAL VISION",
    category: "Presentation Video",
    subCategory: "Investor Presentation",
    year: "2025",
    duration: "03:10",
    role: "Visual Storyteller",
    client: "Apex Ventures",
    description: "Cinematic annual vision reel presenting company milestones through elegant infographic transitions, archival interview cuts, and orchestral crescendo.",
    thumbnail: "/assets/images/color_grade_after.jpg",
    videoUrl: "/assets/videos/presentation-01.mp4",
    aspectRatio: "16:9",
    tools: ["Premiere Pro", "After Effects"]
  }
];

export const reelsData: ReelProject[] = [
  {
    id: "reel-01",
    title: "CYBERPUNK CAR SPOT",
    views: "1.2M",
    client: "Porsche Enthusiasts",
    year: "2026",
    duration: "00:32",
    thumbnail: "/assets/images/automotive_reel.jpg",
    videoUrl: "/assets/videos/reel-01.mp4",
    tag: "AUTOMOTIVE / SPEED"
  },
  {
    id: "reel-02",
    title: "COLOR GRADE BREAKDOWN",
    views: "850K",
    client: "Cinema Craft",
    year: "2026",
    duration: "00:24",
    thumbnail: "/assets/images/color_grade_after.jpg",
    videoUrl: "/assets/videos/reel-02.mp4",
    tag: "COLOR SCIENCE"
  },
  {
    id: "reel-03",
    title: "KINETIC TYPOGRAPHY BEATS",
    views: "430K",
    client: "Indie Label",
    year: "2026",
    duration: "00:19",
    thumbnail: "/assets/images/poster_design.jpg",
    videoUrl: "/assets/videos/reel-01.mp4",
    tag: "MOTION / TYPOGRAPHY"
  },
  {
    id: "reel-04",
    title: "STUDIO ROUTINE & WORKFLOW",
    views: "610K",
    client: "Creator Spotlight",
    year: "2025",
    duration: "00:45",
    thumbnail: "/assets/images/secondary_portrait.jpg",
    videoUrl: "/assets/videos/reel-02.mp4",
    tag: "BEHIND THE SCENES"
  }
];

export const motionGraphicsProjects: Project[] = [
  {
    id: "motion-01",
    title: "PRISM: REFRACTED FUTURES",
    category: "Motion Graphics",
    subCategory: "3D Title Sequence",
    year: "2026",
    duration: "00:48",
    role: "3D Art Direction / Animation",
    client: "CineMorph",
    description: "An exploration of refractive caustics, chromatic aberration, and geometric typography floating in zero-gravity space.",
    thumbnail: "/assets/images/motion_graphics.jpg",
    videoUrl: "/assets/videos/motion-01.mp4",
    aspectRatio: "16:9",
    tools: ["After Effects", "Cinema 4D", "Photoshop"]
  },
  {
    id: "motion-02",
    title: "VELOCITY HUD INTERFACE",
    category: "Motion Graphics",
    subCategory: "Sci-Fi UI & HUD",
    year: "2026",
    duration: "01:05",
    role: "FUI Designer / Compositor",
    client: "Orbit Digital",
    description: "Intricate futuristic heads-up display graphics with animated data telemetry, vector maps, and holographic user interfaces.",
    thumbnail: "/assets/images/automotive_reel.jpg",
    videoUrl: "/assets/videos/presentation-01.mp4",
    aspectRatio: "16:9",
    tools: ["Illustrator", "After Effects"]
  }
];

export const selectedWorks: Project[] = [
  {
    id: "work-01",
    title: "BMW M-SERIES: NIGHT DRIVER",
    category: "Selected Work",
    subCategory: "Commercial Film",
    year: "2026",
    duration: "01:30",
    role: "Lead Editor / Colorist",
    client: "Automotive World",
    description: "A pulse-pounding midnight run through metropolitan rain, cut with relentless rhythm and graded with deep shadows, neon reflections, and analog grain.",
    thumbnail: "/assets/images/automotive_reel.jpg",
    videoUrl: "/assets/videos/showreel.mp4",
    aspectRatio: "16:9",
    tools: ["Premiere Pro", "DaVinci Resolve", "After Effects"],
    featured: true
  },
  {
    id: "work-02",
    title: "SWISS KINETIC FESTIVAL",
    category: "Selected Work",
    subCategory: "Motion Identity",
    year: "2026",
    duration: "00:55",
    role: "Motion Designer / Art Director",
    client: "AG Cinema Festival",
    description: "Brutalist Swiss poster concepts brought to life through kinetic typography, screen printing simulations, and heavy bass sound design.",
    thumbnail: "/assets/images/poster_design.jpg",
    videoUrl: "/assets/videos/presentation-02.mp4",
    aspectRatio: "16:9",
    tools: ["After Effects", "Illustrator", "Photoshop"],
    featured: true
  },
  {
    id: "work-03",
    title: "CHRONICLES OF RAIN",
    category: "Selected Work",
    subCategory: "Narrative Short",
    year: "2025",
    duration: "02:40",
    role: "Editor / Sound Designer",
    client: "Independent Cinema",
    description: "An introspective cinematic portrait of solitude in urban rain, focused on emotional resonance, micro-expressions, and atmospheric score pacing.",
    thumbnail: "/assets/images/color_grade_after.jpg",
    videoUrl: "/assets/videos/presentation-01.mp4",
    aspectRatio: "16:9",
    tools: ["Premiere Pro", "DaVinci Resolve"],
    featured: true
  },
  {
    id: "work-04",
    title: "CRYSTALLINE DREAMS",
    category: "Selected Work",
    subCategory: "3D Experimental",
    year: "2026",
    duration: "01:10",
    role: "3D Motion Artist",
    client: "Voxel Gallery",
    description: "Abstract exploration of light dispersion through crystalline geometric forms, featuring delicate procedural animations and tactile textures.",
    thumbnail: "/assets/images/motion_graphics.jpg",
    videoUrl: "/assets/videos/motion-01.mp4",
    aspectRatio: "16:9",
    tools: ["After Effects", "Photoshop"],
    featured: true
  }
];

export const showreelData = {
  title: "WATCH THE WORK.",
  duration: "01:24",
  year: "2026",
  tagline: "A collection of editorial highlights, motion sequences, and cinematic frames from 2024 to 2026.",
  videoUrl: "/assets/videos/showreel.mp4",
  poster: "/assets/images/automotive_reel.jpg"
};
