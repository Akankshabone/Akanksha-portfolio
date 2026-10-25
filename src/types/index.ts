export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'rag-agentic' | 'generative-ai' | 'machine-learning';
  duration: string;
  problemStatement: string;
  solutionObjective: string;
  keyFeatures: string[];
  myContribution: string[];
  techStack: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
  architectureDetails?: {
    pipelineSteps: { title: string; desc: string; tech: string }[];
    dataSources: string[];
    retrievalType: string;
  };
}

export interface SkillItem {
  name: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  icon: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  duration: string;
  type: string;
  responsibilities: string[];
  toolsUsed: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  duration: string;
  score?: string;
  status?: string;
  highlights?: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: string;
  badge?: string;
}

export interface ValueProposition {
  title: string;
  description: string;
  icon: string;
  impact: string;
}
