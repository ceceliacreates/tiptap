const { defineConfig } = require('cypress')
const cypressReplay = require('@replayio/cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 15000,
    supportFile: false,
    specPattern: 'cypress/integration/**/*.spec.ts',
    setupNodeEvents(on, config) {
      cypressReplay.default(on, config)
      return config
    },
  },
})
