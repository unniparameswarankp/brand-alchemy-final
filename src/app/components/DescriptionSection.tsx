import { motion } from "framer-motion";
import Image from "next/image";




export default function DescriptionSection() {
  const images = [
    "/images/webdevelopment.jpg", // Replace with your real image paths
    "/images/softwaredevelopment.jpg",
  ];
  return (
    <section className="w-full px-6 md:px-20 py-24 text-center">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-4xl font-light leading-snug max-w-5xl mx-auto"
      >
        Our Role
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        className="mt-8 max-w-3xl mx-auto"
      >
        Our team at Alchemy handled the end-to-end branding and rollout, covering both digital and physical assets.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[80px]">
        {images.map((src, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full overflow-hidden"
          >
            <Image
              src={src}
              alt={`grid-image-${i}`}
              className="w-full h-[480px] object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
