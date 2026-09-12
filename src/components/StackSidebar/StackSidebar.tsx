import type { Technology } from "../../types/technology";

function StackSidebar({
  stack,
  onRemove,
  onRemoveAll,
}: {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
}) {
  const count = stack.length;
  const countText =
    count === 1 ? "1 Technology Selected" : `${count} Technologies Selected`;

  return (
    <aside className="card bg-base-100 border border-base-300 h-fit lg:sticky lg:top-24">
      <div className="card-body">
        <h3 className="card-title">Your Stack</h3>
        <p className="text-sm text-base-content/70">{countText}</p>

        {stack.length === 0 ? (
          <p className="mt-4 text-sm text-base-content/60">
            No technologies selected yet. Add tools to build your stack.
          </p>
        ) : (
          <>
            <ul className="mt-4 space-y-3">
              {stack.map((item) => (
                <li
                  key={item.id}
                  className="flex items-center gap-3 rounded-xl bg-base-200 p-3"
                >
                  <img src={item.icon} alt={item.name} className="w-8 h-8" />
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-xs text-base-content/60">{item.category}</p>
                  </div>
                  <button
                    type="button"
                    className="btn btn-ghost btn-xs"
                    onClick={() => onRemove(item.id)}
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="btn btn-outline btn-sm mt-4"
              onClick={onRemoveAll}
            >
              Remove All
            </button>
          </>
        )}
      </div>
    </aside>
  );
}

export default StackSidebar;
