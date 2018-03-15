#!/usr/bin/env node
'use strict'

const { join, resolve } = require('path')
const yargs = require('yargs')

const cwd = resolve(yargs.argv.cwd || process.cwd())
process.chdir(cwd)

yargs
  .help()
  .options({ cwd: { desc: 'Change the current working directory' } })
  // .commandDir(join(__dirname, 'lib', 'commands'))
  .demand(1)
  .argv