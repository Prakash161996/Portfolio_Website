"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  color: string
}

export default function BackgroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    // Create particles
    const particlesArray: Particle[] = []
    const particleCount = Math.min(70, Math.floor(window.innerWidth / 25))

    // Colors that work well in both light and dark modes
    const lightModeColors = ["#3730a3", "#4f46e5", "#6366f1", "#4338ca", "#1e3a8a"]
    const darkModeColors = ["#818cf8", "#a5b4fc", "#93c5fd", "#bfdbfe", "#60a5fa"]

    const colors = theme === "dark" ? darkModeColors : lightModeColors

    for (let i = 0; i < particleCount; i++) {
      const size = Math.random() * 5 + 1.5
      const x = Math.random() * canvas.width
      const y = Math.random() * canvas.height
      const speedX = Math.random() * 0.6 - 0.3
      const speedY = Math.random() * 0.6 - 0.3
      const color = colors[Math.floor(Math.random() * colors.length)]

      particlesArray.push({
        x,
        y,
        size,
        speedX,
        speedY,
        color,
      })
    }

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particlesArray.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Bounce off edges
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX
        }

        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY
        }

        // Draw particles
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.globalAlpha = theme === "dark" ? 0.4 : 0.5
        ctx.fill()

        // Connect particles
        connectParticles(particle, particlesArray, ctx, canvas, theme)
      })
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [theme])

  // Function to connect particles with lines
  const connectParticles = (
    particle: Particle,
    particles: Particle[],
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    theme?: string,
  ) => {
    const maxDistance = canvas.width > 1000 ? 180 : 120

    particles.forEach((otherParticle) => {
      const dx = particle.x - otherParticle.x
      const dy = particle.y - otherParticle.y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < maxDistance) {
        ctx.beginPath()
        ctx.strokeStyle = particle.color
        ctx.globalAlpha = (theme === "dark" ? 0.15 : 0.2) * (1 - distance / maxDistance)
        ctx.lineWidth = 1.5
        ctx.moveTo(particle.x, particle.y)
        ctx.lineTo(otherParticle.x, otherParticle.y)
        ctx.stroke()
      }
    })
  }

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}

