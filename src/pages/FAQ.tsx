import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Is AI safe to use?",
      answer: "Yes! Most AI tools are designed with safety in mind. Always use AI tools from reputable companies, never share personal sensitive information, and remember that AI is a tool to assist you, not replace your judgment.",
    },
    {
      question: "Do I need to be tech-savvy to use AI?",
      answer: "Not at all! Modern AI tools are designed to be user-friendly. If you can use a smartphone or browse the internet, you can use AI. Most AI assistants work through simple text conversations or intuitive interfaces.",
    },
    {
      question: "Is AI expensive?",
      answer: "Many AI tools offer free versions that are perfect for beginners. Popular tools like ChatGPT, Google Gemini, and Bing AI have free tiers. You can explore and learn without spending money.",
    },
    {
      question: "Will AI take my job?",
      answer: "AI is more likely to change how we work rather than eliminate jobs. Think of it as a tool that can help you work more efficiently. Learning to use AI can actually make you more valuable in your career.",
    },
    {
      question: "Can AI make mistakes?",
      answer: "Yes, AI can make mistakes just like humans. Always verify important information, especially for medical, legal, or financial matters. AI is best used as an assistant to help you, not as the final authority.",
    },
    {
      question: "How do I start learning about AI?",
      answer: "Start by trying simple AI tools like ChatGPT or Google Gemini. Ask them questions, explore their features, and practice. The best way to learn is by doing. Check our Resources page for beginner-friendly tools.",
    },
    {
      question: "What can I use AI for in daily life?",
      answer: "AI can help with writing emails, planning meals, learning new skills, getting homework help, creating art, organizing your schedule, translating languages, and much more. The possibilities are vast!",
    },
    {
      question: "Is my data private when using AI?",
      answer: "Reputable AI companies take data privacy seriously. Read the privacy policy of any AI tool you use. Avoid sharing sensitive personal information like passwords, financial details, or private medical information.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked{" "}
              <span className="bg-gradient-warm bg-clip-text text-transparent">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get answers to common questions about AI and how you can use it safely and effectively.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-card rounded-2xl p-6 md:p-8 shadow-glow"
          >
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-warm text-white rounded-full font-semibold shadow-glow hover:shadow-intense transition-all"
              >
                Contact Us
              </motion.button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
