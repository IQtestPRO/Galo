"use client";

import { FormEvent, useMemo, useState } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const isValid = useMemo(() => {
    return name.trim().length >= 2 && /\S+@\S+\.\S+/.test(email);
  }, [email, name]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!isValid) {
      setError("Preencha nome e e-mail válidos para entrar na lista de espera.");
      return;
    }

    const payload = {
      name,
      email,
      submittedAt: new Date().toISOString(),
    };

    window.localStorage.setItem("bichobet-waitlist", JSON.stringify(payload));
    setSubmitted(true);
    setError("");
    setName("");
    setEmail("");
  }

  return (
    <div id="waitlist" className="rounded-[30px] border border-white/10 bg-white/5 p-5 shadow-halo backdrop-blur-xl md:p-6">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#F6D28E]">
        <Sparkles className="h-4 w-4" />
        Lista de espera
      </div>
      <h3 className="mt-4 font-display text-2xl text-white">Receba a estreia da marca em primeira mão.</h3>
      <p className="mt-3 text-sm leading-6 text-[#CEC7B7]">
        Cadastre seu interesse para acompanhar novidades, identidade visual e futuras atualizações da plataforma.
      </p>

      <form className="mt-6 space-y-3" onSubmit={handleSubmit}>
        <Input
          aria-label="Nome"
          placeholder="Seu nome"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <Input
          aria-label="E-mail"
          placeholder="Seu melhor e-mail"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button className="w-full" type="submit">
          Entrar na lista de espera
        </Button>
      </form>

      {error ? <p className="mt-3 text-sm text-[#FFB56E]">{error}</p> : null}

      {submitted ? (
        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-[#DDF6EA]">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          Seu interesse foi salvo neste navegador. Podemos conectar esse fluxo a um backend real depois.
        </div>
      ) : null}
    </div>
  );
}
