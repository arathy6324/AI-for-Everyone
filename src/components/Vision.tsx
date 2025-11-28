import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, Sparkles, Heart } from "lucide-react";

const visionPoints = [
  {
    icon: Users,
    text: "Everyone, regardless of age or background, can use AI confidently",
  },
  {
    icon: Globe,
    text: "AI helps bridge communication gaps and connect people across the world",
  },
  {
    icon: Sparkles,
    text: "Creativity and learning are accessible to all through AI-powered tools",
  },
  {
    icon: Heart,
    text: "Technology enhances our humanity instead of replacing it",
  },
];

const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="vision" className="py-24 px-6 bg-background relative overflow-hidden" ref={ref}>
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 overflow-hidden pointer-events-none opacity-20"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.2 } : {}}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our Vision for the Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe in a world where AI empowers everyone to achieve their dreams, 
            connect with others, and solve problems—big and small.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {visionPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-start gap-4 bg-gradient-card p-6 rounded-2xl shadow-soft border border-border/50 hover:shadow-glow transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-warm rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-lg leading-relaxed pt-2">{point.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-card p-12 rounded-3xl shadow-glow border border-border/50 max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Together, we can build a future where{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">
                AI works for everyone
              </span>
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Not just programmers, not just experts—everyone. From children learning their first 
              words to grandparents sharing their stories, AI can be a tool that brings us together 
              and helps us thrive.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Vision;
