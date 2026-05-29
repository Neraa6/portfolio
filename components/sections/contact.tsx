"use client";

import { useState } from "react";
import { Send, Loader2, Mail, Copy, Check, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yusufregan06@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="w-full space-y-12">
      {/* Title */}
      <div className="space-y-2">
        <p className="text-xs font-mono tracking-widest text-accent uppercase font-bold">Connect</p>
        <h2 className="text-3xl md:text-5xl font-extrabold text-accent-secondary">Get In Touch</h2>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
        {/* Left Side: Contact Information & Info Cards (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          <div className="bg-secondary border border-khaki/30 p-6 rounded-3xl space-y-6 text-left shadow-sm">
            <h3 className="text-lg font-bold text-accent-secondary tracking-tight">Let&apos;s Connect</h3>
            <p className="text-xs text-text-secondary leading-relaxed font-sans">
              I am open to collaborations, networking, junior full stack opportunities, or IoT designs. Feel free to shoot a message or copy my email address below!
            </p>

            <div className="space-y-3 pt-2">
              {/* Email Copier Card */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-[#F6F3EB] border border-khaki/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-accent/10 border border-accent/20">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-mono text-text-secondary leading-none">Email Address</p>
                    <p className="text-xs font-mono font-bold text-text-primary mt-1">yusufregan06@gmail.com</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-xl bg-secondary border border-khaki/20 hover:border-accent/40 text-text-secondary hover:text-accent-secondary transition-all interactive"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-accent" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* GitHub Link Card */}
              <a
                href="https://github.com/Neraa6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F6F3EB] border border-khaki/30 hover:border-accent/30 transition-colors"
              >
                <div className="p-2 rounded-xl bg-accent/10 border border-accent/20">
                  <Github className="w-4 h-4 text-accent" />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-mono text-text-secondary leading-none">GitHub Profile</p>
                  <p className="text-xs font-mono font-bold text-text-primary mt-1">@Neraa6</p>
                </div>
              </a>
            </div>
          </div>

          {/* Map / Location disclaimer */}
          <div className="bg-secondary border border-khaki/30 p-5 rounded-3xl text-center text-xs font-mono text-text-secondary shadow-sm">
            📍 Based in Indonesia • Open to remote worldwide
          </div>
        </div>

        {/* Right Side: Message Form (7 cols) */}
        <div className="md:col-span-7 bg-secondary border border-khaki/30 p-8 rounded-3xl shadow-sm text-left">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="name" className="block text-[10px] font-mono text-text-secondary">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F6F3EB] border border-khaki/30 focus:border-accent focus:outline-none transition-colors text-text-primary placeholder-text-secondary/40 font-sans"
                  placeholder="Yusuf Regan"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="email" className="block text-[10px] font-mono text-text-secondary">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F6F3EB] border border-khaki/30 focus:border-accent focus:outline-none transition-colors text-text-primary placeholder-text-secondary/40 font-sans"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="block text-[10px] font-mono text-text-secondary">
                Message Content
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#F6F3EB] border border-khaki/30 focus:border-accent focus:outline-none transition-colors resize-none text-text-primary placeholder-text-secondary/40 font-sans"
                placeholder="Hi! Let's collaborate..."
              />
            </div>

            <Button
              type="submit"
              className="w-full h-10 text-xs font-mono bg-accent text-white border border-accent hover:bg-accent/90 shadow-none interactive mt-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  Sending...
                </>
              ) : submitted ? (
                "✓ Message Sent!"
              ) : (
                <>
                  Send Message
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}