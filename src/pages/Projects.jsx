import { useState } from "react";
import { projects } from "../data/projects.js";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects() {
  const [query, setQuery] = useState("");

  
  const normalized = query.trim().toLowerCase();
  const visible = projects.filter((p) =>
    `${p.title} ${p.category} ${p.technologies.join(" ")}`
      .toLowerCase()
      .includes(normalized));

  return (
    <section>
      <h1>Projects</h1>
      <label htmlFor="project-search">Filter by title, category, or skill</label>
      <input
        id="project-search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <p role="status">{visible.length} project(s) found</p>
      {visible.length ? (
        <div className="grid">
          {visible.map((p) => <ProjectCard key={p.slug} project={p} />)}
        </div>
      ) : (
        <p>No projects match. Try another search.</p>
      )}
    </section>
  );
}
