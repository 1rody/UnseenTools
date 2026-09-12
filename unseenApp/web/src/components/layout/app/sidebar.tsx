"use client";

import Link from "next/link";

import { useState } from "react";

import { ASIDE, BRAND, FIELD, LABEL, PRIMARY, SELECT, row } from "@/src/components/layout/app/shared";

type Provider = "gmail" | "icloud" | "imap";

type Account = {
    email: string;
    provider: Provider;
    imapHost: string;
    imapPort: number;
    smtpHost: string;
    smtpPort: number;
    syncInterval: number;
};

const PROVIDERS: Record<Provider, { label: string; imapHost: string; smtpHost: string; imapPort: number; smtpPort: number }> = {
    gmail: { label: "Gmail", imapHost: "imap.gmail.com", smtpHost: "smtp.gmail.com", imapPort: 993, smtpPort: 587 },
    icloud: { label: "iCloud", imapHost: "imap.mail.me.com", smtpHost: "smtp.mail.me.com", imapPort: 993, smtpPort: 587 },
    imap: { label: "Custom IMAP", imapHost: "", smtpHost: "", imapPort: 993, smtpPort: 587 },
};

const MAILBOXES = [
    { title: "INBOX", folders: [{ id: "inbox", name: "All Mail" }, { id: "unread", name: "Unread" }, { id: "starred", name: "Starred" }] },
    { title: "LABELS", folders: [{ id: "work", name: "Work" }, { id: "personal", name: "Personal" }, { id: "finance", name: "Finance" }] },
    { title: "MORE", folders: [{ id: "sent", name: "Sent" }, { id: "drafts", name: "Drafts" }, { id: "archive", name: "Archive" }, { id: "spam", name: "Spam" }, { id: "trash", name: "Trash" }] },
];

function createAccount(provider: Provider = "gmail"): Account {
    const preset = PROVIDERS[provider];

    return { email: "", provider, imapHost: preset.imapHost, imapPort: preset.imapPort, smtpHost: preset.smtpHost, smtpPort: preset.smtpPort, syncInterval: 5 };
}

export default function SideBar() {
    const [accounts, setAccounts] = useState<Account[]>([{ ...createAccount(), email: "alias@example.com" }]);
    const [activeAccount, setActiveAccount] = useState(0);
    const [activeFolder, setActiveFolder] = useState("inbox");
    const [settings, setSettings] = useState(false);

    const current = accounts[activeAccount];

    function updateAccount(patch: Partial<Account>) {
        setAccounts((prev) => prev.map((account, index) => index === activeAccount ? { ...account, ...patch } : account));
    }

    function handleProviderChange(provider: Provider) {
        const preset = PROVIDERS[provider];

        updateAccount({ provider, imapHost: preset.imapHost, smtpHost: preset.smtpHost, imapPort: preset.imapPort, smtpPort: preset.smtpPort });
    }

    function handleAddAccount() {
        setAccounts((prev) => [...prev, createAccount()]);
        setActiveAccount(accounts.length);
        setSettings(true);
    }

    return (
        <aside className={ASIDE}>

            <div className="flex min-h-0 flex-1 flex-col">

                <div className="flex justify-center py-4">
                    <Link href="/" className={BRAND}>UNSEEN</Link>
                </div>

                <div className="flex gap-2 px-2">
                    <button className={`flex-1 ${PRIMARY}`}>COMPOSE</button>
                </div>

                <section className="mt-4">
                    <p className={LABEL}>ACCOUNT</p>
                    <div className="px-2">
                        <select value={activeAccount} onChange={(e) => setActiveAccount(Number(e.target.value))} className={SELECT}>
                            {accounts.map((account, index) => (
                                <option key={index} value={index}>{account.email || "New account"}</option>
                            ))}
                        </select>
                    </div>
                </section>

                {settings ? (
                    <section className="mt-4 flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto px-2">
                        <p className={LABEL}>CONNECTION</p>
                        <input type="email" placeholder="email@example.com" value={current.email} onChange={(e) => updateAccount({ email: e.target.value })} className={`w-full ${FIELD}`} />
                        <select value={current.provider} onChange={(e) => handleProviderChange(e.target.value as Provider)} className={SELECT}>
                            {Object.entries(PROVIDERS).map(([id, preset]) => (
                                <option key={id} value={id}>{preset.label}</option>
                            ))}
                        </select>
                        <div className="flex gap-2">
                            <input type="text" placeholder="imap.host.com" value={current.imapHost} onChange={(e) => updateAccount({ imapHost: e.target.value })} className={`min-w-0 flex-1 ${FIELD}`} />
                            <input type="number" value={current.imapPort} onChange={(e) => updateAccount({ imapPort: Number(e.target.value) })} className={`w-16 shrink-0 text-center ${FIELD}`} />
                        </div>
                        <div className="flex gap-2">
                            <input type="text" placeholder="smtp.host.com" value={current.smtpHost} onChange={(e) => updateAccount({ smtpHost: e.target.value })} className={`min-w-0 flex-1 ${FIELD}`} />
                            <input type="number" value={current.smtpPort} onChange={(e) => updateAccount({ smtpPort: Number(e.target.value) })} className={`w-16 shrink-0 text-center ${FIELD}`} />
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="flex-1 text-sm text-white/40">Sync every (min)</p>
                            <input type="number" min={1} value={current.syncInterval} onChange={(e) => updateAccount({ syncInterval: Number(e.target.value) })} className={`w-16 shrink-0 text-center ${FIELD}`} />
                        </div>
                        <button className={`w-full ${PRIMARY}`}>SAVE &amp; SYNC</button>
                        <p className={`${LABEL} mt-2`}>ACCOUNTS</p>
                        <button onClick={handleAddAccount} className="w-full rounded-lg border border-dashed border-white/20 px-3 py-2 text-center text-xs text-white/40 transition-all hover:bg-white/5 hover:text-white/60 active:scale-[0.98]">+ ADD ACCOUNT</button>
                    </section>
                ) : (
                    <div className="mt-4 min-h-0 flex-1 overflow-y-auto">
                        {MAILBOXES.map((mailbox) => (
                            <section key={mailbox.title} className="mb-3">
                                <p className={LABEL}>{mailbox.title}</p>
                                {mailbox.folders.map((folder) => (
                                    <button key={folder.id} onClick={() => setActiveFolder(folder.id)} className={row(activeFolder === folder.id)}>{folder.name}</button>
                                ))}
                            </section>
                        ))}
                    </div>
                )}

            </div>

            <section className="mt-2 border-t border-white/10 pt-2">
                <button onClick={() => setSettings(!settings)} className={`rounded-lg ${row(settings)}`}>Settings</button>
            </section>

        </aside>
    );
}
