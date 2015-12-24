#!/usr/bin/env node

var sh = require('shelljs')

var args = process.argv.slice(3)
var cmd = process.argv.slice(2, 3)[0]

if (process.argv.length < 3) {
    console.log('usage: jsh <cmd> [args]')
    console.log('Docs: http://shelljs.org/')
} else {
  switch (cmd) {
    case 'pwd':
    case 'which':
      console.log(sh[cmd](...args))
      break
    default:
      sh[cmd](...args)
  }
}

