import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowRight, Shield, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-coral/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-mint/30 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-200px)]">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent border border-primary/20"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
              <span className="text-sm font-medium text-accent-foreground">
                Trusted Healthcare Since 1995
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight">
              Caring for{" "}
              <span className="text-gradient">Life</span>
              <br />
              at Every Stage
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              From pregnancy to pediatrics, from fertility to family care — Disom Hospital 
              provides comprehensive, compassionate healthcare for you and your loved ones.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-primary hover:opacity-90 shadow-elevated text-base px-8"
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
                  className="gap-2 border-2 text-base px-8"
                  asChild
                >
                  <a href="tel:+1234567890">
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                </Button>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { icon: Shield, text: "Accredited Care" },
                { icon: Users, text: "Expert Doctors" },
                { icon: Star, text: "5-Star Rated" },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <item.icon className="w-4 h-4 text-primary" />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80"
                  alt="Medical professionals at Disom Hospital"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -left-8 top-20 glass-card rounded-2xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">50+</p>
                    <p className="text-xs text-muted-foreground">Expert Doctors</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3.5, repeat: Infinity }}
                className="absolute -right-4 bottom-20 glass-card rounded-2xl p-4 z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center">
                    <Star className="w-6 h-6 text-coral" />
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">4.9</p>
                    <p className="text-xs text-muted-foreground">Patient Rating</p>
                  </div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute -z-10 top-10 -right-10 w-full h-full rounded-3xl bg-primary/10" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto"
        >
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--card))"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
