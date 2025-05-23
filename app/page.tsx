"use client"

import { useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Instagram, Youtube, Twitch } from "lucide-react"
import Image from "next/image"
import StarBackground from "@/components/star-background"

export default function Home() {
  const { scrollY } = useScroll()
  const logoOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const profileOpacity = useTransform(scrollY, [150, 450], [0, 1])

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center relative overflow-hidden">
      {/* Star Background */}
      <StarBackground />

      {/* Hero section with logo */}
      <motion.div
        className="h-screen w-full flex items-center justify-center fixed top-0 left-0 z-10"
        style={{ opacity: logoOpacity }}
      >
        <div className="relative w-64 h-64">
          <Image src="/images/white-logo.png" alt="Logo" fill className="object-contain" priority />
        </div>
      </motion.div>

      {/* Profile section - fixed position with fade in */}
      <motion.div
        className="h-screen w-full flex flex-col items-center justify-center fixed top-0 left-0 z-20"
        style={{ opacity: profileOpacity }}
      >
        <div className="relative w-40 h-40 rounded-full overflow-hidden mb-8">
          <Image src="/images/alexutu.png" alt="Horvath Alex" fill className="object-cover" />
        </div>

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Horvath Alex</h1>
          <div className="flex items-center justify-center mt-1 space-x-2">
            <h2 className="text-2xl text-gray-500">Alexutu</h2>
            <span className="text-xl text-gray-400">21y</span>
            <span className="text-xl">🇷🇴</span>
          </div>
        </div>

        <div className="flex justify-center space-x-4 mb-16 px-4 overflow-x-auto w-full max-w-3xl no-scrollbar">
          {/* Instagram */}
          <motion.a
            href="#"
            className="social-icon-link relative p-3 rounded-full flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(236, 72, 153, 0)",
                "0px 0px 15px rgba(236, 72, 153, 0.3)",
                "0px 0px 0px rgba(236, 72, 153, 0)",
              ],
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
              },
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full z-0"
              whileHover={{
                backgroundColor: "rgba(236, 72, 153, 0.2)",
                boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            />
            <Instagram size={24} className="z-10 text-white" />
          </motion.a>

          {/* YouTube */}
          <motion.a
            href="#"
            className="social-icon-link relative p-3 rounded-full flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(255, 0, 0, 0)",
                "0px 0px 15px rgba(255, 0, 0, 0.3)",
                "0px 0px 0px rgba(255, 0, 0, 0)",
              ],
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: 0.4,
              },
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full z-0"
              whileHover={{
                backgroundColor: "rgba(255, 0, 0, 0.2)",
                boxShadow: "0px 0px 20px rgba(255, 0, 0, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            />
            <Youtube size={24} className="z-10 text-white" />
          </motion.a>

          {/* Twitch */}
          <motion.a
            href="#"
            className="social-icon-link relative p-3 rounded-full flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(145, 70, 255, 0)",
                "0px 0px 15px rgba(145, 70, 255, 0.3)",
                "0px 0px 0px rgba(145, 70, 255, 0)",
              ],
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: 0.8,
              },
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full z-0"
              whileHover={{
                backgroundColor: "rgba(145, 70, 255, 0.2)",
                boxShadow: "0px 0px 20px rgba(145, 70, 255, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            />
            <Twitch size={24} className="z-10 text-white" />
          </motion.a>

          {/* TikTok - Improved Logo */}
          <motion.a
            href="#"
            className="social-icon-link relative p-3 rounded-full flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(238, 29, 82, 0)",
                "0px 0px 15px rgba(238, 29, 82, 0.3)",
                "0px 0px 0px rgba(238, 29, 82, 0)",
              ],
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: 1.2,
              },
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full z-0"
              whileHover={{
                backgroundColor: "rgba(238, 29, 82, 0.2)",
                boxShadow: "0px 0px 20px rgba(238, 29, 82, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-10"
            >
              <path
                d="M16.6016 5.8501C16.0467 5.19416 15.7283 4.35903 15.7283 3.45703H12.3633V15.8472C12.3633 17.1802 11.2816 18.2619 9.94863 18.2619C8.61563 18.2619 7.53395 17.1802 7.53395 15.8472C7.53395 14.5142 8.61563 13.4325 9.94863 13.4325C10.2637 13.4325 10.5658 13.4936 10.8417 13.6026V10.1645C10.5506 10.1157 10.2524 10.0895 9.94863 10.0895C6.77028 10.0895 4.19092 12.6689 4.19092 15.8472C4.19092 19.0256 6.77028 21.605 9.94863 21.605C13.127 21.605 15.7063 19.0256 15.7063 15.8472V9.51929C16.9396 10.4333 18.4416 10.9753 20.0363 10.9753V7.61029C20.0363 7.61029 18.0461 7.65929 16.6016 5.8501Z"
                fill="white"
              />
            </svg>
          </motion.a>

          {/* Twitter/X */}
          <motion.a
            href="#"
            className="social-icon-link relative p-3 rounded-full flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(29, 161, 242, 0)",
                "0px 0px 15px rgba(29, 161, 242, 0.3)",
                "0px 0px 0px rgba(29, 161, 242, 0)",
              ],
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: 1.6,
              },
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full z-0"
              whileHover={{
                backgroundColor: "rgba(29, 161, 242, 0.2)",
                boxShadow: "0px 0px 20px rgba(29, 161, 242, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="z-10 text-white"
            >
              <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
              <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
            </svg>
          </motion.a>

          {/* Discord */}
          <motion.a
            href="#"
            className="social-icon-link relative p-3 rounded-full flex items-center justify-center flex-shrink-0"
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            initial={{ backgroundColor: "rgba(0, 0, 0, 0.3)" }}
            animate={{
              boxShadow: [
                "0px 0px 0px rgba(114, 137, 218, 0)",
                "0px 0px 15px rgba(114, 137, 218, 0.3)",
                "0px 0px 0px rgba(114, 137, 218, 0)",
              ],
              backgroundColor: "rgba(0, 0, 0, 0.3)",
            }}
            transition={{
              boxShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
                delay: 2,
              },
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full z-0"
              whileHover={{
                backgroundColor: "rgba(114, 137, 218, 0.2)",
                boxShadow: "0px 0px 20px rgba(114, 137, 218, 0.5)",
              }}
              transition={{ duration: 0.3 }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="z-10 text-white"
            >
              <circle cx="9" cy="12" r="1" />
              <circle cx="15" cy="12" r="1" />
              <path d="M7.5 7.5c3.5-1 5.5-1 9 0" />
              <path d="M7 16.5c3.5 1 6.5 1 10 0" />
              <path d="M15.5 17c0 1 1.5 3 2 3 1.5 0 2.833-1.667 3.5-3 .667-1.667.5-5.833-1.5-11.5-1.457-1.015-3-1.34-4.5-1.5l-1 2.5" />
              <path d="M8.5 17c0 1-1.356 3-1.832 3-1.429 0-2.698-1.667-3.333-3-.635-1.667-.48-5.833 1.428-11.5 1.388-1.015 2.782-1.34 4.237-1.5l1 2.5" />
            </svg>
          </motion.a>
        </div>
      </motion.div>

      {/* Spacer div to allow scrolling */}
      <div className="h-[200vh]"></div>
    </main>
  )
}
