import Image from "next/image"
import clsx from "clsx"
import { Text, Typography } from "../ui/Elements"
import { AnimatedH2 } from "./ui/AnimatedH2"
import { ImageReveal } from "./ImageReveal"
import { MotionDiv } from "../utils/lazy-ui"

export const AboutSectionV2 = ({ className = "" }: { className?: string }) => {
  return (
    <section id="about" className={clsx("border-y border-gray-200 bg-white", className)}>
      <div className="inside-container relative z-2">
        {/* HEADLINE */}
        <AnimatedH2>
          <span className="text-slate-500">About</span>
          <br />
          Dev Rastogi
        </AnimatedH2>
        <div className="flex flex-col-reverse gap-12 md:flex-row md:gap-16">
          {/* ---------------- left column ---------------- */}

          <div className="flex [flex:1_0_0px] flex-col gap-6">
            {/* portrait + overlay icons */}

            <ImageReveal src="/profile.jpg" alt="Austin Serb" className="custom-shadow aspect-[4/4.5]" />

            {/* name + role */}
            <MotionDiv
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
            >
              <Text as="h2" size="lg" className="font-medium">
                Dev Rastogi
              </Text>
              <p className="text-sm text-gray-500">Full Stack Developer</p>
            </MotionDiv>
          </div>
          {/* ---------------- right column ---------------- */}
          <Typography as="article" size="lg" className="[flex:1.5_0_0px] space-y-8 text-slate-500">
            <p>
              <strong className="font-semibold text-slate-900">I build full-stack applications and immersive interfaces</strong> by combining modern web technologies with 3D/interactive design. I enjoy creating tools, components, and workflows that make UIs faster, smoother, and more intuitive—whether it’s real-time 3D elements, custom animations, or scalable system architecture.
            </p>

            <p>
              <strong className="font-semibold text-slate-900">I ship performant products quickly and iterate rapidly.</strong>. I work end-to-end across React, Node.js, databases, APIs, and deployments, while integrating 3D experiences using Three.js and advanced animation libraries. My focus is delivering expressive, user-centered interfaces with clean code, seamless interactions, and measurable performance.
            </p>
            <p>
              <strong className="font-semibold text-slate-900">My core philosophy is clarity in complexity.</strong>. Even when building interactive 3D features or full-stack systems, I prioritize simple architecture, readable code, and frictionless user experience. I believe great engineering balances performance, aesthetics, and practicality.
            </p>

            {/* signature */}
            <Image src="/sign.png" alt="Austin Serb Signature" width={250} height={50} className="relative mt-6 -ml-3" />
          </Typography>
        </div>
      </div>
    </section>
  )
}
