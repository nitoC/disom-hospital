import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Users, Heart, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 28,
    suffix: "+",
    label: "Years of Excellence",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    label: "Happy Patients",
    color: "text-coral",
    bgColor: "bg-coral/10",
  },
  {
    icon: Heart,
    value: 10,
    suffix: "+",
    label: "Expert Doctors",
    color: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: Award,
    value: 15,
    suffix: "+",
    label: "Awards & Recognitions",
    color: "text-amber-500",
    bgColor: "bg-amber-50",
  },
];

const AnimatedCounter = ({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, inView]);

  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(num % 1000 === 0 ? 0 : 1) + "K";
    }
    return num.toString();
  };

  return (
    <span className="text-4xl md:text-5xl font-display font-bold text-foreground">
      {formatNumber(count)}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 rounded-full bg-coral/10 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center"
            >
              <div
                className={`w-16 h-16 mx-auto rounded-2xl ${stat.bgColor} flex items-center justify-center mb-4`}
              >
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
              </div>
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={isInView}
              />
              <p className="text-muted-foreground mt-2 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
