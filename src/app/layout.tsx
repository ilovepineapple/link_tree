import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: ' Oficial',
  description: 'Bem-vindo ao site oficial de ...! Aqui você encontrará o universo musical do renomado guitarrista, consultor e entusiasta dos pedais de efeito. Explore suas performances cativantes, assista a vídeos exclusivos, confira seus reviews de equipamentos e mergulhe em sua expertise como consultor especializado em HX Stomp e pedalboards. Prepare-se para uma jornada envolvente pelo mundo da guitarra e do blues. Conecte-se conosco e desbloqueie novas possibilidades musicais. Bem-vindo ao som de Lucas Moser!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
