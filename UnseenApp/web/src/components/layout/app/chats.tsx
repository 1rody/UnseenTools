import Link from "next/link";

export default function SideBar() {
  const recentChats = Array.from({ length: 8 });

  return (
    <aside className="fixed z-50 m-4 flex h-[calc(100vh-2rem)] w-[280px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-2 backdrop-blur-xl">

      <div className="flex justify-center py-6">
        <Link
          href="/"
          className="text-3xl font-black tracking-tight"
        >
          UNSEEN
        </Link>
      </div>

      <div className="flex gap-2 px-2">
        <Link
          className="flex-1 rounded-lg bg-white p-2 text-center text-xs font-black text-black transition-transform active:scale-95"
          href="/"
        >
          MODEL
        </Link>

        <Link
          className="flex-1 rounded-lg bg-white p-2 text-center text-xs font-black text-black transition-transform active:scale-95"
          href="/"
        >
          + NEW
        </Link>

        <Link
          className="flex-1 rounded-lg bg-white p-2 text-center text-xs font-black text-black transition-transform active:scale-95"
          href="/"
        >
          IMAGE
        </Link>
      </div>

      {/* Folder */}
      <section className="mt-6">
        <p className="px-2 pb-2 text-xs font-black text-white/40">
          FOLDER
        </p>

        <button className="w-full border-y border-white/5 px-3 py-3 text-left text-sm text-white/40 transition-all hover:bg-white hover:text-black active:scale-[0.98]">
          CHATNAME
        </button>
      </section>

      <section className="mt-6 flex min-h-0 flex-1 flex-col">
        <p className="px-2 pb-2 text-xs font-black text-white/40">
          RECENT
        </p>

        <div className="flex-1 overflow-y-auto">
          {recentChats.map((_, index) => (
            <button
              key={index}
              className="w-full border-t border-white/5 px-3 py-3 text-left text-white/40 transition-all hover:bg-white hover:text-black active:scale-[0.98]"
            >
              <h2 className="font-medium text-sm">
                Chat context
              </h2>

              <p className="mt-1 text-xs opacity-60">
                Created at dd/mm/yyyy at hh:mm
              </p>
            </button>
          ))}
        </div>
      </section>

      <section className="mt-4 border-t border-white/10 pt-3">
        <p className="px-2 pb-2 text-xs font-black text-white/40">
          SETTINGS
        </p>

        <div className="flex flex-col">
          <Link
            href="/"
            className="rounded-lg px-3 py-3 text-sm text-white/40 transition-all hover:bg-white hover:text-black active:scale-[0.98]"
          >
            Account & Privacy
          </Link>

          <Link
            href="/"
            className="rounded-lg px-3 py-3 text-sm text-white/40 transition-all hover:bg-white hover:text-black active:scale-[0.98]"
          >
            Tokens used 5634/9000
          </Link>
        </div>
      </section>

    </aside>
  );
}