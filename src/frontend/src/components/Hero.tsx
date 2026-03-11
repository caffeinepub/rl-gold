import { ChevronDown, MessageCircle } from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="home"
      style={{ padding: "80px 20px", textAlign: "center", background: "#111" }}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('/assets/generated/hero-gold-bg.dim_1600x800.jpg')",
          opacity: 0.35,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#111]/60 via-[#111]/30 to-[#111]/90" />

      {/* Decorative gold line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-60" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Trusted Gold Traders — Since 2010
        </motion.div>

        {/* Main heading — exact user copy */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: "48px", color: "#D4AF37" }}
          className="font-display font-bold leading-tight mb-4 sm:text-6xl"
        >
          Sell Your Gold at Best Price
        </motion.h1>

        {/* Tamil subheading — exact user copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ marginTop: "10px" }}
          className="text-foreground/80 text-lg sm:text-xl font-sans"
        >
          அடகு வைத்த தங்கத்தை மீட்டு விற்று உடனே பணம் பெறுங்கள்
        </motion.p>

        {/* Supporting line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-muted-foreground text-base mt-3"
        >
          Instant cash · Best market rates · Zero hidden charges
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          {/* Exact user-specified WhatsApp button */}
          <a
            href="https://wa.me/918072938745"
            data-ocid="hero.primary_button"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "30px",
              background: "#D4AF37",
              color: "#000",
              padding: "15px 30px",
              fontWeight: "bold",
              textDecoration: "none",
            }}
            className="flex items-center gap-2 hover:brightness-110 transition-all text-base font-bold"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp Now
          </a>

          <a
            href="#services"
            className="mt-[30px] flex items-center gap-2 border border-primary/40 text-primary px-8 py-[15px] font-semibold hover:bg-primary/10 transition-all text-base"
          >
            Our Services
          </a>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-6 mt-16 text-sm text-muted-foreground"
        >
          {[
            "500+ Happy Customers",
            "Same Day Payment",
            "BIS Hallmark Certified",
            "Free Valuation",
          ].map((badge) => (
            <span key={badge} className="flex items-center gap-1.5">
              <span className="text-primary">✦</span>
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-primary/60"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </section>
  );
}
