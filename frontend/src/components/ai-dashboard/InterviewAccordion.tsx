import React from 'react'
import { motion } from 'framer-motion'

export default function InterviewAccordion({questions}:{questions:string[]}){
  return (
    <div className="space-y-2">
      {questions.map((q,i)=> (
        <motion.div key={i} initial={{opacity:0}} animate={{opacity:1}} className="bg-white/5 p-4 rounded-lg">
          <div className="font-semibold">Question {i+1}</div>
          <div className="text-sm text-white/80 mt-2">{q}</div>
        </motion.div>
      ))}
    </div>
  )
}
