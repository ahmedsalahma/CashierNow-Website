"use client"

/**
 * Representative portfolio excerpt.
 * Generic motion pattern; production timing, visuals, and composition omitted.
 */
import { AnimatePresence, motion } from "framer-motion"

type AnimatedValueProps = {
  value: string
}

export function AnimationPattern({ value }: AnimatedValueProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.output
        key={value}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -6 }}
        transition={{ duration: 0.18 }}
        aria-live="polite"
      >
        {value}
      </motion.output>
    </AnimatePresence>
  )
}
