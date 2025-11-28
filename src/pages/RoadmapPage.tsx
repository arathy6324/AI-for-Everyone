import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Brain, Code, Sparkles, Rocket, Target, TrendingUp, Zap, Cpu, Database, Network, Map } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const RoadmapPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const roadmapLevels = [
    {
      id: "beginner",
      title: "Beginner Path",
      subtitle: "AI Explorer",
      color: "from-green-500/20 to-emerald-500/20",
      badgeColor: "from-green-500 to-emerald-500",
      icon: Rocket,
      steps: [
        {
          id: "python-basics",
          title: "Python Basics",
          description: "Learn Python fundamentals - variables, loops, functions, and basic data structures",
          icon: Code,
        },
        {
          id: "math-fundamentals",
          title: "Math for AI",
          description: "Master algebra, probability, and basic statistics needed for AI",
          icon: Target,
        },
        {
          id: "intro-ml",
          title: "Introduction to Machine Learning",
          description: "Understand what ML is, types of learning, and basic algorithms",
          icon: Brain,
        },
        {
          id: "first-project",
          title: "Simple AI Project",
          description: "Build a classification model with a real dataset",
          icon: Zap,
        },
      ]
    },
    {
      id: "intermediate",
      title: "Intermediate Path",
      subtitle: "AI Builder",
      color: "from-blue-500/20 to-cyan-500/20",
      badgeColor: "from-blue-500 to-cyan-500",
      icon: TrendingUp,
      steps: [
        {
          id: "data-preprocessing",
          title: "Data Preprocessing",
          description: "Master data cleaning, normalization, feature engineering, and handling missing values",
          icon: Database,
        },
        {
          id: "ml-algorithms",
          title: "ML Algorithms Deep Dive",
          description: "Learn Decision Trees, Random Forests, SVM, KNN, and ensemble methods",
          icon: Network,
        },
        {
          id: "model-evaluation",
          title: "Model Evaluation & Tuning",
          description: "Understand metrics, cross-validation, and hyperparameter optimization",
          icon: TrendingUp,
        },
        {
          id: "real-world-project",
          title: "Real-World Application",
          description: "Build an end-to-end ML project from data collection to deployment",
          icon: Rocket,
        },
      ]
    },
    {
      id: "advanced",
      title: "Advanced Path",
      subtitle: "AI Innovator",
      color: "from-purple-500/20 to-pink-500/20",
      badgeColor: "from-purple-500 to-pink-500",
      icon: Cpu,
      steps: [
        {
          id: "deep-learning",
          title: "Deep Learning Foundations",
          description: "Neural networks, backpropagation, activation functions, and optimization",
          icon: Brain,
        },
        {
          id: "cnn-rnn",
          title: "CNNs & RNNs",
          description: "Convolutional Neural Networks for images and Recurrent Neural Networks for sequences",
          icon: Cpu,
        },
        {
          id: "nlp-cv",
          title: "NLP & Computer Vision",
          description: "Natural Language Processing and advanced Computer Vision techniques",
          icon: Sparkles,
        },
        {
          id: "deployment",
          title: "Model Deployment",
          description: "Deploy models to production, API creation, and monitoring",
          icon: Rocket,
        },
        {
          id: "capstone",
          title: "Capstone Project",
          description: "Create an innovative AI solution that solves a real problem",
          icon: Sparkles,
        },
      ]
    }
  ];

  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="min-h-screen" ref={containerRef}>
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Floating Icons */}
            <div className="relative h-32 mb-8">
              <motion.div
                animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute left-1/4 top-0"
              >
                <Brain className="w-12 h-12 text-primary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -10, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute right-1/4 top-4"
              >
                <Cpu className="w-10 h-10 text-secondary" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -25, 0], rotate: [0, 15, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute left-1/3 top-8"
              >
                <Code className="w-8 h-8 text-accent" />
              </motion.div>
              <motion.div
                animate={{ y: [0, -18, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-1/3 top-2"
              >
                <Network className="w-10 h-10 text-primary" />
              </motion.div>
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute left-1/2 transform -translate-x-1/2 top-4"
              >
                <Map className="w-16 h-16 text-primary" />
              </motion.div>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Your Complete <span className="bg-gradient-warm bg-clip-text text-transparent">AI Learning Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A friendly, step-by-step guide from complete beginner to AI expert. 
              Follow this curated path to master artificial intelligence.
            </p>
          </motion.div>

        </div>

        {/* Animated background gradient */}
        <div className="absolute inset-0 -z-10">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '400% 400%' }}
          />
        </div>
      </section>

      {/* Roadmap Levels */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-5xl relative">
          {/* SVG Timeline Path */}
          <svg className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 hidden md:block" style={{ zIndex: 0 }}>
            <motion.line
              x1="50%"
              y1="0"
              x2="50%"
              y2="100%"
              stroke="url(#gradient)"
              strokeWidth="3"
              strokeDasharray="10,5"
              initial={{ pathLength: 0 }}
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="50%" stopColor="hsl(var(--secondary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
              </linearGradient>
            </defs>
          </svg>

          {roadmapLevels.map((level, levelIndex) => {
            const LevelIcon = level.icon;
            
            return (
              <motion.div
                key={level.id}
                initial={{ opacity: 0, x: levelIndex % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: levelIndex * 0.2 }}
                className="mb-20 relative"
              >
                {/* Level Checkpoint */}
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-8 hidden md:block z-10"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${level.badgeColor} flex items-center justify-center shadow-glow`}>
                    <LevelIcon className="w-8 h-8 text-white" />
                  </div>
                </motion.div>

                <Card className={`bg-gradient-to-br ${level.color} backdrop-blur-sm border-border/50 shadow-soft hover:shadow-glow transition-all relative overflow-hidden group`}>
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  
                  <CardHeader className="relative z-10">
                    <CardTitle className="text-3xl font-bold flex items-center gap-3 mb-2">
                      <LevelIcon className="w-8 h-8" />
                      {level.title}
                    </CardTitle>
                    <CardDescription className="text-lg">
                      {level.subtitle} - Your journey to mastering AI
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    <div className="space-y-6">
                      {level.steps.map((step, stepIndex) => {
                        const StepIcon = step.icon;
                        
                        return (
                          <motion.div
                            key={step.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: stepIndex * 0.1 }}
                            className="border border-border/50 rounded-lg p-6 bg-background/50 backdrop-blur-sm hover:bg-background/70 transition-all"
                          >
                            <div className="flex items-start gap-4">
                              <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ duration: 0.3 }}
                              >
                                <div className="w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/30">
                                  <StepIcon className="w-7 h-7 text-primary" />
                                </div>
                              </motion.div>
                              <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                  <h4 className="font-bold text-xl">{step.title}</h4>
                                  <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                                    Step {stepIndex + 1}
                                  </span>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                  {step.description}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Motivational CTA */}
      <section className="pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-12 rounded-3xl text-center border border-primary/30 shadow-glow"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-primary" />
            </motion.div>
            <h2 className="text-4xl font-bold mb-4">
              Start Your <span className="bg-gradient-warm bg-clip-text text-transparent">AI Journey Today!</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every expert was once a beginner. Take the first step and unlock your potential in the world of AI.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RoadmapPage;
