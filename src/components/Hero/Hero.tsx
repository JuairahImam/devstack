function Hero() {
  return (
    <section id="home" className="bg-base-100">
      <div className="max-w-7xl mx-auto px-4 py-16 lg:py-24 grid gap-12 lg:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Build Your <span className="brand-text">Perfect Dev Stack</span>
          </h1>
          <p className="mt-5 text-base-content/70 max-w-xl text-lg">
            Compare modern tools, pick what fits your next project, and save a
            stack you can actually ship with. Frontend, backend, databases, and
            DevOps — all in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#technologies" className="btn btn-brand rounded-full px-6">
              Explore Technologies
            </a>
            <a href="#about" className="btn btn-outline rounded-full px-6">
              Learn More
            </a>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/banner-stack.png"
            alt="A layered development stack"
            className="w-full max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
