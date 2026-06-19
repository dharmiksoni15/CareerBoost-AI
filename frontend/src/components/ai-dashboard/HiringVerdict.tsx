import React from 'react'

export default function HiringVerdict({verdict}:{verdict:string}){
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
      <h3 className="text-xl font-bold">{verdict}</h3>
      <p className="mt-2 text-sm">This candidate demonstrates practical full-stack development experience and AI integration skills.</p>
    </div>
  )
}
