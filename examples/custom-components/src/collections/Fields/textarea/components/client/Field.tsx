'use client'
import type { TextareaFieldClientComponent } from 'payload'

import { TextareaField } from '@payloadcms/ui'
import React from 'react'

export const CustomTextareaFieldClient: TextareaFieldClientComponent = ({ field }) => {
  return <TextareaField field={field} />
}