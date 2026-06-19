import React from 'react'
import { motion } from 'framer-motion'

const getColor = (s)=>{
  if(s>=90) return 'text-green-400'
  if(s>=75) return 'text-blue-400'
  if(s>=60) return 'text-yellow-300'
  return 'text-red-400'
}

export default function AnalysisScore({score}){
  const val = Number(score ?? 0);
  return (
    <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} className="bg-white/5 rounded-2xl p-6 flex items-center gap-6">
      <div className="flex items-center gap-4">
        <motion.div initial={{scale:0.8}} animate={{scale:1}} className={`w-32 h-32 bg-gradient-to-br from-black/40 to-white/5 rounded-full flex items-center justify-center ${getColor(val)}`}>
          <motion.span animate={{rotate:[0,360]}} className="text-4xl font-bold">
            {Math.round(val)}%
          </motion.span>
        </motion.div>
      </div>

      <div>
        <h3 className="text-2xl font-semibold">Match Score</h3>
        <p className="text-sm text-white/80 mt-1">AI match score based on resume vs job description</p>
      </div>
    </motion.div>
  )
}
