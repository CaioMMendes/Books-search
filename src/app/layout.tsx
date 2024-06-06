import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const jakarta = localFont({
  src: [
    {
      path: "../../public/assets/fonts/jakarta-sans/PlusJakartaSans-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../../public/assets/fonts/jakarta-sans/PlusJakartaSans-Light.ttf",
      weight: "300",
    },
    {
      path: "../../public/assets/fonts/jakarta-sans/PlusJakartaSans-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/assets/fonts/jakarta-sans/PlusJakartaSans-Medium.ttf",
      weight: "500",
    },
    {
      path: "../../public/assets/fonts/jakarta-sans/PlusJakartaSans-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../../public/assets/fonts/jakarta-sans/PlusJakartaSans-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../public/assets/fonts/jakarta-sans/PlusJakartaSans-ExtraBold.ttf",
      weight: "800",
    },
  ],
  variable: "--font-jakarta",
})

export const metadata: Metadata = {
  title: "Books Search",
  description: "Find your book here",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${jakarta.className} text-corduroy-950 min-h-screen bg-zinc-50 `}
      >
        {children}
      </body>
    </html>
  )
}
