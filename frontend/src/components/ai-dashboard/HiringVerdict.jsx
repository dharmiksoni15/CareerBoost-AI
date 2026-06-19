import React from 'react'

export default function HiringVerdict({recommendation}){
  return (
    <div className="rounded-2xl p-4 bg-white/5">
      <div className="text-sm uppercase">Hiring Verdict</div>
      <div className="text-xl font-bold mt-2">{recommendation || 'No recommendation'}</div>
    </div>
  )
}
