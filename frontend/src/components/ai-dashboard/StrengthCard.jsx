import React from 'react'
import { Check } from 'lucide-react'

export default function StrengthCard({title,desc,items}){
  if(items) {
    const arr = Array.isArray(items) ? items : [];
    return (
      <div className="bg-green-900/10 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-2"><Check className="text-green-400" /><h4 className="font-semibold">Strengths</h4></div>
        <ul className="list-disc list-inside text-sm space-y-1">
          {arr.length ? arr.map((s,i)=>(<li key={i}>{s}</li>)) : <li>No strengths detected.</li>}
        </ul>
      </div>
    )
  }
  return (
    <div className="bg-green-900/20 border border-green-800 rounded-xl p-4 hover:scale-[1.02] transition-transform">
      <div className="flex items-start gap-3">
        <Check className="text-green-400 mt-1" />
        <div>
          <h5 className="font-semibold">{title}</h5>
          {desc && <p className="text-sm text-white/80">{desc}</p>}
        </div>
      </div>
    </div>
  )
}
