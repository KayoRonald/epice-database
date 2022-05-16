import 'dotenv/config'
import chalk from 'chalk'
import app from './modules/shared/app'
import config from './config/'

app.listen(config.app.port, () => {
  console.log(chalk.green(`Server Running port: ${config.app.port} ${config.environment}`));
});