const projects = [
  {
    title: "Project Alpha",
    description: "A 3D action adventure game built with Unreal Engine 5.",
    link: "https://github.com/mahdiarshoraka/ProjectAlpha_Source",
  },
  {
    title: "YelpCamp",
    description:
      "A full-stack app for reviewing campgrounds, built with Node.js and MongoDB.",
    link: "https://github.com/mahdiarshoraka/YelpCamp",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="Projects"
      style={{ padding: "4rem 2rem", textAlign: "center" }}
    >
      <h2>My Projects</h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {projects.map((project, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "1.5rem",
              maxWidth: "300px",
            }}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
