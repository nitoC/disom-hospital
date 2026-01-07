import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-coral blur-3xl" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect fill="url(#grid)" width="100%" height="100%" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
            <span className="text-sm font-medium text-primary">
              Your Health Is Our Priority
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary-foreground mb-6 leading-tight">
            Ready to Experience{" "}
            <span className="text-primary">Exceptional Care?</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Book your appointment today and take the first step towards better health. 
            Our team of experts is ready to provide you with personalized, compassionate care.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-elevated text-base px-8"
                asChild
              >
                <Link to="/appointment">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base px-8"
                asChild
              >
                <a href="tel:+1234567890">
                  <Phone className="w-5 h-5" />
                  Emergency: +1 (234) 567-890
                </a>
              </Button>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 mt-12 pt-12 border-t border-primary-foreground/10"
          >
            {["24/7 Emergency", "Same-Day Appointments", "Insurance Accepted", "Free Consultation"].map(
              (item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-primary-foreground/70">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              )
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
