"use client";

import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";
import { useEffect } from "react";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export default function Home() {
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`
    radial-gradient(120% 120% at 50% 0%, #050505 50%, ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <>
      <motion.section
        style={{ background: backgroundImage }}
        className="grid min-h-screen place-content-center overflow-hidden px-4 text-gray-200"
      >
        <div className="flex flex-col items-center">
          <span className="mb-1.5 inline-block rounded-full bg-neutral-900/70 px-3 py-1.5 text-sm">
            Early Access
          </span>
          <div
            className="max-w-4xl bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center 
            text-3xl font-bold leading-tight text-transparent sm:text-4xl sm:leading-tight 
            md:text-5xl md:leading-tight text-balance"
          >
            Elevate Your React Skills
          </div>
          <p className="mt-4 mb-6 max-w-md font-medium text-center text-sm text-balance sm:text-wrap leading-normal text-gray-500 md:text-lg md:leading-relaxed">
            Master React by building beautiful, reusable components from
            scratch.
          </p>
          <Link href="/components/accordian">
            <motion.button
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              style={{ boxShadow, border }}
              className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-900/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-900/5"
            >
              Get started
              <ArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </>
  );
}
