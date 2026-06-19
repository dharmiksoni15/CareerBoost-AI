import React from 'react'
import { AlertTriangle } from 'lucide-react'

export default function WeaknessCard({items,title,priority}){
  if(items){
    const arr = Array.isArray(items) ? items : [];
    return (
      <div className="bg-red-900/10 rounded-2xl p-4">
        <div className="flex items-center gap-2 mb-2"><AlertTriangle className="text-red-400" /><h4 className="font-semibold">Weaknesses</h4></div>
        <ul className="list-disc list-inside text-sm text-red-300 space-y-1">
          {arr.length ? arr.map((s,i)=>(<li key={i}>{s}</li>)) : <li>No weaknesses detected.</li>}
        </ul>
      </div>
    )
  }
  const color = priority==='High'? 'bg-red-900/40 border-red-700': priority==='Medium'? 'bg-yellow-900/30 border-yellow-700': 'bg-yellow-800/20 border-yellow-700'
  return (
    <div className={`${color} border rounded-xl p-4`}> 
      <div className="flex items-start gap-3">
        <AlertTriangle className="text-yellow-300 mt-1" />
        <div>
          <h5 className="font-semibold">{title}</h5>
          {priority && <span className="text-xs text-white/80">Priority: {priority}</span>}
        </div>
      </div>
    </div>
  )
}
