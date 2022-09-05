import chalk from 'chalk'
import app from './modules/shared/http/app'
import config from './config/env'

app.listen(config.app.port, () => {
  console.log(
    chalk.green(
      `Server Running port: ${config.app.port} \nEnvironment: ${config.environment}`
    )
  )
})
