const {loadConfig} = require('./config')
const {loadWebServer} = require('./server')
const {loadDBConnection} = require('./db')

async function main() {
  const appConfig = loadConfig()
  const dbModule = loadDBConnection({dbUri: appConfig.DB_URI})
  const webServerModule = loadWebServer({port: appConfig.PORT})

  await dbModule.start()
  webServerModule.start()

  const signals = ['SIGINT', 'SIGTERM']
  signals.forEach(s =>
    process.once(s, async () => {
      console.log('...Closing App...')
      webServerModule.close()
      await dbModule.close()
      console.log('...App Closed...')
    }),
  )

  const errorTypes = ['unhandledRejection', 'uncaughtException']
  errorTypes.forEach(type => {
    process.on(type, async e => {
      try {
        console.log(`process.on ${type}`)
        console.error(e)
        webServerModule.close()
        await dbModule.close()
        process.exit(0)
      } catch (_) {
        process.exit(1)
      }
    })
  })
}

main()
