import type { Technology } from "../../types/technology";

function TechnologyCard({
  tech,
  added,
  onAdd,
}: {
  tech: Technology;
  added: boolean;
  onAdd: (tech: Technology) => void;
}) {
  return (
    <div className="card bg-base-100 border border-base-300 shadow-sm">
      <div className="card-body">
        <div className="flex justify-between items-start">
          <img src={tech.icon} alt={tech.name} className="w-12 h-12" />
          <span className="badge text-white brand-gradient border-0">
            {tech.badge}
          </span>
        </div>

        <h3 className="card-title mt-2">{tech.name}</h3>
        <p className="text-sm text-base-content/70">{tech.description}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="badge badge-outline">{tech.category}</span>
          <span className="badge badge-ghost">{tech.difficulty}</span>
        </div>

        <p className="mt-2">⭐ {tech.rating}</p>

        <button
          type="button"
          className="btn btn-brand rounded-full mt-2"
          disabled={added}
          onClick={() => onAdd(tech)}
        >
          {added ? "✓ Added to Stack" : "Add to Stack"}
        </button>
      </div>
    </div>
  );
}

export default TechnologyCard;
