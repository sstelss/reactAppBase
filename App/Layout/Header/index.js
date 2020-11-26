import React from 'react'
import { Link } from 'react-router-dom'
import './index.styl'

export default function Header({ currentPage }) {
  return pug`
    div.header
      h1 Hello Counter
  `
}