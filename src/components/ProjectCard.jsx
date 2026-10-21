import { Link } from "react-router";

export default function ProjectCard({ project }) {
  return (
    <article className="card">
      <h2>
        <Link to={`/projects/${project.slug}`}>{project.title}</Link>
      </h2>
      <p>{project.summary}</p>
      <p className="meta">{project.category} | {project.technologies.join(", ")}</p>
    </article>
  );
}
