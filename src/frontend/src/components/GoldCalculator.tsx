import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calculator, IndianRupee, Info } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

const SPOT_PRICE_24K = 15273; // ₹ per gram (based on 22K = ₹14,000/gram)

const PURITY_MULTIPLIERS: Record<string, number> = {
  "24K": 1.0,
  "22K": 22 / 24,
  "18K": 18 / 24,
};

export default function GoldCalculator() {
  const [weight, setWeight] = useState("");
  const [purity, setPurity] = useState("22K");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    const w = Number.parseFloat(weight);
    if (!weight || Number.isNaN(w) || w <= 0) {
      setError("Please enter a valid weight in grams.");
      setResult(null);
      return;
    }
    setError("");
    const multiplier = PURITY_MULTIPLIERS[purity] ?? 1;
    setResult(Math.round(w * SPOT_PRICE_24K * multiplier));
  }

  const formatted =
    result !== null
      ? new Intl.NumberFormat("en-IN", {
          style: "currency",
          currency: "INR",
          maximumFractionDigits: 0,
        }).format(result)
      : null;

  return (
    <section id="calculator" className="py-24 px-4 bg-card section-divider">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Estimate Instantly
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
            Gold <span className="gold-shimmer">Calculator</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            உங்கள் தங்கத்தின் மதிப்பை உடனே அறிந்துகொள்ளுங்கள் — Get an instant estimate
            for your gold.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-background border border-border p-8 space-y-6"
        >
          {/* Reference price notice */}
          <div className="flex items-start gap-3 bg-primary/5 border border-primary/20 p-4">
            <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              Reference price:{" "}
              <span className="text-primary font-semibold">₹14,000/gram</span>{" "}
              for 22K gold. Actual rate may vary slightly at the time of
              transaction.
            </p>
          </div>

          {/* Weight input */}
          <div className="space-y-2">
            <Label
              htmlFor="gold-weight"
              className="text-foreground font-medium"
            >
              Weight (grams) — எடை
            </Label>
            <Input
              id="gold-weight"
              type="number"
              placeholder="e.g. 10.5"
              value={weight}
              onChange={(e) => {
                setWeight(e.target.value);
                setResult(null);
                setError("");
              }}
              data-ocid="calculator.input"
              className="bg-card border-border text-foreground placeholder:text-muted-foreground focus-visible:ring-primary"
            />
          </div>

          {/* Purity select */}
          <div className="space-y-2">
            <Label
              htmlFor="gold-purity"
              className="text-foreground font-medium"
            >
              Purity — தூய்மை
            </Label>
            <Select
              value={purity}
              onValueChange={(v) => {
                setPurity(v);
                setResult(null);
              }}
            >
              <SelectTrigger
                id="gold-purity"
                data-ocid="calculator.select"
                className="bg-card border-border text-foreground"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                <SelectItem value="24K">24K — தூய தங்கம் (99.9%)</SelectItem>
                <SelectItem value="22K">22K — நகை தங்கம் (91.6%)</SelectItem>
                <SelectItem value="18K">18K — குறைந்த தூய்மை (75%)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Error */}
          {error && <p className="text-destructive text-sm">{error}</p>}

          {/* Calculate button */}
          <Button
            onClick={calculate}
            data-ocid="calculator.primary_button"
            className="w-full bg-primary text-primary-foreground font-bold hover:brightness-110 transition-all py-6 text-base"
          >
            <Calculator className="w-5 h-5 mr-2" />
            Calculate Value — மதிப்பை கணக்கிடுங்கள்
          </Button>

          {/* Result */}
          {formatted && (
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="border border-primary/40 bg-primary/5 p-6 text-center"
            >
              <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wider">
                Estimated Value
              </p>
              <div className="flex items-center justify-center gap-2">
                <IndianRupee className="w-7 h-7 text-primary" />
                <span className="font-display font-bold text-4xl text-primary">
                  {formatted.replace("₹", "").trim()}
                </span>
              </div>
              <p className="text-muted-foreground text-xs mt-3">
                {weight}g × {purity} × ₹14,000/g (22K rate) ={" "}
                <span className="text-primary">{formatted}</span>
              </p>
              <a
                href="https://wa.me/918072938745"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 bg-primary text-primary-foreground px-6 py-2.5 text-sm font-bold hover:brightness-110 transition-all"
              >
                Get Exact Quote on WhatsApp
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
