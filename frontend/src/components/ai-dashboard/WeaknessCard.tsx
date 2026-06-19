import React from 'react'
import { AlertTriangle } from 'lucide-react'

export default function WeaknessCard({title,priority}:{title:string, priority?:string}){
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
