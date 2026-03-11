import { Shield, ShoppingBag, Star, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import type { Variants } from "motion/react";

const services = [
  {
    icon: ShoppingBag,
    title: "Gold Buying",
    tamil: "தங்கம் வாங்குதல்",
    description:
      "We buy all types of gold jewelry, coins, and bars at the best market rates. Instant cash payment on the spot.",
  },
  {
    icon: TrendingUp,
    title: "Gold Selling",
    tamil: "தங்கம் விற்றல்",
    description:
      "Need new jewelry? Sell your old gold to us and get immediate cash at competitive rates with zero deductions.",
  },
  {
    icon: Shield,
    title: "Pledged Gold Recovery",
    tamil: "அடகு தங்கம் மீட்பு",
    description:
      "Recover your pledged gold from banks or pawn shops. We pay off the loan and provide you instant cash in hand.",
  },
  {
    icon: Star,
    title: "Gold Appraisal",
    tamil: "தங்க மதிப்பீடு",
    description:
      "Free, transparent, and accurate gold valuation by certified experts. Know the true worth of your gold today.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-background section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            What We Offer
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Our <span className="gold-shimmer">Services</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            எங்கள் சேவைகள் — Simple, transparent, and trustworthy gold services for
            every need.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              variants={cardVariants}
              data-ocid={`services.item.${i + 1}`}
              className="group bg-card border border-border hover:border-primary/50 p-6 flex flex-col gap-4 transition-all duration-300 hover:shadow-gold"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <svc.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-foreground">
                  {svc.title}
                </h3>
                <p className="text-primary text-sm font-medium mt-0.5">
                  {svc.tamil}
                </p>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                {svc.description}
              </p>
              <div className="h-[1px] w-full bg-gradient-to-r from-primary/40 to-transparent mt-auto" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
