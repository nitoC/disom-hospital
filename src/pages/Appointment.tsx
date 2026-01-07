import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Clock, User, CheckCircle, Heart, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const services = [
  "Gynecology",
  "Obstetrics",
  "Fertility Care",
  "Pediatrics",
  "Family Medicine",
  "Ultrasound Services",
];

const timeSlots = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
];

const Appointment = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Appointment Requested!",
      description: "We'll confirm your appointment within 2 hours.",
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-coral/10 blur-3xl" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-accent text-accent-foreground text-sm font-medium mb-4">
              Book Appointment
            </span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Schedule Your{" "}
              <span className="text-gradient">Visit</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Book your appointment online and we'll confirm your slot within 2 hours. 
              Same-day appointments available for urgent cases.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-background rounded-3xl p-12 text-center border border-border shadow-card"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  className="w-24 h-24 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-8"
                >
                  <CheckCircle className="w-12 h-12 text-primary" />
                </motion.div>
                <h2 className="text-3xl font-display font-bold text-foreground mb-4">
                  Appointment Requested!
                </h2>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  Thank you for choosing Disom Hospital. We'll review your request and 
                  confirm your appointment within 2 hours via email or phone.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                  >
                    Book Another
                  </Button>
                  <Button className="gap-2 bg-gradient-primary" asChild>
                    <a href="tel:+1234567890">
                      <Phone className="w-4 h-4" />
                      Call for Urgent Cases
                    </a>
                  </Button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-card"
              >
                <div className="flex items-center gap-4 mb-8 pb-8 border-b border-border">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Heart className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-display font-bold text-foreground">
                      Book Your Appointment
                    </h2>
                    <p className="text-muted-foreground">Fill in your details below</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          placeholder="Enter your full name"
                          required
                          className="pl-10 bg-muted/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="tel"
                          placeholder="+1 (234) 567-890"
                          required
                          className="pl-10 bg-muted/50"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="bg-muted/50"
                    />
                  </div>

                  {/* Appointment Details */}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Select Service *
                    </label>
                    <Select required>
                      <SelectTrigger className="bg-muted/50">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((service) => (
                          <SelectItem key={service} value={service.toLowerCase()}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Preferred Date *
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                          type="date"
                          required
                          className="pl-10 bg-muted/50"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Preferred Time *
                      </label>
                      <Select required>
                        <SelectTrigger className="bg-muted/50">
                          <Clock className="w-5 h-5 text-muted-foreground mr-2" />
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time.toLowerCase()}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Additional Notes (Optional)
                    </label>
                    <Textarea
                      placeholder="Any specific concerns or requirements..."
                      rows={4}
                      className="bg-muted/50 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 bg-gradient-primary hover:opacity-90 shadow-soft"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Submitting Request...
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        Request Appointment
                      </>
                    )}
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    For urgent appointments, please call{" "}
                    <a href="tel:+1234567890" className="text-primary font-medium">
                      +1 (234) 567-890
                    </a>
                  </p>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;
