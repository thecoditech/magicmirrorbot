'use strict'

const restify = require('restify')
const builder = require('botbuilder')

const config = require('./config')

module.exports = JSONPackage => {
  assert(JSONPackage && _.isObject(JSONPackage))

  const logger = require('./logger')(config.log)

  // Setup Restify Server
  const server = restify.createServer()
  server.listen(config.app.port, () => {
    console.log('%s listening to %s', server.name, server.url)
  })

  // Create chat connector for communicating with the Bot Framework Service
  const connector = new builder.ChatConnector(config.bot.microsoft)
  server.post('/api/messages', connector.listen())

  logger.info('Initializing bot')
  require('./bot')(config, connector)

  return server
}
