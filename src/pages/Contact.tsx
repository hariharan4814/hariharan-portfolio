import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, MessageCircle, Instagram, Send, ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9940099083',
      href: 'tel:+919940099083',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'hariharan4814@gmail.com',
      href: 'mailto:hariharan4814@gmail.com',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/hariharan4814',
      href: 'https://linkedin.com/in/hariharan4814',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: 'https://wa.me/919940099083',
      color: 'from-green-400 to-green-600',
    },
    {
      icon: Instagram,
      label: 'Instagram',
      value: '@_sanjeev.b_',
      href: 'https://instagram.com/_sanjeev.b_',
      color: 'from-pink-500 to-purple-500',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create WhatsApp message
    const message = `Hi Hariharan,%0A%0AName: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage: ${formData.message}`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919940099083&text=${message}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');

    // Show success toast
    toast({
      title: "Redirecting to WhatsApp",
      description: "Your message will be sent via WhatsApp",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-4 block">Contact Me</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Let's start a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Conversation</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Interested in working together? I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-24 items-start">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-4 space-y-6 md:space-y-8 order-2 lg:order-1"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Contact Details</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((contact, index) => (
                  <motion.a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-card/60 border border-border hover:border-primary/50 transition-all backdrop-blur-md">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${contact.color} shadow-lg group-hover:shadow-primary/25 transition-all`}>
                        <contact.icon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-muted-foreground font-medium mb-0.5">{contact.label}</p>
                        <p className="text-foreground font-semibold truncate group-hover:text-primary transition-colors">{contact.value}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-muted-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Removed 'Looking for a resume?' section as requested */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-8 order-1 lg:order-2"
          >
            <Card className="p-6 md:p-10 lg:p-12 bg-card/80 backdrop-blur-lg border border-border shadow-xl rounded-3xl md:rounded-[2.5rem] relative overflow-hidden">
              {/* Form Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />

              <div className="mb-10">
                <h2 className="text-3xl font-bold mb-3">Send a Message</h2>
                <p className="text-muted-foreground">
                  Got a question or proposal? Send me a message and I'll get back to you as soon as possible via WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium ml-1">Your Name</label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter Your Name Here"
                      className="bg-background/50 border-border focus:border-primary/50 h-12 rounded-xl transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium ml-1">Your Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter Your Email Here"
                      className="bg-background/50 border-border focus:border-primary/50 h-12 rounded-xl transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium ml-1">Your Message</label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hello, I'd like to talk about..."
                    className="bg-background/50 border-border focus:border-primary/50 min-h-[200px] rounded-xl resize-none transition-all p-4"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all group"
                >
                  <span>Send Message via WhatsApp</span>
                  <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
