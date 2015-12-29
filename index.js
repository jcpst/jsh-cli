#!/usr/bin/env node

var sh = require('shelljs')
var colors = require('colors')
var EOL = require('os').EOL

var args = process.argv.slice(3)
var cmd = process.argv.slice(2, 3)[0]

var docs = () => {
  console.log(colors.red('usage: jsh <cmd> [args]'))
  console.log(colors.red('Docs: http://shelljs.org/'))
}

if (process.argv.length < 3) {
  docs()
} else {
  switch (cmd) {
    // TODO: Add cases for [error, cd, dirs, popd, pushd].
    case 'cat':
    case 'grep':
    case 'pwd':
    case 'sed':
    case 'tempdir':
    case 'test':
    case 'which':
      console.log(sh[cmd](...args))
      break
    case 'find':
      if (process.argv.length > 3) {
        var findResult = sh[cmd](...args).toString().replace(/,/g, EOL)
        console.log(findResult)
      } else {
        docs()
      }
      break
    case 'ls':
      var lsResult = sh[cmd](...args).toString().replace(/,/g, EOL)
      console.log(lsResult)
      break
    case 'cd':
    case 'chmod':
    case 'cp':
    case 'echo':
    case 'exec':
    case 'ln':
    case 'mkdir':
    case 'mv':
    case 'rm':
      sh[cmd](...args)
      break
    default:
      console.log(colors.red('Incorrect command or command not implemented yet.'))
      docs()
  }
}

