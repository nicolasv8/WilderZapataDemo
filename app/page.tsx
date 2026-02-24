"use client"

import Image from "next/image"
import ElevenLabsWidget from "@/components/ElevenLabsWidget"

export default function Page() {
  return (
    <main className="relative min-h-svh overflow-x-hidden bg-[#003893] selection:bg-[#E4007C] selection:text-white">
      {/* Background gradient */}
      <div className="fixed inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_#004B87_0%,_#003893_50%,_#001D4A_100%)]" />
      <div
        className="fixed inset-0 z-[1] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      />

      <div className="relative z-10 flex w-full flex-col items-center px-4 py-10 sm:px-6 lg:py-16">
        <div className="flex w-full max-w-lg flex-col items-center space-y-8">

          {/* Internal badge */}
          <span className="inline-flex items-center rounded-full border border-[#E4007C]/30 bg-[#E4007C]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#E4007C] backdrop-blur-sm">
            Para uso interno • Demo técnica
          </span>

          {/* Portrait */}
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#FFCD00] via-[#003893] to-[#CE1126] opacity-80 blur-sm" />
            <div className="relative h-40 w-40 overflow-hidden rounded-full border-[3px] border-[#E4007C] shadow-[0_0_40px_rgba(228,0,124,0.3)] bg-white">
              <Image
                src="/wilder-zapata.jpg"
                alt="Wilder Zapata"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Title */}
          <div className="text-center space-y-2">
            <h1 className="text-balance text-3xl font-[900] tracking-tight text-white sm:text-4xl leading-[1.15]">
              Wilder Zapata
            </h1>
            <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#FFCD00]">
              Senado de la República · #7 · Partido Creemos
            </p>
          </div>

          {/* Description */}
          <p className="mx-auto max-w-sm text-center text-base font-medium leading-relaxed text-white/75">
            Habla con el asistente de voz IA de Wilder. Pregunta sobre sus propuestas, trayectoria y visión.
          </p>

          {/* Steps */}
          <div className="grid w-full grid-cols-3 gap-3">
            {[
              { id: "01", text: "Haz click para iniciar la llamada", icon: "👇" },
              { id: "02", text: "Permite el acceso al micrófono", icon: "🎙️" },
              { id: "03", text: "Haz tu pregunta", icon: "💬" },
            ].map((step) => (
              <div
                key={step.id}
                className="group relative flex flex-col items-center rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center transition-all hover:bg-white/[0.08] hover:border-[#E4007C]/30"
              >
                <span className="absolute left-3 top-3 text-[9px] font-bold text-[#E4007C]/50">
                  {step.id}
                </span>
                <span className="mb-1.5 text-xl">{step.icon}</span>
                <span className="text-[11px] font-bold leading-tight tracking-wide text-white/90">
                  {step.text}
                </span>
              </div>
            ))}
          </div>

          {/* Credit */}
          <div className="inline-flex items-center rounded-xl border border-[#E4007C] bg-[#E4007C] px-4 py-1 shadow-[0_0_20px_rgba(228,0,124,0.2)]">
            <span className="text-[10px] font-black tracking-wide text-white uppercase">
              Hecho por{" "}
              <a
                href="https://www.linkedin.com/in/nicolasvelascoperez"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/40 underline-offset-2 hover:text-[#FFCD00] transition-colors"
              >
                Nicolás
              </a>
              ,{" "}
              <a
                href="https://www.linkedin.com/in/damianduque/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/40 underline-offset-2 hover:text-[#FFCD00] transition-colors"
              >
                Damián
              </a>{" "}
              y{" "}
              <a
                href="https://www.linkedin.com/in/manueljosegonzalezb/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/40 underline-offset-2 hover:text-[#FFCD00] transition-colors"
              >
                Manuel José
              </a>
            </span>
          </div>

          {/* Bottom spacer for the floating widget */}
          <div className="h-20" />
        </div>
      </div>

      {/* ElevenLabs floating widget (renders at bottom center by default) */}
      <ElevenLabsWidget agentId="agent_6901kj0jcr79e51t8cqa27gdj062" />
    </main>
  )
}
