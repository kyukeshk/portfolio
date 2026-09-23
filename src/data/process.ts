import { ProcessStep } from '../types/portfolio';

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "CONCEPT",
    tagline: "Vision & Creative Direction",
    description: "Aligning on narrative goals, moodboards, pacing references, and sonic inspiration to establish the project's visual soul.",
    deliverable: "Creative Brief & Mood Board"
  },
  {
    number: "02",
    title: "PLAN",
    tagline: "Asset Assembly & Structure",
    description: "Organizing raw footage, reviewing takes, logging audio stems, creating timeline bins, and drafting the initial story arc.",
    deliverable: "Story Outline & Asset Bin Structure"
  },
  {
    number: "03",
    title: "EDIT",
    tagline: "The Assembly & Rough Cut",
    description: "Building the rough cut with laser focus on rhythm, pacing, emotional beats, and seamless scene transitions.",
    deliverable: "First Cut Review (v1.0)"
  },
  {
    number: "04",
    title: "DESIGN",
    tagline: "Motion Graphics & Kinetic VFX",
    description: "Injecting animated typography, 2D/3D elements, title cards, tracked screen overlays, and visual effects.",
    deliverable: "Motion Sequences & Graphic Inserts"
  },
  {
    number: "05",
    title: "REFINE",
    tagline: "Color Grading & Sound Design",
    description: "Transforming the color palette with cinematic film emulation, foley sound effects, dialogue cleanup, and audio mastering.",
    deliverable: "Picture-Locked Fine Cut"
  },
  {
    number: "06",
    title: "DELIVER",
    tagline: "Export & Multi-Format Master",
    description: "Exporting optimized multi-format deliverables (16:9 4K master, 9:16 vertical reels, ProRes archive, and social cuts).",
    deliverable: "Final Masters & Platform Archives"
  }
];
