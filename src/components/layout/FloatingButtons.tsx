import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MessageCircle, Phone } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const FloatingButtons = () => {
  const location = useLocation();

  // Don't show on appointment page
  if (location.pathname === "/appointment") return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
      >
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-elevated hover:shadow-glow transition-shadow"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </motion.a>

        {/* Emergency Call */}
        <motion.a
          href="tel:+1234567890"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 rounded-full bg-destructive flex items-center justify-center shadow-elevated animate-pulse-soft"
          title="Emergency Call"
        >
          <Phone className="w-6 h-6 text-white" />
        </motion.a>

        {/* Book Appointment */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/appointment"
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-primary text-primary-foreground font-medium shadow-elevated hover:shadow-glow transition-all"
          >
            <Calendar className="w-5 h-5" />
            <span className="hidden sm:inline">Book Appointment</span>
          </Link>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingButtons;
