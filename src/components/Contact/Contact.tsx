function Contact() {
  return (
    <section id="contact" className="bg-base-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-3">
          Get in <span className="brand-text">Touch</span>
        </h2>
        <p className="text-base-content/70 max-w-2xl">
          Questions about a tool or the site? Email{" "}
          <a href="mailto:hello@devstack.app" className="link">
            hello@devstack.app
          </a>{" "}
          or open an issue on GitHub. We usually reply within two days.
        </p>
      </div>
    </section>
  );
}

export default Contact;
