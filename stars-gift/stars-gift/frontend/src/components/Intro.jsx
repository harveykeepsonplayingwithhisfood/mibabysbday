import { motion } from "framer-motion";

export const Intro = ({ onEnter }) => {
  return (
    <motion.div
      data-testid="intro-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#030408] px-6"
    >
      {/* Faint drifting background dust */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 20% 30%, #fff, transparent), radial-gradient(1px 1px at 70% 60%, #fff, transparent), radial-gradient(1.5px 1.5px at 40% 80%, #fff, transparent), radial-gradient(1px 1px at 85% 20%, #fff, transparent), radial-gradient(1px 1px at 15% 70%, #fff, transparent)",
          backgroundSize: "400px 400px",
        }}
      />

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.4, ease: "easeOut" }}
        className="font-sans text-[10px] sm:text-xs tracking-[0.45em] text-slate-400 uppercase mb-8"
        data-testid="intro-overline"
      >
        for mi baby · may 4, 2006
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="font-serif text-4xl sm:text-6xl lg:text-7xl text-slate-100 tracking-tight text-center leading-tight"
        style={{ fontFamily: "'Fraunces', serif", fontWeight: 300 }}
        data-testid="intro-title"
      >
        the stars that
        <br />
        attract me
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 1.8 }}
        className="mt-14 flex flex-col items-center gap-6"
      >
        <div className="w-px h-12 bg-gradient-to-b from-amber-100/40 to-transparent" />
        <button
          onClick={onEnter}
          data-testid="intro-enter-button"
          className="group relative font-sans text-xs sm:text-sm tracking-[0.4em] uppercase text-amber-100/80 hover:text-amber-100 transition-colors duration-700 pb-2 border-b border-amber-100/30 hover:border-amber-100/70"
        >
          <span className="relative z-10">open the sky</span>
        </button>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2.4 }}
        className="absolute bottom-10 font-sans text-[10px] tracking-[0.3em] text-slate-600 uppercase"
      >
        belated bday present from boyfrien &gt;_&lt;
      </motion.p>
    </motion.div>
  );
};
