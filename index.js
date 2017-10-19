'use strict'

require('dotenv').config()

require('./bootstrap')

const JSONPackage = require('./package.json')

process.title = JSONPackage.title

require('./src')(JSONPackage)
