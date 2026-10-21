import { Link } from "react-router";
import ExperienceCard from "../components/ExperienceCard.jsx";
import {
  profile, education, experience, skillGroups, certifications,
} from "../data/profile.js";

export function Home() {
  return (
    <section>
      <h1>{profile.name}</h1>
      <p className="tagline">{profile.role} · {profile.location}</p>
      <p>{profile.summary}</p>
      <Link to="/projects">Explore my projects</Link>
    </section>
  );
}

export function Experience() {
  return (
    <section>
      <h1>Experience</h1>

      <h2>Work experience</h2>
      {experience.map((job) => <ExperienceCard key={job.id} item={job} />)}

      <h2>Education</h2>
      {education.map((school) => <ExperienceCard key={school.id} item={school} />)}

      <h2>Skills</h2>
      <dl className="skills">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <dt>{group.name}</dt>
            <dd>{group.items.join(", ")}</dd>
          </div>
        ))}
      </dl>

      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert) => <li key={cert}>{cert}</li>)}
      </ul>
    </section>
  );
}

export function Contact() {
  return (
    <section>
      <h1>Contact</h1>
      <p>I'm based in {profile.location}. The best ways to reach me or see more of my work:</p>
      <ul>
        <li>Email: <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
        <li>GitHub: <a href={profile.github}>{profile.github}</a></li>
        <li>LinkedIn: <a href={profile.linkedin}>{profile.linkedin}</a></li>
        <li>Website: <a href={profile.website}>{profile.website}</a></li>
      </ul>
    </section>
  );
}

export function NotFound() {
  return (
    <section>
      <h1>Page not found</h1>
      <p>That page doesn't exist.</p>
      <Link to="/">Return home</Link>
    </section>
  );
}
