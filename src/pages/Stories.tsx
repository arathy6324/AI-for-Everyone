import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import RealStories from "@/components/RealStories";

const Stories = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Real <span className="bg-gradient-warm bg-clip-text text-transparent">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Discover how people from all walks of life are using AI to enhance their daily activities,
              boost creativity, and achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      <RealStories />
      
      <Footer />
    </div>
  );
};

export default Stories;
