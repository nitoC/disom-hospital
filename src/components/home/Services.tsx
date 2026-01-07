import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Heart,
  Baby,
  Stethoscope,
  Scan,
  Users,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "Gynecology",
    description:
      "Comprehensive women's health services including screenings, treatments, and preventive care.",
    color: "bg-pink-50",
    iconColor: "text-pink-500",
    link: "/gallery",
    // link: "/services/gynecology",
  },
  {
    icon: Baby,
    title: "Obstetrics",
    description:
      "Expert prenatal, delivery, and postnatal care for a healthy pregnancy journey.",
    color: "bg-sky-light",
    iconColor: "text-sky",
    link: "/gallery",
    // link: "/services/obstetrics",
  },
  {
    icon: Sparkles,
    title: "Fertility Care",
    description:
      "Personalized fertility treatments and reproductive health support with compassion.",
    color: "bg-purple-50",
    iconColor: "text-purple-500",
    link: "/gallery",
    // link: "/services/fertility",
  },
  {
    icon: Stethoscope,
    title: "Pediatrics",
    description:
      "Child-focused healthcare from newborns to adolescents with gentle expertise.",
    color: "bg-amber-50",
    iconColor: "text-amber-500",
    link: "/gallery",
    // link: "/services/pediatrics",
  },
  {
    icon: Users,
    title: "Family Medicine",
    description:
      "Whole-family healthcare covering preventive care to chronic condition management.",
    color: "bg-mint",
    iconColor: "text-primary",
    link: "/gallery",
    // link: "/services/family-medicine",
  },
  {
    icon: Scan,
    title: "Ultrasound",
    description:
      "Advanced diagnostic imaging with state-of-the-art 3D/4D ultrasound technology.",
    color: "bg-coral/10",
    iconColor: "text-coral",
    link: "/gallery",
    // link: "/services/ultrasound",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Comprehensive Care for Your{" "}
            <span className="text-gradient">Entire Family</span>
          </h2>
          <p className="text-muted-foreground">
            From preventive care to specialized treatments, we offer a full
            spectrum of healthcare services designed around your family's unique
            needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <Link
                to={service.link}
                className="block h-full p-8 bg-background rounded-2xl border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <div
                  className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg" className="gap-2" asChild>
            <Link to="/services">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
