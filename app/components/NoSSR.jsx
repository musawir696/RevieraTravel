'use client'

import { useState, useEffect } from 'react'

export default function NoSSR({ children }) {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return children
}
