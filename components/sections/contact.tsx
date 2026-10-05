"use client";

import { useState } from "react";
import { Send, Loader2, Mail, Copy, Check, Github, Radio, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playRetroCoin, playRetroPowerup, playRetroSelect } from "@/lib/retro-audio";
import { UnderlineScribble } from "@/components/ui/handwritten-doodles";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    playRetroCoin();
    navigator.clipboard.writeText("yusufregan06@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    playRetroSelect();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1200));
    playRetroPowerup();
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="w-full space-y-12 text-left">
      {/* Editorial Title Header */}
      <div className="space-y-2 relative">
        <div className="inline-block px-3.5 py-1 bg-[#FFADAD] text-[#111111] text-xs font-mono font-black uppercase border border-[#111111] shadow-sm">
          TRANSMISSION CONSOLE // 05
        </div>
        
        <div className="flex flex-wrap items-baseline gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-grotesk font-black text-[#111111] tracking-tight uppercase">
            SEND SIGNAL
          </h2>
          <span className="font-handwriting text-2xl text-[#111111] font-bold rotate-2 bg-[#FFE17D] px-3 py-0.5 border border-[#111111] shadow-sm hidden sm:inline-block">
            * get in touch
          </span>
        </div>
        <UnderlineScribble className="w-44 h-4 text-[#111111]" />
      </div>

      {/* Editorial Contact Poster Grid (Clean Unboxed Layout) */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-start relative">
        
        {/* Left Side: Comms Info (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-6">
          <div className="space-y-6 text-left relative">
            
            <div className="flex items-center justify-between border-b border-[#111111]/20 pb-3">
              <h3 className="font-mono text-xs text-[#111111] font-black uppercase flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#FFADAD] animate-pulse stroke-[2.5]" />
                COMMS CHANNEL
              </h3>
              <span className="text-[9px] font-mono font-black px-2 py-0.5 bg-[#D8FF45] text-[#111111] border border-[#111111] shadow-sm">
                ONLINE
              </span>
            </div>

            <p className="text-base text-[#111111] leading-relaxed font-sans font-medium">
              Open for full stack software development, IoT systems design, networking, or junior developer opportunities. Send a message to initiate transmission!
            </p>

            <div className="space-y-4 pt-2">
              {/* Email Ticket Card */}
              <div className="flex items-center justify-between p-4 rounded-none bg-white border border-[#111111] shadow-[3px_3px_0px_#111111]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-none bg-[#FFE17D] text-[#111111] border border-[#111111] shadow-sm">
                    <Mail className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-mono font-bold text-[#111111]/60 uppercase">EMAIL ADDRESS</p>
                    <p className="text-xs sm:text-sm font-mono font-black text-[#111111] mt-0.5">yusufregan06@gmail.com</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-none bg-white border border-[#111111] hover:bg-[#111111] hover:text-white text-[#111111] transition-all interactive cursor-pointer shadow-sm"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 stroke-[3] text-[#D8FF45]" />
                  ) : (
                    <Copy className="w-4 h-4 stroke-[2.5]" />
                  )}
                </button>
              </div>

              {/* GitHub Link Card */}
              <a
                href="https://github.com/Neraa6"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => playRetroSelect()}
                className="flex items-center gap-3 p-4 rounded-none bg-white border border-[#111111] hover:bg-[#A0C4FF] hover:text-[#111111] transition-all group shadow-[3px_3px_0px_#111111]"
              >
                <div className="p-2 rounded-none bg-[#111111] border border-[#111111] text-white group-hover:bg-white group-hover:text-[#111111] transition-colors shadow-sm">
                  <Github className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-mono font-bold text-[#111111]/60 uppercase">GITHUB PROFILE</p>
                  <p className="text-xs sm:text-sm font-mono font-black text-[#111111] mt-0.5">@Neraa6</p>
                </div>
              </a>
            </div>
          </div>

          {/* Location Badge */}
          <div className="bg-[#FFE17D] text-[#111111] border border-[#111111] shadow-[3px_3px_0px_#111111] p-4 rounded-none text-center text-xs font-mono font-black uppercase tracking-wider">
            📍 BASE: BOGOR, INDONESIA • OPEN WORLDWIDE
          </div>
        </div>

        {/* Right Side: Message Form (7 cols) */}
        <div className="md:col-span-7 text-left relative">
          
          <form onSubmit={handleSubmit} className="space-y-5">
            
            <div className="flex items-center justify-between border-b border-[#111111]/20 pb-3 mb-6">
              <span className="font-mono text-xs text-[#111111] font-black uppercase">
                [ INPUT TRANSMISSION ]
              </span>
              <span className="text-[10px] font-mono font-black px-2 py-0.5 bg-[#FFE17D] text-[#111111] border border-[#111111] shadow-sm">
                READY
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-mono font-black text-[#111111] uppercase">
                  SENDER NAME
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 text-xs rounded-none bg-white border border-[#111111] focus:outline-none focus:bg-[#D8FF45] focus:text-[#111111] transition-colors text-[#111111] placeholder:text-[#111111]/40 font-mono font-bold shadow-sm"
                  placeholder="PLAYER 2"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-mono font-black text-[#111111] uppercase">
                  SENDER EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 text-xs rounded-none bg-white border border-[#111111] focus:outline-none focus:bg-[#D8FF45] focus:text-[#111111] transition-colors text-[#111111] placeholder:text-[#111111]/40 font-mono font-bold shadow-sm"
                  placeholder="player2@domain.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-mono font-black text-[#111111] uppercase">
                MESSAGE DATA
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 text-xs rounded-none bg-white border border-[#111111] focus:outline-none focus:bg-[#D8FF45] focus:text-[#111111] transition-colors resize-none text-[#111111] placeholder:text-[#111111]/40 font-mono font-bold shadow-sm"
                placeholder="TYPE YOUR TRANSMISSION HERE..."
              />
            </div>

            <Button
              type="submit"
              variant="lime"
              size="lg"
              className="w-full mt-4 bg-[#D8FF45] text-[#111111] hover:bg-[#111111] hover:text-white border border-[#111111] rounded-none transition-all shadow-[3.5px_3.5px_0_#111111] font-mono uppercase font-black"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin stroke-[3]" />
                  TRANSMITTING...
                </>
              ) : submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 stroke-[3]" />
                  SIGNAL SENT!
                </>
              ) : (
                <>
                  SEND TRANSMISSION <Send className="w-4 h-4 stroke-[3]" />
                </>
              )}
            </Button>

            {submitted && (
              <div className="p-3.5 bg-[#D8FF45] text-[#111111] border border-[#111111] font-mono text-xs text-center rounded-none font-bold shadow-sm">
                ✓ SIGNAL TRANSMITTED SUCCESSFULLY TO REGAN!
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}