"use client"

import { AnimatePresence, motion } from "framer-motion";

type PageWrapper = {
  children: JSX.Element
}

export default function PageWrapper({ children }: PageWrapper) {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ delay: 1.00 }}
        >
          <>
          <div className="video">
            <video id="background-video" autoPlay loop muted className='w-full h-screen z-10'>
              <source src='/assets/lm-home.webm' type='video/webm' />
            </video>
          </div>
          {children}
          </>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
