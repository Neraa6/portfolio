"use client";

import { useState } from "react";
import { Send, Loader2, Mail, Copy, Check, Github, Radio, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { playRetroCoin, playRetroPowerup, playRetroSelect } from "@/lib/retro-audio";

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
    // Simulate API transmission
    await new Promise((resolve) => setTimeout(resolve, 1200));
    playRetroPowerup();
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3500);
  };

  return (
    <div className="w-full space-y-8">
      {/* Title Header */}
      <div className="space-y-2 text-left">
        <div className="inline-block px-3.5 py-1 bg-[#2563EB] text-white text-xs font-grotesk font-black uppercase rounded-md border-2 border-black shadow-[2px_2px_0px_#000]">
          TRANSMISSION CONSOLE
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-grotesk font-black text-black tracking-tight uppercase">
          SEND SIGNAL
        </h2>
      </div>

      {/* Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
        
        {/* Left Side: Direct Contact Info (5 cols) */}
        <div className="md:col-span-5 flex flex-col justify-between space-y-5">
          <div className="bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000] p-6 sm:p-7 rounded-2xl space-y-5 text-left">
            <div className="flex items-center justify-between border-b-2 border-black pb-3">
              <h3 className="font-grotesk text-xs text-black font-black uppercase flex items-center gap-2">
                <Radio className="w-4 h-4 text-[#FF5722] animate-pulse" />
                COMMS CHANNEL
              </h3>
              <span className="text-[9px] font-mono font-extrabold px-2 py-0.5 bg-[#A3E635] border border-black rounded text-black">ONLINE</span>
            </div>

            <p className="text-sm text-zinc-800 leading-relaxed font-sans font-medium">
              Open for full stack software development, IoT systems design, networking, or junior developer opportunities. Send a message to initiate transmission!
            </p>

            <div className="space-y-3.5 pt-1">
              {/* Email Copier Card */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-[#FAF7F2] border-2 border-black shadow-[3px_3px_0px_#000]">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#FFDE00] border-2 border-black text-black shadow-[2px_2px_0px_#000]">
                    <Mail className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <p className="text-[9px] font-mono font-extrabold text-zinc-600 uppercase">EMAIL ADDRESS</p>
                    <p className="text-xs font-mono font-extrabold text-black mt-0.5">yusufregan06@gmail.com</p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-lg bg-white border-2 border-black hover:bg-[#FF5722] hover:text-white text-black transition-all interactive cursor-pointer shadow-[2px_2px_0px_#000]"
                  aria-label="Copy Email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 stroke-[3] text-black" />
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
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#FAF7F2] border-2 border-black hover:bg-[#2563EB] hover:text-white transition-colors group shadow-[3px_3px_0px_#000]"
              >
                <div className="p-2 rounded-lg bg-[#2563EB] group-hover:bg-[#FFDE00] border-2 border-black text-white group-hover:text-black transition-colors shadow-[2px_2px_0px_#000]">
                  <Github className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-mono font-extrabold text-zinc-600 group-hover:text-white uppercase">GITHUB PROFILE</p>
                  <p className="text-xs font-mono font-extrabold text-black group-hover:text-white mt-0.5">@Neraa6</p>
                </div>
              </a>
            </div>
          </div>

          {/* Location Badge */}
          <div className="bg-[#FFDE00] border-[3px] border-black shadow-[4px_4px_0px_0px_#000000] p-4 rounded-xl text-center text-xs font-grotesk font-black text-black uppercase tracking-wider">
            📍 BASE: BOGOR, INDONESIA • OPEN WORLDWIDE
          </div>
        </div>

        {/* Right Side: Message Form (7 cols) */}
        <div className="md:col-span-7 bg-white border-[3px] border-black shadow-[6px_6px_0px_0px_#000000] p-6 sm:p-8 rounded-2xl text-left">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="flex items-center justify-between border-b-2 border-black pb-3 mb-4">
              <span className="font-grotesk text-xs text-black font-black uppercase">
                [ INPUT TRANSMISSION ]
              </span>
              <span className="text-[10px] font-mono font-extrabold px-2 py-0.5 bg-[#A3E635] border border-black rounded text-black">READY</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="block text-xs font-grotesk font-black text-black uppercase">
                  SENDER NAME
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF7F2] border-2 border-black focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#FFDE00] transition-all text-black placeholder:text-zinc-500 font-mono font-bold"
                  placeholder="PLAYER 2"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-xs font-grotesk font-black text-black uppercase">
                  SENDER EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF7F2] border-2 border-black focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#FFDE00] transition-all text-black placeholder:text-zinc-500 font-mono font-bold"
                  placeholder="player2@domain.com"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="block text-xs font-grotesk font-black text-black uppercase">
                MESSAGE DATA
              </label>
              <textarea
                id="message"
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-[#FAF7F2] border-2 border-black focus:outline-none focus:bg-white focus:shadow-[4px_4px_0px_#FFDE00] transition-all resize-none text-black placeholder:text-zinc-500 font-mono font-bold"
                placeholder="TYPE YOUR TRANSMISSION HERE..."
              />
            </div>

            <Button
              type="submit"
              variant="coral"
              size="lg"
              className="w-full mt-4"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin stroke-[3]" />
                  TRANSMITTING...
                </>
              ) : submitted ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-white stroke-[3]" />
                  SIGNAL SENT!
                </>
              ) : (
                <>
                  SEND TRANSMISSION <Send className="w-4 h-4 stroke-[3]" />
                </>
              )}
            </Button>

            {submitted && (
              <div className="p-3.5 bg-[#A3E635] text-black border-2 border-black font-grotesk text-xs text-center rounded-xl font-black shadow-[3px_3px_0px_#000]">
                ✓ SIGNAL TRANSMITTED SUCCESSFULLY TO REGAN!
              </div>
            )}
          </form>
        </div>

      </div>
    </div>
  );
}