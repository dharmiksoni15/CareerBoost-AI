import React from 'react'
import { Sparkles } from 'lucide-react'

export default function SummaryCard({summary}:{summary:string}){
  return (
    <div className="bg-white/5 rounded-2xl p-6">
      <div className="flex items-center gap-3 mb-3">
        <Sparkles className="text-yellow-300" />
        <h4 className="text-lg font-semibold">Executive Summary</h4>
      </div>
      <p className="text-white/90">{summary}</p>
    </div>
  )
}
