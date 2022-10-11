/* eslint no-undef: "off" */

import env from './config/env'
import Logger from './config/logger'

// import env from './config/env'

/**
 * @param  {NodeJS.ErrnoException} error
 * @param port
 * @returns throw error
*/

export function onError (error: NodeJS.ErrnoException, port: number | string): void {
  if (error.syscall !== 'listen') {
    throw error
  }
  switch (error.code) {
    case 'EACCES':
      Logger.error(`Epice [EACCES] Port ${port} requires elevated privileges`)
      break
    case 'EADDRINUSE':
      Logger.error(`Epice [EADDRINUSE] Port ${port} is already in use in mode ${env.environment}`)
      break
    default:
      throw error
  }
}

export function onClose (): void {
  Logger.debug('Epice On Close')
}
