import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

export const StarCard = ({ star, onClose }) => {
  return (
    <AnimatePresence>
      {star && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
          onClick={onClose}
          data-testid="star-card-backdrop"
        >
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0a0b14]/85 backdrop-blur-2xl backdrop-saturate-150 shadow-[0_16px_48px_rgba(0,0,0,0.6)]"
            data-testid={`star-card-${star.id}`}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.06] via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-amber-200/10 blur-3xl pointer-events-none" />

            <button
              onClick={onClose}
              data-testid="star-card-close"
              className="absolute top-4 right-4 z-10 rounded-full p-2 text-slate-400 hover:text-slate-100 hover:bg-white/5 transition-colors"
              aria-label="Close"
            >
              <X size={16} />
            </button>

            <div className="relative p-8 sm:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span
                  aria-hidden
                  className="block w-2 h-2 rounded-full"
                  style={{
                    background: star.color,
                    boxShadow: `0 0 12px ${star.color}`,
                  }}
                />
                <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-slate-400">
                  {star.constellation} · {star.bayer}
                </p>
              </div>

              <h2
                className="font-serif text-4xl sm:text-5xl text-slate-100 mb-2 tracking-tight"
                style={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}
                data-testid="star-card-name"
              >
                {star.name}
              </h2>

              <div className="flex gap-6 mt-5 mb-7 font-sans text-[11px] tracking-[0.2em] uppercase text-slate-500">
                <div>
                  <span className="block text-amber-100/70">
                    {star.distanceLy} ly
                  </span>
                  <span>distance</span>
                </div>
                <div>
                  <span className="block text-amber-100/70">
                    {star.magnitude.toFixed(2)}
                  </span>
                  <span>magnitude</span>
                </div>
              </div>

              <p className="font-light text-slate-300 leading-relaxed text-[15px] sm:text-base mb-6">
                {star.fact}
              </p>

              <div className="border-t border-white/5 pt-6">
                <p
                  className="text-amber-100/90 text-[15px] sm:text-base leading-relaxed"
                  style={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}
                  data-testid="star-card-personal"
                >
                  {star.personal}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
