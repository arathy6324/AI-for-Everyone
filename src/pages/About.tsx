import { motion } from "framer-motion";
import { Brain, Heart, Lightbulb, Users } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const About = () => {
  const features = [
    {
      icon: Brain,
      title: "Learn & Understand",
      description: "AI helps you learn new things faster by explaining complex topics in simple ways.",
    },
    {
      icon: Heart,
      title: "Assists Daily Life",
      description: "From organizing your day to helping with creative projects, AI is your helpful companion.",
    },
    {
      icon: Lightbulb,
      title: "Spark Creativity",
      description: "Generate ideas, create art, write stories - AI amplifies your creative potential.",
    },
    {
      icon: Users,
      title: "Connect People",
      description: "Break language barriers and connect with people worldwide through AI translation.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6 bg-gradient-hero">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              What Is <span className="bg-gradient-warm bg-clip-text text-transparent">AI?</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Artificial Intelligence (AI) is like a helpful friend inside your computer that can learn, see, and create. 
              It's not magic—it's a tool that learns from examples to help make your life easier.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-glow mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">AI in Simple Terms</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Think of AI as a very smart assistant that can:
              </p>
              <ul className="space-y-3 ml-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Understand</strong> what you're saying or writing</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Recognize</strong> pictures and faces</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Create</strong> images, music, or text</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Suggest</strong> things you might like</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary mt-1">•</span>
                  <span><strong className="text-foreground">Help</strong> you solve problems faster</span>
                </li>
              </ul>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gradient-card p-6 rounded-xl shadow-soft hover:shadow-glow transition-all"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
