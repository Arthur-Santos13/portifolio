export interface Project {
    id: number;
    name: string;
    description: string;
    tags: string[];
    language: string;
    githubUrl: string;
    liveUrl?: string;
    featured: boolean;
}

