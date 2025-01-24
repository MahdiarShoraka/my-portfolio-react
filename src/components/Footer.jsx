const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#222",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
      }}
    >
      <p>© {new Date().getFullYear()} [Your Name]. All Rights Reserved.</p>
      <p>
        Follow me on{" "}
        <a
          href="https://github.com/your-github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://linkedin.com/in/your-linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
};

export default Footer;
