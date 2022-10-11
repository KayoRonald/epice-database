import winston from 'winston'
import env from './env'

const levels = {
  error: 0,
  http: 1,
  warn: 2,
  debug: 3,
  info: 4
}

const level = () => {
  return env.environment === 'development' ? 'info' : 'debug'
}

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'white'
}

winston.addColors(colors)

const format = winston.format.combine(
  winston.format(info => ({ ...info, level: info.level.toUpperCase() }))(),
  winston.format.timestamp({ format: 'DD-MM-YYYY | HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf((info) => (
    `[${info.level}]: ${info.timestamp} ${info.message}`
  ))
)

const transports = [
  new winston.transports.Console(),
  new winston.transports.File({ filename: 'error.log', level: 'error' }),
  new winston.transports.File({ filename: 'combined.log' })
]

const Logger = winston.createLogger({
  level: level(),
  levels,
  format,
  transports
})

export default Logger
