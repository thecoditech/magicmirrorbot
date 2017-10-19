'use strict'

module.exports = {
  timestamp: true,
  level: 'debug',

  transports: {
    console: {
      enabled: true,

      config: {
        colorize: true,
        timestamp: true
      }
    }
  }
}
