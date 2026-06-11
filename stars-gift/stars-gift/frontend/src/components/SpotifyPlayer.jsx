import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, X } from "lucide-react";

const PLAYLIST_ID = "0N1FbpsGUko8wskc6ZdsxD";

export const SpotifyPlayer = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-3"
      data-testid="spotify-player"
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_16px_48px_rgba(0,0,0,0.6)] bg-[#0a0b14]/85 backdrop-blur-2xl"
            style={{ width: 320 }}
            data-testid="spotify-embed"
          >
            <iframe
              title="Spotify playlist"
              src={`https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`}
              width="100%"
              height="380"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setOpen((v) => !v)}
        data-testid="spotify-toggle"
        className="group flex items-center gap-2 rounded-full border border-white/10 bg-[#0a0b14]/85 backdrop-blur-2xl px-4 py-2.5 text-amber-100/80 hover:text-amber-100 hover:border-amber-100/30 transition-all duration-500 shadow-[0_8px_24px_rgba(0,0,0,0.5)]"
        aria-label={open ? "Close playlist" : "Open playlist"}
      >
        {open ? (
          <X size={14} />
        ) : (
          <Music size={14} className="group-hover:scale-110 transition-transform" />
        )}
        <span className="font-sans text-[10px] tracking-[0.3em] uppercase">
          {open ? "close" : "songs i think of u to"}
        </span>
      </button>
    </div>
  );
};
