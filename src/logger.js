'use strict'

const Winston = require('winston')

module.exports = config => {
  assert(_.isObject(config) && config)

  let transports = []

  if (config.transports.console.enabled) {
    transports.push(new Winston.transports.Console(config.transports.console.config))
  }

  return new Winston.Logger({
    transports: transports,
    timestamp: config.timestamp,
    level: config.level
  })
}
