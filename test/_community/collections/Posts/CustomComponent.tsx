'use client'
import { useField } from '@payloadcms/ui'
import React from 'react'

export const CustomComponent = () => {
  const updatedAt = useField({ path: 'updatedAt' })

  console.log('updatedAt.value: ', updatedAt.value)
  return <div>updatedAt: {updatedAt.value}</div>
}
