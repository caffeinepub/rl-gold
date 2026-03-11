import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useActor } from "@/hooks/useActor";
import {
  AlertCircle,
  CheckCircle,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export default function Contact() {
  const { actor } = useActor();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus("loading");
    try {
      if (actor) {
        await actor.submitContactForm(name, email, message, BigInt(Date.now()));
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-4 bg-background section-divider">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Contact <span className="gold-shimmer">Us</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            தொடர்பு கொள்ளுங்கள் — We’re ready to help you get the best value for
            your gold.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground mb-2">
                RL Gold
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your trusted partner for all gold transactions. Visit us or
                reach out anytime.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="tel:+918072938745"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Phone
                  </p>
                  <p className="text-foreground font-semibold">
                    +91 80729 38745
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/918072938745"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    WhatsApp
                  </p>
                  <p className="text-foreground font-semibold">
                    wa.me/918072938745
                  </p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    Location
                  </p>
                  <p className="text-foreground font-semibold">
                    Chennai, Tamil Nadu
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/918072938745"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-4 font-bold hover:brightness-110 transition-all w-full"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border p-8 space-y-5"
            >
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  data-ocid="contact.success_state"
                  className="flex items-center gap-3 bg-primary/10 border border-primary/30 p-4"
                >
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-foreground font-semibold text-sm">
                      Message sent successfully!
                    </p>
                    <p className="text-muted-foreground text-xs mt-0.5">
                      நன்றி! We’ll get back to you shortly.
                    </p>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  data-ocid="contact.error_state"
                  className="flex items-center gap-3 bg-destructive/10 border border-destructive/30 p-4"
                >
                  <AlertCircle className="w-5 h-5 text-destructive shrink-0" />
                  <p className="text-foreground text-sm">
                    Something went wrong. Please try WhatsApp instead.
                  </p>
                </motion.div>
              )}

              <div className="space-y-2">
                <Label
                  htmlFor="contact-name"
                  className="text-foreground font-medium"
                >
                  Your Name — உங்கள் பெயர்
                </Label>
                <Input
                  id="contact-name"
                  placeholder="e.g. Ravi Kumar"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  data-ocid="contact.input"
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="contact-email"
                  className="text-foreground font-medium"
                >
                  Email Address
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-ocid="contact.input"
                  required
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="contact-message"
                  className="text-foreground font-medium"
                >
                  Message — செய்தி
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="Tell us about your gold — weight, type, any questions..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  data-ocid="contact.textarea"
                  required
                  rows={5}
                  className="bg-background border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={status === "loading"}
                data-ocid="contact.submit_button"
                className="w-full bg-primary text-primary-foreground font-bold py-6 text-base hover:brightness-110 transition-all disabled:opacity-60"
              >
                {status === "loading" ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
