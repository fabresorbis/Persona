"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-300 dark:from-black dark:to-zinc-900 font-sans overflow-hidden">
      <div className="text-center space-y-4 px-6 relative">
      

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          Persona
        </motion.div>
          <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400"
        >
          Personalized Gifts • Thoughtful Moments
        </motion.div> 

        <motion.div
        
          className="mt-6 inline-block rounded-full bg-zinc-900 px-6 py-3 text-sm font-medium text-white dark:bg-white dark:text-black"
        >
          🛠️ E-commerce website development in progress
        </motion.div>
      </div>
    </div>
  );
}
