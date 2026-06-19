import React from 'react'
import { MessageSquare } from 'lucide-react'

export default function InterviewAccordion({questions}){
  const arr = Array.isArray(questions) ? questions : [];
  return (
    <div className="bg-white/5 rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-2"><MessageSquare className="text-white/80" /><h4 className="font-semibold">Interview Prep</h4></div>
      <div className="space-y-2 text-sm">
        {arr.length ? arr.map((q,i)=>(
          <div key={i} className="p-2 bg-black/10 rounded">
            <div className="font-medium">Q: {q.question || q}</div>
            {q.sampleAnswer && <div className="text-xs mt-1">A: {q.sampleAnswer}</div>}
          </div>
        )) : <div>No interview questions suggested.</div>}
      </div>
    </div>
  )
}
