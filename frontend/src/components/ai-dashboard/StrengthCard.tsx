import React from 'react'
import { Check } from 'lucide-react'

export default function StrengthCard({title,desc}:{title:string, desc?:string}){
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
