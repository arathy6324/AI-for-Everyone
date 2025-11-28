import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Vision from "@/components/Vision";

const GetStartedPage = () => {
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
              Begin Your <span className="bg-gradient-warm bg-clip-text text-transparent">AI Journey</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Follow these simple steps to start using AI today. No technical knowledge required!
            </p>
          </motion.div>
        </div>
      </section>

      <GetStarted />
      <Vision />
      
      <Footer />
    </div>
  );
};

export default GetStartedPage;
