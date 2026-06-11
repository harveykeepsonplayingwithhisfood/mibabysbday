import { STARS } from "../data/stars";

export const Progress = ({ discoveredIds }) => {
  const total = STARS.length;
  const found = discoveredIds.length;
  return (
    <div
      data-testid="progress-indicator"
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-3 pointer-events-none"
    >
      <span className="font-sans text-[10px] tracking-[0.35em] uppercase text-slate-400">
        {found} of {total} stars discovered
      </span>
      <div className="flex items-center gap-2">
        {STARS.map((s) => {
          const active = discoveredIds.includes(s.id);
          return (
            <span
              key={s.id}
              className={
                active
                  ? "w-1.5 h-1.5 rounded-full bg-amber-200 shadow-[0_0_8px_rgba(253,224,71,0.65)]"
                  : "w-1 h-1 rounded-full bg-white/20"
              }
            />
          );
        })}
      </div>
    </div>
  );
};
