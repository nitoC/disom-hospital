import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Linkedin, Mail, Phone } from "lucide-react";

const doctors = [
  {
    name: "Dr. Sarah Chen",
    specialty: "Gynecologist & Obstetrician",
    experience: "15+ years",
    bio: "Specializing in high-risk pregnancies and minimally invasive gynecological surgery.",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. James Williams",
    specialty: "Pediatrician",
    experience: "12+ years",
    bio: "Dedicated to providing compassionate care for children from infancy through adolescence.",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Fertility Specialist",
    experience: "10+ years",
    bio: "Helping families achieve their dreams through advanced reproductive technologies.",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Michael Brown",
    specialty: "Family Medicine",
    experience: "18+ years",
    bio: "Providing comprehensive primary care for patients of all ages.",
    image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Emily Rodriguez",
    specialty: "Obstetrics",
    experience: "8+ years",
    bio: "Focused on ensuring safe and healthy pregnancies with personalized prenatal care.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. David Park",
    specialty: "Ultrasound Specialist",
    experience: "14+ years",
    bio: "Expert in diagnostic imaging with advanced 3D/4D ultrasound technology.",
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Lisa Thompson",
    specialty: "Neonatologist",
    experience: "11+ years",
    bio: "Specialized care for premature and critically ill newborns.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Dr. Robert Martinez",
    specialty: "Gynecologist",
    experience: "16+ years",
    bio: "Comprehensive women's health services with a focus on preventive care.",
    image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
  },
];

const DoctorsPage = () => {
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
              Our Medical Team
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Meet Our{" "}
              <span className="text-gradient">Expert Doctors</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Our team of board-certified specialists brings decades of combined experience 
              and a shared commitment to exceptional patient care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {doctors.map((doctor, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group"
              >
                <div className="bg-background rounded-2xl overflow-hidden shadow-soft hover:shadow-card transition-shadow">
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                    
                    {/* Social Links */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="w-9 h-9 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-foreground hover:text-primary"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1 }}
                        className="w-9 h-9 rounded-full bg-card/90 backdrop-blur flex items-center justify-center text-foreground hover:text-primary"
                      >
                        <Mail className="w-4 h-4" />
                      </motion.a>
                    </div>

                    {/* Experience Badge */}
                    <div className="absolute bottom-4 left-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/20 backdrop-blur text-xs font-medium text-primary-foreground">
                        {doctor.experience}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <h3 className="text-lg font-display font-semibold text-foreground mb-1">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2">{doctor.specialty}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{doctor.bio}</p>
                    
                    <button className="mt-4 w-full py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Book Appointment
                    </button>
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

export default DoctorsPage;
