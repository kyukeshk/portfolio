export interface Project {
  id: string;
  title: string;
  category: 'Presentation Video' | 'Motion Graphics' | 'Social Media Reel' | 'Selected Work';
  subCategory?: string;
  year: string;
  duration?: string;
  role: string;
  client?: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  aspectRatio?: '16:9' | '9:16' | '4:5' | '1:1';
  tools?: string[];
  featured?: boolean;
}

export interface ReelProject {
  id: string;
  title: string;
  views?: string;
  client?: string;
  year: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  tag: string;
}

export interface GraphicDesignItem {
  id: string;
  title: string;
  category: 'Poster' | 'Event Graphics' | 'Social Media' | 'Brand Identity' | 'Photo Manipulation' | 'Campaign Artwork';
  year: string;
  image: string;
  aspect: 'portrait' | 'landscape' | 'square' | 'tall';
  description: string;
  client?: string;
}

export interface SoftwareTool {
  id: string;
  name: string;
  shortName: string;
  category: string;
  description: string;
  icon: string;
  highlight: string;
}

export interface SkillItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  previewMedia: string;
  mediaType: 'image' | 'video';
}

export interface ProcessStep {
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverable: string;
}

export interface BeforeAfterItem {
  id: string;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeLabel: string;
  afterLabel: string;
}

export interface ProfileData {
  name: string;
  displayName: string;
  shortBio: string;
  statement: {
    lead: string;
    highlight: string;
    tail: string;
    paragraph: string;
  };
  detailedBio: string[];
  location: string;
  availableFor: string;
  stats: {
    value: number;
    suffix: string;
    label: string;
  }[];
  socials: {
    name: string;
    label: string;
    url: string;
  }[];
  email: string;
}
