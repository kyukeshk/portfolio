import { Project, ReelProject } from '../types/portfolio';

export const presentationVideos: Project[] = [
  {
    id: "pres-01",
    title: "SMART TAX: ITR MADE SIMPLE",
    category: "Presentation Video",
    subCategory: "Tax & ITR Explainer",
    year: "2026",
    duration: "02:14",
    role: "Lead Editor / Motion Design",
    client: "FinTax Solutions",
    description:
      "A clear and engaging presentation video explaining income tax and ITR filing through clean motion graphics, step-by-step visuals, and simplified financial concepts designed to make tax-related information easy to understand.",
    thumbnail: "/assets/images/automotive_reel.jpg",
    videoUrl: "/assets/videos/Presentation_video_1.mp4",
    aspectRatio: "16:9",
    tools: ["Premiere Pro", "After Effects", "Photoshop"]
  },

  {
    id: "pres-02",
    title: "NEXUS DISPLAY: EXPERIENCE THE SCREEN",
    category: "Presentation Video",
    subCategory: "Product Presentation",
    year: "2026",
    duration: "01:45",
    role: "Motion Design / Editing",
    client: "Nexus Technologies",
    description:
      "A sleek product presentation showcasing an advanced display screen through detailed product shots, feature highlights, animated specifications, and smooth transitions designed to communicate the product experience with clarity and impact.",
    thumbnail: "/assets/images/motion_graphics.jpg",
    videoUrl: "/assets/videos/Presentation_video_2.mp4",
    aspectRatio: "16:9",
    tools: ["After Effects", "Premiere Pro", "Photoshop"]
  },

  {
    id: "pres-03",
    title: "LUMIÈRE: SKINCARE REDEFINED",
    category: "Presentation Video",
    subCategory: "Beauty Product Showcase",
    year: "2025",
    duration: "03:10",
    role: "Visual Storyteller / Editor",
    client: "Lumière Skincare",
    description:
      "A premium skincare presentation introducing a face cream through elegant product visuals, ingredient-focused animations, soft transitions, and cinematic beauty shots that highlight the product's texture, experience, and brand identity.",
    thumbnail: "/assets/images/color_grade_after.jpg",
    videoUrl: "/assets/videos/Presentation_video_3.mp4",
    aspectRatio: "16:9",
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"]
  }
];

export const reelsData: ReelProject[] = [
  {
    id: "reel-01",
    title: "TRIP GANG",
    views: "1.2M",
    client: "Self Project",
    year: "2026",
    duration: "00:32",
    thumbnail: "/assets/images/automotive_reel.jpg",
    videoUrl: "/assets/videos/Reel_video_1.mp4",
    tag: "TRIP / PLANNING"
  },
  {
    id: "reel-02",
    title: "MOTION ANIMATIONS",
    views: "850K",
    client: "Self Project",
    year: "2026",
    duration: "00:19",
    thumbnail: "/assets/images/color_grade_after.jpg",
    videoUrl: "/assets/videos/Reel_video_2.mp4",
    tag: "COLOR SCIENCE"
  },
  {
    id: "reel-03",
    title: "EDITOR PROCESS",
    views: "430K",
    client: "Self Project",
    year: "2026",
    duration: "00:15",
    thumbnail: "/assets/images/poster_design.jpg",
    videoUrl: "/assets/videos/Reel_video_3.mp4",
    tag: "MOTION / ANIMATION"
  },
  {
    id: "reel-04",
    title: "NATURAL REEL",
    views: "610K",
    client: "Self Project",
    year: "2025",
    duration: "00:21",
    thumbnail: "/assets/images/secondary_portrait.jpg",
    videoUrl: "/assets/videos/Reel_video_4.mp4",
    tag: "FATHER LOVE"
  }
];

export const motionGraphicsProjects: Project[] = [
  {
    id: "motion-01",
    title: "ETERNAL MOMENTS: A WEDDING STORY",
    category: "Motion Graphics",
    subCategory: "Wedding Film & Transitions",
    year: "2026",
    duration: "00:48",
    role: "Wedding Editor / Transition Design",
    client: "Moments & Memories",
    description:
      "A cinematic wedding edit crafted with seamless transition effects, rhythmic cuts, elegant motion elements, and carefully timed music to transform memorable wedding moments into a visually engaging story.",
    thumbnail: "/assets/images/motion_graphics.jpg",
    videoUrl: "/assets/videos/Traditional_video_1.mp4",
    aspectRatio: "16:9",
    tools: ["Premiere Pro", "After Effects", "Photoshop"]
  },

  {
    id: "motion-02",
    title: "TOGETHER: FAMILY MOMENTS",
    category: "Motion Graphics",
    subCategory: "Family Event Highlights",
    year: "2026",
    duration: "01:05",
    role: "Event Editor / Visual Storyteller",
    client: "Moments & Memories",
    description:
      "A warm family function highlight capturing candid interactions, celebrations, laughter, and memorable moments through smooth transitions, emotional pacing, and cinematic storytelling.",
    thumbnail: "/assets/images/automotive_reel.jpg",
    videoUrl: "/assets/videos/Traditional_video_2.mp4",
    aspectRatio: "16:9",
    tools: ["Premiere Pro", "After Effects"]
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
  duration: "02:45",
  year: "2026",
  tagline: "A clear and engaging presentation video explaining income tax and ITR filing through clean motion graphics, step-by-step visuals, and simplified financial concepts designed to make tax-related information easy to understand.",
  videoUrl: "/assets/videos/Presentation_video_1.mp4",
  poster: "/assets/images/work_thumbnail.png"
};
