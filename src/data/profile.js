// Content taken from Mathew Shereni's 2026 resume.
// Phone number intentionally omitted from the public site.

export const profile = {
  name: "Mathew Shereni",
  role: "Software Engineer & DevOps Practitioner",
  location: "Saint Louis, MO, USA",
  summary:
    "Software engineer and DevOps practitioner with experience building backend systems, automating infrastructure, and leading open-source development. Currently pursuing an M.S. in Software Engineering at Saint Louis University while serving as Tech Lead for an OSS-SLU program. Oracle Certified Java Programmer and Oracle Cloud Infrastructure Associate with hands-on experience in Spring Boot, Docker, Kubernetes, AWS, Azure, and CI/CD pipelines, comfortable owning both backend architecture decisions and deployment infrastructure in fast-moving environments.",
  email: "mashereni@gmail.com",
  github: "https://github.com/MATHEW-SHERENI",
  linkedin: "https://www.linkedin.com/in/mathew-shereni-213130aa/",
  website: "https://mathewshereni.com",
};

export const education = [
  {
    id: "slu-ms-se",
    title: "Master of Science in Software Engineering",
    org: "Saint Louis University",
    location: "Saint Louis, MO, USA",
    period: "Aug 2025 – May 2027",
  },
  {
    id: "msu-ms-ism",
    title: "Master's in Information Systems Management",
    org: "Midlands State University",
    location: "Zimbabwe",
    period: "Feb 2023 – Jun 2024",
  },
  {
    id: "zou-bit",
    title: "Bachelor of Information Technology (Honors)",
    org: "Zimbabwe Open University",
    location: "Zimbabwe",
    period: "Jan 2018 – Jun 2022",
  },
];

export const experience = [
  {
    id: "oss-slu-tech-lead",
    title: "Tech Lead, Open-Source Program",
    org: "Saint Louis University – OSS-SLU",
    location: "Saint Louis, MO, USA",
    period: "Dec 2025 – Present",
    points: [
      "Lead backend development across open-source projects, driving architectural decisions that prioritize reliability, scalability, and maintainability.",
      "Own CI/CD integration and process improvements to streamline code quality, testing, and deployment workflows for the contributor community.",
      "Coordinate contributor onboarding and establish collaborative team rituals to support sustainable, long-term project growth.",
      "Maintain and improve open-source software repositories under the OSS-SLU program, ensuring clear documentation and stable releases.",
    ],
  },
  {
    id: "acol-it-officer",
    title: "IT Officer",
    org: "ACOL Chemical Holdings",
    location: "Zimbabwe",
    period: "Mar 2022 – Jan 2025",
    points: [
      "Managed IT infrastructure across production environments, enforcing security standards and maintaining system reliability.",
      "Automated backup and recovery processes to ensure data integrity across critical business systems.",
      "Developed and deployed a company website, configuring secure hosting, monitoring, and ongoing maintenance.",
      "Delivered technical training to staff on new tools, secure workflows, and IT best practices.",
    ],
  },
];

export const skillGroups = [
  { name: "Languages", items: ["Java (Oracle Certified)", "Python", "C#", "SQL", "JavaScript/TypeScript", "Node"] },
  { name: "Frameworks", items: ["Spring Boot", "Angular", "React"] },
  { name: "DevOps & Cloud", items: ["Docker", "Kubernetes", "AWS", "Azure", "Oracle Cloud", "CI/CD (GitHub Actions, Jenkins)", "IaC"] },
  { name: "Databases", items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase"] },
  { name: "Soft Skills", items: ["Team leadership", "Mentoring", "Communication", "Process improvement"] },
];

export const certifications = [
  "AWS Certified Solutions Architect - Associate",
  "Oracle Certified Java Programmer",
  "Oracle Cloud Infrastructure Associate",
  "Foundational C# with Microsoft",
];
