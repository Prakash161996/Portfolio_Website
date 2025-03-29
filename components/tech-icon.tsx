"use client"

import {
  Atom,
  Braces,
  Cloud,
  Code,
  Cpu,
  Database,
  FileJson,
  GitBranch,
  Globe,
  Layout,
  Layers,
  LineChart,
  type LucideIcon,
  Palette,
  PenTool,
  Server,
  ShieldCheck,
  Smartphone,
} from "lucide-react"
import Image from "next/image"

type TechIconProps = {
  name: string
  size?: number
  className?: string
  showName?: boolean
}

// Map of technology names to their respective icons
const iconMap: Record<string, LucideIcon> = {
  react: Atom,
  nextjs: Globe,
  typescript: Braces,
  javascript: FileJson,
  html: Layout,
  css: Palette,
  tailwind: Palette,
  nodejs: Server,
  express: Server,
  mongodb: Database,
  graphql: Layers,
  rest: GitBranch,
  "ui/ux": PenTool,
  responsive: Smartphone,
  performance: Cpu,
  visualization: LineChart,
  security: ShieldCheck,
  cloud: Cloud,
}

// Custom logos for specific technologies (if you want to use actual logos)
const customLogoMap: Record<string, string> = {
  react: "/placeholder.svg?height=80&width=80&text=React",
  nextjs: "/placeholder.svg?height=80&width=80&text=Next.js",
  typescript: "/placeholder.svg?height=80&width=80&text=TS",
  javascript: "/placeholder.svg?height=80&width=80&text=JS",
  tailwind: "/placeholder.svg?height=80&width=80&text=Tailwind",
  mongodb: "/placeholder.svg?height=80&width=80&text=MongoDB",
}

export default function TechIcon({ name, size = 24, className = "", showName = false }: TechIconProps) {
  // Normalize the name for lookup
  const normalizedName = name.toLowerCase().replace(/[\s.-]/g, "")

  // Check if we have a custom logo for this technology
  const hasCustomLogo = normalizedName in customLogoMap

  // Get the icon component if available
  const IconComponent = iconMap[normalizedName] || Code

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {hasCustomLogo ? (
        <div className="relative" style={{ width: size, height: size }}>
          <Image
            src={customLogoMap[normalizedName] || "/placeholder.svg"}
            alt={name}
            width={size}
            height={size}
            className="tech-logo"
          />
        </div>
      ) : (
        <IconComponent size={size} />
      )}

      {showName && <span className="mt-2 text-sm">{name}</span>}
    </div>
  )
}

