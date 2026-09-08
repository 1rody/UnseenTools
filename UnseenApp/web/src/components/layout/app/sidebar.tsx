import Link from "next/link"

export default function SideBar() {
    return (
        <aside className="flex flex-col h-screen w-70 z-50 fixed m-4 rounded-2xl  backdrop-blur-xl border-1 border-white/2 bg-white/2">
            <h1 className="font-black text-3xl text-center p-8"><Link href="/">UNSEEN</Link></h1>
            <div className="w-full items-center justify-center ">
                            <p className="mb-2 w-full items-center justify-around "><button className="p-2">alias@example.com</button> <Link className="bg-white text-sm rounded-lg text-black font-black p-2" href="/">COMPOSE</Link></p>
            </div>
            <section className="mt-5 ">
                <p className="font-black text-sm text-white p-2 ">FOLDERS</p>
                <ol>
                    <button className="w-full active:scale-95 duration-200 hover:bg-white px-2 py-3 hover:text-black text-white/30  text-left border-white/5 border-t-1 border-b-1">Inbox</button>
                    <button className="w-full active:scale-95 duration-200 hover:bg-white px-2 py-3 hover:text-black text-white/30  text-left border-white/5">Drafts</button>
                    <button className="w-full active:scale-95 duration-200 hover:bg-white px-2 py-3 hover:text-black text-white/30  text-left border-white/5 border-t-1 border-b-1">Send</button>

                </ol>
            </section>
            <section className="mt-5 ">
                <p className="font-black text-sm text-white p-2 ">JUNK</p>
                <ol>
                    <button className="w-full active:scale-95 duration-200 hover:bg-white px-2 py-3 hover:text-black text-white/30  text-left border-white/5 border-t-1 border-b-1">Trash</button>
                    <button className="w-full active:scale-95 duration-200 hover:bg-white px-2 py-3 hover:text-black text-white/30  text-left border-white/5 ">Span</button>
                    <button className="w-full active:scale-95 duration-200 hover:bg-white px-2 py-3 hover:text-black text-white/30  text-left border-white/5 border-t-1 border-b-1">News</button>
                </ol>
            </section>

            <section className="mt-5 ">
                <p className="font-black text-sm text-white p-2 ">WORKFLOW</p>
                <ol className="flex flex-col">
                    <Link href="/" className="w-full active:scale-95 duration-200 hover:bg-white px-2 py-3 hover:text-black text-white/30  text-left border-white/5 border-t-1 border-b-1">Notes</Link>
                    <Link href="/" className="w-full active:scale-95 duration-200 hover:bg-white px-2 py-3 hover:text-black text-white/30  text-left border-white/5 ">Callendar</Link>
                    <Link href="/" className="w-full active:scale-95 duration-200 hover:bg-white px-2 py-3 hover:text-black text-white/30  text-left border-white/5 border-t-1 border-b-1">Sprints</Link>
                </ol>
            </section>
        </aside>    
    )
}