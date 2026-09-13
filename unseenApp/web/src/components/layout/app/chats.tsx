"use client";

import Link from "next/link";

import { useState } from "react";

import { ASIDE, BRAND, FIELD, GHOST, LABEL, PRIMARY, SELECT, row } from "@/src/components/layout/app/shared";
import MODELS from "@/src/data/models.json";

type ChatCategory = "code" | "cowork";

type ChatBarProps = {
    category: ChatCategory;
};

const CATEGORIES: Record<ChatCategory, { label: string; folders: string[]; recent: string[] }> = {
    code: {
        label: "CODE",
        folders: ["Code Review", "Debug", "Refactor", "Documentation"],
        recent: ["React component", "API endpoint", "SQL query", "TypeScript types", "Git merge conflict", "Unit tests", "Docker config", "CI/CD pipeline"],
    },
    cowork: {
        label: "DOC",
        folders: ["Brainstorm", "Planning", "Research", "Writing"],
        recent: ["Project proposal", "Meeting notes", "User research", "Competitor analysis", "Roadmap draft", "Team feedback", "Sprint retro", "Client brief"],
    },
};

export default function ChatBar({ category }: ChatBarProps) {
    const data = CATEGORIES[category];

    const [model, setModel] = useState(MODELS[0].id);
    const [activeFolder, setActiveFolder] = useState(data.folders[0]);
    const [settings, setSettings] = useState(false);

    return (
        <aside className={ASIDE}>

            <div className="flex min-h-0 flex-1 flex-col">

                <div className="flex justify-center py-4">
                    <Link href="/" className={BRAND}>UNSEEN</Link>
                </div>

                <div className="flex gap-2 px-2">
                    <button className={`flex-1 ${PRIMARY}`}>+ NEW</button>
                    <button className={`flex-1 ${GHOST}`}>{data.label}</button>
                    <button className={`flex-1 ${GHOST}`}>IMAGE</button>
                </div>

                <section className="mt-4">
                    <p className={LABEL}>MODEL</p>
                    <div className="px-2">
                        <select value={model} onChange={(e) => setModel(e.target.value)} className={SELECT}>
                            {MODELS.map((item) => (
                                <option key={item.id} value={item.id}>{item.label}</option>
                            ))}
                        </select>
                    </div>
                </section>

                {settings ? (
                    <section className="mt-4 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-2">
                        <p className={LABEL}>ACCOUNT</p>
                        <Link href="/" className={`block ${FIELD} hover:border-white/30`}>Account &amp; Privacy</Link>
                        <Link href="/" className={`block ${FIELD} hover:border-white/30`}>Billing</Link>
                        <p className={`${LABEL} mt-2`}>USAGE</p>
                        <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2">
                            <p className="text-sm text-white/80">Tokens used 5634/9000</p>
                            <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
                                <div className="h-full bg-white" style={{ width: "63%" }} />
                            </div>
                        </div>
                    </section>
                ) : (
                    <>
                        <section className="mt-4">
                            <p className={LABEL}>FOLDERS</p>
                            {data.folders.map((folder) => (
                                <button key={folder} onClick={() => setActiveFolder(folder)} className={row(activeFolder === folder)}>{folder}</button>
                            ))}
                        </section>

                        <section className="mt-4 flex min-h-0 flex-1 flex-col">
                            <p className={LABEL}>RECENT</p>
                            <div className="min-h-0 flex-1 overflow-y-auto">
                                {data.recent.map((chat) => (
                                    <button key={chat} className={row(false)}>
                                        <h2 className="font-medium">{chat}</h2>
                                    </button>
                                ))}
                            </div>
                        </section>
                    </>
                )}

            </div>

            <section className="mt-2 border-t border-white/10 pt-2">
                <button onClick={() => setSettings(!settings)} className={`rounded-lg ${row(settings)}`}>Settings</button>
            </section>

        </aside>
    );
}
