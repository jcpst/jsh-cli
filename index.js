#!/usr/bin/env node

var sh = require('shelljs')
var EOL = require('os').EOL

var args = process.argv.slice(3)
var cmd = process.argv.slice(2, 3)[0]
var docs = function() {
  console.log('usage: jsh <cmd> [args]')
  console.log('Docs: http://shelljs.org/')
}

if (process.argv.length < 3) {
  docs()
} else {
  switch (cmd) {
    // TODO: Add cases for [error, cd, dirs, popd, pushd].
    case 'cd':
    case 'chmod':
    case 'cp':
    case 'echo':
    case 'exec':
    case 'ln':
    case 'mkdir':
    case 'mv':
    case 'rm':
      sh[cmd].apply(null, args)
      break
    case 'cat':
    case 'grep':
    case 'pwd':
    case 'sed':
    case 'tempdir':
    case 'test':
    case 'which':
      console.log(sh[cmd].apply(null, args))
      break
    case 'find':
      if (process.argv.length > 3) {
        console.log(sh[cmd].apply(null, args).toString().replace(/,/g, EOL))
      } else {
        docs()
      }
      break
    case 'ls':
      console.log(sh[cmd].apply(null, args).toString().replace(/,/g, EOL))
      break
    default:
      console.log('Incorrect command or command not implemented yet.')
      docs()
  }
}

