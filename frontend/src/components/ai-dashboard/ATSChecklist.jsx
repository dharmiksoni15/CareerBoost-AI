import React from 'react'
import { Search } from 'lucide-react'

export default function ATSChecklist({items}){
  const arr = Array.isArray(items) ? items : [];
  return (
    <div className="bg-white/5 rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-2"><Search className="text-white/80" /><h4 className="font-semibold">ATS Suggestions</h4></div>
      <ul className="list-disc list-inside text-sm">
        {arr.length ? arr.map((k,i)=>(<li key={i}>{k}</li>)) : <li>No ATS suggestions.</li>}
      </ul>
    </div>
  )
}
