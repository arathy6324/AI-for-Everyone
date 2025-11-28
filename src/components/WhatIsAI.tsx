import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Eye, Palette, MessageSquare } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Learn & Remember",
    description: "AI can learn from information, just like you learn from reading a book or practicing a skill.",
  },
  {
    icon: Eye,
    title: "See & Understand",
    description: "It can look at pictures and understand what's in them, helping you organize photos or find lost items.",
  },
  {
    icon: Palette,
    title: "Create & Design",
    description: "AI can help you write stories, make art, or compose music—bringing your creative ideas to life.",
  },
  {
    icon: MessageSquare,
    title: "Talk & Help",
    description: "It can answer your questions, give advice, or even translate languages so you can connect with anyone.",
  },
];

const WhatIsAI = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="what-is-ai" className="py-24 px-6 bg-muted/30" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What Is AI, Really?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI is a technology that helps computers think and learn like humans. It can understand information, recognize images or voices, and improve itself by learning from experience. You see AI every day—in voice assistants, smart recommendations, chatbots, and even simple tools on your phone. Simply put, AI is all about making machines smarter so they can help us in our daily life. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-gradient-card p-8 rounded-3xl shadow-soft hover:shadow-glow transition-all duration-300 h-full border border-border/50">
                  <div className="w-14 h-14 bg-gradient-warm rounded-2xl flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-card p-8 rounded-3xl shadow-soft max-w-3xl mx-auto border border-border/50">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-primary">The best part?</span> You don't need to be a 
              programmer or tech expert to use AI. It's designed to understand you and help you accomplish 
              your goals, no matter your age or experience level.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIsAI;
