"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar, Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-white text-black hover:bg-gray-200",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-white/20 bg-transparent hover:bg-white/10 hover:text-white",
        secondary:
          "bg-gray-800 text-white hover:bg-gray-700",
        ghost: "hover:bg-white/10 hover:text-white",
        link: "text-white underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

interface TypewriterProps {
  text: string | string[];
  speed?: number;
  cursor?: string;
  loop?: boolean;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

function Typewriter({
  text,
  speed = 100,
  cursor = "|",
  loop = false,
  deleteSpeed = 50,
  delay = 1500,
  className,
}: TypewriterProps) {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [textArrayIndex, setTextArrayIndex] = useState(0);

  const textArray = Array.isArray(text) ? text : [text];
  const currentText = textArray[textArrayIndex] || "";

  React.useEffect(() => {
    if (!currentText) return;

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentIndex < currentText.length) {
            setDisplayText((prev) => prev + currentText[currentIndex]);
            setCurrentIndex((prev) => prev + 1);
          } else if (loop) {
            setTimeout(() => setIsDeleting(true), delay);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText((prev) => prev.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentIndex(0);
            setTextArrayIndex((prev) => (prev + 1) % textArray.length);
          }
        }
      },
      isDeleting ? deleteSpeed : speed
    );

    return () => clearTimeout(timeout);
  }, [
    currentIndex,
    isDeleting,
    currentText,
    loop,
    speed,
    deleteSpeed,
    delay,
    displayText,
    textArray,
  ]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">{cursor}</span>
    </span>
  );
}

interface DemoWidgetProps {
  companyName?: string;
  demoAudioUrl?: string;
  bookingUrl?: string;
}

function DemoWidget({
  companyName = "SOCO PWA",
  demoAudioUrl = "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav",
  bookingUrl = "https://calendly.com/demo",
}: DemoWidgetProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showAudioPlayer, setShowAudioPlayer] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleBookDemo = () => {
    window.open(bookingUrl, "_blank");
  };

  const handleListenToAgent = () => {
    setShowAudioPlayer(true);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative w-full max-w-md mx-auto bg-black/90 backdrop-blur-sm text-white rounded-3xl p-8 shadow-2xl border border-white/10"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
      
      {/* Content */}
      <div className="relative z-10 space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center border border-white/20"
          >
            <Phone className="w-8 h-8 text-white" />
          </motion.div>
          
          <div>
            <h2 className="text-2xl font-bold mb-2">Experience Our AI</h2>
            <div className="h-6">
              <Typewriter
                text={[
                  "Book a personalized demo",
                  "Hear our AI call center agent",
                  "See the future of customer service"
                ]}
                speed={80}
                loop={true}
                className="text-white/80 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-4">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleBookDemo}
              className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 rounded-xl transition-all duration-200"
              size="lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book a Demo
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              onClick={handleListenToAgent}
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10 font-semibold py-3 rounded-xl transition-all duration-200"
              size="lg"
            >
              <Volume2 className="w-5 h-5 mr-2" />
              Hear Our AI Agent
            </Button>
          </motion.div>
        </div>

        {/* Audio Player */}
        <AnimatePresence>
          {showAudioPlayer && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 rounded-xl p-4 border border-white/10"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium">AI Agent Demo</span>
                <button
                  onClick={() => setShowAudioPlayer(false)}
                  className="text-white/60 hover:text-white transition-colors"
                >
                  ×
                </button>
              </div>
              
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleAudio}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </motion.button>
                
                <div className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-white rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: isPlaying ? "100%" : "0%" }}
                    transition={{ duration: 30, ease: "linear" }}
                  />
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMute}
                  className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4" />
                  ) : (
                    <Volume2 className="w-4 h-4" />
                  )}
                </motion.button>
              </div>
              
              <audio
                ref={audioRef}
                src={demoAudioUrl}
                onEnded={() => setIsPlaying(false)}
                className="hidden"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer */}
        <div className="text-center">
          <p className="text-white/60 text-xs">
            Powered by {companyName} • Enterprise Ready
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default DemoWidget;