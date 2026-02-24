"use client"

import { ArrowDown } from "lucide-react"
import ElevenLabsWidget from "@/components/ElevenLabsWidget"

export function VoiceWidgetCard() {
  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Super Tight & Shortened White Card */}
      <div className="relative overflow-hidden rounded-[2rem] bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.3)] sm:p-8">

        {/* Card Content with minimal spacing */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-4 text-center">
            <h2 className="mb-1 text-2xl font-[900] tracking-tight text-slate-900 sm:text-3xl">
              ¡Habla con Emma!
            </h2>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
              Asistente virtual de campaña
            </p>
          </div>

          {/* Widget Area - Zero extra padding */}
          <div className="relative flex w-full items-center justify-center">
            <ElevenLabsWidget />
          </div>

          {/* Call to Action - Tightly Coupled */}
          <div className="mt-4 flex flex-col items-center space-y-2">
            <p className="text-center text-[13px] font-bold text-slate-600">
              Haz clic en el botón del teléfono para iniciar la conversación
            </p>
            <div className="animate-bounce">
              <ArrowDown className="h-5 w-5 text-[#B31D22]/40" />
            </div>
          </div>
        </div>

        {/* Minimal Decorative Accents */}
        <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-50 opacity-40 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-yellow-50 opacity-40 blur-2xl pointer-events-none" />
      </div>
    </div>
  )
}
