import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import type { Technology } from "../../types/technology";
import StackSidebar from "../StackSidebar/StackSidebar";
import TechnologyCard from "../TechnologyCard/TechnologyCard";

function Technologies() {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/technologies.json")
      .then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  const addToStack = (tech: Technology) => {
    const alreadyAdded = stack.find((item) => item.id === tech.id);

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack`);
      return;
    }

    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack`);
  };

  const removeFromStack = (id: string) => {
    const item = stack.find((tech) => tech.id === id);
    setStack(stack.filter((tech) => tech.id !== id));
    toast.info(`${item?.name} removed from your stack`);
  };

  const removeAll = () => {
    setStack([]);
    toast.info("All technologies removed from your stack");
  };

  return (
    <section id="technologies" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold mb-3">
        Explore <span className="brand-text">Technologies</span>
      </h2>
      <p className="text-base-content/70 mb-8">
        Browse tools and add them to your stack.
      </p>

      {loading ? (
        <p>Loading technologies...</p>
      ) : (
        <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <TechnologyCard
                key={tech.id}
                tech={tech}
                added={stack.some((item) => item.id === tech.id)}
                onAdd={addToStack}
              />
            ))}
          </div>

          <StackSidebar
            stack={stack}
            onRemove={removeFromStack}
            onRemoveAll={removeAll}
          />
        </div>
      )}
    </section>
  );
}

export default Technologies;
