import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight, Heart, Baby, Stethoscope, Scan, Users, Sparkles } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Gynecology",
    description: "Comprehensive women's health services including menstrual care, screenings, and treatments for conditions affecting the female reproductive system.",
    features: ["Annual wellness exams", "Menstrual disorder treatment", "PCOS management", "Minimally invasive surgery"],
    color: "bg-pink-50",
    iconColor: "text-pink-500",
    link: "/services/gynecology",
  },
  {
    icon: Baby,
    title: "Obstetrics",
    description: "Expert prenatal, delivery, and postnatal care ensuring a safe and healthy pregnancy journey for both mother and baby.",
    features: ["Prenatal care", "High-risk pregnancy", "Natural & C-section delivery", "Postnatal support"],
    color: "bg-sky-light",
    iconColor: "text-sky",
    link: "/services/obstetrics",
  },
  {
    icon: Sparkles,
    title: "Fertility Care",
    description: "Personalized fertility treatments and reproductive health support with compassion and cutting-edge technology.",
    features: ["Fertility assessments", "IVF & IUI treatments", "Egg freezing", "Counseling support"],
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    link: "/services/fertility",
  },
  {
    icon: Stethoscope,
    title: "Pediatrics",
    description: "Child-focused healthcare from newborns to adolescents with gentle expertise and family-centered approach.",
    features: ["Newborn care", "Vaccinations", "Growth monitoring", "Behavioral health"],
    color: "bg-amber-50",
    iconColor: "text-amber-500",
    link: "/services/pediatrics",
  },
  {
    icon: Users,
    title: "Family Medicine",
    description: "Whole-family healthcare covering preventive care, chronic disease management, and general wellness.",
    features: ["Preventive screenings", "Chronic disease care", "Minor procedures", "Health education"],
    color: "bg-mint",
    iconColor: "text-primary",
    link: "/services/family-medicine",
  },
  {
    icon: Scan,
    title: "Ultrasound Services",
    description: "Advanced diagnostic imaging with state-of-the-art 3D/4D ultrasound technology for accurate diagnoses.",
    features: ["Pregnancy ultrasound", "3D/4D imaging", "Pelvic ultrasound", "Abdominal scans"],
    color: "bg-coral/10",
    iconColor: "text-coral",
    link: "/services/ultrasound",
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Comprehensive Healthcare for{" "}
              <span className="text-gradient">Every Need</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              From women's health to pediatrics, from fertility to family care — we offer a complete 
              range of medical services designed around your family's unique needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="h-full p-8 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300">
                  <div className="flex gap-6">
                    <div
                      className={`shrink-0 w-16 h-16 rounded-xl ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                    >
                      <service.icon className={`w-8 h-8 ${service.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                        {service.description}
                      </p>
                      <ul className="grid grid-cols-2 gap-2 mb-4">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-sm text-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Link
                        to={service.link}
                        className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
