"use client"

import React from "react"
import Script from "next/script"

declare module "react" {
    namespace JSX {
        interface IntrinsicElements {
            "elevenlabs-convai": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            > & {
                "agent-id": string
            }
        }
    }
}

interface ElevenLabsWidgetProps {
    agentId?: string
}

export default function ElevenLabsWidget({ agentId = "agent_6901kj0jcr79e51t8cqa27gdj062" }: ElevenLabsWidgetProps) {
    return (
        <>
            <elevenlabs-convai
                agent-id={agentId}
            ></elevenlabs-convai>
            <Script
                src="https://unpkg.com/@elevenlabs/convai-widget-embed"
                strategy="afterInteractive"
            />
        </>
    )
}
