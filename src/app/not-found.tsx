"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Ghost, Home, MoveLeft, FileQuestion } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-background px-6 text-center relative overflow-hidden">
      {/* Background decorations - consistent with WIP page but unique */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-md"
      >
        <div className="flex justify-center mb-8 relative">
          {/* Animated Ghost */}
          <motion.div
            animate={{ 
              y: [0, -15, 0],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <div className="w-32 h-32 rounded-3xl bg-muted/30 flex items-center justify-center border border-border backdrop-blur-sm">
               <Ghost className="w-16 h-16 text-muted-foreground/50" />
            </div>
            
            <motion.div 
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  x: [0, 5, -5, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-background text-primary p-3 rounded-2xl shadow-lg border border-border"
            >
                <FileQuestion className="w-6 h-6" />
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <h1 className="text-6xl font-bold tracking-tighter mb-4 text-primary">
            404
          </h1>
          <h2 className="text-2xl font-semibold mb-3">
            Page Not Found
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed max-w-xs mx-auto">
            Oops! It seems like this page has drifted away into the digital void.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button asChild variant="default" className="gap-2 rounded-full px-6">
                <Link href="/">
                    <Home className="w-4 h-4" />
                    Go Home
                </Link>
             </Button>
             
             <Button asChild variant="outline" className="gap-2 rounded-full px-6">
                <Link href="#" onClick={(e) => {
                    e.preventDefault();
                    window.history.back();
                }}>
                    <MoveLeft className="w-4 h-4" />
                    Go Back
                </Link>
             </Button>
          </div>
        </motion.div>
      </motion.div>
      
      <div className="absolute bottom-8 text-xs text-muted-foreground/30 font-mono">
        ERR_FILE_NOT_FOUND
      </div>
    </main>
  )
}
