import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center">
                <img
                  src="/dis-logo.png"
                  alt="Disom Hospital Logo"
                  width={30}
                  height={30}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-display font-bold">Disom</span>
                <p className="text-xs opacity-70">HOSPITAL</p>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Disom Specialist Hospital is a specialist healthcare facility
              established with the vision of providing quality healthcare
              services to all by a team of highly qualified health professionals
              and specialists.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: Facebook,
                  link: "https://web.facebook.com/disom.hospital/",
                },
                { icon: Twitter, link: "#" },
                { icon: Instagram, link: "#" },
                {
                  icon: Linkedin,
                  link: "https://www.linkedin.com/in/disom-specialist-hospital-340740209/?originalSubdomain=ng",
                },
              ].map((Icon, idx) => (
                <motion.a
                  key={idx}
                  href={Icon.link || "#"}
                  target="__blank"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <Icon.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-display font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                "About",
                "Services",
                "Meet Our Doctors",
                "Book Appointment",
                "Gallery",
                "Contact Us",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item === "Meet Our Doctors" ? "doctors" : item.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-display font-semibold mb-6">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Gynecology",
                "Obstetrics",
                "Pediatrics",
                "Fertility Care",
                "Ultrasound",
                "Family Medicine",
                "Laboratory Services",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm opacity-80 hover:opacity-100 hover:text-primary transition-all flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-coral" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-display font-semibold mb-6">
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm opacity-80">
                  1A Idemili Dr, Independence Layout,
                  <br />
                  Enugu 400103, Enugu
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <a
                  href="tel:+2348119736394"
                  className="text-sm opacity-80 hover:text-primary"
                >
                  0811 973 6394
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <a
                  href="mailto:care@disom-hospital.ng"
                  className="text-sm opacity-80 hover:text-primary"
                >
                  care@disom-hospital.ng
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5" />
                <div className="text-sm opacity-80">
                  <p>Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p>Sat - Sun: 9:00 AM - 5:00 PM</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">
            © {currentYear} Disom Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm opacity-70">
            <Link
              to="/privacy"
              className="hover:opacity-100 hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:opacity-100 hover:text-primary">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
