import { motion } from "framer-motion";
import Link from "next/link";
import { Easing } from "framer-motion";
import Image from "next/image";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease:  [0.25, 0.1, 0.25, 1] as Easing, },
};

export default function CaseStudySection() {
  return (
    <section className="w-full px-6 md:px-20 py-[100px]">
      <div className="flex flex-col md:flex-row md:gap-12">
        {/* Left: Services Provided */}
        <motion.div
          {...fadeInUp}
          className="md:w-[35%] w-full flex flex-col space-y-6 mb-10 md:mb-0"
        >
          <h2 className="text-2xl font-light">Services Provided</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "Full-Scale Brand Identity",
              "Visual Rollout",
              "Digital Marketing",
              "Business Card",
              "Web Development"
            ].map((service, i) => (
              <span
                key={i}
                className="border border-black px-4 py-1 rounded-full text-sm"
              >
                {service}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Case Study Content */}
        <motion.div
          {...fadeInUp}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="md:w-[65%] w-full space-y-6"
        >
          <h3 className="text-3xl font-light leading-snug">
             Overview
          </h3>
          <p>
          Glowora entered the market with a bold ambition — to redefine beauty and wellness through a premium yet accessible brand. But the brand needed clarity, emotional connection, and visual consistency. That’s when the Alchemy team partnered with them to build a fully integrated brand identity and experience — one that resonates both digitally and in the real world.
          </p>


          {/* Link */}
         
          <Link href="#" className="inline-flex items-center gap-3 arrow-btn-black">
                View Live Website <Image width="64" height="64" src="/arrow_right_white.svg" alt="arrow" />
              </Link>
        </motion.div>
      </div>
    </section>
  );
}
