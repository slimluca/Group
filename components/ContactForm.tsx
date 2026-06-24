"use client";

import type React from "react";
import { useState } from "react";

const topics = ["General", "Correction", "Country suggestion", "Partnership", "Media", "Technical issue"];

type FormState = {
  name: string;
  email: string;
  subject: string;
  topic: string;
  message: string;
};

const initialState: FormState = { name: "", email: "", subject: "", topic: "General", message: "" };

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<{ type: "idle" | "loading" | "success" | "error"; message: string }>({ type: "idle", message: "" });

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: "" }));
  }

  function validate() {
    const next: Partial<Record<keyof FormState, string>> = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = "Please enter a valid email address.";
    if (!form.subject.trim()) next.subject = "Please enter a subject.";
    if (form.message.trim().length < 20) next.message = "Please enter a message of at least 20 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!validate()) {
      setStatus({ type: "error", message: "Please fix the highlighted fields." });
      return;
    }
    setStatus({ type: "loading", message: "Sending message..." });
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });
    const data = await response.json().catch(() => ({ error: "Unexpected response." }));
    if (!response.ok) {
      setStatus({ type: "error", message: data.error ?? "Message delivery is not configured yet." });
      return;
    }
    setForm(initialState);
    setStatus({ type: "success", message: "Message accepted. Dog Haven Group has received your enquiry." });
  }

  return (
    <form className="contact-form" onSubmit={submit} noValidate>
      <div className="form-grid">
        <Field label="Name" error={errors.name}><input value={form.name} onChange={(event) => update("name", event.target.value)} autoComplete="name" /></Field>
        <Field label="Email" error={errors.email}><input value={form.email} onChange={(event) => update("email", event.target.value)} autoComplete="email" inputMode="email" /></Field>
      </div>
      <div className="form-grid">
        <Field label="Topic"><select value={form.topic} onChange={(event) => update("topic", event.target.value)}>{topics.map((topic) => <option key={topic}>{topic}</option>)}</select></Field>
        <Field label="Subject" error={errors.subject}><input value={form.subject} onChange={(event) => update("subject", event.target.value)} /></Field>
      </div>
      <Field label="Message" error={errors.message}><textarea value={form.message} onChange={(event) => update("message", event.target.value)} rows={8} /></Field>
      <button className="button" type="submit" disabled={status.type === "loading"}>{status.type === "loading" ? "Sending..." : "Send message"}</button>
      {status.message ? <p className={`form-status ${status.type}`}>{status.message}</p> : null}
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return <label className="field"><span>{label}</span>{children}{error ? <small>{error}</small> : null}</label>;
}
