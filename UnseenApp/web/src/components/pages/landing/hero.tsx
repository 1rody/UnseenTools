"use client";

import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";


import {Send} from "lucide-react";

export default function Hero() {

    const [prompt, setPrompt] = useState("");
    const router = useRouter();

    function handleSubmit() {
        if (!prompt.trim()) return;
    }
    function handleKeyDown(e:React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            handleSubmit();
        }
    }

    return (
        <>

        <section className="flex bg-black h-screen flex-col items-center justify-center">

            <div className="flex scale-110 flex-col gap-5">
                <h1 className="text-9xl font-black">UNSEeN</h1>
                <div className="flex items-center justify-center w-full">
                    <input  className="px-3 rounded-l-2xl py-2 backdrop-blur-xl w-full bg-white/5" type="text" value={prompt} onChange={(e) => setPrompt(e.target.value)} onKeyDown={handleKeyDown} placeholder="Ask anything or use / to use some tool...."/>
                    <button className="bg-white px-3 rounded-r-2xl hover:scale-105 active:scale-95 m-1 flex items-center justify-center active:bg-white/80 duration-200 py-2 overflow-hidden" onClick={handleSubmit} ><Send className="text-black"/></button>
                </div>
                <div className="flex items-center mt-10  justify-between px-3  text-sm font-black">
                    <Link className="hover:scale-105 hover:border-b active:scale-95" href="/email">EMAIL</Link>
                    <Link className="hover:scale-105 hover:border-b active:scale-95" href="/code">CODE</Link>
                    <Link className="hover:scale-105 hover:border-b active:scale-95" href="/cowork">COWORK</Link>
                    <Link className="hover:scale-105 hover:border-b active:scale-95" href="/notes">NOTES</Link>
                </div>
            </div>
            <p className="absolute bottom-8 text-sm text-white/80">CREATED WITH LOVE BY RODY</p>
        </section>
        </>
    )
}