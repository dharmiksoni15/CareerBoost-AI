import React from 'react'

export default function ATSChecklist({items}:{items:string[]}){
  return (
    <div className="bg-white/5 rounded-2xl p-4">
      <h4 className="font-semibold mb-3">ATS Optimization</h4>
      <ul className="space-y-2">
        {items.map((it, i)=> (
          <li key={i} className="flex items-center gap-3">
            <input type="checkbox" className="w-4 h-4" />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
