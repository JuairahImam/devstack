function Footer() {
  return (
    <footer className="bg-base-100 border-t border-base-300">
      <div className="footer sm:footer-horizontal max-w-7xl mx-auto px-4 py-12">
        <aside>
          <img src="/logo-text.png" alt="Dev Stack" className="h-10 w-auto" />
          <p className="max-w-xs mt-2 text-base-content/70">
            Pick modern tools, save your stack, and start building faster.
          </p>
          <div className="flex gap-3 mt-2">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              GitHub
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              Twitter
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="link link-hover"
            >
              LinkedIn
            </a>
          </div>
        </aside>

        <nav>
          <h6 className="footer-title">Product</h6>
          <a href="#technologies" className="link link-hover">
            Technologies
          </a>
          <a href="#technologies" className="link link-hover">
            Your Stack
          </a>
          <a href="#projects" className="link link-hover">
            Projects
          </a>
        </nav>

        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="#about" className="link link-hover">
            About
          </a>
          <a href="#contact" className="link link-hover">
            Contact
          </a>
          <a href="#home" className="link link-hover">
            Careers
          </a>
        </nav>

        <nav>
          <h6 className="footer-title">Legal</h6>
          <a href="#contact" className="link link-hover">
            Privacy
          </a>
          <a href="#contact" className="link link-hover">
            Terms
          </a>
          <a href="#contact" className="link link-hover">
            Cookies
          </a>
        </nav>
      </div>

      <div className="border-t border-base-300">
        <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between gap-2 text-sm text-base-content/70">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#contact" className="link link-hover">
              Privacy
            </a>
            <a href="#contact" className="link link-hover">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
