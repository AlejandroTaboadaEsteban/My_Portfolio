"use client"

import { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  baseVx: number
  baseVy: number
}

interface ParticleBackgroundProps {
  darkMode: boolean
}

export default function ParticleBackground({ darkMode }: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const mouseTrailRef = useRef<{ x: number; y: number; opacity: number }[]>([])
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      const particles: Particle[] = []
      const particleCount = Math.floor((canvas.width * canvas.height) / 12000)

      for (let i = 0; i < particleCount; i++) {
        const baseVx = (Math.random() - 0.5) * 0.8
        const baseVy = (Math.random() - 0.5) * 0.8

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: baseVx,
          vy: baseVy,
          baseVx: baseVx,
          baseVy: baseVy,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.6 + 0.3,
        })
      }

      particlesRef.current = particles
    }

    const updateParticles = () => {
      const particles = particlesRef.current
      const mouse = mouseRef.current

      particles.forEach((particle) => {
        // Continuous movement
        particle.x += particle.vx
        particle.y += particle.vy

        // Mouse interaction - stronger attraction
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 150) {
          const force = (150 - distance) / 150
          particle.vx += (dx / distance) * force * 0.02
          particle.vy += (dy / distance) * force * 0.02
        } else {
          // Return to base velocity when not near mouse
          particle.vx += (particle.baseVx - particle.vx) * 0.02
          particle.vy += (particle.baseVy - particle.vy) * 0.02
        }

        // Boundary wrapping instead of bouncing
        if (particle.x < -10) particle.x = canvas.width + 10
        if (particle.x > canvas.width + 10) particle.x = -10
        if (particle.y < -10) particle.y = canvas.height + 10
        if (particle.y > canvas.height + 10) particle.y = -10

        // Limit velocity
        const maxVel = 3
        const vel = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (vel > maxVel) {
          particle.vx = (particle.vx / vel) * maxVel
          particle.vy = (particle.vy / vel) * maxVel
        }
      })

      // Update mouse trail
      const trail = mouseTrailRef.current
      trail.push({ x: mouse.x, y: mouse.y, opacity: 1 })

      // Fade and remove old trail points
      for (let i = trail.length - 1; i >= 0; i--) {
        trail[i].opacity -= 0.05
        if (trail[i].opacity <= 0) {
          trail.splice(i, 1)
        }
      }

      // Limit trail length
      if (trail.length > 20) {
        trail.splice(0, trail.length - 20)
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const particles = particlesRef.current
      const mouse = mouseRef.current
      const trail = mouseTrailRef.current

      // Draw mouse trail
      if (trail.length > 1) {
        for (let i = 1; i < trail.length; i++) {
          const current = trail[i]
          const previous = trail[i - 1]

          ctx.strokeStyle = darkMode
            ? `rgba(59, 130, 246, ${current.opacity * 0.3})`
            : `rgba(37, 99, 235, ${current.opacity * 0.3})`
          ctx.lineWidth = 3 * current.opacity
          ctx.beginPath()
          ctx.moveTo(previous.x, previous.y)
          ctx.lineTo(current.x, current.y)
          ctx.stroke()
        }
      }

      // Draw connections between particles
      particles.forEach((particle, i) => {
        particles.slice(i + 1).forEach((otherParticle) => {
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            const opacity = ((120 - distance) / 120) * 0.15
            ctx.strokeStyle = darkMode ? `rgba(59, 130, 246, ${opacity})` : `rgba(37, 99, 235, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.stroke()
          }
        })

        // Draw connection to mouse
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 200) {
          const opacity = ((200 - distance) / 200) * 0.4
          ctx.strokeStyle = darkMode ? `rgba(59, 130, 246, ${opacity})` : `rgba(37, 99, 235, ${opacity})`
          ctx.lineWidth = 2
          ctx.beginPath()
          ctx.moveTo(particle.x, particle.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        }
      })

      // Draw particles
      particles.forEach((particle) => {
        const dx = mouse.x - particle.x
        const dy = mouse.y - particle.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const hoverEffect = distance < 80 ? 2 : 1

        ctx.fillStyle = darkMode ? `rgba(59, 130, 246, ${particle.opacity})` : `rgba(37, 99, 235, ${particle.opacity})`
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * hoverEffect, 0, Math.PI * 2)
        ctx.fill()

        // Add glow effect near mouse
        if (distance < 100) {
          ctx.shadowColor = darkMode ? "#3b82f6" : "#2563eb"
          ctx.shadowBlur = 10
          ctx.fill()
          ctx.shadowBlur = 0
        }
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      }
    }

    const handleResize = () => {
      resizeCanvas()
      createParticles()
    }

    // Initialize
    resizeCanvas()
    createParticles()
    animate()

    // Event listeners
    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [darkMode])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }} />
}
