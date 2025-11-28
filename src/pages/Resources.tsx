import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import { ExternalLink, Sparkles, Brain, MessageSquare, Palette, BookOpen, Music, Code, Heart, Zap, Camera, Globe, Mic, FileText, Video, Wand2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Resources = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const tools = [
    // Chat Assistants
    {
      name: "ChatGPT",
      description: "Conversational AI that can answer questions, write content, and help with tasks",
      url: "https://chat.openai.com",
      category: "Chat Assistant",
      icon: MessageSquare,
      gradient: "from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Google Gemini",
      description: "Google's powerful AI assistant for research, creativity, and productivity",
      url: "https://gemini.google.com",
      category: "Chat Assistant",
      icon: Sparkles,
      gradient: "from-blue-500/20 to-purple-500/20",
    },
    {
      name: "Claude",
      description: "Anthropic's AI assistant known for thoughtful, detailed conversations",
      url: "https://claude.ai",
      category: "Chat Assistant",
      icon: MessageSquare,
      gradient: "from-orange-500/20 to-amber-500/20",
    },
    {
      name: "Perplexity AI",
      description: "AI-powered search engine that provides cited, accurate answers",
      url: "https://www.perplexity.ai",
      category: "Chat Assistant",
      icon: Globe,
      gradient: "from-cyan-500/20 to-blue-500/20",
    },
    // Design Tools
    {
      name: "Canva AI",
      description: "Design tool with AI features for creating graphics and presentations",
      url: "https://www.canva.com",
      category: "Design",
      icon: Palette,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Midjourney",
      description: "AI art generator that creates stunning images from text descriptions",
      url: "https://www.midjourney.com",
      category: "Design",
      icon: Wand2,
      gradient: "from-indigo-500/20 to-purple-500/20",
    },
    {
      name: "DALL-E",
      description: "OpenAI's image generator for creating unique visuals",
      url: "https://openai.com/dall-e",
      category: "Design",
      icon: Camera,
      gradient: "from-pink-500/20 to-rose-500/20",
    },
    {
      name: "Runway ML",
      description: "AI tools for video editing, image generation, and creative content",
      url: "https://runwayml.com",
      category: "Design",
      icon: Video,
      gradient: "from-violet-500/20 to-purple-500/20",
    },
    {
      name: "Figma AI",
      description: "Design platform with AI-powered features for UI/UX creation",
      url: "https://www.figma.com",
      category: "Design",
      icon: Palette,
      gradient: "from-fuchsia-500/20 to-pink-500/20",
    },
    // Writing Tools
    {
      name: "Grammarly",
      description: "AI writing assistant that helps improve your writing",
      url: "https://www.grammarly.com",
      category: "Writing",
      icon: FileText,
      gradient: "from-green-500/20 to-teal-500/20",
    },
    {
      name: "Jasper AI",
      description: "AI content creator for marketing copy, blogs, and social media",
      url: "https://www.jasper.ai",
      category: "Writing",
      icon: FileText,
      gradient: "from-violet-500/20 to-indigo-500/20",
    },
    {
      name: "Copy.ai",
      description: "Generate marketing copy and content in seconds",
      url: "https://www.copy.ai",
      category: "Writing",
      icon: Zap,
      gradient: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Notion AI",
      description: "AI-powered workspace for notes, tasks, and collaboration",
      url: "https://www.notion.so",
      category: "Writing",
      icon: BookOpen,
      gradient: "from-gray-500/20 to-slate-500/20",
    },
    // Education
    {
      name: "Duolingo",
      description: "Language learning app powered by AI",
      url: "https://www.duolingo.com",
      category: "Education",
      icon: BookOpen,
      gradient: "from-green-500/20 to-lime-500/20",
    },
    {
      name: "Khan Academy",
      description: "Free education platform with AI-powered tutoring",
      url: "https://www.khanacademy.org",
      category: "Education",
      icon: Brain,
      gradient: "from-teal-500/20 to-cyan-500/20",
    },
    {
      name: "Quizlet",
      description: "Study tool with AI-generated flashcards and practice tests",
      url: "https://quizlet.com",
      category: "Education",
      icon: BookOpen,
      gradient: "from-blue-500/20 to-indigo-500/20",
    },
    {
      name: "Coursera",
      description: "Online learning platform with AI-curated course recommendations",
      url: "https://www.coursera.org",
      category: "Education",
      icon: Brain,
      gradient: "from-blue-600/20 to-blue-400/20",
    },
    // Wellness & Fun
    {
      name: "Replika",
      description: "AI companion for mental wellness and conversation",
      url: "https://replika.com",
      category: "Wellness",
      icon: Heart,
      gradient: "from-pink-500/20 to-red-500/20",
    },
    {
      name: "Calm AI",
      description: "Meditation and sleep stories powered by AI",
      url: "https://www.calm.com",
      category: "Wellness",
      icon: Heart,
      gradient: "from-blue-400/20 to-cyan-400/20",
    },
    {
      name: "Headspace",
      description: "Mindfulness app with AI-personalized meditation",
      url: "https://www.headspace.com",
      category: "Wellness",
      icon: Heart,
      gradient: "from-orange-400/20 to-yellow-400/20",
    },
    // Music & Audio
    {
      name: "Suno AI",
      description: "Create music and songs with AI from text prompts",
      url: "https://www.suno.ai",
      category: "Music",
      icon: Music,
      gradient: "from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Murf AI",
      description: "AI voice generator for voiceovers and narration",
      url: "https://murf.ai",
      category: "Music",
      icon: Mic,
      gradient: "from-indigo-500/20 to-blue-500/20",
    },
    {
      name: "AIVA",
      description: "AI composer that creates original music",
      url: "https://www.aiva.ai",
      category: "Music",
      icon: Music,
      gradient: "from-purple-600/20 to-violet-500/20",
    },
    // Code & Development
    {
      name: "GitHub Copilot",
      description: "AI pair programmer that helps you write code faster",
      url: "https://github.com/features/copilot",
      category: "Code",
      icon: Code,
      gradient: "from-gray-600/20 to-gray-400/20",
    },
    {
      name: "Replit AI",
      description: "AI-powered coding platform for learning and building",
      url: "https://replit.com",
      category: "Code",
      icon: Code,
      gradient: "from-orange-500/20 to-amber-500/20",
    },
    {
      name: "Tabnine",
      description: "AI code completion tool for developers",
      url: "https://www.tabnine.com",
      category: "Code",
      icon: Zap,
      gradient: "from-blue-500/20 to-purple-500/20",
    },
  ];

  const categories = ["All", "Chat Assistant", "Design", "Writing", "Education", "Wellness", "Music", "Code"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools = activeCategory === "All" 
    ? tools 
    : tools.filter(tool => tool.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="inline-block mb-6"
            >
              <Sparkles className="w-16 h-16 text-primary" />
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              AI <span className="bg-gradient-warm bg-clip-text text-transparent">Resources</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore 25+ curated AI tools and platforms that are easy to use and perfect for beginners.
              Start your AI journey with these trusted resources.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-12"
          >
            <Tabs defaultValue="All" className="w-full">
              <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8 h-auto gap-2 bg-card/50 p-2 rounded-xl">
                {categories.map((category, index) => (
                  <TabsTrigger
                    key={category}
                    value={category}
                    onClick={() => setActiveCategory(category)}
                    className="data-[state=active]:bg-gradient-warm data-[state=active]:text-white rounded-lg py-3"
                  >
                    <motion.span
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {category}
                    </motion.span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </motion.div>

          {/* Tools Grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20"
            layout
          >
            {filteredTools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -8, transition: { duration: 0.2 } }}
                  onHoverStart={() => setHoveredCard(index)}
                  onHoverEnd={() => setHoveredCard(null)}
                  layout
                  className={`bg-gradient-to-br ${tool.gradient} backdrop-blur-sm p-6 rounded-xl shadow-soft hover:shadow-glow transition-all border border-border/50 relative overflow-hidden group`}
                >
                  {/* Animated background effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={hoveredCard === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        animate={hoveredCard === index ? { rotate: [0, 10, -10, 0] } : {}}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-gradient-warm rounded-lg"
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </motion.div>
                      <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {tool.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed min-h-[60px]">
                      {tool.description}
                    </p>
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full group/btn">
                        Visit Tool
                        <ExternalLink className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* AI Learning Roadmap CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-12 rounded-3xl shadow-glow border border-primary/30 mb-20 overflow-hidden group"
          >
            {/* Animated background glow */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
              style={{ backgroundSize: '200% 200%' }}
            />
            
            <div className="text-center max-w-3xl mx-auto relative z-10">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-block mb-6"
              >
                <div className="relative">
                  <Brain className="w-16 h-16 text-primary" />
                  <motion.div
                    className="absolute -inset-2 bg-primary/20 rounded-full blur-xl"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </div>
              </motion.div>
              <h2 className="text-4xl font-bold mb-4">
                Curious About <span className="bg-gradient-warm bg-clip-text text-transparent">AI?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Follow this simple, well-structured roadmap designed to support your full AI learning journey — from the basics all the way to expert-level skills.
              </p>
              <Link to="/roadmap">
                <Button
                  size="lg"
                  className="text-lg px-10 py-6 rounded-full bg-gradient-warm hover:shadow-glow transition-all relative group/btn"
                >
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0"
                    animate={{ x: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <span className="relative flex items-center gap-2">
                    AI Learning Roadmap
                    <Zap className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  </span>
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Animated Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-6 mb-20"
          >
            {[
              { number: "25+", label: "AI Tools", icon: Zap },
              { number: "7", label: "Categories", icon: Palette },
              { number: "∞", label: "Possibilities", icon: Sparkles },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-card p-8 rounded-2xl text-center shadow-soft border border-border/50"
                >
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  </motion.div>
                  <motion.div
                    className="text-5xl font-bold bg-gradient-warm bg-clip-text text-transparent mb-2"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground font-medium">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <GetStarted />
      
      <Footer />
    </div>
  );
};

export default Resources;