import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export const FinalMessage = ({ onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2.0, ease: [0.16, 1, 0.3, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-start overflow-y-auto p-6 py-16 bg-[#030408]/95 backdrop-blur-xl"
      data-testid="final-message"
    >
      {/* faint distant stars */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 opacity-[0.25]"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 25% 20%, #fff, transparent), radial-gradient(1px 1px at 75% 70%, #fff, transparent), radial-gradient(1.5px 1.5px at 45% 80%, #fff, transparent), radial-gradient(1px 1px at 90% 30%, #fff, transparent), radial-gradient(1px 1px at 10% 60%, #fff, transparent)",
          backgroundSize: "350px 350px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.4 }}
        className="relative max-w-2xl w-full text-center space-y-8 my-auto"
      >
        <p className="font-sans text-[10px] sm:text-xs tracking-[0.45em] text-slate-400 uppercase">
          may 4, 2006 · 20 years of love
        </p>

        <div className="flex items-center justify-center gap-3">
          <span className="block w-12 h-px bg-gradient-to-r from-transparent to-amber-100/40" />
          <Heart
            size={14}
            className="text-amber-100/70"
            fill="currentColor"
            data-testid="final-message-heart"
          />
          <span className="block w-12 h-px bg-gradient-to-l from-transparent to-amber-100/40" />
        </div>

        <h1
          className="font-serif text-4xl sm:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-tight"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}
          data-testid="final-message-title"
        >
          HAPPY BIRTHDAY BABYY
        </h1>

        <div
          className="text-base sm:text-lg text-slate-300 leading-[1.9] max-w-xl mx-auto space-y-5 text-left"
          style={{ fontFamily: "'Fraunces', serif", fontWeight: 300 }}
        >
          <p>
            remember when we met and i found out you were 19 and i was like
            ouu shii a older women and now im like ouuu shii mommy ^-^
          </p>
          <p>
            Happy birthday my baby i love you so so much and i love and adore
            everything about you from your cute eyes to the way you sound
            when you get mad(even doe it scares me.)
          </p>
          <p>
            im so greatful to exist in this world with you and i get to be
            with you every moment with you makes me feel greatful to be alive
            it makes me feel greatful for everything because it lead me to
            you my star.
          </p>
          <p>
            your love guides me and it makes me want to better myself so i
            can be the best version of myself for you. as you know im quite
            the hider and ive hid my true self from 99.9% of everyone ive
            ever met but its different with you im myself im the same little
            kid i was who gets excited over stuff i dont ever have to mask
            around you because your love feels so pure i cry about that
            sometimes.
          </p>
          <p>
            everything about you is so ethereal to me i love everything about
            you and my love for you grows everyday even on the bad days i
            still dream of you and my feelings cant ever waver no matter
            what.
          </p>
          <p>
            happy birthday my baby i cant wait to code you new websites for
            every birthday in the future i want to experience every birthday
            you'll ever have in the future with you i want to be there for
            all of it
          </p>
          <p
            className="pt-4 italic text-amber-100/90 text-center"
            style={{ fontFamily: "'Fraunces', serif", fontWeight: 400 }}
          >
            i love you Ma Cherie
          </p>
        </div>

        <div className="pt-4 flex flex-col items-center gap-6">
          <span className="block w-px h-12 bg-gradient-to-b from-amber-100/40 to-transparent" />
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-slate-500">
            yours, always
          </p>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            data-testid="final-message-close"
            className="mt-8 font-sans text-xs tracking-[0.4em] uppercase text-amber-100/60 hover:text-amber-100 transition-colors duration-700 pb-1 border-b border-amber-100/20 hover:border-amber-100/60"
          >
            return to the sky
          </button>
        )}
      </motion.div>
    </motion.div>
  );
};
