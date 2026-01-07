import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Target, Eye, Heart, Shield, Users, Award, CheckCircle } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We treat every patient with empathy, kindness, and respect.",
  },
  {
    icon: Shield,
    title: "Excellence",
    description: "We strive for the highest standards in medical care and service.",
  },
  {
    icon: Users,
    title: "Patient-Centered",
    description: "Your health goals guide every decision we make together.",
  },
  {
    icon: Award,
    title: "Integrity",
    description: "We uphold transparency and ethical practices in all we do.",
  },
];

const timeline = [
  { year: "1995", title: "Foundation", description: "Disom Hospital was founded with a vision to provide accessible healthcare." },
  { year: "2003", title: "Expansion", description: "Opened our state-of-the-art maternity and pediatric wing." },
  { year: "2010", title: "Recognition", description: "Received national accreditation for excellence in patient care." },
  { year: "2018", title: "Innovation", description: "Launched advanced fertility center with cutting-edge technology." },
  { year: "2024", title: "Today", description: "Serving 50,000+ patients annually with 50+ specialist doctors." },
];

const About = () => {
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
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Caring for Families Since{" "}
              <span className="text-gradient">1995</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              For nearly three decades, Disom Hospital has been at the forefront of family healthcare, 
              providing comprehensive medical services with compassion and excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-background rounded-2xl shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To provide exceptional, patient-centered healthcare that addresses the unique needs of 
                families at every stage of life. We are committed to combining medical excellence with 
                genuine compassion to improve the health and well-being of our community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-background rounded-2xl shadow-card border border-border"
            >
              <div className="w-14 h-14 rounded-xl bg-coral/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-coral" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted healthcare destination for families, recognized for our 
                unwavering commitment to quality, innovation, and the holistic well-being of every 
                patient we serve. We envision a healthier community, one family at a time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-muted-foreground">
              The principles that guide everything we do at Disom Hospital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 bg-card rounded-2xl border border-border text-center hover:shadow-card transition-shadow"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-accent flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                  {value.title}
                </h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground">
              Three decades of growth, innovation, and dedicated patient care.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="shrink-0 w-20">
                  <span className="text-2xl font-display font-bold text-primary">{item.year}</span>
                </div>
                <div className="relative flex-1 pb-8 pl-8 border-l-2 border-border last:border-l-0">
                  <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80"
                alt="Disom Hospital Team"
                className="w-full h-96 object-cover rounded-2xl shadow-card"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-primary/10 -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                A Team Dedicated to Your Health
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our team of over 50 specialists and 200 healthcare professionals work together 
                to provide you with the highest quality care. From world-class physicians to 
                compassionate nursing staff, every member of our team is committed to your well-being.
              </p>
              <ul className="space-y-3">
                {["Board-certified specialists", "24/7 emergency care", "State-of-the-art facilities", "Personalized treatment plans"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
