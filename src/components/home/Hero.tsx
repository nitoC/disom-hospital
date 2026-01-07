import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Calendar, Phone, ArrowRight, Shield, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const heroImages = [
  {
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80",
    alt: "Gynecology care at Disom Hospital",
  },
  {
    src: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=80",
    alt: "Obstetrics and maternity care",
  },
  {
    src: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=800&q=80",
    alt: "Pediatric care for children",
  },
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    alt: "Ultrasound diagnostics",
  },
  {
    src: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=800&q=80",
    alt: "Family medicine and care",
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

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

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground leading-tight"
              animate={{ 
                letterSpacing: ["0em", "0.01em", "0em"],
              }}
              transition={{ duration: 3, ease: "easeOut", delay: 0.5 }}
            >
              Caring for{" "}
              <span className="text-gradient">Life</span>
              <br />
              at Every Stage
            </motion.h1>

            <motion.p 
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
              animate={{ opacity: [0.98, 1, 0.98] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              From pregnancy to pediatrics, from fertility to family care — Disom Hospital 
              provides comprehensive, compassionate healthcare for you and your loved ones.
            </motion.p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.div 
                whileHover={{ boxShadow: "0 0 20px hsl(var(--primary) / 0.3)" }}
                className="rounded-lg"
              >
                <Button
                  size="lg"
                  className="gap-2 bg-gradient-primary hover:opacity-90 shadow-elevated text-base px-8 transition-all duration-300"
                  asChild
                >
                  <Link to="/appointment">
                    <Calendar className="w-5 h-5" />
                    Book Appointment
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ boxShadow: "0 0 15px hsl(var(--primary) / 0.15)" }}
                className="rounded-lg"
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 border-2 text-base px-8 transition-all duration-300"
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

          {/* Cinematic Image Slideshow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Image Container with Cinematic Reveal */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-elevated h-[500px]">
                {/* Grain Overlay for Realism */}
                <div 
                  className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
                
                <AnimatePresence mode="sync">
                  {heroImages.map((image, index) => (
                    index === currentIndex && (
                      <motion.div
                        key={index}
                        className="absolute inset-0"
                        initial={{ 
                          clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
                          filter: "blur(8px)",
                        }}
                        animate={{ 
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                          filter: "blur(0px)",
                        }}
                        exit={{ 
                          opacity: 0,
                          scale: 1.02,
                          transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
                        }}
                        transition={{ 
                          clipPath: { duration: 2.8, ease: [0.22, 1, 0.36, 1] },
                          filter: { duration: 1.5, delay: 1.3, ease: "easeOut" },
                        }}
                      >
                        <motion.img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover"
                          animate={{ 
                            scale: [1, 1.03],
                          }}
                          transition={{ 
                            duration: 8,
                            ease: "linear",
                          }}
                        />
                      </motion.div>
                    )
                  ))}
                </AnimatePresence>
                
                {/* Ambient Light Gradient */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-foreground/25 via-transparent to-primary/5 z-10 pointer-events-none"
                  animate={{ 
                    opacity: [0.8, 1, 0.8],
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                
                {/* Soft Edge Vignette */}
                <div className="absolute inset-0 z-10 pointer-events-none shadow-[inset_0_0_60px_rgba(0,0,0,0.1)]" />
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
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
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
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
