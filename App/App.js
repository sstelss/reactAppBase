import React from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Header from './Layout/Header'
import { PMain } from './Pages'


export default function App () {
  return pug`
    HashRouter
      Header
      div
        Route(path='/' component=PMain)
  `
}
