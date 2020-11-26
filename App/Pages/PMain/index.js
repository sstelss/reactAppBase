import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import { connect } from 'react-redux'
import { addCounter, reduceCounter } from '../../redux/actions'
import './index.styl'

function PMain({ counter, addCounter, reduceCounter }) {


  return pug`
    div.rootMain
      h3.counterText Counter: #{counter}
      div.row
        Button(
          size='small'
          color='primary'
          variant='outlined'
          onClick=addCounter
        ) Add
        Button(
          size='small'
          color='red'
          variant='outlined'
          onClick=reduceCounter
        ) Reduce

  `
}

const mapStateToProps = state => {
  console.log('state: ', state)
  return {
    counter: state.counter.counter
  }
}

const mapDispatchToProps = {
  addCounter,
  reduceCounter
}

export default connect(mapStateToProps, mapDispatchToProps)(PMain)