// Reusable card for one education or experience entry, passed in as a prop.
export default function ExperienceCard({ item }) {
  return (
    <article className="card">
      <h3>{item.title}</h3>
      <p className="meta">
        {item.org} · {item.location} · {item.period}
      </p>
      {item.points && (
        <ul>
          {item.points.map((point) => <li key={point}>{point}</li>)}
        </ul>
      )}
    </article>
  );
}
