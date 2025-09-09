"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Escolhe a zona",
    text: "Ajudamos na escolha da área e melhor solução para instalar a sua Grab&Go, e damos-lhe exclusividade total, onde pode desenvolver a sua atividade e abrir mais lojas. Só necessita de 30 m2.",
    image: "/images/service.jpeg",
  },
  {
    title: "Escolhe o pack",
    text: "Ajudamos na escolha da área e melhor solução para instalar a sua Grab&Go, e damos-lhe exclusividade total, onde pode desenvolver a sua atividade e abrir mais lojas. Só necessita de 30 m2.",
    image: "/images/service.jpeg",
  },
  {
    title: "Loja pronta em 1 mês",
    text: "Ajudamos na escolha da área e melhor solução para instalar a sua Grab&Go, e damos-lhe exclusividade total, onde pode desenvolver a sua atividade e abrir mais lojas. Só necessita de 30 m2.",
    image: "/images/service.jpeg",
  },
];

export default function ScrollSteps() {
  const textRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    if (window.innerWidth >= 1280) {
      const imageTriggers = gsap.utils.toArray(".step-image") as HTMLElement[];

      imageTriggers.forEach((img, index) => {
        ScrollTrigger.create({
          trigger: img,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveStep(index),
          onEnterBack: () => setActiveStep(index),
        });
      });

      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top top",
        end: `+=${window.innerHeight * (steps.length - 1)}`,
        pin: true,
        scrub: true,
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    }
  }, []);

  return (
    <section id="section3" className="relative text-black ba-steps py-12">
      {/* Mobile & tablet view (stacked cards) */}
      <div className="xl:hidden px-4 space-y-8">
        {steps.map((step, index) => (
         <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
  viewport={{ once: true, amount: 0.2 }}
  className="rounded-xl shadow-lg overflow-hidden bg-white"
>
  <Image src={step.image} width="64" height="64" alt={step.title} className="w-full h-48 object-cover" />
  <div className="p-4">
    <h3 className="text-xl font-semibold text-primary mb-2">{step.title}</h3>
    <p className="text-sm text-gray-700">{step.text}</p>
  </div>
</motion.div>

        ))}
      </div>

      {/* Desktop view (animated section) */}
      <div className="hidden xl:grid xl:grid-cols-2 gap-10 ba-container">
        {/* Left: Scrollable images */}
        <div className="flex flex-col space-y-20 pt-[100px] pb-[100px] image-step mr-[-100px]">
          {steps.map((step, index) => (
            <figure key={index}>
              <Image width="64" height="64"
                src={step.image}
                alt={step.title}
                className={`step-image w-full transition-opacity duration-500 ease-in-out ${
                  activeStep === index ? "opacity-100" : "opacity-0"
                }`}
              />
            </figure>
          ))}
        </div>

        {/* Right: Pinned text */}
        <div
          className="sticky top-0 h-screen flex items-center xl:pl-[100px]"
          ref={textRef}
        >
          <div className="space-y-12 p-4 text-step">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`transition-opacity duration-300 ${
                  activeStep === index ? "opacity-100" : "opacity-30"
                }`}
              >
                <h3 className="text-4xl font-light text-primary mb-4">
                  {step.title}
                </h3>
                <p className="text-sm text-black max-w-sm">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
