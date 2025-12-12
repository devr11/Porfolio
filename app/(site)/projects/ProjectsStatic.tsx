import { StaticImageData } from "next/image"
import { Card } from "@/app/components/ProjectCard/Card"
import { Link } from "@/app/utils/Link"

type StaticProject = {
  id: string
  src: string | StaticImageData
  alt: string
  color: string
  type: string
  text: string
  href: string
  dataText: string
  ariaLabel: string
  isExternal: boolean
}

export const STATIC_PROJECTS: StaticProject[] = [
  {
    id: "react-zero-ui",
    src: "/Screenshot 2025-10-11 141024.png",
    alt: "The-Spylt-Shelf - Preview",
    color: "#3B06D1",
    type: "Creativity ShowCase",
    text: "View Website",
    href: "https://awwwards-gsap-sigma.vercel.app/",
    dataText: "View Project",
    ariaLabel: "View React Zero UI on GitHub",
    isExternal: true,
  },
  {
    id: "bespoke",
    src: "/Screenshot 2025-10-11 135500.png",
    alt: "Amazing-Keyboards - Preview",
    color: "#024EFC",
    type: "Realtime Product Configurator UI",
    text: "View Website",
    href: "https://amazing-keyboards.vercel.app/",
    dataText: "View Project",
    ariaLabel: "View Bespoke Website Build Case Study",
    isExternal: true,
  },
  {
    id: "vets-choice",
    src: "/Screenshot 2025-12-12 185655.png",
    alt: "Talent-IQ Preview",
    color: "#DA961AA5",
    type: "Remote Video Interview \& Assessment Platform",
    text: "View Website",
    href: "https://talent-iq-production-8297.up.railway.app/",
    dataText: "View Project",
    ariaLabel: "View Vets Choice Insurance Website",
    isExternal: true,
  },
  {
    id: "zero-icon-sprite",
    src: "/Screenshot 2025-10-14 155736.png",
    alt: "Nova-Creative Preview",
    color: "#3B06D1A5",
    type: "K72",
    text: "View Website",
    href: "https://k72-eight.vercel.app/",
    dataText: "View Project",
    ariaLabel: "View React Zero UI Icon Sprite on GitHub",
    isExternal: true,
  },
]

export const ProjectsStatic: React.FC = () => {
  return (
    <section className="border-t border-slate-200">
      <div className="inside-container-small">
        <div className="relative z-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-2 md:grid-rows-2">
          {STATIC_PROJECTS.map((project) => {
            const ProjectWrapper = project.isExternal ? "a" : Link
            const wrapperProps = project.isExternal
              ? {
                  href: project.href,
                  target: "_blank",
                  rel: "noopener",
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                }
              : {
                  href: project.href,
                  "data-text": project.dataText,
                  "aria-label": project.ariaLabel,
                  prefetch: true,
                }

            return (
              <ProjectWrapper key={project.id} {...wrapperProps}>
                <Card src={project.src} alt={project.alt} color={project.color} type={project.type} reveal={false} text={project.text} />
              </ProjectWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
