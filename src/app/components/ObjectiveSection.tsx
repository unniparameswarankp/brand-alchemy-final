import { motion } from "framer-motion";
import Image from "next/image";


export default function ObjectiveSection() {
  return (
    <>
    <section className="w-full px-6 md:px-20 pb-[100px]">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-light mb-6"
      >
        Our Role
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-3xl"
      >
        From the spark of an idea to the glow of a full-fledged brand, Alchemy worked closely with the Glowora team to bring their vision to life across all channels.
      </motion.p>
    </section>

    <section className="w-full px-6 md:px-20 pb-[100px]">
      {/* Header */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-light mb-6"
      >
        Brand Identity
      </motion.h2>


      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6,}}
            className="space-y-4"
          >
            <div>icon</div>
            <h3 className="font-regular text-lg">Logo Design</h3>
            <p className="leading-relaxed">The logo design phase focused on creating a mark that would be both timeless and flexible — capable of living on packaging, digital screens, and even large outdoor displays. We explored several visual directions before finalizing a clean, modern logo that subtly incorporates themes of light and clarity — the essence of Glowora’s name.</p>
          </motion.div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-[80px]">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="w-full overflow-hidden"
                >
                  <Image width="64" height="64"
                    src=""
                    alt="image"
                    className="w-full h-[480px] object-cover"
                  />
                </motion.div>
            </div>
    </section>
    </>
  );
}
