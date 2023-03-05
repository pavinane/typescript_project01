import React from 'react'

interface HeaadingProps {
title:string
}

export default function Heading({title}:HeaadingProps) {
  return (
    <header>{title}</header>
  )
}
