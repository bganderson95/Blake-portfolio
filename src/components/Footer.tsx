export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner container">
        <div className="footer-identity">
          <span className="footer-name">Blake Anderson</span>
          <span className="footer-role">Software Engineer</span>
        </div>
        <nav className="footer-links" aria-label="Footer links">
          <a href="mailto:bganderson95@gmail.com">bganderson95@gmail.com</a>
          <a
            href="https://github.com/bganderson95"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="/Blake_Anderson_Resume_Design_Engineering.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>
        <p className="footer-copy">© {new Date().getFullYear()} Blake Anderson</p>
      </div>
    </footer>
  )
}
