function App() {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-6">
      <div className="card bg-base-100 shadow-xl max-w-lg w-full">
        <div className="card-body items-center text-center gap-4">
          <h1 className="text-4xl font-bold brand-text">Dev Stack</h1>
          <p className="text-base-content/70">
            Setup is ready. This is not the assignment UI yet — start building
            from here.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="badge badge-outline">Vite</span>
            <span className="badge badge-outline">React</span>
            <span className="badge badge-outline">TypeScript</span>
            <span className="badge badge-outline">Tailwind</span>
            <span className="badge badge-outline">DaisyUI</span>
            <span className="badge badge-outline">Toastify</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
