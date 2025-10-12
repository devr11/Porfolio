"use client"
import { AnimatedCard, HeroOffset } from "./ProjectCard/AnimatedCard"
import clsx from "clsx"
import { useOffset } from "../hooks/useOffset"
import { useIsMobile } from "../hooks/useMediaQuery"
import { useRef, useEffect } from "react"
import { useScroll, useSpring } from "motion/react"
import { useUI } from "@react-zero-ui/core"

const ids = ["automedics", "react-zero-ui", "iron-and-oak", "bespoke"]

export function ProjectsGrid({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const rawOffsets = useOffset(ids)
  const isMobile = useIsMobile()
  const isSmallScreen = useIsMobile(576)
  const responsiveScale = isMobile ? 0.34 : 0.8
  const [, setReveal] = useUI<"true" | "false">("reveal", "false")

  const { scrollYProgress } = useScroll({
    offset: isMobile ? ["start start", "10% start"] : ["start start", "15% start"],
  })
  const stiffness = isMobile ? 120 : 220
  const damping = isMobile ? 50 : 90

  const progress = useSpring(scrollYProgress, { stiffness, damping })

  const OFFSET_TUNING: Record<string, Partial<HeroOffset>> = {
    "react-zero-ui": { rot: 9, s: responsiveScale, dx: isMobile ? -220 : -30, dy: isMobile ? -120 : -40 },
    "iron-and-oak": { rot: -5, s: responsiveScale, dx: isMobile ? -230 : -60, dy: isMobile ? -130 : -40 },
    automedics: { rot: 5, s: responsiveScale, dx: isMobile ? -225 : -45, dy: isMobile ? -130 : -25 },
    bespoke: { rot: 12, s: responsiveScale, dx: isMobile ? -230 : -50, dy: isMobile ? -110 : -10 },
  }

  const offsets = Object.fromEntries(
    ids.map((id) => {
      const base = rawOffsets[id]
      const t = OFFSET_TUNING[id]
      return [
        id,
        {
          x: base.x! + t.dx!,
          y: base.y! + t.dy!,
          rot: t.rot!,
          s: t.s ?? 1,
        },
      ]
    })
  )

  const triggerProgress = isMobile ? (isSmallScreen ? 0.15 : 0.2) : 0.5
  useEffect(() => {
    const unsubscribe = progress.on("change", (latest) => {
      if (latest >= triggerProgress) {
        setReveal("true") // Reveal ON
      } else {
        setReveal("false") // Reveal OFF
      }
    })

    return unsubscribe
  }, [progress, setReveal, triggerProgress])
  return (
    <section id="projects-grid" className={clsx("relative scroll-mt-36", className)} ref={ref}>
      <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
        <AnimatedCard
          key={"react-zero-ui"}
          src="/Screenshot 2025-10-11 141024.png"
          alt={"The-Spylt-Shelf - Preview"}
          offset={offsets["react-zero-ui"]}
          gridId="react-zero-ui"
          color="#3B06D1"
          type="The Spylt Shelf"
          progress={progress}
          href="https://github.com/devr11/Awwwards-GSAP"
          dataText="View on GitHub"
        />
        <AnimatedCard
          href="https://github.com/devr11/Car-Show-Case"
          key="Bespoke"
          src="/Screenshot 2025-10-12 121409.png"
          alt={"3D-Car-Showcase - Preview"}
          offset={offsets["bespoke"]}
          gridId="bespoke"
          color="#024EFC"
          type="3D Car Showcase"
          progress={progress}
          dataText="View on GitHub"
        />

        <AnimatedCard
          href="https://lovable.dev/projects/9290d91e-42ab-48aa-be8e-0912c88ff478"
          key="Automedics"
          src="/Sabzi.png"
          alt={"Sabzi-Source Preview"}
          offset={offsets["automedics"]}
          gridId="automedics"
          color="#DA961A"
          type="Local Supply Chain Platform"
          progress={progress}
          dataText="View on GitHub"
        />
        <AnimatedCard
          href="https://github.com/devr11/Amazing-Keyboards"
          key={"IAO"}
          src="/Screenshot 2025-10-11 135500.png"
          alt={"Amazing-Keyboards Preview"}
          offset={offsets["iron-and-oak"]}
          gridId="iron-and-oak"
          color="#13739C"
          type="Private Security"
          progress={progress}
          dataText="View on GitHub"
        />
      </div>
    </section>
  )
}
