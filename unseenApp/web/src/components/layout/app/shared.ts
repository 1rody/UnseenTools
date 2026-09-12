export const ASIDE = "fixed z-50 m-4 flex h-[calc(100vh-2rem)] w-[280px] flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur-xl";

export const BRAND = "text-3xl font-black tracking-tight";

export const LABEL = "px-2 pb-1 text-xs font-black text-white/40";

export const PRIMARY = "rounded-lg bg-white p-2 text-center text-xs font-black text-black transition-transform active:scale-95";

export const GHOST = "rounded-lg bg-white/10 p-2 text-center text-xs font-black text-white/60 transition-all hover:bg-white hover:text-black active:scale-95";

export const FIELD = "rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 outline-none transition-colors placeholder:text-white/30 focus:border-white/30";

export const SELECT = `w-full appearance-none ${FIELD}`;

const ROW = "block w-full px-3 py-2 text-left text-sm transition-all active:scale-[0.98]";

export function row(active: boolean) {
    return `${ROW} ${active ? "bg-white text-black" : "text-white/40 hover:bg-white hover:text-black"}`;
}
