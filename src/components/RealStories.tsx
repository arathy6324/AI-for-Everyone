import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Heart, Briefcase, Users } from "lucide-react";

const stories = [
  {
    icon: GraduationCap,
    name: "Emma, 16",
    role: "High School Student",
    story: "AI helps me with homework by explaining difficult concepts in simple terms. It's like having a patient tutor available 24/7.",
    gradient: "from-primary to-orange-400",
  },
  {
    icon: Briefcase,
    name: "David, 45",
    role: "Small Business Owner",
    story: "I use AI to write product descriptions and social media posts. It saves me hours every week and helps my business grow.",
    gradient: "from-secondary to-purple-400",
  },
  {
    icon: Heart,
    name: "Margaret, 72",
    role: "Retiree",
    story: "AI helps me stay connected with my grandchildren by translating messages and organizing our family photos. Technology isn't scary anymore!",
    gradient: "from-pink-400 to-rose-400",
  },
  {
    icon: Users,
    name: "Carlos, 28",
    role: "Artist",
    story: "AI is my creative partner. It helps me brainstorm ideas, sketch concepts, and even suggests color palettes for my paintings.",
    gradient: "from-blue-400 to-cyan-400",
  },
];

const RealStories = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="stories" className="py-24 px-6 bg-background" ref={ref}>
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real People, Real Impact
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AI is already helping people from all walks of life. Here are just a few examples of 
            how everyday people use AI to make their lives better.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story, index) => {
            const Icon = story.icon;
            return (
              <motion.div
                key={story.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative bg-gradient-card p-8 rounded-3xl shadow-soft hover:shadow-glow transition-all duration-300 h-full border border-border/50 overflow-hidden">
                  {/* Gradient accent */}
                  <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${story.gradient}`} />
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${story.gradient} flex items-center justify-center flex-shrink-0`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{story.name}</h3>
                      <p className="text-muted-foreground text-sm">{story.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed pl-16">
                    "{story.story}"
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground">
            These are just a few examples. <span className="text-foreground font-semibold">Your story could be next!</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RealStories;
