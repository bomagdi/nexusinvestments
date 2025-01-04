"use client";

import { motion } from "motion/react";

// hooks
import useScrollProgress from "@/components/hooks/useScrollProgress";
import { Button } from "@/components/ui/button";
import ScrollToTopButton from "@/components/hooks/scrollToTop";

// Variants
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
};

const Template = ({ children }) => {
  const bar = useScrollProgress();

  return (
    <>
      <motion.main
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear", delay: 0.2, duration: 0.4 }}
      >
        {children}
      </motion.main>

      <span
        style={{ transform: `translateY(${bar - 100}%)` }}
        className="fixed z-50 bg-primary w-1 top-0 right-0 bottom-0 transition-all duration-700"
      ></span>
      
      <ScrollToTopButton />
    <div className="h-[9999px]"></div>
    </>
  );
};

export default Template;
