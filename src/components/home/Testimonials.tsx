import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "First-time Mother",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    content: "The obstetrics team at Disom Hospital made my pregnancy journey so special. From prenatal care to delivery, every step was handled with such care and expertise. I couldn't have asked for a better experience.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael & Jennifer Adams",
    role: "Fertility Patients",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
    content: "After years of trying, the fertility team gave us hope when we had almost given up. Their personalized approach and constant support led to our miracle baby. Forever grateful!",
    rating: 5,
  },
  {
    id: 3,
    name: "David Thompson",
    role: "Parent of Two",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    content: "The pediatric department has been looking after my kids since they were born. Dr. Williams and her team are not just doctors, they're family. The kids actually enjoy their visits!",
    rating: 5,
  },
  {
    id: 4,
    name: "Emily Roberts",
    role: "Regular Patient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    content: "The gynecology services here are exceptional. Dr. Chen takes time to listen and explain everything thoroughly. The staff is always friendly and professional. Highly recommend!",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-24 bg-card overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            What Our{" "}
            <span className="text-gradient">Patients Say</span>
          </h2>
          <p className="text-muted-foreground">
            Real stories from real families who trusted us with their healthcare journey.
          </p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative min-h-[320px] md:min-h-[280px]">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <div className="bg-background rounded-3xl p-8 md:p-12 shadow-card border border-border">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Quote Icon */}
                    <div className="shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                        <Quote className="w-7 h-7 text-primary" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <p className="text-foreground text-lg leading-relaxed mb-6">
                        "{testimonials[currentIndex].content}"
                      </p>

                      <div className="flex items-center gap-4">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                        />
                        <div>
                          <h4 className="font-display font-semibold text-foreground">
                            {testimonials[currentIndex].name}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {testimonials[currentIndex].role}
                          </p>
                          <div className="flex gap-0.5 mt-1">
                            {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-amber-400 fill-amber-400"
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-soft"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    idx === currentIndex
                      ? "bg-primary w-8"
                      : "bg-border hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors shadow-soft"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
