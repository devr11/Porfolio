import clsx from "clsx"
// 1. Import icons from react-icons (using Si for Simple Icons)
import { SiReact, SiNextdotjs, SiTypescript, SiOpencv, SiTailwindcss, SiHtml5, SiThreedotjs, SiJavascript, SiGit, SiGithub, SiC } from "react-icons/si"
import { FaMagic, FaPaintBrush, FaGlobe, FaStar, FaCode, FaCube, FaJava, FaCircle } from "react-icons/fa"

import { Text } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import type { Variants } from "motion"
import { MotionUl, MotionLi } from "../utils/lazy-ui"

// 2. Define a map to link your 'src' name to the actual Icon component
const IconMap: { [key: string]: React.ElementType } = {
  // --- Tech Stack Icons (Using Simple Icons - Si) ---
  react: SiReact,
  next: SiNextdotjs,
  typescript: SiTypescript,
  openai: SiOpencv, // Using OpenCV as a placeholder for OpenAI (no dedicated SiOpenai)
  motion: FaCube, // Using a generic cube icon for 'motion'
  tailwindcss: SiTailwindcss,
  html: SiHtml5,
  // ⭐️ ADDED THREE.JS ICON ⭐️
  threejs: SiThreedotjs,
  // New tech icons
  git: SiGit,
  github: SiGithub,
  javascript: SiJavascript,
  c: SiC,
  java: FaJava,
  reactthreefiber: FaCircle, // placeholder 3D cube

  // --- Service Icons (Using Font Awesome - Fa) ---
  "magic-wand": FaMagic, // Full Stack Development
  "paint-bucket": FaPaintBrush, // React Development
  web: FaGlobe, // Performance Optimization
  world: FaStar, // UI/UX Design
  planet: FaCode, // Code Reviews
  cube: FaCube, // Advanced Motion
}

// 3. Create a unified CustomIcon wrapper
// services-section-v2.tsx (Corrected CustomIcon and interface)

// 3. Create a unified CustomIcon wrapper
// 💡 FIX: Do NOT extend React.SVGProps<SVGSVGElement>
interface CustomIconProps {
  // This is your required prop to look up the icon component
  name: keyof typeof IconMap

  // React Icons props (Optional: include if you plan to use them)
  size?: number

  // Standard HTML/SVG props (Optional: include className and style)
  className?: string
  style?: React.CSSProperties // Add style for passing inline styles if needed

  // If you need to pass through all other standard SVG props,
  // you can use an intersection or the spread operator in the function signature,
  // but removing the explicit extension is safer for react-icons.
}

const CustomIcon: React.FC<CustomIconProps> = ({ name, size = 30, className, ...rest }) => {
  const IconComponent = IconMap[name]
  if (!IconComponent) return null

  // The rest of the props (...rest) will be passed directly to the IconComponent.
  // We use className for Tailwind styles and size for React Icons component size.
  return <IconComponent size={size} className={className} {...rest} />
}

// 4. Update the 'tech' array
const tech = [
  { name: "React", src: "react" as keyof typeof IconMap },
  { name: "Next", src: "next" as keyof typeof IconMap },
  { name: "TypeScript", src: "typescript" as keyof typeof IconMap },
  { name: "Motion", src: "motion" as keyof typeof IconMap },
  { name: "Tailwind", src: "tailwindcss" as keyof typeof IconMap },
  { name: "Html", src: "html" as keyof typeof IconMap },
  // ⭐️ ADDED THREE.JS TO TECH STACK ⭐️
  { name: "Three.js", src: "threejs" as keyof typeof IconMap },
  { name: "Git", src: "git" as keyof typeof IconMap },
  { name: "GitHub", src: "github" as keyof typeof IconMap },
  { name: "JavaScript", src: "javascript" as keyof typeof IconMap },
  { name: "C", src: "c" as keyof typeof IconMap },
  { name: "Java", src: "java" as keyof typeof IconMap },
  { name: "React Three Fiber", src: "reactthreefiber" as keyof typeof IconMap },
]

const services = [
  { name: "Full Stack Development", src: "magic-wand" as keyof typeof IconMap },
  { name: "React Development", src: "paint-bucket" as keyof typeof IconMap },
  { name: "Performance Optimization", src: "web" as keyof typeof IconMap },
  { name: "Code Reviews", src: "planet" as keyof typeof IconMap },
  { name: "Advanced Motion", src: "cube" as keyof typeof IconMap },
]

// ... (Animation variants container, container2, element, element2 remain the same) ...

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const container2 = {
  hidden: {},
  visible: {
    transition: {
      stablerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
}
const element = {
  hidden: {
    opacity: 0,
    x: -40,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
  },
}

const element2: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.5,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
}

export const ServicesSectionV2: React.FC = ({ className = "" }: { className?: string }) => {
  // Calculate size from Tailwind classes: h-13 is approx 52px. We'll use 30px for the icon itself.
  const iconSizeTech = 30
  const iconSizeService = 25

  return (
    <section id="technologies" className={clsx("inside-container relative z-2 items-start justify-center md:flex-row md:items-center", className)}>
      {/* LEFT COLUMN  */}
      <div className="flex h-full flex-col gap-16 max-md:w-full md:[flex:2_0_0px]">
        <AnimatedH2>
          Engineering <br />
          <span className="text-slate-500">Toolkit</span>
        </AnimatedH2>

        {/* Tech Stack */}
        <div className="w-full">
          <Text size="base" className="mb-8">
            My Skill Set
          </Text>

          <MotionUl
            className="grid grid-cols-5 gap-8 max-[420px]:justify-items-center md:justify-items-center"
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "0px 0px -100px 0px" }}
          >
            {tech.map(({ name, src }) => (
              <MotionLi key={name} variants={element}>
                <div className="group relative">
                  <input placeholder={name} type="checkbox" className="peer hidden" id={name} />

                  <label
                    htmlFor={name}
                    className="button-shadow flex h-13 w-13 items-center justify-center rounded-xl border border-gray-200 bg-white peer-checked:translate-y-0.5 peer-checked:shadow-none hover:translate-y-0.5"
                  >
                    {/* Use size prop for React Icons */}
                    <CustomIcon name={src} size={iconSizeTech} className="object-contain" />
                  </label>
                  {/* optional tooltip */}
                  <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded-full bg-black px-2 py-1 text-xs text-white opacity-0 transition delay-100 duration-300 group-hover:opacity-100 peer-checked:opacity-100">
                    {name}
                  </span>
                </div>
              </MotionLi>
            ))}
          </MotionUl>
        </div>
      </div>

      {/* RIGHT COLUMN  */}
      <MotionUl
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.8 }}
        variants={container2}
        className="grid [flex:1_0_0px] grid-cols-2 gap-8 md:grid-cols-1"
      >
        {services.map(({ name, src }) => (
          <MotionLi key={name} variants={element2} className="flex items-center gap-3">
            <span className="button-shadow flex aspect-square h-10 w-10 items-center justify-center rounded-full bg-black">
              {/* Use size prop for React Icons */}
              <CustomIcon name={src} size={iconSizeService} className="object-contain invert" />
            </span>
            <Text as="span" size="sm">
              {name}
            </Text>
          </MotionLi>
        ))}
      </MotionUl>
    </section>
  )
}
