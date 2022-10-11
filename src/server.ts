/* eslint no-undef: "off" */
import app from './modules/shared/http/app'
import config from './config/env'
import Logger from './config/logger'
import * as handlersErrors from './handlersErrors'

app.listen(config.app.port, () => {
  Logger.info(`Rodando na porta: ${config.app.port} em ${config.environment}`)
})

process.on('uncaughtException', (error: NodeJS.ErrnoException) => {
  handlersErrors.onError(error, String(config.app.port))
  process.exit(1)
})
