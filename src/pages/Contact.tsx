import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, MessageCircle, Instagram, Send, ArrowRight, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

/* ---- Contact info card ---- */
function ContactCard({ contact, index }: { contact: any; index: number }) {
  return (
    <motion.a
      href={contact.href}
      target={contact.href.startsWith("http") ? "_blank" : undefined}
      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + index * 0.08, duration: 0.5 }}
      whileHover={{ x: 4 }}
      className="group block"
      aria-label={`Contact via ${contact.label}`}
    >
      <div className="relative flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-hard-sm inner-glow overflow-hidden">
        {/* Hover color overlay */}
        <div className={`absolute inset-0 bg-gradient-to-r ${contact.color} opacity-0 group-hover:opacity-[0.05] transition-opacity duration-300`} />
        <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} shadow-md flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
          <contact.icon className="h-5 w-5 text-white" />
        </div>
        <div className="flex-1 min-w-0 relative z-10">
          <p className="text-xs text-muted-foreground font-semibold mb-0.5">{contact.label}</p>
          <p className="text-sm text-foreground font-bold truncate group-hover:text-primary transition-colors">{contact.value}</p>
        </div>
        <ArrowRight className="h-4 w-4 text-muted-foreground/40 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0 relative z-10" />
      </div>
    </motion.a>
  );
}

/* ============ MAIN CONTACT PAGE ============ */
const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "+91 9940099083", href: "tel:+919940099083", color: "from-emerald-400 to-teal-500" },
    { icon: Mail, label: "Email", value: "hariharan4814@gmail.com", href: "mailto:hariharan4814@gmail.com", color: "from-violet-500 to-indigo-600" },
    { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/hariharan4814", href: "https://linkedin.com/in/hariharan4814", color: "from-sky-500 to-blue-600" },
    { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/919940099083", color: "from-green-400 to-emerald-600" },
    { icon: Instagram, label: "Instagram", value: "@sanjeeev.b", href: "https://www.instagram.com/sanjeeev.b/", color: "from-pink-400 to-rose-500" },
    { icon: MapPin, label: "Location", value: "Coimbatore, Tamil Nadu", href: "#", color: "from-amber-400 to-orange-500" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    const msg = `Hi Hariharan,%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0A%0AMessage: ${formData.message}`;
    const url = `https://api.whatsapp.com/send?phone=919940099083&text=${msg}`;
    window.open(url, "_blank");
    toast({ title: "Redirecting to WhatsApp", description: "Your message will be sent via WhatsApp" });
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setIsSending(false), 2000);
  };

  const inputClass = "bg-background/60 border-border focus:border-primary/60 h-12 rounded-2xl transition-all text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/20";

  return (
    <div className="min-h-screen bg-background">
      {/* Background spheres */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden>
        <div className="gradient-sphere float-1" style={{ width: 450, height: 450, background: "radial-gradient(circle, hsl(250 85% 68%/0.12) 0%, transparent 70%)", top: "-5%", right: "-5%" }} />
        <div className="gradient-sphere float-3" style={{ width: 380, height: 380, background: "radial-gradient(circle, hsl(32 95% 55%/0.1) 0%, transparent 70%)", bottom: "0%", left: "-8%" }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 pt-28 pb-20 max-w-6xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 block">Get in Touch</span>
          <h1 className="headline text-5xl md:text-7xl mb-6">
            Let&apos;s Build{" "}
            <span className="text-gradient-hero animate-gradient" style={{ backgroundSize: "200% auto" }}>
              Something Useful
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Have a project, internship, or developer opportunity in mind? Get in touch.
          </p>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 mt-6 px-4 py-2 rounded-full glass border border-border shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
            </span>
            <span className="text-sm font-bold text-foreground">Available for opportunities</span>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <div className="mb-6">
                <span className="section-label mb-2 block">Contact Details</span>
                <h3 className="text-2xl font-black text-foreground">Reach Out Directly</h3>
              </div>
              {contactInfo.map((c, i) => (
                <ContactCard key={i} contact={c} index={i} />
              ))}
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Hard offset shadow */}
              <div className="absolute inset-0 rounded-3xl bg-primary/20 translate-x-3 translate-y-3" />
              <div className="relative rounded-3xl bg-card border-2 border-border p-7 md:p-10 overflow-hidden shadow-xl inner-glow">
                {/* Glow corner */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

                <div className="mb-8 relative z-10">
                  <h2 className="text-2xl md:text-3xl font-black text-foreground mb-2">Send a Message</h2>
                  <p className="text-muted-foreground text-sm">Your message will be sent via WhatsApp for quick responses.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-bold text-foreground/80 ml-1">Your Name *</label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={inputClass}
                        required
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-bold text-foreground/80 ml-1">Your Email *</label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className={inputClass}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-sm font-bold text-foreground/80 ml-1">Subject</label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Project inquiry, collaboration, etc."
                      className={inputClass}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-bold text-foreground/80 ml-1">Your Message *</label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Hello, I would like to discuss..."
                      className={`${inputClass} min-h-[160px] h-auto resize-none pt-3 pb-3`}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSending}
                    className="w-full h-14 text-base font-black rounded-2xl gradient-primary text-white border-0 shadow-hard-sm hover:shadow-hard hover:-translate-y-0.5 transition-all group disabled:opacity-70"
                  >
                    {isSending ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending…
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Send Message via WhatsApp
                        <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      </span>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
