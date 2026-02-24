import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Germán Blanco — Asistente de Voz IA',
    description: 'Habla con el asistente de voz IA de Germán Blanco. Candidato Partido Conservador.',
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
