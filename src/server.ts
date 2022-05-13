import app from './modules/shared/app'
import config from './config/'

app.listen(config.app.port, () => {
  console.log(`Server Running ${config.app.port}`)
})