'use strict'

const path = require('path')

const builder = require('botbuilder')

module.exports = (config, connector) => {
  assert(config && _.isObject(config))
  assert(connector && _.isObject(connector))

  const bot = new builder.UniversalBot(connector, []).set('localizerSettings', {
    botLocalePath: path.join(__dirname, './locales'),
    defaultLocale: 'en'
  })

  // Bot global actions
  bot.endConversationAction('goodbye', 'Goodbye :)', { matches: /^goodbye/i })

  return bot
}
