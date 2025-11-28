import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import WhatIsAI from "@/components/WhatIsAI";
import RealStories from "@/components/RealStories";
import Vision from "@/components/Vision";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Users, Rocket } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <WhatIsAI />
      
      {/* Quick Links Section */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore More
            </h2>
            <p className="text-xl text-muted-foreground">
              Discover everything AI has to offer
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link to="/stories">
                <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all h-full">
                  <Users className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Real Stories</h3>
                  <p className="text-muted-foreground mb-4">
                    See how people are using AI in their daily lives
                  </p>
                  <Button variant="ghost" className="group">
                    Read Stories
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link to="/resources">
                <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all h-full">
                  <BookOpen className="w-12 h-12 text-secondary mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Resources</h3>
                  <p className="text-muted-foreground mb-4">
                    Explore curated AI tools and learning materials
                  </p>
                  <Button variant="ghost" className="group">
                    View Resources
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Link to="/get-started">
                <div className="bg-gradient-card p-8 rounded-2xl shadow-soft hover:shadow-glow transition-all h-full">
                  <Rocket className="w-12 h-12 text-accent mb-4" />
                  <h3 className="text-2xl font-bold mb-3">Get Started</h3>
                  <p className="text-muted-foreground mb-4">
                    Begin your AI journey with simple steps
                  </p>
                  <Button variant="ghost" className="group">
                    Start Now
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <RealStories />
      <Vision />
      <Footer />
    </div>
  );
};

export default Index;
