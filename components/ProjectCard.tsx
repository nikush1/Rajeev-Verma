import Link from 'next/link';
import { ArrowUpRight, Film } from 'lucide-react';
import type { Project } from '@/lib/projects';

export default function ProjectCard({ project, index = 0 }: { project: Project; index?: number }) {
  return (
    <Link
      className={`project-card project-card-tone-${index % 6}`}
      href={`/work/${project.slug}`}
      style={{ animationDelay: `${Math.min(index % 4, 3) * 70}ms` }}
    >
      <div className="project-thumb" aria-hidden="true">
        <div className="project-art">
          <span className="project-art-label">PROJECT · {String(index + 1).padStart(2, '0')}</span>
          <span className="project-art-shape" />
          <span className="project-art-shape project-art-shape-secondary" />
          <div className="project-art-copy">
            <Film size={18} strokeWidth={1.5} />
            <span>{project.title}</span>
          </div>
          <span className="project-art-category">{project.category}</span>
        </div>
        <span className="card-arrow"><ArrowUpRight size={18} /></span>
      </div>
      <div className="project-card-meta">
        <div>
          <h3>{project.title}</h3>
          <p>{project.category}</p>
        </div>
        <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
      </div>
    </Link>
  );
}
