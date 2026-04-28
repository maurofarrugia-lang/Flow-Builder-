import React from 'react'

const variants = {
  default: 'bg-slate-900 text-white hover:bg-slate-800',
  secondary: 'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50',
}

export function Button({ variant='default', className='', asChild=false, children, ...props }) {
  const cls = `inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm font-medium shadow-sm transition ${variants[variant] || variants.default} ${className}`
  if (asChild) {
    // For cases where we wrap a span/label
    return <span className={cls} {...props}>{children}</span>
  }
  return <button className={cls} {...props}>{children}</button>
}
