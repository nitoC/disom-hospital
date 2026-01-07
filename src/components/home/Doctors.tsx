import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    name: "Dr. P.U. Agu",
    specialty: "Gynecologist & Obstetrician",
    experience: "15+ years",
    image: "/dragu.png",
  },
  // {
  //   name: "Dr. James Williams",
  //   specialty: "Pediatrician",
  //   experience: "12+ years",
  //   image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  // },
  // {
  //   name: "Dr. Priya Sharma",
  //   specialty: "Fertility Specialist",
  //   experience: "10+ years",
  //   image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  // },
  // {
  //   name: "Dr. Michael Brown",
  //   specialty: "Family Medicine",
  //   experience: "18+ years",
  //   image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Doctors = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
            Our Medical Team
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Meet Our <span className="text-gradient">Expert Doctors</span>
          </h2>
          <p className="text-muted-foreground">
            Our team of board-certified specialists brings decades of combined
            experience and a shared commitment to exceptional patient care.
          </p>
        </motion.div>

        {/* Doctors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {doctors.map((doctor, idx) => (
            <motion.div key={idx} variants={itemVariants} className="group">
              <div className="relative rounded-2xl overflow-hidden shadow-card">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />

                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-foreground hover:text-primary"
                    >
                      <Linkedin className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.1 }}
                      className="w-10 h-10 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-foreground hover:text-primary"
                    >
                      <Mail className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur text-xs font-medium mb-3">
                    {doctor.experience}
                  </span>
                  <h3 className="text-xl font-display font-semibold mb-1">
                    {doctor.name}
                  </h3>
                  <p className="text-sm opacity-80">{doctor.specialty}</p>
                </div>
              </div>
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
          <Button
            size="lg"
            className="gap-2 bg-gradient-primary hover:opacity-90 shadow-soft"
            asChild
          >
            <Link to="/doctors">
              View All Doctors
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Doctors;
