'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [text, setText] = useState('INITIALIZING JARVIS...');

  useEffect(() => {
    const timer1 = setTimeout(() => setText('STARK SYSTEMS ONLINE'), 1500);
    const timer2 = setTimeout(() => setText('DARSHAN PORTFOLIO // SYSTEM READY'), 3000);
    const timer3 = setTimeout(() => onComplete(), 4000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 5;
      });
    }, 150);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-white">
      <div className="relative flex items-center justify-center w-64 h-64 mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0 border-4 border-t-[#00E5FF] border-r-transparent border-b-[#E10600] border-l-transparent rounded-full"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-4 border-2 border-t-[#E10600] border-r-transparent border-b-[#00E5FF] border-l-transparent rounded-full opacity-50"
        />
        <div className="text-4xl font-display font-bold glow-text-cyan">{progress}%</div>
      </div>
      
      <div className="text-center font-display tracking-widest h-8">
        <motion.p
          key={text}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className={text.includes('SYSTEM READY') ? 'text-[#00E5FF] glow-text-cyan font-bold' : 'text-[#A8A8A8]'}
        >
          {text}
        </motion.p>
      </div>
      
      <div className="w-64 h-1 mt-8 bg-gray-800 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-gradient-to-r from-[#00E5FF] to-[#E10600]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
